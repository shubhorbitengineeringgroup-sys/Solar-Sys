import { useParams, Link } from "react-router-dom";
import { productsData } from "@/lib/products-data";
import { MoveLeft, Lightbulb, Share2, Info, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductEducation = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg">The knowledge base entry you are looking for does not exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider hover:gap-3 transition-all">
            <MoveLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 sm:pt-20 border-t border-border/50">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-24">
          <Link to="/#products" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-6 sm:mb-12 hover:gap-3 transition-all group text-xs sm:text-sm py-2">
            <MoveLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back to Products
          </Link>

          <div className="mb-12 sm:mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 border-b border-border/50 pb-6 sm:pb-8 gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-black mb-3 sm:mb-4">Available <span className="photon-gradient-text">Types</span> & Varieties</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  There are several specialized versions of {product.title.toLowerCase()}, each designed for specific performance goals and environments.
                </p>
              </div>
              <div className="hidden lg:block">
                 <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3">
                    <img src={product.image} className="w-full h-full object-cover" alt="" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {product.types.map((type, index) => (
                <div key={index} className="group p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-card border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    {type.name}
                    <div className="h-0.5 w-8 sm:w-10 bg-accent/30 group-hover:w-16 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-6 sm:p-12 lg:p-20 rounded-2xl sm:rounded-[3rem] bg-foreground text-background overflow-hidden">
             <Share2 className="absolute -right-10 -bottom-10 w-48 sm:w-64 h-48 sm:h-64 opacity-5 text-accent rotate-12 pointer-events-none" />
             <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6">Need a Technical Deep Dive?</h2>
                <p className="text-background/70 text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">
                  Now that you understand the types and core technology, explore the precise technical specifications, power ratings, and implementation details for our premium range.
                </p>
                <Link 
                  to={`/product/${product.id}`}
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-white rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-all shadow-xl shadow-accent/20"
                >
                  View Technical Specs <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
             </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductEducation;
