import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, FileText, CheckCircle } from "lucide-react";

const Prospectus = () => {
  const prospectusContents = [
    "College History & Vision",
    "Management & Administration",
    "Courses Offered",
    "Fee Structure",
    "Admission Process",
    "Faculty Information",
    "Facilities & Infrastructure",
    "Rules & Regulations",
    "Academic Calendar",
    "Scholarship Information",
    "NCC & NSS Activities",
    "Contact Details",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              College Prospectus
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Complete guide to admissions, courses, and campus life
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Prospectus 2025-26
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center text-primary-foreground p-8">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        Shri Ram Adarsh Mahavidyalaya
                      </h3>
                      <p className="text-sm opacity-80">Prospectus 2025-26</p>
                      <p className="text-xs mt-4 opacity-60">Panwari, Sikandra, Agra</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF (Hindi)
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF (English)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Inside</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prospectusContents.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    For any queries regarding admissions or courses, contact our admission cell.
                  </p>
                  <div className="text-sm space-y-1">
                    <p><strong>Phone:</strong> 9837320170</p>
                    <p><strong>Email:</strong> shriramadarsh190@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Previous Years</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Prospectus 2024-25
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Prospectus 2023-24
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prospectus;
