import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Mail, Phone, ChevronRight, Search,
  BookOpen, Shield, Microscope, Building, Users, Award, Clock
} from "lucide-react";

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  subjects: string[];
  image: string;
  email: string;
  phone?: string;
}

const departments = [
  { id: "all", name: "All Faculty", icon: Users },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "law", name: "Law", icon: Shield },
  { id: "pharmacy", name: "Pharmacy", icon: Microscope },
  { id: "arts", name: "Arts & Science", icon: BookOpen },
  { id: "commerce", name: "Commerce", icon: Building },
];

const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar Sharma",
    designation: "Principal & HOD",
    department: "education",
    qualification: "Ph.D., M.Ed., B.Ed.",
    experience: "25+ Years",
    specialization: "Educational Psychology",
    subjects: ["Educational Psychology", "Curriculum Development"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "principal@sram.edu.in",
    phone: "9837320170",
  },
  {
    id: 2,
    name: "Prof. Sunita Verma",
    designation: "Associate Professor",
    department: "arts",
    qualification: "M.A., Ph.D. (Hindi)",
    experience: "18 Years",
    specialization: "Hindi Literature",
    subjects: ["Hindi Literature", "Modern Poetry"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    email: "sunita.v@sram.edu.in",
  },
  {
    id: 3,
    name: "Dr. Amit Singh",
    designation: "Assistant Professor",
    department: "law",
    qualification: "LL.M., Ph.D.",
    experience: "12 Years",
    specialization: "Constitutional Law",
    subjects: ["Constitutional Law", "Human Rights"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "amit.singh@sram.edu.in",
    phone: "9876543210",
  },
  {
    id: 4,
    name: "Dr. Priya Agarwal",
    designation: "HOD - Pharmacy",
    department: "pharmacy",
    qualification: "M.Pharm, Ph.D.",
    experience: "15 Years",
    specialization: "Pharmaceutical Chemistry",
    subjects: ["Pharmaceutical Chemistry", "Drug Design"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    email: "priya.a@sram.edu.in",
  },
  {
    id: 5,
    name: "Prof. Vikram Yadav",
    designation: "Associate Professor",
    department: "commerce",
    qualification: "M.Com, MBA, NET",
    experience: "14 Years",
    specialization: "Financial Management",
    subjects: ["Financial Accounting", "Business Management"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    email: "vikram.y@sram.edu.in",
  },
  {
    id: 6,
    name: "Dr. Meena Kumari",
    designation: "Assistant Professor",
    department: "education",
    qualification: "M.Ed., Ph.D.",
    experience: "10 Years",
    specialization: "Special Education",
    subjects: ["Special Education", "Inclusive Teaching"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face",
    email: "meena.k@sram.edu.in",
  },
  {
    id: 7,
    name: "Prof. Ramesh Chandra",
    designation: "Senior Lecturer",
    department: "arts",
    qualification: "M.Sc. (Physics), B.Ed.",
    experience: "20 Years",
    specialization: "Quantum Physics",
    subjects: ["Physics", "Applied Mathematics"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    email: "ramesh.c@sram.edu.in",
  },
  {
    id: 8,
    name: "Dr. Kavita Mishra",
    designation: "Assistant Professor",
    department: "law",
    qualification: "LL.B., LL.M.",
    experience: "8 Years",
    specialization: "Criminal Law",
    subjects: ["Criminal Law", "Evidence Law"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face",
    email: "kavita.m@sram.edu.in",
  },
  {
    id: 9,
    name: "Dr. Suresh Patel",
    designation: "Associate Professor",
    department: "pharmacy",
    qualification: "M.Pharm, Ph.D.",
    experience: "16 Years",
    specialization: "Pharmacology",
    subjects: ["Pharmacology", "Clinical Pharmacy"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    email: "suresh.p@sram.edu.in",
    phone: "9123456789",
  },
  {
    id: 10,
    name: "Prof. Anita Saxena",
    designation: "Assistant Professor",
    department: "commerce",
    qualification: "M.Com, Ph.D., CA",
    experience: "11 Years",
    specialization: "Taxation & Auditing",
    subjects: ["Taxation", "Auditing", "Cost Accounting"],
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop&crop=face",
    email: "anita.s@sram.edu.in",
  },
  {
    id: 11,
    name: "Dr. Manoj Tiwari",
    designation: "Senior Lecturer",
    department: "education",
    qualification: "M.Ed., M.Phil., Ph.D.",
    experience: "22 Years",
    specialization: "Educational Technology",
    subjects: ["Educational Technology", "Research Methodology"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    email: "manoj.t@sram.edu.in",
  },
  {
    id: 12,
    name: "Prof. Neha Gupta",
    designation: "Assistant Professor",
    department: "arts",
    qualification: "M.A. (English), NET",
    experience: "7 Years",
    specialization: "English Literature",
    subjects: ["English Literature", "Communication Skills"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    email: "neha.g@sram.edu.in",
  },
  {
    id: 13,
    name: "Dr. Ravi Shankar",
    designation: "HOD - Law",
    department: "law",
    qualification: "LL.M., Ph.D., D.Litt.",
    experience: "28 Years",
    specialization: "International Law",
    subjects: ["International Law", "Jurisprudence"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    email: "ravi.s@sram.edu.in",
    phone: "9988776655",
  },
  {
    id: 14,
    name: "Prof. Deepa Sharma",
    designation: "Associate Professor",
    department: "pharmacy",
    qualification: "M.Pharm, MBA",
    experience: "13 Years",
    specialization: "Pharmaceutical Management",
    subjects: ["Hospital Pharmacy", "Pharma Marketing"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    email: "deepa.s@sram.edu.in",
  },
  {
    id: 15,
    name: "Dr. Arun Kumar",
    designation: "HOD - Commerce",
    department: "commerce",
    qualification: "M.Com, Ph.D., NET",
    experience: "19 Years",
    specialization: "Banking & Finance",
    subjects: ["Banking", "Corporate Finance", "Economics"],
    image: "https://images.unsplash.com/photo-1556157382-97ede2916cd9?w=300&h=300&fit=crop&crop=face",
    email: "arun.k@sram.edu.in",
    phone: "9876512340",
  },
  {
    id: 16,
    name: "Prof. Shalini Jain",
    designation: "Assistant Professor",
    department: "arts",
    qualification: "M.A. (History), Ph.D.",
    experience: "9 Years",
    specialization: "Medieval Indian History",
    subjects: ["Indian History", "World History"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    email: "shalini.j@sram.edu.in",
  },
];

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

  const getDepartmentColor = (dept: string) => {
    const colors: Record<string, string> = {
      education: "bg-emerald-500",
      law: "bg-blue-500",
      pharmacy: "bg-purple-500",
      arts: "bg-amber-500",
      commerce: "bg-teal-500",
    };
    return colors[dept] || "bg-primary";
  };

  const getDepartmentLabel = (dept: string) => {
    return departments.find(d => d.id === dept)?.name || dept;
  };

  // Calculate stats
  const totalExperience = facultyData.reduce((acc, f) => {
    const years = parseInt(f.experience) || 0;
    return acc + years;
  }, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-navy/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Our Faculty
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Meet our distinguished faculty members who are committed to nurturing the next generation of leaders
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Users className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold">{facultyData.length}+</span>
              </div>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center border-x border-border">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Building className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold">5</span>
              </div>
              <p className="text-sm text-muted-foreground">Departments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold">{totalExperience}+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Search Input */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search faculty by name, designation, or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base bg-card border-border rounded-full shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 overflow-x-auto pb-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveFilter(dept.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  transition-all duration-300 ease-out
                  ${activeFilter === dept.id 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                  }
                `}
              >
                <dept.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{dept.name}</span>
                <span className="sm:hidden">{dept.id === "all" ? "All" : dept.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-muted-foreground text-sm">
            Showing <span className="font-semibold text-foreground">{filteredFaculty.length}</span> of{" "}
            <span className="font-semibold text-foreground">{facultyData.length}</span> faculty members
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFaculty.map((faculty, idx) => (
                <Card 
                  key={faculty.id} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Department Badge */}
                      <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full text-white ${getDepartmentColor(faculty.department)}`}>
                        {getDepartmentLabel(faculty.department)}
                      </span>

                      {/* Name overlay */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="font-heading text-lg font-bold text-white leading-tight">
                          {faculty.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">{faculty.designation}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{faculty.qualification}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{faculty.experience} Experience</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{faculty.specialization}</span>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="flex flex-wrap gap-1">
                        {faculty.subjects.slice(0, 2).map((subject, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                          >
                            {subject}
                          </span>
                        ))}
                        {faculty.subjects.length > 2 && (
                          <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                            +{faculty.subjects.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Contact */}
                      <div className="pt-3 border-t border-border space-y-2">
                        <a 
                          href={`mailto:${faculty.email}`}
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors group/email"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="truncate group-hover/email:underline">{faculty.email}</span>
                        </a>
                        {faculty.phone && (
                          <a 
                            href={`tel:${faculty.phone}`}
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors group/phone"
                          >
                            <Phone className="w-4 h-4" />
                            <span className="group-hover/phone:underline">{faculty.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No Faculty Found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We couldn't find any faculty members matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want to Learn More?
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our departments or get in touch with us for any inquiries about our academic programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-dark">
                <Link to="/departments">
                  <Building className="w-4 h-4 mr-2" />
                  View Departments
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
