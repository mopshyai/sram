import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase, uploadFile, deleteFile, Scholarship } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, FileText } from 'lucide-react';

const AdminScholarships = () => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingScholarship, setEditingScholarship] = useState<Scholarship | null>(null);
  const [formData, setFormData] = useState<Partial<Scholarship>>({
    title: '',
    eligibility: '',
    amount: '',
    deadline: '',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const fetchScholarships = async () => {
    const { data, error } = await supabase
      .from('scholarships')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setScholarships(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let formUrl = formData.form_url;

      if (file) {
        formUrl = await uploadFile(file, 'scholarships');
      }

      const scholarshipData = { ...formData, form_url: formUrl };

      if (editingScholarship) {
        const { error } = await supabase
          .from('scholarships')
          .update(scholarshipData)
          .eq('id', editingScholarship.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Scholarship updated successfully' });
      } else {
        const { error } = await supabase.from('scholarships').insert([scholarshipData]);
        if (error) throw error;
        toast({ title: 'Success', description: 'Scholarship created successfully' });
      }

      setDialogOpen(false);
      resetForm();
      fetchScholarships();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (scholarship: Scholarship) => {
    if (!confirm('Are you sure you want to delete this scholarship?')) return;

    try {
      if (scholarship.form_url) {
        await deleteFile(scholarship.form_url);
      }

      const { error } = await supabase.from('scholarships').delete().eq('id', scholarship.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Scholarship deleted successfully' });
      fetchScholarships();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      eligibility: '',
      amount: '',
      deadline: '',
      description: '',
    });
    setFile(null);
    setEditingScholarship(null);
  };

  const openEditDialog = (scholarship: Scholarship) => {
    setEditingScholarship(scholarship);
    setFormData(scholarship);
    setDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scholarships</h1>
            <p className="text-gray-600 mt-1">Manage scholarship information</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                <Plus className="w-4 h-4 mr-2" />
                Add Scholarship
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingScholarship ? 'Edit Scholarship' : 'Add New Scholarship'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="eligibility">Eligibility</Label>
                  <Textarea
                    id="eligibility"
                    value={formData.eligibility}
                    onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    placeholder="e.g., ₹50,000 or 100% tuition fee waiver"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="file">Application Form (PDF)</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  {formData.form_url && (
                    <p className="text-sm text-gray-600 mt-1">Current form attached</p>
                  )}
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                    {loading ? 'Saving...' : editingScholarship ? 'Update' : 'Create'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Form</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scholarships.map((scholarship) => (
                <TableRow key={scholarship.id}>
                  <TableCell className="font-medium">{scholarship.title}</TableCell>
                  <TableCell>{scholarship.amount}</TableCell>
                  <TableCell>
                    {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : '-'}
                  </TableCell>
                  <TableCell>
                    {scholarship.form_url && (
                      <a href={scholarship.form_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </a>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(scholarship)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(scholarship)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminScholarships;
