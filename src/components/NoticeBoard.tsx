import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, Calendar, ChevronRight, AlertCircle, Megaphone, 
  GraduationCap, FileText, Clock, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Notice {
  id: number;
  title: string;
  date: string;
  category: "admission" | "exam" | "event" | "general" | "urgent";
  isNew: boolean;
  link?: string;
}

const notices: Notice[] = [
  { id: 1, title: "Admissions Open for Session 2025-26 - Apply Now", date: "Jan 2025", category: "admission", isNew: true, link: "/admissions" },
  { id: 2, title: "D.Pharma Admission - BTE Code 1708", date: "Jan 2025", category: "admission", isNew: true, link: "/admissions" },
  { id: 3, title: "Last Date for Fee Submission Extended to 31st Jan", date: "20 Jan 2025", category: "urgent", isNew: true },
  { id: 4, title: "Annual Day Celebration on 15th February 2025", date: "15 Jan 2025", category: "event", isNew: true, link: "/events" },
  { id: 5, title: "Mid-Term Exam Schedule Released - Download Now", date: "10 Jan 2025", category: "exam", isNew: false, link: "/downloads" },
  { id: 6, title: "Free Education for Orphan Students - Apply", date: "Ongoing", category: "general", isNew: false, link: "/admissions" },
  { id: 7, title: "NCC & NSS Enrollment Open for New Batches", date: "2025", category: "general", isNew: false, link: "/ncc-nss" },
  { id: 8, title: "Guest Lecture on NEP 2020 by Dr. R.K. Sharma", date: "5 Feb 2025", category: "event", isNew: false, link: "/events" },
];

const categoryConfig = {
  admission: { icon: GraduationCap, color: "bg-emerald-500", label: "Admission" },
  exam: { icon: FileText, color: "bg-blue-500", label: "Exam" },
  event: { icon: Calendar, color: "bg-purple-500", label: "Event" },
  general: { icon: Bell, color: "bg-amber-500", label: "Notice" },
  urgent: { icon: AlertCircle, color: "bg-red-500", label: "Urgent" },
};

const scrollingNews = [
  "🎓 Admissions Open 2025-26 - Direct Admission Available",
  "📢 D.Pharma (BTE Code-1708) Applications Open",
  "🆓 Free Education for Students Without Parents",
  "🏆 NCC & NSS Units Active - Join Now",
  "📅 Annual Day Celebration Coming Soon",
  "📋 Mid-Term Exam Schedule Released",
];

const NoticeBoard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll through notices
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Megaphone className="w-4 h-4" />
            <span className="text-sm font-medium">Latest Updates</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Notice Board & Announcements
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Stay informed with important announcements, exam schedules, and campus news
          </p>
        </div>

        {/* Scrolling News Ticker */}
        <div className="mb-8 rounded-lg overflow-hidden border border-border bg-card shadow-sm">
          <div className="flex items-center">
            <div className="bg-primary px-4 py-3 flex items-center gap-2 shrink-0">
              <Bell className="w-4 h-4 text-primary-foreground animate-pulse" />
              <span className="text-sm font-bold text-primary-foreground hidden sm:inline">LATEST</span>
            </div>
            <div className="flex-1 overflow-hidden py-3 px-4 bg-card">
              <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {[...scrollingNews, ...scrollingNews].map((news, idx) => (
                  <span key={idx} className="text-sm text-foreground font-medium">
                    {news}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Notice Display */}
          <div className="lg:col-span-2">
            <Card 
              className="overflow-hidden border-2 border-primary/20 shadow-lg h-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-primary px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-primary-foreground" />
                  <h3 className="font-heading text-lg font-bold text-primary-foreground">
                    Important Notices
                  </h3>
                </div>
                <Link 
                  to="/downloads" 
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground flex items-center gap-1 transition-colors"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <CardContent className="p-0">
                {/* Featured Notice */}
                <div className="p-4 md:p-6 bg-gradient-to-r from-gold/10 to-transparent border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center shrink-0",
                      categoryConfig[notices[activeIndex].category].color
                    )}>
                      {(() => {
                        const Icon = categoryConfig[notices[activeIndex].category].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge variant="outline" className="text-xs">
                          {categoryConfig[notices[activeIndex].category].label}
                        </Badge>
                        {notices[activeIndex].isNew && (
                          <Badge className="bg-primary text-primary-foreground text-xs">NEW</Badge>
                        )}
                      </div>
                      <h4 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
                        {notices[activeIndex].title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {notices[activeIndex].date}
                        </span>
                        {notices[activeIndex].link && (
                          <Link 
                            to={notices[activeIndex].link!}
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            Learn More <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notice List with Auto-scroll indicator */}
                <div className="max-h-[280px] overflow-y-auto">
                  {notices.map((notice, idx) => (
                    <div 
                      key={notice.id}
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        "flex items-center gap-3 p-4 border-b border-border last:border-0 cursor-pointer transition-all duration-300",
                        idx === activeIndex 
                          ? "bg-primary/5 border-l-4 border-l-primary" 
                          : "hover:bg-muted/50 border-l-4 border-l-transparent"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        categoryConfig[notice.category].color
                      )}>
                        {(() => {
                          const Icon = categoryConfig[notice.category].icon;
                          return <Icon className="w-4 h-4 text-white" />;
                        })()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={cn(
                          "text-sm font-medium truncate",
                          idx === activeIndex ? "text-primary" : "text-foreground"
                        )}>
                          {notice.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{notice.date}</p>
                      </div>
                      {notice.isNew && (
                        <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded shrink-0">
                          NEW
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-4">
            {/* Admission CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <GraduationCap className="w-10 h-10 mb-4 text-gold" />
                <h4 className="font-heading text-xl font-bold mb-2">
                  Admissions 2025-26
                </h4>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Direct admission on first-come, first-serve basis. Apply today!
                </p>
                <Button asChild className="w-full bg-gold hover:bg-gold-light text-gold-foreground font-semibold">
                  <Link to="/admissions">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Downloads */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold" />
                  Quick Downloads
                </h4>
                <div className="space-y-2">
                  {["Admission Form", "Prospectus 2025", "Fee Structure", "Exam Schedule"].map((item, idx) => (
                    <Link 
                      key={idx}
                      to="/downloads" 
                      className="flex items-center gap-2 p-2.5 rounded-md bg-muted/50 hover:bg-muted text-sm text-foreground transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="flex-1">{item}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Quick Card */}
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Need Help?</p>
                <a href="tel:9837320170" className="text-lg font-bold text-primary hover:underline">
                  📞 9837320170
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
