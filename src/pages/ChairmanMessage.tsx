import Layout from "@/components/layout/Layout";
import { Quote } from "lucide-react";

const ChairmanMessage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Chairman's Message
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Vision and commitment from our founding chairman
            </p>
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Chairman Photo */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl p-2">
                    <div className="bg-card rounded-xl overflow-hidden">
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-navy/10 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <span className="text-4xl font-heading font-bold text-primary">CYS</span>
                          </div>
                          <p className="text-muted-foreground text-sm">Chairman's Photograph</p>
                        </div>
                      </div>
                      <div className="p-6 text-center border-t border-border">
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          Chaudhary Yashpal Singh
                        </h3>
                        <p className="text-primary font-medium">Chairman</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Shri Ram Adarsh Mahavidyalaya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="relative">
                  <Quote className="w-16 h-16 text-gold/30 absolute -top-4 -left-4" />
                  <div className="bg-card border border-border rounded-xl p-8 relative">
                    <p className="text-lg text-foreground leading-relaxed italic">
                      "Education is the most powerful weapon which you can use to change the world. 
                      At Shri Ram Adarsh Mahavidyalaya, we believe in nurturing not just scholars, 
                      but responsible citizens who will lead our nation towards progress and prosperity."
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Dear Students, Parents, and Well-wishers,
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    It gives me immense pleasure to welcome you to Shri Ram Adarsh Mahavidyalaya, 
                    Panwari, Sikandra, Agra – an institution committed to academic excellence, 
                    character building, and holistic development of every student who walks through our gates.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    When we established this institution, our vision was clear – to provide quality 
                    higher education to students from rural and urban backgrounds, irrespective of 
                    their economic status. Today, I am proud to say that we have stayed true to that 
                    vision, offering diverse programs ranging from Arts and Science to Professional 
                    courses like B.Ed, D.El.Ed, Law, D.Pharma, and ITI.
                  </p>

                  <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">
                    Our Commitment to Inclusive Education
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We believe that no deserving student should be denied education due to financial 
                    constraints. Our institution provides free education to students who have lost 
                    their parents, and we offer various scholarships and fee concessions to support 
                    meritorious students from economically weaker sections.
                  </p>

                  <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">
                    Vision for the Future
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Looking ahead, our goals are ambitious yet achievable:
                  </p>
                  
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <span>Achieving NAAC accreditation with excellence grade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <span>Expanding our Law and Professional programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <span>Establishing skill development and vocational training centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <span>Creating industry-academia partnerships for better placements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <span>Developing digital infrastructure for modern learning</span>
                    </li>
                  </ul>

                  <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">
                    Message to Students
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To our dear students – remember that you are the architects of your own destiny. 
                    Use your time here wisely, engage in academics with dedication, participate in 
                    co-curricular activities, and develop the values of discipline, integrity, and 
                    service. The knowledge and skills you acquire here will be your greatest assets 
                    in life.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our dedicated faculty, state-of-the-art facilities, and nurturing environment 
                    are all designed to help you achieve your dreams. Take full advantage of every 
                    opportunity, and remember – success comes to those who work hard and never give up.
                  </p>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-foreground font-medium mb-2">With warm regards and best wishes,</p>
                    <p className="font-heading text-xl font-bold text-primary">Chaudhary Yashpal Singh</p>
                    <p className="text-muted-foreground">Chairman</p>
                    <p className="text-sm text-muted-foreground">Shri Ram Adarsh Mahavidyalaya, Panwari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Chairman's Vision Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Quality Education",
                description: "Providing world-class education accessible to all sections of society, with focus on both theoretical knowledge and practical skills."
              },
              {
                title: "Character Building",
                description: "Nurturing students with strong moral values, discipline, and sense of responsibility towards society and nation."
              },
              {
                title: "Inclusive Growth",
                description: "Ensuring that no deserving student is left behind due to economic constraints, with special support for underprivileged students."
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-bold text-gold">{idx + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChairmanMessage;
