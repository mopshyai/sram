import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, Shield, Microscope, Calculator, Wrench, 
  GraduationCap, Users, Award, Building
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      name: "Department of Arts",
      icon: BookOpen,
      color: "primary",
      programs: ["B.A.", "M.A."],
      subjects: "Hindi, English, History, Political Science, Sociology, Home Science",
      facilities: ["Dedicated classrooms", "Language lab", "Library section"],
      highlights: ["Experienced faculty", "Regular seminars", "Cultural activities"],
    },
    {
      name: "Department of Science",
      icon: Microscope,
      color: "gold",
      programs: ["B.Sc.", "M.Sc."],
      subjects: "Physics, Chemistry, Mathematics, Zoology, Botany",
      facilities: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"],
      highlights: ["Hands-on experiments", "Research projects", "Science exhibitions"],
    },
    {
      name: "Department of Commerce",
      icon: Calculator,
      color: "navy",
      programs: ["B.Com."],
      subjects: "Accountancy, Business Studies, Economics, Statistics",
      facilities: ["Commerce lab", "Business resource center"],
      highlights: ["Industry exposure", "Financial literacy programs", "Guest lectures"],
    },
    {
      name: "Department of Education",
      icon: GraduationCap,
      color: "primary",
      programs: ["B.Ed", "D.El.Ed (BTC)"],
      subjects: "Pedagogy, Child Psychology, Teaching Methods, Educational Technology",
      facilities: ["Micro-teaching lab", "Psychology lab", "Teaching aid workshop"],
      highlights: ["NCTE/SCERT approved", "School internships", "Model teaching sessions"],
    },
    {
      name: "Department of Law",
      icon: Shield,
      color: "navy",
      programs: ["LLB", "BA LLB"],
      subjects: "Constitutional Law, Criminal Law, Civil Law, Corporate Law",
      facilities: ["Moot court", "Legal aid clinic", "Law library"],
      highlights: ["BCI approved", "Court visits", "Legal awareness camps"],
    },
    {
      name: "Department of Pharmacy",
      icon: Microscope,
      color: "gold",
      programs: ["D.Pharma (BTE Code-1708)"],
      subjects: "Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Hospital Pharmacy",
      facilities: ["Pharmacy lab", "Drug store", "Herbal garden"],
      highlights: ["BTE Lucknow approved", "Hospital training", "Industry placements"],
      featured: true,
    },
    {
      name: "Industrial Training Institute (ITI)",
      icon: Wrench,
      color: "primary",
      programs: ["Various ITI Trades"],
      subjects: "Electrician, Fitter, Welder, COPA, and more",
      facilities: ["Electrical workshop", "Fitting shop", "Welding shop", "Computer lab"],
      highlights: ["Government recognized", "Hands-on training", "Job placements"],
    },
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colors = {
      primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' },
      gold: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold' },
      navy: { bg: 'bg-navy/10', text: 'text-navy', border: 'border-navy' },
    };
    return colors[color as keyof typeof colors]?.[type] || colors.primary[type];
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Academic Departments</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Seven diverse departments offering comprehensive education across multiple disciplines
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, idx) => (
              <Card 
                key={idx} 
                className={`hover-lift ${dept.featured ? 'border-gold border-2' : ''}`}
              >
                {dept.featured && (
                  <div className="bg-gold text-gold-foreground text-center py-1 text-sm font-medium">
                    Featured Department
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${getColorClass(dept.color, 'bg')} flex items-center justify-center shrink-0`}>
                      <dept.icon className={`w-7 h-7 ${getColorClass(dept.color, 'text')}`} />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">{dept.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {dept.programs.map((program) => (
                          <span 
                            key={program} 
                            className={`px-2 py-1 text-xs rounded-full ${getColorClass(dept.color, 'bg')} ${getColorClass(dept.color, 'text')}`}
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Subjects Covered:</h4>
                    <p className="text-sm text-muted-foreground">{dept.subjects}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Facilities:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {dept.facilities.map((facility, fIdx) => (
                        <li key={fIdx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Building className="w-3 h-3 text-primary" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {dept.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs bg-muted px-2 py-1 rounded-full flex items-center gap-1">
                          <Award className="w-3 h-3 text-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="w-16 h-16 mx-auto text-primary mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Faculty
            </h2>
            <p className="text-muted-foreground mb-6">
              Our institution is proud to have a team of highly qualified and experienced faculty members 
              who are dedicated to providing quality education. Many of our teachers hold advanced degrees 
              and bring years of academic and industry experience to the classroom.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Contact Department Heads</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Interested in Joining?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Explore our courses and begin your admission process today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gold hover:bg-gold-light text-gold-foreground">
              <Link to="/courses">View All Courses</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;