import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Star, Users, BookOpen, Award, Globe } from "lucide-react";

const MissionVision = () => {
  const coreValues = [
    { icon: BookOpen, title: "Knowledge", description: "Pursuit of academic excellence and lifelong learning" },
    { icon: Heart, title: "Discipline", description: "Self-regulation, punctuality, and adherence to rules" },
    { icon: Users, title: "Service", description: "Commitment to community welfare and social responsibility" },
    { icon: Award, title: "Integrity", description: "Honesty, transparency, and ethical conduct" },
    { icon: Star, title: "Excellence", description: "Striving for the highest standards in all endeavors" },
    { icon: Globe, title: "Inclusivity", description: "Welcoming diversity and providing equal opportunities" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Mission & Vision
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guiding principles that shape our institution's journey towards excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-white">Our Vision</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To be a premier institution of higher learning that transforms lives through 
                  quality education, nurtures future leaders, and contributes to nation-building 
                  by producing competent, ethical, and socially responsible citizens.
                </p>
                <ul className="space-y-3">
                  {[
                    "Recognized center of academic excellence in the region",
                    "Leader in professional and vocational education",
                    "Hub for research and innovation",
                    "Model institution for inclusive education"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-white">Our Mission</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To provide accessible, affordable, and quality higher education to students 
                  from all backgrounds, fostering holistic development through academic rigor, 
                  value-based education, and practical skill development.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver quality education at affordable costs",
                    "Create an inclusive learning environment",
                    "Develop industry-ready graduates",
                    "Instill values of discipline and social responsibility"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-primary/5 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Motto</h2>
            <div className="bg-card border-2 border-gold/30 rounded-2xl p-8 md:p-12">
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                "ज्ञान, अनुशासन, सेवा"
              </p>
              <p className="text-2xl text-gold font-semibold mb-6">
                Knowledge, Discipline, Service
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These three pillars form the foundation of our educational philosophy, 
                guiding every student towards becoming a complete individual capable of 
                making meaningful contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The fundamental beliefs that guide our institution's culture and decision-making
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
              Strategic Goals
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Academic Excellence",
                  description: "Continuously improve curriculum, teaching methodologies, and learning outcomes to meet national and international standards."
                },
                {
                  number: "02",
                  title: "Infrastructure Development",
                  description: "Expand and modernize campus facilities including smart classrooms, advanced laboratories, and digital learning resources."
                },
                {
                  number: "03",
                  title: "Industry Partnerships",
                  description: "Establish strong ties with industries for internships, placements, and curriculum development aligned with market needs."
                },
                {
                  number: "04",
                  title: "Research & Innovation",
                  description: "Promote a culture of research and innovation among faculty and students through funded projects and collaborations."
                },
                {
                  number: "05",
                  title: "Social Outreach",
                  description: "Expand community service programs and make quality education accessible to underprivileged sections of society."
                }
              ].map((goal, idx) => (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 flex gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <span className="font-heading text-4xl font-bold text-gold/50">
                      {goal.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVision;
