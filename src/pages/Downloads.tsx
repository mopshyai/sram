import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, ClipboardList, GraduationCap, Calendar } from "lucide-react";

const Downloads = () => {
  const downloadCategories = [
    {
      title: "Admission Forms",
      icon: ClipboardList,
      items: [
        { name: "UG Admission Form 2025-26", size: "245 KB", type: "PDF" },
        { name: "PG Admission Form 2025-26", size: "198 KB", type: "PDF" },
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
        { name: "B.A. Syllabus 2024-25", size: "1.2 MB", type: "PDF" },
        { name: "B.Sc. Syllabus 2024-25", size: "1.5 MB", type: "PDF" },
        { name: "B.Com. Syllabus 2024-25", size: "980 KB", type: "PDF" },
        { name: "M.A. Syllabus 2024-25", size: "1.1 MB", type: "PDF" },
        { name: "M.Sc. Syllabus 2024-25", size: "1.3 MB", type: "PDF" },
        { name: "B.Ed Syllabus", size: "890 KB", type: "PDF" },
        { name: "LLB Syllabus", size: "1.4 MB", type: "PDF" },
        { name: "D.Pharma Syllabus", size: "756 KB", type: "PDF" },
      ]
    },
    {
      title: "Prospectus",
      icon: GraduationCap,
      items: [
        { name: "College Prospectus 2025-26", size: "4.5 MB", type: "PDF" },
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
        { name: "Exam Schedule 2024-25", size: "156 KB", type: "PDF" },
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
        { name: "Fee Structure 2025-26", size: "134 KB", type: "PDF" },
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
              Download Center
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Access all official forms, syllabus, prospectus, and important documents
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {downloadCategories.map((category, idx) => (
              <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.type} • {item.size}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
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
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact our office for any specific documents or forms you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="bg-gold hover:bg-gold/90 text-primary-dark">
                Contact Office
              </Button>
              <Button variant="outline">
                Email: shriramadarsh190@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
