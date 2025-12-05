import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const Placements = () => {
  const stats = [
    { icon: Users, label: "Students Placed", value: "150+", color: "text-primary" },
    { icon: Building2, label: "Recruiting Companies", value: "25+", color: "text-secondary" },
    { icon: TrendingUp, label: "Highest Package", value: "₹4.5 LPA", color: "text-accent" },
    { icon: Award, label: "Average Package", value: "₹2.8 LPA", color: "text-green-600" },
  ];

  const recruiters = [
    "State Bank of India",
    "UP Police",
    "Indian Army",
    "BSNL",
    "Apollo Pharmacy",
    "Jan Aushadhi Kendra",
    "District Hospital",
    "Private Schools",
    "Coaching Institutes",
    "Local Industries"
  ];

  const placements2024 = [
    { company: "SBI Clerk", students: 12, package: "₹3.2 LPA" },
    { company: "UP Police", students: 8, package: "₹3.0 LPA" },
    { company: "Indian Army", students: 5, package: "₹3.5 LPA" },
    { company: "Apollo Pharmacy", students: 15, package: "₹2.4 LPA" },
    { company: "Private Schools", students: 25, package: "₹2.0 LPA" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Placements & Career
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Building careers through quality education and industry connections
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Placements (2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {placements2024.map((placement, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{placement.company}</p>
                        <p className="text-sm text-muted-foreground">{placement.students} students placed</p>
                      </div>
                      <span className="font-semibold text-primary">{placement.package}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Recruiters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {recruiters.map((recruiter, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {recruiter}
                    </span>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Career Guidance Cell</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our dedicated career cell provides guidance on competitive exams, government jobs, and skill development.
                  </p>
                  <Button variant="outline" size="sm">Contact Career Cell</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Placements;
