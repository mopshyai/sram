import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap, Mail, Phone, ChevronRight,
  BookOpen, Shield, Microscope, Building, Users
} from "lucide-react";
import { supabase, type Faculty as SupabaseFaculty } from "@/lib/supabase";

const departments = [
  { id: "all", name: "All Faculty", icon: Users },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "law", name: "Law", icon: Shield },
  { id: "pharmacy", name: "Pharmacy", icon: Microscope },
  { id: "arts", name: "Arts & Science", icon: BookOpen },
  { id: "commerce", name: "Commerce", icon: Building },
];

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  email: string;
  phone?: string;
}

const FacultyDirectory = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch faculty from Supabase
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const { data, error } = await supabase
          .from('faculty')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;

        if (data) {
          setFacultyMembers(data as FacultyMember[]);
        }
      } catch (error) {
        console.error('Error fetching faculty:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const filteredFaculty = activeFilter === "all" 
    ? facultyMembers 
    : facultyMembers.filter(f => f.department === activeFilter);

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

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading faculty...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Faculty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and dedicated faculty members committed to academic excellence
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveFilter(dept.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
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

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty, idx) => (
            <Card 
              key={faculty.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Department Badge */}
                  <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded text-white ${getDepartmentColor(faculty.department)}`}>
                    {getDepartmentLabel(faculty.department)}
                  </span>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight">
                      {faculty.name}
                    </h3>
                    <p className="text-white/80 text-sm">{faculty.designation}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-3">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{faculty.experience} Experience</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-3 border-t border-border">
                    <a 
                      href={`mailto:${faculty.email}`}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors group/email"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate group-hover/email:underline">{faculty.email}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/faculty">
              View All Faculty
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacultyDirectory;
