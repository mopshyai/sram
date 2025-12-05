import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Search, Wifi, BookMarked } from "lucide-react";

const Library = () => {
  const libraryStats = [
    { icon: BookOpen, label: "Total Books", value: "15,000+" },
    { icon: BookMarked, label: "Journals & Magazines", value: "50+" },
    { icon: Users, label: "Seating Capacity", value: "100+" },
    { icon: Wifi, label: "Digital Access", value: "Available" },
  ];

  const sections = [
    "Arts & Humanities",
    "Science & Mathematics",
    "Commerce & Economics",
    "Law & Constitution",
    "Pharmacy & Medical",
    "Education & Teaching",
    "Reference Section",
    "Competitive Exams",
    "Newspapers & Periodicals",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Central Library
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              A treasure house of knowledge and learning resources
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {libraryStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About the Library</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm dark:prose-invert">
                  <p className="text-muted-foreground">
                    The Central Library of Shri Ram Adarsh Mahavidyalaya is a well-stocked repository of books, journals, and digital resources. Established with the aim of supporting academic excellence, the library provides a conducive environment for study and research.
                  </p>
                  <p className="text-muted-foreground">
                    Our collection includes textbooks, reference materials, competitive exam guides, newspapers, and periodicals covering all subjects offered by the college. The library is equipped with computer terminals for digital access and OPAC (Online Public Access Catalogue) for easy book searches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Library Sections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {sections.map((section, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Library Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Library card is mandatory for borrowing books</li>
                    <li>Maximum 2 books can be issued at a time for 14 days</li>
                    <li>Reference books cannot be issued</li>
                    <li>Maintain silence in the reading room</li>
                    <li>Mobile phones must be on silent mode</li>
                    <li>Fine of ₹2 per day for overdue books</li>
                    <li>Lost books must be replaced or paid for</li>
                    <li>Food and beverages are not allowed inside</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Library Timings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Search Catalogue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Search for books available in our library collection.
                  </p>
                  <Button className="w-full">Search Books</Button>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">New Arrivals</h4>
                  <p className="text-sm text-muted-foreground">
                    Check out the latest additions to our library collection including competitive exam guides and reference materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Library;
