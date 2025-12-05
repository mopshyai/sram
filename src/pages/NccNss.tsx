import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, Heart, Users, Award, Target, Calendar, 
  CheckCircle, Star, Flag, HandHeart
} from "lucide-react";

const NccNss = () => {
  const nccBenefits = [
    "Leadership and discipline training",
    "Physical fitness and adventure activities",
    "Weapons training and drill",
    "Annual training camps",
    "Career opportunities in Armed Forces",
    "Bonus marks in government jobs",
    "Character certificate benefits",
    "Republic Day parade participation",
  ];

  const nssBenefits = [
    "Community service experience",
    "Social awareness and responsibility",
    "Leadership development",
    "Organizing skills",
    "Extra credits in academics",
    "Certificate from government",
    "Personality development",
    "Networking opportunities",
  ];

  const nccActivities = [
    { name: "Annual Training Camp", date: "December/January" },
    { name: "Republic Day Camp (RDC)", date: "January" },
    { name: "Combined Annual Training Camp (CATC)", date: "May/June" },
    { name: "NCC Day Celebration", date: "4th Sunday of November" },
    { name: "Independence Day Parade", date: "15th August" },
  ];

  const nssActivities = [
    { name: "Blood Donation Camp", date: "Quarterly" },
    { name: "Village Adoption Program", date: "Year-round" },
    { name: "Cleanliness Drive", date: "Monthly" },
    { name: "Tree Plantation", date: "July-August" },
    { name: "Special Camp", date: "7 Days Annually" },
    { name: "AIDS Awareness", date: "December" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">NCC & NSS</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Building leaders and responsible citizens through discipline, service, and character development
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "200+", label: "NCC Cadets" },
              { icon: Heart, value: "150+", label: "NSS Volunteers" },
              { icon: Award, value: "50+", label: "Achievements" },
              { icon: Calendar, value: "20+", label: "Annual Events" },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-4 md:pt-6">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto text-primary mb-2 md:mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary font-heading">{stat.value}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NCC Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                    <Shield className="w-8 h-8 text-navy-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      National Cadet Corps (NCC)
                    </h2>
                    <p className="text-gold font-medium">"Unity and Discipline"</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces. 
                  Our college NCC unit provides military training to young students, developing 
                  in them discipline, character, leadership, and the spirit of adventure. 
                  Cadets participate in various activities including parades, camps, and social service.
                </p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Benefits of Joining NCC:</h3>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {nccBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    NCC Activities & Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {nccActivities.map((activity, idx) => (
                      <li key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-2">
                          <Flag className="w-4 h-4 text-navy" />
                          <span className="text-foreground">{activity.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NSS Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <Card className="lg:order-2">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    NSS Activities & Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {nssActivities.map((activity, idx) => (
                      <li key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-2">
                          <HandHeart className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{activity.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      National Service Scheme (NSS)
                    </h2>
                    <p className="text-gold font-medium">"Not Me But You"</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The National Service Scheme (NSS) is a Central Sector Scheme aimed at developing 
                  the personality and character of student youth through voluntary community service. 
                  Our NSS unit engages students in various social service activities, helping them 
                  understand the community they work in and their relationship with it.
                </p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Benefits of Joining NSS:</h3>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {nssBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our NCC and NSS units have brought laurels to the institution through various achievements
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "Best Cadet Awards", desc: "Multiple cadets recognized at regional level" },
              { icon: Award, title: "Camp Participations", desc: "Regular participation in state and national camps" },
              { icon: Target, title: "Community Projects", desc: "Successfully completed village development projects" },
            ].map((achievement, idx) => (
              <Card key={idx} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <achievement.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Join NCC or NSS Today</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Enroll in our NCC or NSS units and develop leadership skills while serving the community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gold hover:bg-gold-light text-gold-foreground">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Coordinators</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NccNss;