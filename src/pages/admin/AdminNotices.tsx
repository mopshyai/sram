import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { supabase, uploadFile, deleteFile, AdminNotice } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, FileText } from 'lucide-react';

const AdminNotices = () => {
  const [notices, setNotices] = useState<AdminNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<AdminNotice | null>(null);
  const [formData, setFormData] = useState<Partial<AdminNotice>>({
    title: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    visible: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setNotices(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileUrl = formData.file_url;

      if (file) {
        fileUrl = await uploadFile(file, 'notices');
      }

      const noticeData = { ...formData, file_url: fileUrl };

      if (editingNotice) {
        const { error } = await supabase
          .from('notices')
          .update(noticeData)
          .eq('id', editingNotice.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Notice updated successfully' });
      } else {
        const { error } = await supabase.from('notices').insert([noticeData]);
        if (error) throw error;
        toast({ title: 'Success', description: 'Notice created successfully' });
      }

      setDialogOpen(false);
      resetForm();
      fetchNotices();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (notice: AdminNotice) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;

    try {
      if (notice.file_url) {
        await deleteFile(notice.file_url);
      }

      const { error } = await supabase.from('notices').delete().eq('id', notice.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Notice deleted successfully' });
      fetchNotices();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const toggleVisibility = async (notice: AdminNotice) => {
    const { error } = await supabase
      .from('notices')
      .update({ visible: !notice.visible })
      .eq('id', notice.id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      fetchNotices();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      visible: true,
    });
    setFile(null);
    setEditingNotice(null);
  };

  const openEditDialog = (notice: AdminNotice) => {
    setEditingNotice(notice);
    setFormData(notice);
    setDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notices</h1>
            <p className="text-gray-600 mt-1">Manage college notices and announcements</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                <Plus className="w-4 h-4 mr-2" />
                Add Notice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingNotice ? 'Edit Notice' : 'Add New Notice'}</DialogTitle>
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
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    placeholder="e.g., Admission, Exam, Event"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
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
                  <Label htmlFor="file">Attachment (PDF)</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  {formData.file_url && (
                    <p className="text-sm text-gray-600 mt-1">Current file attached</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="visible"
                    checked={formData.visible}
                    onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
                  />
                  <Label htmlFor="visible">Visible on website</Label>
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                    {loading ? 'Saving...' : editingNotice ? 'Update' : 'Create'}
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
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Visible</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="font-medium">{notice.title}</TableCell>
                  <TableCell>{notice.category}</TableCell>
                  <TableCell>{new Date(notice.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {notice.file_url && (
                      <a href={notice.file_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </a>
                    )}
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={notice.visible}
                      onCheckedChange={() => toggleVisibility(notice)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(notice)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(notice)}
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

export default AdminNotices;
