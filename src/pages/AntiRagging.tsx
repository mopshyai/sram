import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Phone, Mail, FileText, Scale, Users, CheckCircle } from "lucide-react";

const AntiRagging = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Anti-Ragging Policy
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Creating a safe and respectful campus environment for all students
            </p>
          </div>
        </div>
      </section>

      {/* Zero Tolerance Banner */}
      <section className="py-8 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            <p className="text-lg font-semibold text-destructive">
              Shri Ram Adarsh Mahavidyalaya maintains ZERO TOLERANCE towards ragging in any form
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What is Ragging */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                What Constitutes Ragging?
              </h2>
              <p className="text-muted-foreground mb-4">
                As per UGC Regulations on Curbing the Menace of Ragging in Higher Educational 
                Institutions, 2009, ragging includes any of the following:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student",
                  "Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, psychological harm or to raise fear or apprehension thereof in any fresher or any other student",
                  "Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment",
                  "Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher",
                  "Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students",
                  "Any act of financial extortion or forceful expenditure burden put on a fresher or any other student",
                  "Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm",
                  "Any act or abuse by spoken words, emails, posts, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Punishments */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Punishments for Ragging
              </h2>
              <p className="text-muted-foreground mb-4">
                Students found guilty of ragging shall be liable to one or more of the following punishments:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cancellation of admission",
                  "Suspension from attending classes",
                  "Withholding/withdrawing scholarship/fellowship",
                  "Debarring from appearing in examinations",
                  "Withholding results",
                  "Debarring from representing institution",
                  "Suspension/expulsion from hostel",
                  "Rustication from institution",
                  "Expulsion and consequent debarring from admission",
                  "Fine up to Rs. 25,000/-",
                  "Collective punishment when ragging is by a group",
                  "FIR under relevant sections of IPC"
                ].map((punishment, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-sm font-bold text-destructive">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground text-sm">{punishment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anti-Ragging Committee */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Anti-Ragging Committee
              </h2>
              <p className="text-muted-foreground mb-6">
                The college has constituted an Anti-Ragging Committee as per UGC guidelines. 
                The committee is responsible for monitoring and overseeing anti-ragging measures.
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Committee Members:</h3>
                <div className="space-y-3">
                  {[
                    { role: "Chairman", name: "Principal" },
                    { role: "Member", name: "Senior Faculty Representative" },
                    { role: "Member", name: "Faculty Representative" },
                    { role: "Member", name: "Non-Teaching Staff Representative" },
                    { role: "Member", name: "Student Representative (Senior)" },
                    { role: "Member", name: "Parent Representative" },
                    { role: "Member", name: "Local Police Representative" }
                  ].map((member, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{member.role}</span>
                      <span className="font-medium text-foreground">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Undertaking */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Anti-Ragging Undertaking
              </h2>
              <p className="text-muted-foreground mb-6">
                As per UGC Regulations, every student and parent/guardian is required to submit 
                an anti-ragging undertaking at the time of admission. This undertaking must also 
                be submitted online at the UGC portal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" className="gap-2 bg-gold hover:bg-gold/90 text-primary-dark">
                  <FileText className="w-4 h-4" />
                  Download Undertaking Form
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer">
                    Submit Online at antiragging.in
                  </a>
                </Button>
              </div>
            </div>

            {/* Our Measures */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Our Preventive Measures
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Orientation programs for freshers",
                  "Senior-junior interaction sessions",
                  "CCTV surveillance across campus",
                  "Regular patrolling by security staff",
                  "Display of anti-ragging posters",
                  "Awareness programs and workshops",
                  "Mentorship system for new students",
                  "Anonymous complaint mechanism",
                  "Regular meetings of anti-ragging squad",
                  "Counseling services for victims"
                ].map((measure, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{measure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpline Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-center mb-8">
              Report Ragging - Helpline Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Phone className="w-10 h-10 mx-auto mb-3" />
                <p className="text-sm text-white/70 mb-2">UGC Helpline</p>
                <p className="text-xl font-bold">1800-180-5522</p>
                <p className="text-sm text-white/70">(Toll Free)</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Phone className="w-10 h-10 mx-auto mb-3" />
                <p className="text-sm text-white/70 mb-2">College Helpline</p>
                <p className="text-xl font-bold">9837320170</p>
                <p className="text-sm text-white/70">(24x7 Available)</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Mail className="w-10 h-10 mx-auto mb-3" />
                <p className="text-sm text-white/70 mb-2">Email</p>
                <p className="text-lg font-bold">shriramadarsh190@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AntiRagging;
