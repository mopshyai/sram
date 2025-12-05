import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical, FileText, Users, Award } from "lucide-react";

const Research = () => {
  const researchAreas = [
    { name: "Pharmaceutical Sciences", faculty: "Dr. R.K. Sharma", papers: 12 },
    { name: "Environmental Studies", faculty: "Dr. S. Gupta", papers: 8 },
    { name: "Hindi Literature", faculty: "Dr. M. Singh", papers: 15 },
    { name: "Commerce & Economics", faculty: "Dr. A. Verma", papers: 10 },
    { name: "Education Research", faculty: "Dr. P. Yadav", papers: 7 },
  ];

  const recentPublications = [
    { title: "Impact of Digital Education on Rural Students", author: "Dr. P. Yadav", journal: "Indian Journal of Education", year: "2024" },
    { title: "Study of Herbal Medicines in Agra Region", author: "Dr. R.K. Sharma", journal: "Pharmacy Research", year: "2024" },
    { title: "Hindi Sahitya mein Nari Vimarsh", author: "Dr. M. Singh", journal: "Hindi Sahitya Patrika", year: "2023" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Research & Publications
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Contributing to academic knowledge through research and scholarly work
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Research Papers Published</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Faculty Researchers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Research Grants Received</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Research Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {researchAreas.map((area, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{area.name}</h4>
                          <p className="text-sm text-muted-foreground">{area.faculty}</p>
                        </div>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          {area.papers} papers
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPublications.map((pub, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium text-sm">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pub.author} • {pub.journal} • {pub.year}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Publications
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Research Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The college encourages faculty and students to engage in research activities. We provide support through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Access to online journals and databases through INFLIBNET</li>
                <li>Research grants for innovative projects</li>
                <li>Workshops on research methodology</li>
                <li>Support for conference participation and paper presentation</li>
                <li>Collaboration opportunities with other institutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
