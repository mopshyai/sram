import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, Download, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FeeStructure = () => {
  const feeData = [
    { course: "B.A. (All Subjects)", annual: "₹5,500", admission: "₹1,500", total: "₹7,000" },
    { course: "B.Sc. (Maths/Bio)", annual: "₹7,500", admission: "₹2,000", total: "₹9,500" },
    { course: "B.Com.", annual: "₹6,500", admission: "₹1,500", total: "₹8,000" },
    { course: "M.A. (All Subjects)", annual: "₹6,000", admission: "₹2,000", total: "₹8,000" },
    { course: "M.Sc. (All Subjects)", annual: "₹8,000", admission: "₹2,500", total: "₹10,500" },
    { course: "D.Pharma", annual: "₹45,000", admission: "₹5,000", total: "₹50,000" },
    { course: "B.Ed.", annual: "₹35,000", admission: "₹5,000", total: "₹40,000" },
    { course: "LLB", annual: "₹25,000", admission: "₹3,000", total: "₹28,000" },
    { course: "BA LLB (Integrated)", annual: "₹30,000", admission: "₹5,000", total: "₹35,000" },
    { course: "ITI Trades", annual: "₹15,000", admission: "₹2,000", total: "₹17,000" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Fee Structure
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Academic Year 2024-25 Fee Details
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-primary" />
                Course-wise Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead className="text-right">Annual Fee</TableHead>
                      <TableHead className="text-right">Admission Fee</TableHead>
                      <TableHead className="text-right">Total (1st Year)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.course}</TableCell>
                        <TableCell className="text-right">{item.annual}</TableCell>
                        <TableCell className="text-right">{item.admission}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{item.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Additional Charges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Library Fee</span>
                    <span className="font-medium">₹500/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Laboratory Fee (Science)</span>
                    <span className="font-medium">₹1,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Examination Fee</span>
                    <span className="font-medium">As per University</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Identity Card</span>
                    <span className="font-medium">₹100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Development Fee</span>
                    <span className="font-medium">₹500/year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Fees can be paid through the following methods:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Cash at college fee counter</li>
                  <li>Bank Draft in favor of "Shri Ram Adarsh Mahavidyalaya"</li>
                  <li>Online transfer (NEFT/RTGS)</li>
                  <li>UPI Payment</li>
                </ul>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Fee Receipt
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-accent/10 border-accent">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Special Provisions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Free Education</strong> for orphan students (students without parents)</li>
                    <li>• <strong>Free Bus Service</strong> for girl students</li>
                    <li>• <strong>50% Fee Waiver</strong> for merit scholarship holders</li>
                    <li>• <strong>Installment facility</strong> available for economically weaker students</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FeeStructure;
