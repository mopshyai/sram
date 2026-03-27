import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/adminSupabase';
import {
  LayoutDashboard,
  Bell,
  Calendar,
  Image,
  Download,
  Users,
  Mail,
  ImageIcon,
  DollarSign,
  Award,
  FileText,
  LogOut,
  Menu,
} from 'lucide-react';

const menuItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/notices', label: 'Notices', icon: Bell },
  { path: '/admin/events', label: 'Events & Activities', icon: Calendar },
  { path: '/admin/gallery', label: 'Photo Gallery', icon: Image },
  { path: '/admin/downloads', label: 'Download Center', icon: Download },
  { path: '/admin/faculty', label: 'Faculty & Staff', icon: Users },
  { path: '/admin/messages', label: 'Messages Inbox', icon: Mail, badge: true },
  { path: '/admin/banners', label: 'Homepage Banners', icon: ImageIcon },
  { path: '/admin/fee-structure', label: 'Fee Structure', icon: DollarSign },
  { path: '/admin/scholarships', label: 'Scholarships', icon: Award },
  { path: '/admin/sample-papers', label: 'Sample Papers', icon: FileText },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      const { count } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })
        .eq('read', false);
      setUnreadCount(count || 0);
    };

    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#8B1A1A] text-white">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold">SRAM Admin</h1>
        <p className="text-sm text-white/70 mt-1">Management Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-white text-[#8B1A1A] font-medium'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && unreadCount > 0 && (
                <Badge variant="secondary" className="bg-yellow-400 text-black">
                  {unreadCount}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Button
          onClick={handleSignOut}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-white/10"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#8B1A1A] text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">SRAM Admin</h1>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 fixed left-0 top-0 bottom-0 z-40">
        <SidebarContent />
      </div>
    </>
  );
};
