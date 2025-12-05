import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, Target, Eye, Heart, Award, Users, 
  BookOpen, Shield, ChevronRight 
} from "lucide-react";

const About = () => {
  const values = [
    { icon: BookOpen, title: "Academic Excellence", desc: "Commitment to highest standards of education and learning" },
    { icon: Heart, title: "Character Building", desc: "Fostering moral values and ethical conduct" },
    { icon: Users, title: "Inclusive Education", desc: "Quality education accessible to all sections of society" },
    { icon: Shield, title: "Discipline", desc: "Maintaining discipline and decorum in all activities" },
  ];

  const milestones = [
    { year: "Est.", title: "Foundation", desc: "Institution established with a vision for rural education" },
    { year: "2010", title: "DBRAU Affiliation", desc: "Affiliated to Dr. Bhimrao Ambedkar University, Agra" },
    { year: "2015", title: "Program Expansion", desc: "Added Law, Pharmacy, and ITI programs" },
    { year: "2020", title: "NAAC Accreditation", desc: "Received NAAC accreditation for quality education" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Our Institution</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A premier educational institution dedicated to academic excellence and character development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">The College</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong className="text-foreground">Shri Ram Adarsh Mahavidyalaya</strong>, located in Panwari, 
                Sikandra, Agra, stands as a beacon of quality higher education in the region. Affiliated to 
                Dr. Bhimrao Ambedkar University, Agra, our institution is committed to providing accessible, 
                quality education to students from both rural and urban backgrounds.
              </p>
              <p className="mb-4">
                Our comprehensive academic offerings include B.Ed, D.El.Ed (BTC), LLB, BA LLB, D.Pharma 
                (BTE Lucknow Code-1708), ITI, and various UG/PG programs in Arts, Science, and Commerce. 
                With a sprawling 5-acre campus equipped with modern facilities, we provide an ideal 
                environment for holistic learning and development.
              </p>
              <p>
                Under the visionary leadership of <strong className="text-foreground">Chaudhary Yashpal Singh</strong> (Chairman), 
                we continue to uphold our commitment to excellence in education, discipline, and character. 
                Our institution proudly offers <strong className="text-primary">free education to students without parents</strong>, 
                reflecting our dedication to inclusive and accessible education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our educational mission and institutional culture
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide quality higher education that is accessible to all sections of society, 
                  fostering academic excellence, moral values, and professional competence to prepare 
                  students for meaningful contributions to society.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-gold">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-gold" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To emerge as a center of excellence in higher education, recognized for producing 
                  graduates who are knowledgeable, skilled, and committed to the betterment of society 
                  and nation.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/mission-vision">
                Read Full Mission & Vision
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our pursuit of educational excellence
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center gap-6 mb-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shrink-0 z-10">
                    {milestone.year}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <h3 className="font-heading text-lg font-bold text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Meet Our Leadership</h3>
          <p className="text-primary-foreground/80 mb-6">
            Learn about our visionary chairman and institutional leadership
          </p>
          <Button asChild className="bg-gold hover:bg-gold-light text-gold-foreground">
            <Link to="/chairman-message">Chairman's Message</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;