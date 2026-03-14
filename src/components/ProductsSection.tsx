import { Link } from "react-router-dom";
import { productsData } from "@/lib/products-data";

const products = Object.values(productsData);

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs tracking-wider uppercase mb-4">
            Our Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Advanced <span className="photon-gradient-text">Solar</span> Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Harness the power of the sun with our cutting-edge solar technologies and integrated energy systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(247,166,2,0.1)] hover:-translate-y-4 flex flex-col opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
            >
              <Link to={`/product-info/${product.id}`} className="aspect-[4/3] overflow-hidden relative block">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <div className="px-6 py-3 bg-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-[.2em] shadow-xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent">
                     Explore technology
                   </div>
                </div>
              </Link>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  {(product as any).technical && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
                      {(product as any).technical}
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-foreground mb-2 text-xl group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {product.overview}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link 
                    to={`/product/${product.id}`}
                    className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More 
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;




