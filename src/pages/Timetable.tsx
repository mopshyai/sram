import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Download, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Timetable = () => {
  const examSchedules = [
    { course: "B.A. (All Years)", startDate: "March 15, 2025", endDate: "April 30, 2025" },
    { course: "B.Sc. (All Years)", startDate: "March 15, 2025", endDate: "April 30, 2025" },
    { course: "B.Com. (All Years)", startDate: "March 18, 2025", endDate: "May 2, 2025" },
    { course: "M.A. / M.Sc.", startDate: "April 1, 2025", endDate: "May 15, 2025" },
    { course: "D.Pharma", startDate: "April 10, 2025", endDate: "May 10, 2025" },
    { course: "B.Ed.", startDate: "May 1, 2025", endDate: "May 30, 2025" },
  ];

  const classSchedule = [
    { day: "Monday - Friday", time: "9:00 AM - 4:00 PM", type: "Regular Classes" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM", type: "Half Day" },
    { day: "Sunday", time: "Holiday", type: "Weekly Off" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Timetable & Schedule
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              View examination schedules and class timings
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="exam" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="exam">Exam Schedule</TabsTrigger>
              <TabsTrigger value="class">Class Timings</TabsTrigger>
            </TabsList>

            <TabsContent value="exam">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examSchedules.map((schedule, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                        {schedule.course}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Start:</strong> {schedule.startDate}</p>
                        <p><strong>End:</strong> {schedule.endDate}</p>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Schedule
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="class">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    College Timings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {classSchedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{item.day}</p>
                          <p className="text-sm text-muted-foreground">{item.type}</p>
                        </div>
                        <span className="font-semibold text-primary">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Timetable;
