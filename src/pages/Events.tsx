import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Filter, ArrowRight, X, ExternalLink, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { EventRegistrationForm } from "@/components/EventRegistrationForm";

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
  image?: string;
  link?: string;
  isRegistrationOpen?: boolean;
}

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

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
      description: "Grand celebration featuring cultural performances, awards ceremony, and guest lectures. Join us for a day of celebration honoring achievements and showcasing talents of our students.",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      isRegistrationOpen: true,
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "26 Jan 2025",
      location: "College Campus",
      category: "cultural",
      description: "Flag hoisting ceremony followed by patriotic performances and march past. A celebration of our nation's heritage with cultural programs.",
      time: "8:00 AM",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=600&fit=crop",
      isRegistrationOpen: true,
    },
    {
      id: 3,
      title: "NCC Camp - Combined Annual Training",
      date: "20 Dec 2024",
      endDate: "30 Dec 2024",
      location: "District Training Center",
      category: "ncc-nss",
      description: "Annual training camp for NCC cadets with drills, weapon training, and leadership activities. Building discipline and national pride.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "NSS Blood Donation Camp",
      date: "1 Feb 2025",
      location: "College Medical Center",
      category: "ncc-nss",
      description: "Blood donation drive organized by NSS unit in collaboration with Red Cross Society. Save lives through your generous donation.",
      time: "9:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop",
      isRegistrationOpen: true,
    },
    {
      id: 5,
      title: "Inter-College Sports Meet 2025",
      date: "10 Jan 2025",
      endDate: "12 Jan 2025",
      location: "College Sports Ground",
      category: "sports",
      description: "Annual sports competition featuring athletics, cricket, volleyball, and indoor games. Compete for glory and showcase your sporting talents.",
      image: "https://images.unsplash.com/photo-1461896836934- voices908e90d8a?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Guest Lecture on NEP 2020",
      date: "5 Jan 2025",
      location: "Seminar Hall",
      category: "academic",
      description: "Expert session on National Education Policy 2020 and its implementation in higher education. Understanding the future of Indian education.",
      time: "11:00 AM",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Science Exhibition",
      date: "20 Feb 2025",
      location: "Science Block",
      category: "academic",
      description: "Student projects and working models showcasing innovations in science and technology. Witness creative solutions to real-world problems.",
      time: "10:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      isRegistrationOpen: true,
    },
    {
      id: 8,
      title: "Teacher's Day Celebration",
      date: "5 Sep 2025",
      location: "College Auditorium",
      category: "cultural",
      description: "Honoring our faculty with cultural programs and appreciation ceremony. A tribute to our mentors and guides.",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Yoga Day Camp",
      date: "21 Jun 2025",
      location: "College Ground",
      category: "sports",
      description: "International Yoga Day celebration with mass yoga session and wellness workshops. Promoting health and mindfulness.",
      time: "6:00 AM",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    },
    {
      id: 10,
      title: "NSS Special Camp - Village Adoption",
      date: "15 Feb 2025",
      endDate: "22 Feb 2025",
      location: "Adopted Village",
      category: "ncc-nss",
      description: "Week-long camp for community service including cleanliness drives, health camps, and awareness programs. Serving the community.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    },
    {
      id: 11,
      title: "National Seminar on Environmental Conservation",
      date: "5 Jun 2025",
      location: "Conference Hall",
      category: "seminars",
      description: "Two-day national seminar featuring research presentations and expert discussions on environmental issues. Addressing climate change challenges.",
      time: "9:00 AM",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop",
    },
    {
      id: 12,
      title: "Career Guidance Workshop",
      date: "25 Jan 2025",
      location: "Seminar Hall",
      category: "seminars",
      description: "Workshop on career opportunities in education, law, pharmacy, and other fields. Planning your successful future.",
      time: "11:00 AM",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      isRegistrationOpen: true,
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

  const getCategoryGradient = (category: EventCategory) => {
    const gradients: Record<EventCategory, string> = {
      all: "from-primary/80 to-primary-dark/80",
      academic: "from-blue-500/80 to-blue-700/80",
      cultural: "from-purple-500/80 to-purple-700/80",
      sports: "from-green-500/80 to-green-700/80",
      "ncc-nss": "from-amber-500/80 to-amber-700/80",
      seminars: "from-rose-500/80 to-rose-700/80",
    };
    return gradients[category];
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
      <section className="py-6 md:py-8 bg-muted/50 border-b border-border sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Filter className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Filter by Category:</span>
          </div>
          {/* Scrollable filter container for mobile */}
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="inline-flex md:flex md:flex-wrap gap-2 min-w-max md:min-w-0">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeFilter === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category.value)}
                  className={cn(
                    "transition-all whitespace-nowrap text-xs md:text-sm",
                    activeFilter === category.value && "shadow-md"
                  )}
                >
                  {category.label}
                  {activeFilter === category.value && (
                    <span className="ml-1.5 md:ml-2 px-1 md:px-1.5 py-0.5 bg-primary-foreground/20 rounded text-[10px] md:text-xs">
                      {category.value === "all" ? events.length : events.filter(e => e.category === category.value).length}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <p className="text-muted-foreground text-base md:text-lg">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Image Thumbnail with Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    {event.image ? (
                      <>
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </>
                    ) : (
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br",
                        getCategoryGradient(event.category)
                      )}>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                      </div>
                    )}
                    {/* Category badge */}
                    <span className={cn(
                      "absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded text-white z-10",
                      getCategoryColor(event.category)
                    )}>
                      {getCategoryLabel(event.category)}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">
                          {event.date}
                          {event.endDate && ` - ${event.endDate}`}
                        </span>
                      </div>
                      
                      {event.time && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedEvent && (
            <>
              {/* Modal Header Image */}
              <div className="relative h-56 overflow-hidden">
                {selectedEvent.image ? (
                  <>
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    getCategoryGradient(selectedEvent.category)
                  )}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>
                )}
                <span className={cn(
                  "absolute top-4 left-4 px-3 py-1.5 text-sm font-medium rounded text-white z-10",
                  getCategoryColor(selectedEvent.category)
                )}>
                  {getCategoryLabel(selectedEvent.category)}
                </span>
              </div>

              <div className="p-6">
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-heading text-2xl font-bold text-foreground">
                    {selectedEvent.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-muted-foreground text-base mb-6">
                  {selectedEvent.description}
                </DialogDescription>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">
                        {selectedEvent.date}
                        {selectedEvent.endDate && ` - ${selectedEvent.endDate}`}
                      </p>
                    </div>
                  </div>

                  {selectedEvent.time && (
                    <div className="flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-medium">{selectedEvent.time}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {selectedEvent.isRegistrationOpen && (
                    <Button 
                      onClick={() => setIsRegistrationOpen(true)}
                      className="w-full"
                    >
                      <UserPlus className="mr-2 w-4 h-4" />
                      Register for Event
                    </Button>
                  )}
                  {selectedEvent.link && (
                    <Button asChild variant={selectedEvent.isRegistrationOpen ? "outline" : "default"} className="w-full">
                      <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer">
                        View More Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Registration Form Modal */}
      {selectedEvent && (
        <EventRegistrationForm
          eventTitle={selectedEvent.title}
          eventDate={selectedEvent.date}
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
      )}

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
