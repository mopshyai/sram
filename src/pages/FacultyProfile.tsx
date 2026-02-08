import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, Mail, Phone, ChevronLeft, Clock, Award, BookOpen,
  FileText, Trophy, Briefcase, User, Building, ArrowRight
} from "lucide-react";
import { 
  facultyData, 
  getFacultyById, 
  getDepartmentColor, 
  getDepartmentLabel 
} from "@/data/facultyData";

const FacultyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faculty = getFacultyById(Number(id));

  if (!faculty) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <User className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
            Faculty Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The faculty member you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/faculty">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Faculty
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Get related faculty from same department
  const relatedFaculty = facultyData
    .filter(f => f.department === faculty.department && f.id !== faculty.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy text-primary-foreground py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-navy/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge className={`absolute bottom-2 right-2 ${getDepartmentColor(faculty.department)} text-white`}>
                {getDepartmentLabel(faculty.department)}
              </Badge>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fade-in">
                {faculty.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
                {faculty.designation}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{faculty.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{faculty.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{faculty.specialization}</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                <Button asChild variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                  <a href={`mailto:${faculty.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    {faculty.email}
                  </a>
                </Button>
                {faculty.phone && (
                  <Button asChild variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <a href={`tel:${faculty.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {faculty.phone}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList className="w-full justify-start bg-muted/50 p-1 overflow-x-auto flex-nowrap">
                  <TabsTrigger value="about" className="min-w-max">About</TabsTrigger>
                  <TabsTrigger value="publications" className="min-w-max">Publications</TabsTrigger>
                  <TabsTrigger value="achievements" className="min-w-max">Achievements</TabsTrigger>
                  <TabsTrigger value="education" className="min-w-max">Education</TabsTrigger>
                </TabsList>

                {/* About Tab */}
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Biography
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faculty.bio || `${faculty.name} is a dedicated faculty member in the ${getDepartmentLabel(faculty.department)} department with ${faculty.experience} of experience in ${faculty.specialization}.`}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Subjects Taught */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Subjects Taught
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {faculty.subjects.map((subject, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Research Interests */}
                  {faculty.researchInterests && faculty.researchInterests.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          Research Interests
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {faculty.researchInterests.map((interest, i) => (
                            <Badge key={i} variant="outline" className="border-primary/30">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Publications Tab */}
                <TabsContent value="publications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Publications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {faculty.publications && faculty.publications.length > 0 ? (
                        <div className="space-y-4">
                          {faculty.publications.map((pub, i) => (
                            <div 
                              key={i} 
                              className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h4 className="font-medium text-foreground mb-1">{pub.title}</h4>
                                  <p className="text-sm text-muted-foreground">{pub.journal}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {pub.year}
                                  </Badge>
                                  <Badge 
                                    variant="outline" 
                                    className={`text-xs capitalize ${
                                      pub.type === 'journal' ? 'border-blue-500 text-blue-600' :
                                      pub.type === 'book' ? 'border-green-500 text-green-600' :
                                      'border-amber-500 text-amber-600'
                                    }`}
                                  >
                                    {pub.type}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No publications listed yet.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Achievements Tab */}
                <TabsContent value="achievements" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        Achievements & Awards
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {faculty.achievements && faculty.achievements.length > 0 ? (
                        <div className="space-y-4">
                          {faculty.achievements.map((achievement, i) => (
                            <div 
                              key={i} 
                              className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-gold/10 to-transparent border border-gold/20"
                            >
                              <div className="shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-gold" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-foreground">{achievement.title}</h4>
                                  <Badge variant="secondary" className="text-xs bg-gold/20 text-gold-foreground">
                                    {achievement.year}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No achievements listed yet.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Educational Background
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {faculty.education && faculty.education.length > 0 ? (
                        <div className="relative">
                          {/* Timeline line */}
                          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                          
                          <div className="space-y-6">
                            {faculty.education.map((edu, i) => (
                              <div key={i} className="flex gap-4 relative">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10">
                                  <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 pt-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                                    <Badge variant="outline" className="text-xs">
                                      {edu.year}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground mb-2">Qualification: {faculty.qualification}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Department</p>
                      <p className="font-medium text-sm">{getDepartmentLabel(faculty.department)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="font-medium text-sm">{faculty.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Specialization</p>
                      <p className="font-medium text-sm">{faculty.specialization}</p>
                    </div>
                  </div>
                  {faculty.publications && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Publications</p>
                        <p className="font-medium text-sm">{faculty.publications.length} Published</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Related Faculty */}
              {relatedFaculty.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Other {getDepartmentLabel(faculty.department)} Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedFaculty.map((f) => (
                      <Link 
                        key={f.id}
                        to={`/faculty/${f.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <img 
                          src={f.image} 
                          alt={f.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                            {f.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {f.designation}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Contact CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Have Questions?
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get in touch with the department for more information.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/contact">
                      Contact Department
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacultyProfile;
