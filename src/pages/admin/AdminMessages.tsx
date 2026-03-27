import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase, Message } from '@/lib/adminSupabase';
import { useToast } from '@/hooks/use-toast';
import { Eye, Trash2, Mail } from 'lucide-react';

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markAsRead = async (message: Message) => {
    if (message.read) return;

    const { error } = await supabase
      .from('messages')
      .update({ read: true })
      .eq('id', message.id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      fetchMessages();
    }
  };

  const handleView = async (message: Message) => {
    setSelectedMessage(message);
    setDialogOpen(true);
    await markAsRead(message);
  };

  const handleDelete = async (message: Message) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase.from('messages').delete().eq('id', message.id);
      if (error) throw error;

      toast({ title: 'Success', description: 'Message deleted successfully' });
      fetchMessages();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const handleReply = (message: Message) => {
    window.location.href = `mailto:${message.email}?subject=Re: ${message.subject}`;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages Inbox</h1>
          <p className="text-gray-600 mt-1">Contact form submissions</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id} className={!message.read ? 'bg-blue-50' : ''}>
                  <TableCell>
                    {!message.read && (
                      <Badge variant="default" className="bg-blue-600">
                        New
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>
                    {new Date(message.created_at!).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleView(message)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleReply(message)}
                      >
                        <Mail className="w-4 h-4 text-green-600" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(message)}
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

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Message Details</DialogTitle>
            </DialogHeader>
            {selectedMessage && (
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">From</p>
                  <p className="text-base">{selectedMessage.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-base">{selectedMessage.email}</p>
                </div>
                {selectedMessage.phone && (
                  <div>
                    <p className="text-sm font-medium text-gray-600">Phone</p>
                    <p className="text-base">{selectedMessage.phone}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-600">Subject</p>
                  <p className="text-base">{selectedMessage.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Message</p>
                  <p className="text-base whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Received</p>
                  <p className="text-base">
                    {new Date(selectedMessage.created_at!).toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={() => handleReply(selectedMessage)}
                    className="bg-[#8B1A1A] hover:bg-[#6B1515]"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminMessages;
