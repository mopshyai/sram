import Layout from "@/components/layout/Layout";
import { BookOpen, Users, Clock, Shirt, Ban, Heart, Award, Shield } from "lucide-react";

const CodeOfConduct = () => {
  const conductSections = [
    {
      icon: BookOpen,
      title: "Academic Conduct",
      rules: [
        "Attend all classes regularly and punctually",
        "Complete assignments and submit them on time",
        "Maintain academic integrity - no plagiarism or cheating",
        "Participate actively in classroom discussions",
        "Respect teachers and follow their instructions",
        "Maintain silence in library and reading areas",
        "Use laboratory equipment responsibly",
        "Prepare thoroughly for examinations"
      ]
    },
    {
      icon: Shirt,
      title: "Dress Code",
      rules: [
        "Wear prescribed uniform on all working days",
        "Maintain neat and clean appearance",
        "ID card must be worn at all times on campus",
        "Avoid flashy jewelry and heavy makeup",
        "Sports uniform only during sports activities",
        "Formal dress for official events and functions",
        "Traditional attire allowed on cultural days",
        "Footwear must be appropriate and clean"
      ]
    },
    {
      icon: Clock,
      title: "Attendance & Timing",
      rules: [
        "Minimum 75% attendance is mandatory",
        "College timings: 8:00 AM to 4:00 PM",
        "Late arrivals must report to the office",
        "Leave applications must be submitted in advance",
        "Medical certificates required for sick leave",
        "Attendance will be marked within first 10 minutes",
        "No leaving campus during college hours without permission",
        "Parents will be informed about irregular attendance"
      ]
    },
    {
      icon: Users,
      title: "Campus Behavior",
      rules: [
        "Treat all staff and fellow students with respect",
        "Maintain discipline in corridors and common areas",
        "No loitering in unauthorized areas",
        "Keep the campus clean - use dustbins",
        "Queue for canteen and other services",
        "No public display of affection",
        "Report any suspicious activity to authorities",
        "Participate in cleanliness drives and NSS activities"
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      rules: [
        "Ragging in any form is strictly prohibited",
        "Smoking, alcohol, and drugs are banned",
        "Possession of weapons is prohibited",
        "No political activities on campus",
        "Gambling is strictly prohibited",
        "No defacing of college property",
        "Unauthorized use of mobile phones in class",
        "No spreading of rumors or fake news"
      ]
    },
    {
      icon: Shield,
      title: "Digital & Cyber Conduct",
      rules: [
        "Responsible use of internet facilities",
        "No accessing inappropriate websites",
        "No cyberbullying or online harassment",
        "Protect privacy of others - no unauthorized photos",
        "No sharing of exam materials online",
        "Respectful communication on social media",
        "Report cyber incidents to IT cell",
        "Use official email for academic communications"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Code of Conduct
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guidelines for maintaining discipline and creating a conducive learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Preamble */}
      <section className="py-12 bg-gold/10 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Shri Ram Adarsh Mahavidyalaya, we believe that discipline is the foundation of 
              success. This Code of Conduct is designed to create a safe, respectful, and 
              productive academic environment where every student can thrive. By joining our 
              institution, students agree to uphold these standards and contribute to our 
              community's values of Knowledge, Discipline, and Service.
            </p>
          </div>
        </div>
      </section>

      {/* Conduct Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {conductSections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary/10 to-navy/10 p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIdx) => (
                      <li key={ruleIdx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                          {ruleIdx + 1}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplinary Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
              Disciplinary Actions
            </h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground mb-6">
                Violation of the Code of Conduct may result in the following disciplinary actions, 
                depending on the severity of the offense:
              </p>
              <div className="space-y-4">
                {[
                  { level: "Level 1 - Minor", actions: "Verbal warning, written apology, counseling", color: "bg-yellow-500" },
                  { level: "Level 2 - Moderate", actions: "Written warning to parents, detention, extra duties", color: "bg-orange-500" },
                  { level: "Level 3 - Serious", actions: "Suspension, fine, debarring from activities", color: "bg-red-500" },
                  { level: "Level 4 - Severe", actions: "Rustication, expulsion, legal action if applicable", color: "bg-red-700" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.level}</h4>
                      <p className="text-sm text-muted-foreground">{item.actions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Recognition for Good Conduct
            </h2>
            <p className="text-muted-foreground mb-8">
              Students who consistently demonstrate exemplary conduct will be recognized through:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Best Student Award",
                "Character Certificate with Distinction",
                "Priority in Recommendations"
              ].map((item, idx) => (
                <div key={idx} className="bg-gold/10 border border-gold/30 rounded-xl p-6">
                  <p className="font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CodeOfConduct;
