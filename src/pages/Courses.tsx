import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, Clock, FileText, Briefcase, Download, 
  BookOpen, Shield, Microscope, Wrench, ChevronRight 
} from "lucide-react";

const Courses = () => {
  const courseCategories = {
    education: {
      title: "Education Programs",
      icon: GraduationCap,
      courses: [
        {
          name: "Bachelor of Education (B.Ed)",
          duration: "2 Years",
          eligibility: "Graduate with 50% marks",
          career: "School Teacher, Education Administrator, Curriculum Developer",
          approved: "NCTE Approved",
        },
        {
          name: "Diploma in Elementary Education (D.El.Ed / BTC)",
          duration: "2 Years",
          eligibility: "12th Pass with 50% marks",
          career: "Primary School Teacher, Pre-Primary Teacher",
          approved: "SCERT Approved",
        },
      ],
    },
    law: {
      title: "Law Programs",
      icon: Shield,
      courses: [
        {
          name: "Bachelor of Laws (LLB)",
          duration: "3 Years",
          eligibility: "Graduate in any discipline",
          career: "Advocate, Legal Advisor, Corporate Lawyer, Judge",
          approved: "BCI Approved",
        },
        {
          name: "BA LLB (Integrated)",
          duration: "5 Years",
          eligibility: "12th Pass with 45% marks",
          career: "Advocate, Legal Consultant, Public Prosecutor, Legal Officer",
          approved: "BCI Approved",
        },
      ],
    },
    pharmacy: {
      title: "Pharmacy Programs",
      icon: Microscope,
      courses: [
        {
          name: "Diploma in Pharmacy (D.Pharma)",
          duration: "2 Years",
          eligibility: "12th Pass (PCB/PCM) with 50% marks",
          career: "Pharmacist, Drug Inspector, Medical Representative, Hospital Pharmacist",
          approved: "BTE Lucknow (Code-1708)",
          featured: true,
        },
      ],
    },
    undergraduate: {
      title: "Undergraduate Programs",
      icon: BookOpen,
      courses: [
        {
          name: "Bachelor of Arts (B.A.)",
          duration: "3 Years",
          eligibility: "12th Pass",
          career: "Civil Services, Teaching, Journalism, Management",
          subjects: "Hindi, English, History, Political Science, Sociology, Home Science",
        },
        {
          name: "Bachelor of Science (B.Sc.)",
          duration: "3 Years",
          eligibility: "12th Pass (Science)",
          career: "Research, Teaching, Technical Positions, Higher Studies",
          subjects: "Physics, Chemistry, Mathematics, Zoology, Botany",
        },
        {
          name: "Bachelor of Commerce (B.Com.)",
          duration: "3 Years",
          eligibility: "12th Pass (Commerce/Any Stream)",
          career: "Accountant, Auditor, Business Analyst, Banking",
        },
      ],
    },
    postgraduate: {
      title: "Postgraduate Programs",
      icon: GraduationCap,
      courses: [
        {
          name: "Master of Arts (M.A.)",
          duration: "2 Years",
          eligibility: "Graduate in relevant subject",
          career: "Lecturer, Research Scholar, Civil Services",
          subjects: "Hindi, English, History, Sociology, Political Science, Home Science",
        },
        {
          name: "Master of Science (M.Sc.)",
          duration: "2 Years",
          eligibility: "B.Sc. in relevant subject",
          career: "Research Scientist, Professor, Industry Expert",
          subjects: "Physics, Chemistry, Mathematics, Zoology, Botany",
        },
      ],
    },
    vocational: {
      title: "Vocational Programs",
      icon: Wrench,
      courses: [
        {
          name: "Industrial Training Institute (ITI)",
          duration: "1-2 Years",
          eligibility: "8th / 10th Pass (Trade specific)",
          career: "Skilled Technician, Self Employment, Industry Jobs",
          trades: "Electrician, Fitter, Welder, Computer Operator, and more",
        },
      ],
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive courses designed to prepare students for successful careers and meaningful contributions to society
          </p>
        </div>
      </section>

      {/* Courses Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
              {Object.entries(courseCategories).map(([key, category]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(courseCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
                    {category.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {category.courses.map((course, idx) => (
                    <Card key={idx} className={`hover-lift ${course.featured ? 'border-gold border-2' : ''}`}>
                      {course.featured && (
                        <div className="bg-gold text-gold-foreground text-center py-1 text-sm font-medium">
                          Featured Program
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-heading text-xl flex items-start justify-between gap-2">
                          {course.name}
                          {course.approved && (
                            <Badge variant="secondary" className="shrink-0 text-xs">
                              {course.approved}
                            </Badge>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span><strong>Duration:</strong> {course.duration}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FileText className="w-4 h-4 text-primary mt-0.5" />
                            <span><strong>Eligibility:</strong> {course.eligibility}</span>
                          </div>
                        </div>
                        
                        {course.subjects && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Subjects:</p>
                            <p className="text-sm text-muted-foreground">{course.subjects}</p>
                          </div>
                        )}
                        
                        {course.trades && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Trades Available:</p>
                            <p className="text-sm text-muted-foreground">{course.trades}</p>
                          </div>
                        )}
                        
                        <div className="flex items-start gap-2">
                          <Briefcase className="w-4 h-4 text-gold mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Career Opportunities:</p>
                            <p className="text-sm text-muted-foreground">{course.career}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary-dark">
                            <Link to="/admissions">Apply Now</Link>
                          </Button>
                          <Button asChild size="sm" variant="outline" className="flex-1">
                            <Link to="/downloads">
                              <Download className="w-4 h-4 mr-1" />
                              Syllabus
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Direct Admission available. First Come, First Serve basis. Contact us for more details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gold hover:bg-gold-light text-gold-foreground">
              <Link to="/admissions">Start Application</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;