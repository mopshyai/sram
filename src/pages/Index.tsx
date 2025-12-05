import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, Building, Phone } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Shri Ram Adarsh Mahavidyalaya
          </h1>
          <p className="text-xl text-white/80 mb-2">Panwari, Sikandra, Agra</p>
          <p className="text-lg text-gold font-medium mb-8">
            "Excellence in Education, Discipline, and Character"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary-dark">
              Admissions 2025-26
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "2000+", label: "Students" },
              { icon: BookOpen, value: "25+", label: "Programs" },
              { icon: Award, value: "15+", label: "Years Legacy" },
              { icon: Building, value: "5 Acre", label: "Campus" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border">
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-8">
            About Our Institution
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Affiliated to Dr. Bhimrao Ambedkar University, Agra, we offer quality education in 
            B.Ed, D.El.Ed, LLB, BA LLB, D.Pharma (BTE Code-1708), ITI, and UG/PG programs. 
            Our institution is committed to providing accessible education with NCC & NSS units.
          </p>
          <div className="flex justify-center">
            <Button variant="outline">Learn More About Us</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Phone className="w-5 h-5" />
            <span>9837320170, 9690704180, 7500478060</span>
          </div>
          <p>Email: shriramadarsh190@gmail.com</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
