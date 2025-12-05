import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, Mail, MapPin, Clock, Send, MessageSquare, 
  Building, Users, GraduationCap 
} from "lucide-react";

const Contact = () => {
  const contactNumbers = [
    { name: "Main Office", number: "9837320170" },
    { name: "Admission Cell", number: "9690704180" },
    { name: "General Inquiry", number: "7500478060" },
    { name: "Additional", number: "6367148061" },
    { name: "Additional", number: "7451840174" },
  ];

  const departments = [
    { name: "Principal Office", contact: "For academic matters and administration" },
    { name: "Admission Cell", contact: "For admission queries and procedures" },
    { name: "Examination Cell", contact: "For exam schedules and results" },
    { name: "Accounts Section", contact: "For fee payment and scholarships" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for any queries regarding admissions, courses, or general information.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover-lift">
              <CardContent className="p-4 md:pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Address</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Panwari, Sikandra<br />
                  Agra - 282007<br />
                  <span className="hidden md:inline">Uttar Pradesh, India</span>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="p-4 md:pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3 md:mb-4">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </div>
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Phone</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  <a href="tel:9837320170" className="hover:text-primary block">9837320170</a>
                  <a href="tel:9690704180" className="hover:text-primary block">9690704180</a>
                  <a href="tel:7500478060" className="hover:text-primary block hidden md:block">7500478060</a>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="p-4 md:pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-3 md:mb-4">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-navy" />
                </div>
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Email</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  <a href="mailto:shriramadarsh190@gmail.com" className="hover:text-primary break-all">
                    <span className="hidden md:inline">shriramadarsh190@gmail.com</span>
                    <span className="md:hidden">Email Us</span>
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardContent className="p-4 md:pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Hours</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Mon - Sat<br />
                  9:00 AM - 5:00 PM<br />
                  <span className="text-[10px] md:text-xs">(Closed Sun & Holidays)</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gold" />
                Location Map
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden border border-border bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d78.0!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEyJzAwLjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Landmark:</strong> Near Sikandra, on the road to Panwari village, Agra
              </p>
              
              {/* Department Contacts */}
              <div className="mt-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Department Contacts</h3>
                <div className="space-y-3">
                  {departments.map((dept, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Building className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{dept.name}</p>
                        <p className="text-muted-foreground text-xs">{dept.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-gold" />
                Send us a Message
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is your inquiry about?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your query in detail..." 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Phone Numbers */}
      <section className="py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold">Quick Contact Numbers</h3>
            <p className="text-primary-foreground/70 text-xs md:text-sm mt-2">Call us directly for immediate assistance</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
            {contactNumbers.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.number}`}
                className="flex flex-col items-center gap-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 active:bg-primary-foreground/30 px-3 py-3 md:px-5 md:py-4 rounded-xl transition-colors text-center"
              >
                <Phone className="w-5 h-5 mb-1" />
                <span className="font-medium text-sm md:text-base">{contact.number}</span>
                <span className="text-[10px] md:text-xs text-primary-foreground/60">{contact.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;