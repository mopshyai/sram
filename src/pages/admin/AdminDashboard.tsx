import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/adminSupabase';
import { Bell, Calendar, Image, Download, Users, Mail, ImageIcon, DollarSign, Award, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    notices: 0,
    events: 0,
    gallery: 0,
    downloads: 0,
    teachers: 0,
    messages: 0,
    unreadMessages: 0,
    banners: 0,
    feeStructure: 0,
    scholarships: 0,
    samplePapers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [
        notices,
        events,
        gallery,
        downloads,
        teachers,
        messages,
        unreadMessages,
        banners,
        feeStructure,
        scholarships,
        samplePapers,
      ] = await Promise.all([
        supabase.from('notices').select('*', { count: 'exact', head: true }),
        supabase.from('events').select('*', { count: 'exact', head: true }),
        supabase.from('gallery').select('*', { count: 'exact', head: true }),
        supabase.from('downloads').select('*', { count: 'exact', head: true }),
        supabase.from('teachers').select('*', { count: 'exact', head: true }),
        supabase.from('messages').select('*', { count: 'exact', head: true }),
        supabase.from('messages').select('*', { count: 'exact', head: true }).eq('read', false),
        supabase.from('banners').select('*', { count: 'exact', head: true }),
        supabase.from('fee_structure').select('*', { count: 'exact', head: true }),
        supabase.from('scholarships').select('*', { count: 'exact', head: true }),
        supabase.from('sample_papers').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        notices: notices.count || 0,
        events: events.count || 0,
        gallery: gallery.count || 0,
        downloads: downloads.count || 0,
        teachers: teachers.count || 0,
        messages: messages.count || 0,
        unreadMessages: unreadMessages.count || 0,
        banners: banners.count || 0,
        feeStructure: feeStructure.count || 0,
        scholarships: scholarships.count || 0,
        samplePapers: samplePapers.count || 0,
      });
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: 'Notices', value: stats.notices, icon: Bell, color: 'bg-blue-500' },
    { title: 'Events', value: stats.events, icon: Calendar, color: 'bg-green-500' },
    { title: 'Gallery Images', value: stats.gallery, icon: Image, color: 'bg-purple-500' },
    { title: 'Downloads', value: stats.downloads, icon: Download, color: 'bg-orange-500' },
    { title: 'Faculty', value: stats.teachers, icon: Users, color: 'bg-indigo-500' },
    { title: 'Total Messages', value: stats.messages, icon: Mail, color: 'bg-pink-500' },
    { title: 'Unread Messages', value: stats.unreadMessages, icon: Mail, color: 'bg-red-500' },
    { title: 'Banners', value: stats.banners, icon: ImageIcon, color: 'bg-yellow-500' },
    { title: 'Fee Structure', value: stats.feeStructure, icon: DollarSign, color: 'bg-teal-500' },
    { title: 'Scholarships', value: stats.scholarships, icon: Award, color: 'bg-cyan-500' },
    { title: 'Sample Papers', value: stats.samplePapers, icon: FileText, color: 'bg-lime-500' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your admin portal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
