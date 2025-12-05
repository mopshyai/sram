import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Filter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type EventCategory = "all" | "academic" | "cultural" | "sports" | "ncc-nss" | "seminars";

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  category: EventCategory;
  description: string;
  time?: string;
}

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");

  const categories: { value: EventCategory; label: string }[] = [
    { value: "all", label: "All Events" },
    { value: "academic", label: "Academic" },
    { value: "cultural", label: "Cultural" },
    { value: "sports", label: "Sports" },
    { value: "ncc-nss", label: "NCC / NSS" },
    { value: "seminars", label: "Seminars" },
  ];

  const events: Event[] = [
    {
      id: 1,
      title: "Annual Day Celebration 2025",
      date: "15 Jan 2025",
      location: "College Auditorium",
      category: "cultural",
      description: "Grand celebration featuring cultural performances, awards ceremony, and guest lectures.",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "26 Jan 2025",
      location: "College Campus",
      category: "cultural",
      description: "Flag hoisting ceremony followed by patriotic performances and march past.",
      time: "8:00 AM",
    },
    {
      id: 3,
      title: "NCC Camp - Combined Annual Training",
      date: "20 Dec 2024",
      endDate: "30 Dec 2024",
      location: "District Training Center",
      category: "ncc-nss",
      description: "Annual training camp for NCC cadets with drills, weapon training, and leadership activities.",
    },
    {
      id: 4,
      title: "NSS Blood Donation Camp",
      date: "1 Feb 2025",
      location: "College Medical Center",
      category: "ncc-nss",
      description: "Blood donation drive organized by NSS unit in collaboration with Red Cross Society.",
      time: "9:00 AM - 4:00 PM",
    },
    {
      id: 5,
      title: "Inter-College Sports Meet 2025",
      date: "10 Jan 2025",
      endDate: "12 Jan 2025",
      location: "College Sports Ground",
      category: "sports",
      description: "Annual sports competition featuring athletics, cricket, volleyball, and indoor games.",
    },
    {
      id: 6,
      title: "Guest Lecture on NEP 2020",
      date: "5 Jan 2025",
      location: "Seminar Hall",
      category: "academic",
      description: "Expert session on National Education Policy 2020 and its implementation in higher education.",
      time: "11:00 AM",
    },
    {
      id: 7,
      title: "Science Exhibition",
      date: "20 Feb 2025",
      location: "Science Block",
      category: "academic",
      description: "Student projects and working models showcasing innovations in science and technology.",
      time: "10:00 AM - 5:00 PM",
    },
    {
      id: 8,
      title: "Teacher's Day Celebration",
      date: "5 Sep 2025",
      location: "College Auditorium",
      category: "cultural",
      description: "Honoring our faculty with cultural programs and appreciation ceremony.",
      time: "10:00 AM",
    },
    {
      id: 9,
      title: "Yoga Day Camp",
      date: "21 Jun 2025",
      location: "College Ground",
      category: "sports",
      description: "International Yoga Day celebration with mass yoga session and wellness workshops.",
      time: "6:00 AM",
    },
    {
      id: 10,
      title: "NSS Special Camp - Village Adoption",
      date: "15 Feb 2025",
      endDate: "22 Feb 2025",
      location: "Adopted Village",
      category: "ncc-nss",
      description: "Week-long camp for community service including cleanliness drives, health camps, and awareness programs.",
    },
    {
      id: 11,
      title: "National Seminar on Environmental Conservation",
      date: "5 Jun 2025",
      location: "Conference Hall",
      category: "seminars",
      description: "Two-day national seminar featuring research presentations and expert discussions on environmental issues.",
      time: "9:00 AM",
    },
    {
      id: 12,
      title: "Career Guidance Workshop",
      date: "25 Jan 2025",
      location: "Seminar Hall",
      category: "seminars",
      description: "Workshop on career opportunities in education, law, pharmacy, and other fields.",
      time: "11:00 AM",
    },
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const getCategoryColor = (category: EventCategory) => {
    const colors: Record<EventCategory, string> = {
      all: "bg-primary",
      academic: "bg-blue-500",
      cultural: "bg-purple-500",
      sports: "bg-green-500",
      "ncc-nss": "bg-amber-500",
      seminars: "bg-rose-500",
    };
    return colors[category];
  };

  const getCategoryLabel = (category: EventCategory) => {
    return categories.find(c => c.value === category)?.label || category;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Events & Activities
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Stay updated with academic events, cultural programs, sports activities, and NCC/NSS initiatives at our college
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/50 border-b border-border sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeFilter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.value)}
                className={cn(
                  "transition-all",
                  activeFilter === category.value && "shadow-md"
                )}
              >
                {category.label}
                {activeFilter === category.value && (
                  <span className="ml-2 px-1.5 py-0.5 bg-primary-foreground/20 rounded text-xs">
                    {category.value === "all" ? events.length : events.filter(e => e.category === category.value).length}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover-lift overflow-hidden group">
                  {/* Category Badge */}
                  <div className={cn("h-2", getCategoryColor(event.category))} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className={cn(
                        "px-2 py-1 text-xs font-medium rounded text-white",
                        getCategoryColor(event.category)
                      )}>
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                          {event.date}
                          {event.endDate && ` - ${event.endDate}`}
                        </span>
                      </div>
                      
                      {event.time && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Follow us on social media or contact the college office to stay updated about upcoming events and activities.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-dark">
            <a href="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
