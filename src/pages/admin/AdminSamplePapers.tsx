import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase, uploadFile, deleteFile, SamplePaper } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, FileText } from 'lucide-react';

const AdminSamplePapers = () => {
  const [papers, setPapers] = useState<SamplePaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPaper, setEditingPaper] = useState<SamplePaper | null>(null);
  const [formData, setFormData] = useState<Partial<SamplePaper>>({
    title: '',
    course: '',
    subject: '',
    year: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const fetchPapers = async () => {
    const { data, error } = await supabase
      .from('sample_papers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setPapers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileUrl = formData.file_url;

      if (file) {
        fileUrl = await uploadFile(file, 'sample-papers');
      }

      if (!fileUrl) {
        throw new Error('File is required');
      }

      const paperData = { ...formData, file_url: fileUrl };

      if (editingPaper) {
        const { error } = await supabase
          .from('sample_papers')
          .update(paperData)
          .eq('id', editingPaper.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Sample paper updated successfully' });
      } else {
        const { error } = await supabase.from('sample_papers').insert([paperData]);
        if (error) throw error;
        toast({ title: 'Success', description: 'Sample paper created successfully' });
      }

      setDialogOpen(false);
      resetForm();
      fetchPapers();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (paper: SamplePaper) => {
    if (!confirm('Are you sure you want to delete this sample paper?')) return;

    try {
      if (paper.file_url) {
        await deleteFile(paper.file_url);
      }

      const { error } = await supabase.from('sample_papers').delete().eq('id', paper.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Sample paper deleted successfully' });
      fetchPapers();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      course: '',
      subject: '',
      year: '',
    });
    setFile(null);
    setEditingPaper(null);
  };

  const openEditDialog = (paper: SamplePaper) => {
    setEditingPaper(paper);
    setFormData(paper);
    setDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sample Papers</h1>
            <p className="text-gray-600 mt-1">Manage sample papers by course and subject</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                <Plus className="w-4 h-4 mr-2" />
                Add Sample Paper
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingPaper ? 'Edit Sample Paper' : 'Add New Sample Paper'}</DialogTitle>
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
                  <Label htmlFor="course">Course *</Label>
                  <Input
                    id="course"
                    placeholder="e.g., B.A., B.Sc."
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Physics, English"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    placeholder="e.g., 2024, 2023"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="file">PDF File *</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required={!editingPaper}
                  />
                  {formData.file_url && (
                    <p className="text-sm text-gray-600 mt-1">Current file attached</p>
                  )}
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                    {loading ? 'Saving...' : editingPaper ? 'Update' : 'Create'}
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
                <TableHead>Course</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((paper) => (
                <TableRow key={paper.id}>
                  <TableCell className="font-medium">{paper.title}</TableCell>
                  <TableCell>{paper.course}</TableCell>
                  <TableCell>{paper.subject}</TableCell>
                  <TableCell>{paper.year}</TableCell>
                  <TableCell>
                    <a href={paper.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(paper)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(paper)}
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

export default AdminSamplePapers;
