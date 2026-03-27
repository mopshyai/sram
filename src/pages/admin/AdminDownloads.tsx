import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { supabase, uploadFile, deleteFile, Download } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, FileText } from 'lucide-react';

const AdminDownloads = () => {
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDownload, setEditingDownload] = useState<Download | null>(null);
  const [formData, setFormData] = useState<Partial<Download>>({
    title: '',
    category: 'Form',
    visible: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const categories = ['Form', 'Syllabus', 'Prospectus', 'Admit Card', 'Result', 'Timetable'];

  const fetchDownloads = async () => {
    const { data, error } = await supabase
      .from('downloads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setDownloads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDownloads();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileUrl = formData.file_url;

      if (file) {
        fileUrl = await uploadFile(file, 'downloads');
      }

      if (!fileUrl) {
        throw new Error('File is required');
      }

      const downloadData = { ...formData, file_url: fileUrl };

      if (editingDownload) {
        const { error } = await supabase
          .from('downloads')
          .update(downloadData)
          .eq('id', editingDownload.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Download updated successfully' });
      } else {
        const { error } = await supabase.from('downloads').insert([downloadData]);
        if (error) throw error;
        toast({ title: 'Success', description: 'Download created successfully' });
      }

      setDialogOpen(false);
      resetForm();
      fetchDownloads();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (download: Download) => {
    if (!confirm('Are you sure you want to delete this download?')) return;

    try {
      if (download.file_url) {
        await deleteFile(download.file_url);
      }

      const { error } = await supabase.from('downloads').delete().eq('id', download.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Download deleted successfully' });
      fetchDownloads();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const toggleVisibility = async (download: Download) => {
    const { error } = await supabase
      .from('downloads')
      .update({ visible: !download.visible })
      .eq('id', download.id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      fetchDownloads();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'Form',
      visible: true,
    });
    setFile(null);
    setEditingDownload(null);
  };

  const openEditDialog = (download: Download) => {
    setEditingDownload(download);
    setFormData(download);
    setDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Download Center</h1>
            <p className="text-gray-600 mt-1">Manage downloadable files</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-[#8B1A1A] hover:bg-[#6B1515]">
                <Plus className="w-4 h-4 mr-2" />
                Add Download
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingDownload ? 'Edit Download' : 'Add New Download'}</DialogTitle>
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
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="file">File *</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required={!editingDownload}
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
                    {loading ? 'Saving...' : editingDownload ? 'Update' : 'Create'}
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
                <TableHead>File</TableHead>
                <TableHead>Visible</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {downloads.map((download) => (
                <TableRow key={download.id}>
                  <TableCell className="font-medium">{download.title}</TableCell>
                  <TableCell>{download.category}</TableCell>
                  <TableCell>
                    <a href={download.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={download.visible}
                      onCheckedChange={() => toggleVisibility(download)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(download)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(download)}
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

export default AdminDownloads;
