import Layout from "@/components/layout/Layout";
import { FileText, Building, Users, BookOpen, Award, Phone } from "lucide-react";

const MandatoryDisclosure = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Mandatory Disclosure
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              As per AICTE / NCTE / BCI / University Guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Institution Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Basic Information */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Institution Information
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Name of Institution", value: "Shri Ram Adarsh Mahavidyalaya" },
                    { label: "Address", value: "Panwari, Sikandra, Agra - 282007" },
                    { label: "State", value: "Uttar Pradesh" },
                    { label: "Pin Code", value: "282007" },
                    { label: "Year of Establishment", value: "2010" },
                    { label: "Type of Institution", value: "Private (Self-Financed)" },
                    { label: "Status", value: "Co-Educational" },
                    { label: "Campus Area", value: "5 Acres" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Affiliation & Approvals */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Affiliation & Approvals
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { body: "Affiliated University", details: "Dr. Bhimrao Ambedkar University, Agra" },
                    { body: "B.Ed Program", details: "NCTE Approved" },
                    { body: "D.El.Ed (BTC) Program", details: "SCERT Approved" },
                    { body: "D.Pharma Program", details: "BTE Lucknow (Code: 1708), PCI Approved" },
                    { body: "ITI Programs", details: "NCVT Affiliated" },
                    { body: "LLB / BA LLB", details: "BCI Approved" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border last:border-0 gap-2">
                      <span className="font-medium text-foreground">{item.body}</span>
                      <span className="text-muted-foreground">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Offered */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Courses Offered & Intake
                  </h2>
                </div>
              </div>
              <div className="p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Course</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Intake</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Approval</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      { course: "B.A.", duration: "3 Years", intake: "240", approval: "University" },
                      { course: "B.Sc.", duration: "3 Years", intake: "180", approval: "University" },
                      { course: "B.Com.", duration: "3 Years", intake: "120", approval: "University" },
                      { course: "M.A.", duration: "2 Years", intake: "120", approval: "University" },
                      { course: "M.Sc.", duration: "2 Years", intake: "60", approval: "University" },
                      { course: "B.Ed", duration: "2 Years", intake: "100", approval: "NCTE" },
                      { course: "D.El.Ed (BTC)", duration: "2 Years", intake: "50", approval: "SCERT" },
                      { course: "LLB", duration: "3 Years", intake: "60", approval: "BCI" },
                      { course: "BA LLB", duration: "5 Years", intake: "60", approval: "BCI" },
                      { course: "D.Pharma", duration: "2 Years", intake: "60", approval: "BTE/PCI" },
                      { course: "ITI (Various Trades)", duration: "1-2 Years", intake: "100", approval: "NCVT" }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-border last:border-0">
                        <td className="py-3 px-4">{row.course}</td>
                        <td className="py-3 px-4">{row.duration}</td>
                        <td className="py-3 px-4">{row.intake}</td>
                        <td className="py-3 px-4">{row.approval}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Faculty Information */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Faculty Information
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[
                    { label: "Total Teaching Staff", value: "85+" },
                    { label: "Non-Teaching Staff", value: "40+" },
                    { label: "Student-Teacher Ratio", value: "25:1" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  * Detailed faculty list with qualifications available in the respective department pages
                </p>
              </div>
            </div>

            {/* Contact & Grievance */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Contact & Grievance Redressal
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Contact Details</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p><span className="font-medium">Phone:</span> 9837320170, 9690704180</p>
                      <p><span className="font-medium">Email:</span> shriramadarsh190@gmail.com</p>
                      <p><span className="font-medium">Website:</span> www.shriramadarshmahavidyalaya.com</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Grievance Officer</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p><span className="font-medium">Name:</span> Principal</p>
                      <p><span className="font-medium">Designation:</span> Grievance Redressal Officer</p>
                      <p><span className="font-medium">Email:</span> grievance@shriramadarsh.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Important Documents
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Affiliation Certificate",
                    "NCTE Recognition Letter",
                    "BCI Approval Letter",
                    "BTE/PCI Approval",
                    "Land Documents",
                    "Building Plan Approval",
                    "Fire Safety Certificate",
                    "Audit Report"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Original documents available for inspection at the college office during working hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MandatoryDisclosure;
