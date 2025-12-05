import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardCheck, AlertCircle, Info } from "lucide-react";
import { useState } from "react";

const Attendance = () => {
  const [rollNumber, setRollNumber] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for attendance check functionality
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Attendance Portal
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Check your attendance status and maintain minimum required attendance
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  Check Your Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheck} className="space-y-4">
                  <div>
                    <Label htmlFor="rollNumber">Roll Number / Enrollment Number</Label>
                    <Input
                      id="rollNumber"
                      placeholder="Enter your roll number"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">Check Attendance</Button>
                </form>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    Attendance records are updated weekly. For any discrepancies, contact your class teacher.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Attendance Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="font-medium text-red-800 dark:text-red-200 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Minimum 75% attendance is mandatory
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                    Students with less than 75% attendance will not be allowed to appear in examinations.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Important Guidelines:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Attendance is marked at the beginning of each lecture</li>
                    <li>Medical leave requires proper documentation from registered medical practitioner</li>
                    <li>Students must inform their class teacher for any planned absence</li>
                    <li>Proxy attendance is strictly prohibited and punishable</li>
                    <li>Attendance shortage may result in detention</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">≥75%</p>
                    <p className="text-xs text-muted-foreground">Eligible for Exam</p>
                  </div>
                  <div className="flex-1 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-yellow-600">65-74%</p>
                    <p className="text-xs text-muted-foreground">Warning Zone</p>
                  </div>
                  <div className="flex-1 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-red-600">&lt;65%</p>
                    <p className="text-xs text-muted-foreground">Critical</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;
