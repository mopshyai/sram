import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Mail, MapPin, Briefcase } from "lucide-react";

const Alumni = () => {
  const notableAlumni = [
    { name: "Dr. Rajesh Kumar", batch: "2010", position: "Assistant Professor, Delhi University", field: "Education" },
    { name: "Smt. Priya Sharma", batch: "2012", position: "District Education Officer", field: "Government" },
    { name: "Shri Amit Singh", batch: "2008", position: "Pharmacist, AIIMS Delhi", field: "Healthcare" },
    { name: "Dr. Sunita Yadav", batch: "2011", position: "Research Scholar, JNU", field: "Research" },
    { name: "Shri Vikram Gupta", batch: "2015", position: "Bank Manager, SBI", field: "Banking" },
    { name: "Smt. Meera Devi", batch: "2014", position: "School Principal", field: "Education" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Alumni Network
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Connect with our proud alumni community spread across various fields
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-6">Notable Alumni</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {notableAlumni.map((alumnus, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{alumnus.name}</h3>
                          <p className="text-sm text-muted-foreground">Batch of {alumnus.batch}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Briefcase className="h-3 w-3 text-accent" />
                            <p className="text-xs text-accent">{alumnus.field}</p>
                          </div>
                          <p className="text-sm mt-1">{alumnus.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Join Alumni Network</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Stay connected with your alma mater and fellow alumni. Register to receive updates about reunions, events, and networking opportunities.
                  </p>
                  <Button className="w-full">Register as Alumni</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Alumni Association</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>alumni@shriram.edu.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Panwari, Sikandra, Agra</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Alumni Meet 2025</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Annual alumni gathering scheduled for January 26, 2025.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Alumni;
