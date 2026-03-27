import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase, FeeStructure } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const AdminFeeStructure = () => {
  const [fees, setFees] = useState<FeeStructure[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingFee, setEditingFee] = useState<FeeStructure | null>(null);
  const [formData, setFormData] = useState<Partial<FeeStructure>>({
    course: '',
    semester_year: '',
    tuition_fee: 0,
    other_fees: 0,
    total: 0,
    note: '',
  });
  const { toast } = useToast();

  const fetchFees = async () => {
    const { data, error } = await supabase
      .from('fee_structure')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setFees(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFees();
  }, []);

  useEffect(() => {
    const tuition = Number(formData.tuition_fee) || 0;
    const other = Number(formData.other_fees) || 0;
    setFormData((prev) => ({ ...prev, total: tuition + other }));
  }, [formData.tuition_fee, formData.other_fees]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingFee) {
        const { error } = await supabase
          .from('fee_structure')
          .update(formData)
          .eq('id', editingFee.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Fee structure updated successfully' });
      } else {
        const { error } = await supabase.from('fee_structure').insert([formData]);
        if (error) throw error;
        toast({ title: 'Success', description: 'Fee structure created successfully' });
      }

      setDialogOpen(false);
      resetForm();
      fetchFees();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (fee: FeeStructure) => {
    if (!confirm('Are you sure you want to delete this fee structure?')) return;

    try {
      const { error } = await supabase.from('fee_structure').delete().eq('id', fee.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Fee structure deleted successfully' });
      fetchFees();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const resetForm = () => {
    setFormData({
      course: '',
      semester_year: '',
      tuition_fee: 0,
      other_fees: 0,
      total: 0,
      note: '',
    });
    setEditingFee(null);
  };

  const openEditDialog = (fee: FeeStructure) => {
    setEditingFee(fee);
    setFormData(fee);
    setDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Fee Structure</h1>
            <p className="text-gray-600 mt-1">Manage course-wise fee structure</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                <Plus className="w-4 h-4 mr-2" />
                Add Fee Structure
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingFee ? 'Edit Fee Structure' : 'Add New Fee Structure'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="course">Course *</Label>
                  <Input
                    id="course"
                    placeholder="e.g., B.A., B.Sc., M.A."
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="semester_year">Semester/Year *</Label>
                  <Input
                    id="semester_year"
                    placeholder="e.g., Semester 1, Year 1"
                    value={formData.semester_year}
                    onChange={(e) => setFormData({ ...formData, semester_year: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tuition_fee">Tuition Fee (₹)</Label>
                  <Input
                    id="tuition_fee"
                    type="number"
                    step="0.01"
                    value={formData.tuition_fee}
                    onChange={(e) => setFormData({ ...formData, tuition_fee: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="other_fees">Other Fees (₹)</Label>
                  <Input
                    id="other_fees"
                    type="number"
                    step="0.01"
                    value={formData.other_fees}
                    onChange={(e) => setFormData({ ...formData, other_fees: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="total">Total (₹)</Label>
                  <Input
                    id="total"
                    type="number"
                    step="0.01"
                    value={formData.total}
                    readOnly
                    className="bg-gray-100"
                  />
                </div>
                <div>
                  <Label htmlFor="note">Note</Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                    {loading ? 'Saving...' : editingFee ? 'Update' : 'Create'}
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
                <TableHead>Course</TableHead>
                <TableHead>Semester/Year</TableHead>
                <TableHead>Tuition Fee</TableHead>
                <TableHead>Other Fees</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fees.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell className="font-medium">{fee.course}</TableCell>
                  <TableCell>{fee.semester_year}</TableCell>
                  <TableCell>₹{fee.tuition_fee?.toLocaleString()}</TableCell>
                  <TableCell>₹{fee.other_fees?.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">₹{fee.total?.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-gray-600">{fee.note}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(fee)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(fee)}
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

export default AdminFeeStructure;
