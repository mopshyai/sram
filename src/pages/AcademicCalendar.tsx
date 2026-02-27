import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen, PartyPopper, GraduationCap } from "lucide-react";

const AcademicCalendar = () => {
  const academicEvents = [
    { month: "July 2025", events: [
      { date: "July 1", event: "Session Begins / Admission Opens", type: "academic" },
      { date: "July 15", event: "Orientation Program for New Students", type: "academic" },
      { date: "July 31", event: "Last Date for Admission (First Phase)", type: "academic" },
    ]},
    { month: "August 2025", events: [
      { date: "Aug 15", event: "Independence Day Celebration", type: "cultural" },
      { date: "Aug 26", event: "Janmashtami Holiday", type: "holiday" },
    ]},
    { month: "September 2025", events: [
      { date: "Sep 5", event: "Teachers' Day Celebration", type: "cultural" },
      { date: "Sep 15-20", event: "Internal Assessment - I", type: "exam" },
    ]},
    { month: "October 2025", events: [
      { date: "Oct 2", event: "Gandhi Jayanti Holiday", type: "holiday" },
      { date: "Oct 12-24", event: "Dussehra & Diwali Vacation", type: "holiday" },
      { date: "Oct 30", event: "College Foundation Day", type: "cultural" },
    ]},
    { month: "November 2025", events: [
      { date: "Nov 14", event: "Children's Day / Sports Day", type: "cultural" },
      { date: "Nov 20-30", event: "Internal Assessment - II", type: "exam" },
    ]},
    { month: "December 2025", events: [
      { date: "Dec 25", event: "Christmas Holiday", type: "holiday" },
      { date: "Dec 26-31", event: "Winter Vacation", type: "holiday" },
    ]},
    { month: "January 2026", events: [
      { date: "Jan 1", event: "New Year Holiday", type: "holiday" },
      { date: "Jan 26", event: "Republic Day Celebration", type: "cultural" },
    ]},
    { month: "February 2026", events: [
      { date: "Feb 10-15", event: "Pre-Board Examinations", type: "exam" },
      { date: "Feb 21", event: "Maha Shivaratri Holiday", type: "holiday" },
    ]},
    { month: "March 2026", events: [
      { date: "Mar 1", event: "Practical Examinations Begin", type: "exam" },
      { date: "Mar 14", event: "Holi Holiday", type: "holiday" },
      { date: "Mar 15", event: "Annual Examinations Begin", type: "exam" },
    ]},
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "academic": return <BookOpen className="h-4 w-4 text-primary" />;
      case "cultural": return <PartyPopper className="h-4 w-4 text-accent" />;
      case "exam": return <GraduationCap className="h-4 w-4 text-red-500" />;
      default: return <Calendar className="h-4 w-4 text-green-500" />;
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case "academic": return "bg-primary/10 border-primary/20";
      case "cultural": return "bg-accent/10 border-accent/20";
      case "exam": return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      default: return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Academic Calendar 2025-26
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Important dates, events, and examination schedules
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Academic</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PartyPopper className="h-4 w-4 text-accent" />
              <span>Cultural</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-red-500" />
              <span>Examination</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-green-500" />
              <span>Holiday</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicEvents.map((monthData, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {monthData.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {monthData.events.map((event, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded border ${getTypeBg(event.type)}`}
                      >
                        <div className="flex items-start gap-2">
                          {getTypeIcon(event.type)}
                          <div>
                            <p className="text-xs font-medium text-muted-foreground">{event.date}</p>
                            <p className="text-sm">{event.event}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicCalendar;
