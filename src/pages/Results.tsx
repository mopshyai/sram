import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar } from "lucide-react";

const Results = () => {
  const results = [
    { title: "B.A. Final Year Results 2024", date: "Dec 2024", semester: "6th Semester" },
    { title: "B.Sc. Final Year Results 2024", date: "Dec 2024", semester: "6th Semester" },
    { title: "B.Com. Final Year Results 2024", date: "Dec 2024", semester: "6th Semester" },
    { title: "M.A. Results 2024", date: "Nov 2024", semester: "4th Semester" },
    { title: "D.Pharma Results 2024", date: "Nov 2024", semester: "2nd Year" },
    { title: "B.Ed. Results 2024", date: "Oct 2024", semester: "2nd Year" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Examination Results
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Check your examination results and academic performance
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    {result.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {result.date} • {result.semester}
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      View Result
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Check Your Result Online</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Results are also available on Dr. Bhimrao Ambedkar University (Agra University) official website.
              </p>
              <Button asChild>
                <a href="https://www.dbrau.ac.in" target="_blank" rel="noopener noreferrer">
                  Visit University Portal
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
