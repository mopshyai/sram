import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  GraduationCap, FileText, Calendar, Phone, CheckCircle, 
  Download, Clock, Users, Heart, AlertCircle 
} from "lucide-react";

const Admissions = () => {
  const steps = [
    { step: 1, title: "Obtain Form", desc: "Download or collect admission form from college" },
    { step: 2, title: "Fill Application", desc: "Complete all required fields with accurate information" },
    { step: 3, title: "Submit Documents", desc: "Attach all required documents with application" },
    { step: 4, title: "Fee Payment", desc: "Pay admission fee at college counter" },
    { step: 5, title: "Confirmation", desc: "Receive admission confirmation and ID card" },
  ];

  const documents = [
    "10th Marksheet & Certificate",
    "12th Marksheet & Certificate",
    "Graduation Marksheet (for PG/B.Ed/LLB)",
    "Transfer Certificate (TC)",
    "Character Certificate",
    "Migration Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate",
    "Domicile Certificate",
    "Aadhar Card",
    "Passport Size Photographs (6 copies)",
    "Gap Certificate (if applicable)",
  ];

  const programs = [
    "B.Ed", "D.El.Ed (BTC)", "LLB", "BA LLB", "D.Pharma",
    "ITI", "B.A.", "B.Sc.", "B.Com.", "M.A.", "M.Sc."
  ];

  const importantDates = [
    { event: "Admission Form Available", date: "December 2024" },
    { event: "Last Date for UG Programs", date: "July 2025" },
    { event: "Last Date for PG Programs", date: "August 2025" },
    { event: "B.Ed Admission", date: "As per University Schedule" },
    { event: "D.Pharma Admission", date: "As per BTE Schedule" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Admissions 2025-26</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
            Begin your academic journey with Shri Ram Adarsh Mahavidyalaya. Direct admission available on first come, first serve basis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground">
              <Link to="/downloads">
                <Download className="w-4 h-4 mr-2" />
                Download Form
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:9837320170">
                <Phone className="w-4 h-4 mr-2" />
                Call: 9837320170
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Notice */}
      <section className="py-6 bg-gold/20 border-y border-gold/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Heart className="w-6 h-6 text-primary shrink-0" />
            <p className="text-foreground font-medium">
              <strong className="text-primary">Free Education</strong> available for students without parents. Contact office for details.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 5-step process to secure your admission
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-40">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3">
                  {item.step}
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-0.5 bg-primary/30 transform translate-x-24 translate-y-7"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates & Documents */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {importantDates.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                      <span className="text-foreground">{item.event}</span>
                      <span className="text-primary font-medium text-sm">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Admission Inquiry
              </h2>
              <p className="text-muted-foreground">
                Fill the form below and our team will contact you shortly
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interested *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program} value={program.toLowerCase().replace(/[^a-z]/g, '-')}>
                              {program}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Current Qualification</Label>
                    <Input id="qualification" placeholder="e.g., 12th Pass, Graduate, etc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Query</Label>
                    <Textarea id="message" placeholder="Any specific questions or requirements?" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">Need Help with Admission?</h3>
            <p className="text-primary-foreground/80 mb-6">
              Our admission counselors are here to assist you. Contact us directly for immediate assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:9837320170" className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full hover:bg-primary-foreground/20">
                <Phone className="w-4 h-4" />
                9837320170
              </a>
              <a href="tel:9690704180" className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full hover:bg-primary-foreground/20">
                <Phone className="w-4 h-4" />
                9690704180
              </a>
              <a href="tel:7500478060" className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full hover:bg-primary-foreground/20">
                <Phone className="w-4 h-4" />
                7500478060
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;