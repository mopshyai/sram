import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Building, Users, Trophy, Music, GraduationCap, Calendar } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: Building },
    { id: "campus", name: "Campus", icon: Building },
    { id: "events", name: "Events", icon: Calendar },
    { id: "sports", name: "Sports", icon: Trophy },
    { id: "cultural", name: "Cultural", icon: Music },
    { id: "academics", name: "Academics", icon: GraduationCap },
    { id: "ncc-nss", name: "NCC/NSS", icon: Users },
  ];

  // Placeholder images - in production these would be actual campus photos
  const images = [
    { id: 1, category: "campus", title: "College Main Building", desc: "Front view of the main academic block" },
    { id: 2, category: "campus", title: "Library", desc: "Central library with reading hall" },
    { id: 3, category: "campus", title: "Computer Lab", desc: "State-of-the-art computer laboratory" },
    { id: 4, category: "campus", title: "Science Labs", desc: "Chemistry laboratory facilities" },
    { id: 5, category: "events", title: "Annual Function", desc: "College annual day celebration" },
    { id: 6, category: "events", title: "Convocation Ceremony", desc: "Graduation ceremony 2024" },
    { id: 7, category: "sports", title: "Sports Day", desc: "Annual sports competition" },
    { id: 8, category: "sports", title: "Cricket Tournament", desc: "Inter-college cricket match" },
    { id: 9, category: "cultural", title: "Cultural Program", desc: "Students performing traditional dance" },
    { id: 10, category: "cultural", title: "Music Competition", desc: "Annual music fest" },
    { id: 11, category: "academics", title: "Seminar Hall", desc: "Guest lecture in progress" },
    { id: 12, category: "academics", title: "Classroom Session", desc: "Interactive teaching session" },
    { id: 13, category: "ncc-nss", title: "NCC Parade", desc: "Independence Day parade" },
    { id: 14, category: "ncc-nss", title: "NSS Camp", desc: "Village cleanliness drive" },
    { id: 15, category: "campus", title: "Playground", desc: "Sports ground and field" },
    { id: 16, category: "events", title: "Guest Visit", desc: "Distinguished visitors at campus" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (direction === 'prev') {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[newIndex].id);
    } else {
      const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[newIndex].id);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Glimpses of our vibrant campus life, events, and memorable moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-primary" : ""}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover-lift"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Placeholder colored background - replace with actual images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  image.category === 'campus' ? 'from-primary/30 to-navy/30' :
                  image.category === 'events' ? 'from-gold/30 to-primary/30' :
                  image.category === 'sports' ? 'from-green-500/30 to-navy/30' :
                  image.category === 'cultural' ? 'from-pink-500/30 to-gold/30' :
                  image.category === 'academics' ? 'from-blue-500/30 to-primary/30' :
                  'from-navy/30 to-gold/30'
                } flex items-center justify-center`}>
                  <Building className="w-16 h-16 text-foreground/20" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    <p className="text-white/70 text-xs">{image.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Building className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <div className="relative aspect-video flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white/50">
                <Building className="w-24 h-24 mx-auto mb-4 opacity-30" />
                <h3 className="text-xl font-semibold text-white">{selectedImageData?.title}</h3>
                <p className="text-white/60">{selectedImageData?.desc}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Notice */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            <strong>Note:</strong> This gallery displays placeholder images. Actual campus photographs will be uploaded soon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;