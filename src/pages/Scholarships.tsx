import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink, CheckCircle } from "lucide-react";

const Scholarships = () => {
  const scholarships = [
    {
      name: "Post Matric Scholarship (SC/ST/OBC)",
      provider: "Government of Uttar Pradesh",
      eligibility: "SC/ST/OBC students with family income below ₹2.5 Lakh",
      benefits: "Full tuition fee + maintenance allowance",
      link: "https://scholarship.up.gov.in"
    },
    {
      name: "Central Sector Scholarship",
      provider: "Ministry of Education, Govt. of India",
      eligibility: "Students scoring above 80% in 12th standard",
      benefits: "₹10,000 - ₹20,000 per annum",
      link: "https://scholarships.gov.in"
    },
    {
      name: "Minority Scholarship",
      provider: "Ministry of Minority Affairs",
      eligibility: "Minority community students",
      benefits: "Up to ₹25,000 per annum",
      link: "https://minorityaffairs.gov.in"
    },
    {
      name: "Merit Scholarship",
      provider: "Shri Ram Adarsh Mahavidyalaya",
      eligibility: "Top 3 students of each class",
      benefits: "50% fee waiver",
      link: "#"
    },
    {
      name: "Girl Child Scholarship",
      provider: "State Government",
      eligibility: "Single girl child of the family",
      benefits: "Full fee reimbursement",
      link: "https://scholarship.up.gov.in"
    },
    {
      name: "Orphan Student Support",
      provider: "Shri Ram Adarsh Mahavidyalaya",
      eligibility: "Students without parents",
      benefits: "Free education + books",
      link: "#"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Scholarships
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Financial assistance programs available for eligible students
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <GraduationCap className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    {scholarship.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{scholarship.provider}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Eligibility
                      </p>
                      <p className="text-sm text-muted-foreground ml-6">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Benefits</p>
                      <p className="text-sm text-primary font-semibold">{scholarship.benefits}</p>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                        Apply Now <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-accent/10 border-accent">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-bold mb-4">How to Apply for Scholarships</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Visit the respective scholarship portal</li>
                <li>Register with your details and create an account</li>
                <li>Fill in the application form with accurate information</li>
                <li>Upload required documents (income certificate, caste certificate, etc.)</li>
                <li>Submit the application before the deadline</li>
                <li>Collect acknowledgment receipt and track your application</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Note:</strong> For any assistance, contact the college scholarship cell.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Scholarships;
