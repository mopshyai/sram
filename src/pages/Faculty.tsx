import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Mail, Phone, ChevronRight, Search,
  Building, Users, Award, Clock, User
} from "lucide-react";
import { 
  facultyData, 
  departments, 
  getDepartmentColor, 
  getDepartmentLabel 
} from "@/data/facultyData";

const Faculty = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = facultyData.filter(f => {
    const matchesDepartment = activeFilter === "all" || f.department === activeFilter;
    const matchesSearch = searchQuery === "" || 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDepartment && matchesSearch;
  });

  // Calculate stats
  const totalExperience = facultyData.reduce((acc, f) => {
    const years = parseInt(f.experience) || 0;
    return acc + years;
  }, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy text-primary-foreground py-10 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-navy/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
              Our Faculty
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-4 md:mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Meet our distinguished faculty members committed to nurturing the next generation of leaders
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 md:gap-2 text-primary mb-1">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xl md:text-3xl font-bold">{facultyData.length}+</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Faculty</p>
            </div>
            <div className="text-center border-x border-border">
              <div className="flex items-center justify-center gap-1 md:gap-2 text-primary mb-1">
                <Building className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xl md:text-3xl font-bold">5</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Departments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 md:gap-2 text-primary mb-1">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xl md:text-3xl font-bold">{totalExperience}+</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Yrs Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-5 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Search Input */}
          <div className="max-w-xl mx-auto mb-4 md:mb-6">
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 md:pl-12 pr-4 py-5 md:py-6 text-sm md:text-base bg-card border-border rounded-full shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Department Filters - horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 md:flex-wrap md:justify-center scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveFilter(dept.id)}
                className={`
                  flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap
                  transition-all duration-300 ease-out min-h-[40px]
                  ${activeFilter === dept.id 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                  }
                `}
              >
                <dept.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{dept.name}</span>
                <span className="sm:hidden">{dept.id === "all" ? "All" : dept.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-muted-foreground text-xs md:text-sm">
            Showing <span className="font-semibold text-foreground">{filteredFaculty.length}</span> of{" "}
            <span className="font-semibold text-foreground">{facultyData.length}</span> faculty members
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-6 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredFaculty.map((faculty, idx) => (
                <Card 
                  key={faculty.id} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 md:hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${Math.min(idx, 8) * 50}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Mobile: Horizontal layout / Desktop: Vertical card */}
                    <div className="flex sm:block">
                      {/* Profile Image */}
                      <div className="relative w-28 h-28 sm:w-full sm:h-48 shrink-0 overflow-hidden">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent hidden sm:block" />
                        
                        {/* Department Badge - hidden on mobile horizontal */}
                        <span className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] md:text-xs font-medium rounded-full text-white ${getDepartmentColor(faculty.department)} hidden sm:inline`}>
                          {getDepartmentLabel(faculty.department)}
                        </span>

                        {/* Name overlay - desktop only */}
                        <div className="absolute bottom-2 left-3 right-3 hidden sm:block">
                          <h3 className="font-heading text-base md:text-lg font-bold text-white leading-tight">
                            {faculty.name}
                          </h3>
                          <p className="text-white/90 text-xs md:text-sm font-medium">{faculty.designation}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 p-3 sm:p-4 space-y-2 sm:space-y-3 min-w-0">
                        {/* Mobile-only name & department */}
                        <div className="sm:hidden">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-heading text-sm font-bold text-foreground leading-tight truncate">
                                {faculty.name}
                              </h3>
                              <p className="text-xs text-muted-foreground">{faculty.designation}</p>
                            </div>
                            <span className={`px-1.5 py-0.5 text-[9px] font-medium rounded text-white shrink-0 ${getDepartmentColor(faculty.department)}`}>
                              {getDepartmentLabel(faculty.department)}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <div className="flex items-start gap-1.5 sm:gap-2">
                            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground line-clamp-1">{faculty.qualification}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">{faculty.experience}</span>
                          </div>
                          <div className="hidden sm:flex items-start gap-2">
                            <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{faculty.specialization}</span>
                          </div>
                        </div>

                        {/* Subjects - hidden on mobile */}
                        <div className="hidden sm:flex flex-wrap gap-1">
                          {faculty.subjects.slice(0, 2).map((subject, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                              {subject}
                            </span>
                          ))}
                          {faculty.subjects.length > 2 && (
                            <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                              +{faculty.subjects.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Contact - simplified on mobile */}
                        <div className="pt-2 sm:pt-3 border-t border-border flex sm:block gap-3 sm:space-y-2">
                          <a 
                            href={`mailto:${faculty.email}`}
                            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary hover:text-primary-dark transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="truncate hidden sm:inline">{faculty.email}</span>
                            <span className="sm:hidden">Email</span>
                          </a>
                          {faculty.phone && (
                            <a 
                              href={`tel:${faculty.phone}`}
                              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary hover:text-primary-dark transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span className="sm:hidden">Call</span>
                              <span className="hidden sm:inline">{faculty.phone}</span>
                            </a>
                          )}
                        </div>

                        {/* View Profile Button */}
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="w-full mt-1 sm:mt-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm min-h-[36px]"
                        >
                          <Link to={`/faculty/${faculty.id}`}>
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12 md:py-16">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
                No Faculty Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-4 md:mb-6">
                No faculty members match your search. Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
                className="min-h-[40px]"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Want to Learn More?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Explore our departments or get in touch with us for any inquiries about our academic programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-dark min-h-[44px]">
                <Link to="/departments">
                  <Building className="w-4 h-4 mr-2" />
                  View Departments
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-h-[44px]">
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
