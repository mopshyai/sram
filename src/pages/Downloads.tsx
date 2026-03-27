import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, ClipboardList, GraduationCap, Calendar } from "lucide-react";

const Downloads = () => {
  const downloadCategories = [
    {
      title: "Admission Forms",
      icon: ClipboardList,
      items: [
        { name: "UG Admission Form 2026-27", size: "245 KB", type: "PDF" },
        { name: "PG Admission Form 2026-27", size: "198 KB", type: "PDF" },
        { name: "B.Ed Application Form", size: "312 KB", type: "PDF" },
        { name: "D.El.Ed Application Form", size: "287 KB", type: "PDF" },
        { name: "LLB/BA LLB Application Form", size: "256 KB", type: "PDF" },
        { name: "D.Pharma Application Form", size: "278 KB", type: "PDF" },
        { name: "ITI Admission Form", size: "189 KB", type: "PDF" },
      ]
    },
    {
      title: "Syllabus",
      icon: BookOpen,
      items: [
        { name: "B.A. Syllabus 2026-27", size: "1.2 MB", type: "PDF" },
        { name: "B.Sc. Syllabus 2026-27", size: "1.5 MB", type: "PDF" },
        { name: "B.Com. Syllabus 2026-27", size: "980 KB", type: "PDF" },
        { name: "M.A. Syllabus 2026-27", size: "1.1 MB", type: "PDF" },
        { name: "M.Sc. Syllabus 2026-27", size: "1.3 MB", type: "PDF" },
        { name: "B.Ed Syllabus", size: "890 KB", type: "PDF" },
        { name: "LLB Syllabus", size: "1.4 MB", type: "PDF" },
        { name: "D.Pharma Syllabus", size: "756 KB", type: "PDF" },
      ]
    },
    {
      title: "Prospectus",
      icon: GraduationCap,
      items: [
        { name: "College Prospectus 2026-27", size: "4.5 MB", type: "PDF" },
        { name: "B.Ed Prospectus", size: "2.1 MB", type: "PDF" },
        { name: "D.El.Ed Prospectus", size: "1.8 MB", type: "PDF" },
        { name: "Law Faculty Prospectus", size: "2.3 MB", type: "PDF" },
        { name: "D.Pharma Prospectus", size: "1.9 MB", type: "PDF" },
        { name: "ITI Prospectus", size: "1.5 MB", type: "PDF" },
      ]
    },
    {
      title: "Examination",
      icon: Calendar,
      items: [
        { name: "Exam Schedule 2026-27", size: "156 KB", type: "PDF" },
        { name: "Exam Form Guidelines", size: "89 KB", type: "PDF" },
        { name: "Previous Year Papers - Arts", size: "3.2 MB", type: "ZIP" },
        { name: "Previous Year Papers - Science", size: "4.1 MB", type: "ZIP" },
        { name: "Previous Year Papers - Commerce", size: "2.8 MB", type: "ZIP" },
        { name: "Internal Assessment Guidelines", size: "124 KB", type: "PDF" },
      ]
    },
    {
      title: "Official Documents",
      icon: FileText,
      items: [
        { name: "Anti-Ragging Undertaking", size: "78 KB", type: "PDF" },
        { name: "Character Certificate Format", size: "45 KB", type: "PDF" },
        { name: "Migration Certificate Form", size: "52 KB", type: "PDF" },
        { name: "TC Application Form", size: "48 KB", type: "PDF" },
        { name: "Scholarship Application Form", size: "98 KB", type: "PDF" },
        { name: "Fee Structure 2026-27", size: "134 KB", type: "PDF" },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-navy overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Download Center
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
              Access all official forms, syllabus, prospectus, and important documents
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-12">
            {downloadCategories.map((category, idx) => (
              <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="bg-card border border-border rounded-lg p-3 md:p-4 hover:shadow-lg hover:border-primary/30 active:scale-[0.99] transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                              {item.type} • {item.size}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10 shrink-0 h-9 w-9 p-0">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-xl p-5 md:p-8 text-center">
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-4">
              Contact our office for any specific documents or forms you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button variant="default" className="bg-gold hover:bg-gold/90 text-primary-dark">
                Contact Office
              </Button>
              <Button variant="outline" className="text-xs md:text-sm">
                shriramadarsh190@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
