import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, Library, Microscope, Monitor, Bus, Shield, 
  Droplets, Users, GraduationCap, Dumbbell, Wifi, Coffee,
  BookOpen, FlaskConical, Wrench, Camera
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      category: "Academic Infrastructure",
      items: [
        {
          name: "Spacious Classrooms",
          icon: Building,
          desc: "Well-ventilated, naturally lit classrooms with modern teaching aids and comfortable seating for effective learning.",
        },
        {
          name: "Central Library",
          icon: Library,
          desc: "Comprehensive library with 10,000+ books, journals, magazines, and digital resources. Reading room available.",
        },
        {
          name: "Computer Laboratory",
          icon: Monitor,
          desc: "State-of-the-art computer lab with high-speed internet, latest software, and individual workstations.",
        },
        {
          name: "Science Laboratories",
          icon: FlaskConical,
          desc: "Fully equipped Physics, Chemistry, and Biology labs for practical experiments and research work.",
        },
      ],
    },
    {
      category: "Professional Facilities",
      items: [
        {
          name: "D.Pharma Laboratory",
          icon: Microscope,
          desc: "Specialized pharmacy lab with modern equipment meeting BTE standards (Code-1708) for pharmaceutical training.",
        },
        {
          name: "ITI Workshop",
          icon: Wrench,
          desc: "Industrial training workshops with tools and machinery for hands-on technical skill development.",
        },
        {
          name: "Education Resource Centre",
          icon: GraduationCap,
          desc: "Dedicated facilities for B.Ed and D.El.Ed students including teaching aids and micro-teaching labs.",
        },
      ],
    },
    {
      category: "Student Amenities",
      items: [
        {
          name: "Free Bus Service",
          icon: Bus,
          desc: "Complimentary transportation for girl students covering surrounding villages and town areas.",
          highlight: true,
        },
        {
          name: "Playground & Sports",
          icon: Dumbbell,
          desc: "Large playground with facilities for cricket, volleyball, badminton, kabaddi, and athletics.",
        },
        {
          name: "Canteen",
          icon: Coffee,
          desc: "Hygienic canteen serving nutritious meals and refreshments at subsidized rates.",
        },
        {
          name: "Common Room",
          icon: Users,
          desc: "Separate common rooms for boys and girls with recreational facilities and rest areas.",
        },
      ],
    },
    {
      category: "Safety & Support",
      items: [
        {
          name: "CCTV Surveillance",
          icon: Camera,
          desc: "24/7 CCTV monitoring across campus for safety and security of students and staff.",
        },
        {
          name: "Campus Security",
          icon: Shield,
          desc: "Round-the-clock security personnel ensuring a safe and secure campus environment.",
        },
        {
          name: "Clean Drinking Water",
          icon: Droplets,
          desc: "RO purified drinking water available throughout the campus for students and staff.",
        },
        {
          name: "Wi-Fi Campus",
          icon: Wifi,
          desc: "High-speed wireless internet connectivity across the campus for digital learning.",
        },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Campus Facilities</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Modern infrastructure and comprehensive amenities supporting academic excellence and holistic development
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {[
              { label: "Campus Area", value: "5 Acres", icon: Building },
              { label: "Library Books", value: "10,000+", icon: BookOpen },
              { label: "Computer Stations", value: "50+", icon: Monitor },
              { label: "Laboratories", value: "6+", icon: Microscope },
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

      {/* Facilities Grid */}
      {facilities.map((category, catIdx) => (
        <section key={catIdx} className={`py-10 md:py-16 ${catIdx % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-6 md:mb-10">
              {category.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {category.items.map((facility, idx) => (
                <Card 
                  key={idx} 
                  className={`hover-lift ${facility.highlight ? 'border-gold border-2 bg-gold/5' : ''}`}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                      facility.highlight ? 'bg-gold/20' : 'bg-primary/10'
                    }`}>
                      <facility.icon className={`w-6 h-6 md:w-7 md:h-7 ${facility.highlight ? 'text-gold' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">
                      {facility.name}
                      {facility.highlight && (
                        <span className="ml-2 text-[10px] md:text-xs bg-gold text-gold-foreground px-1.5 md:px-2 py-0.5 rounded">
                          FREE
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{facility.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Special Programs */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Extra-Curricular Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "NCC Unit", desc: "National Cadet Corps for leadership and discipline training" },
              { name: "NSS Unit", desc: "National Service Scheme for community service activities" },
              { name: "Sports Programs", desc: "Regular sports events and inter-college competitions" },
            ].map((program, idx) => (
              <div key={idx} className="bg-primary-foreground/10 rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-gold mb-2">{program.name}</h3>
                <p className="text-primary-foreground/80 text-sm">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;