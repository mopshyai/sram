import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, Users, Award, BookOpen, Building, Phone, Mail,
  MapPin, ChevronRight, Shield, Microscope, Library, Bus, 
  FileText, Calendar, Bell, ArrowRight
} from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";

const Index = () => {
  const stats = [
    { icon: Users, value: "2000+", label: "Students" },
    { icon: BookOpen, value: "25+", label: "Programs" },
    { icon: Award, value: "15+", label: "Years Legacy" },
    { icon: Building, value: "5 Acre", label: "Campus" },
  ];

  const courses = [
    { category: "Education", programs: ["B.Ed", "D.El.Ed (BTC)"], icon: GraduationCap },
    { category: "Law", programs: ["LLB", "BA LLB (5 Years)"], icon: Shield },
    { category: "Pharmacy", programs: ["D.Pharma (BTE Code-1708)"], icon: Microscope },
    { category: "Arts & Science", programs: ["B.A.", "B.Sc.", "B.Com.", "M.A.", "M.Sc."], icon: BookOpen },
    { category: "Vocational", programs: ["ITI Trades"], icon: Building },
  ];

  const facilities = [
    { name: "Modern Library", icon: Library, desc: "Well-stocked with books & journals" },
    { name: "Science Labs", icon: Microscope, desc: "Fully equipped laboratories" },
    { name: "Free Bus Service", icon: Bus, desc: "For girl students" },
    { name: "5 Acre Campus", icon: Building, desc: "Spacious & green environment" },
  ];

  const notices = [
    { title: "Admissions Open 2025-26", date: "Dec 2024", isNew: true },
    { title: "D.Pharma Admission - BTE Code 1708", date: "Dec 2024", isNew: true },
    { title: "Free Education for Orphan Students", date: "Ongoing", isNew: false },
    { title: "NCC & NSS Enrollment Open", date: "2025", isNew: false },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={collegeLogo} 
              alt="Shri Ram Adarsh Mahavidyalaya Logo" 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full object-cover shadow-xl animate-float border-4 border-gold"
            />
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
              Shri Ram Adarsh Mahavidyalaya
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
              Panwari, Sikandra, Agra
            </p>
            <p className="text-lg md:text-xl text-gold font-heading font-semibold mb-4">
              "Excellence in Education, Discipline, and Character"
            </p>
            <p className="text-sm md:text-base text-primary-foreground/80 mb-8">
              Affiliated to Dr. Bhimrao Ambedkar University, Agra
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground font-semibold shadow-lg">
                <Link to="/admissions">
                  Admissions 2025-26
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bulletin Ticker */}
      <div className="bg-navy text-white py-0 overflow-hidden">
        <div className="flex items-center">
          <div className="bg-primary px-4 py-3 font-bold text-primary-foreground shrink-0 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            BULLETIN
          </div>
          <div className="flex-1 overflow-hidden py-3 px-4">
            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
              {notices.map((notice, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {notice.isNew && <span className="px-1.5 py-0.5 bg-gold text-gold-foreground text-xs rounded font-medium">NEW</span>}
                  <span>{notice.title}</span>
                  <span className="text-white/40">•</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-1 px-3 shrink-0">
            <button className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors">
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover-lift border-none shadow-md">
                <CardContent className="pt-6">
                  <stat.icon className="w-10 h-10 mx-auto text-primary mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-primary font-heading">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to Our Institution
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Shri Ram Adarsh Mahavidyalaya stands as a beacon of quality higher education in the Agra region. 
              Affiliated to Dr. Bhimrao Ambedkar University, we offer comprehensive programs in Education, Law, 
              Pharmacy, Arts, Science, Commerce, and Vocational training. Our commitment to accessible education 
              includes <strong className="text-primary">free education for students without parents</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                D.Pharma (BTE Code-1708)
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                NCC & NSS Units
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                NAAC Accredited
              </span>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                Learn More About Us
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive academic programs designed to prepare students for successful careers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover-lift group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <course.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{course.category}</h3>
                  <ul className="space-y-1">
                    {course.programs.map((program) => (
                      <li key={program} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Events & Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest happenings at our college
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Annual Day Celebration 2025", date: "15 Jan 2025", location: "College Auditorium", category: "Cultural", color: "bg-purple-500", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
              { title: "NCC Camp - Combined Training", date: "20-30 Dec 2024", location: "Training Center", category: "NCC/NSS", color: "bg-amber-500", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop" },
              { title: "Inter-College Sports Meet", date: "10-12 Jan 2025", location: "Sports Ground", category: "Sports", color: "bg-green-500", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop" },
              { title: "Guest Lecture on NEP 2020", date: "5 Jan 2025", location: "Seminar Hall", category: "Academic", color: "bg-blue-500", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" },
              { title: "NSS Blood Donation Camp", date: "1 Feb 2025", location: "Medical Center", category: "NCC/NSS", color: "bg-amber-500", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop" },
              { title: "Republic Day Celebration", date: "26 Jan 2025", location: "College Campus", category: "Cultural", color: "bg-purple-500", image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop" },
            ].map((event, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Image Thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded text-white ${event.color}`}>
                    {event.category}
                  </span>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campus Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art infrastructure supporting academic excellence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <facility.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{facility.name}</h3>
                <p className="text-muted-foreground text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/facilities">
                Explore All Facilities
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notice Board & Downloads */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Notice Board */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                    <Bell className="w-5 h-5 text-gold" />
                    Notice Board
                  </h3>
                  <Link to="/downloads" className="text-primary text-sm hover:underline">View All</Link>
                </div>
                <ul className="space-y-4">
                  {notices.map((notice, idx) => (
                    <li key={idx} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                      <Calendar className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                      <div className="flex-1">
                        <p className="text-foreground font-medium text-sm flex items-center gap-2">
                          {notice.title}
                          {notice.isNew && <span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-xs rounded">NEW</span>}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">{notice.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Downloads */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gold" />
                    Quick Downloads
                  </h3>
                  <Link to="/downloads" className="text-primary text-sm hover:underline">View All</Link>
                </div>
                <ul className="space-y-3">
                  {["Admission Form 2025-26", "Prospectus", "Fee Structure", "Syllabus", "Exam Schedule"].map((item, idx) => (
                    <li key={idx}>
                      <Link to="/downloads" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm">{item}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Begin Your Academic Journey
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
            Direct Admission - First Come, First Serve. Free education available for students without parents.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground font-semibold">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href="tel:9837320170" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              9837320170
            </a>
            <a href="mailto:shriramadarsh190@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              shriramadarsh190@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Panwari, Sikandra, Agra
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;