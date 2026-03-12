import { useParams, Link } from "react-router-dom";
import { productsData } from "@/lib/products-data";
import { MoveLeft, CheckCircle2, Zap, Settings, ShieldCheck, Globe } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg">The product you are looking for does not exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider hover:gap-3 transition-all">
            <MoveLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <Link to="/#products" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-12 hover:gap-3 transition-all group">
          <MoveLeft className="w-5 h-5" /> Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs tracking-wider uppercase mb-6 self-start">
              Premium Solar Technology
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-foreground leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 border-l-4 border-accent/30 pl-6 italic">
              {product.overview}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10 transition-colors hover:bg-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Specs Table */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight">Technical Specifications</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(product.specs).map(([label, value], index) => (
                    <tr key={label} className={index % 2 === 0 ? "bg-accent/5" : "bg-transparent"}>
                      <td className="px-6 py-4 font-bold text-accent text-sm uppercase tracking-wide border-b border-border/20 w-1/3">
                        {label}
                      </td>
                      <td className="px-6 py-4 text-foreground text-sm border-b border-border/20">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications & Benefits */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-accent" />
                <h2 className="text-xl font-heading font-bold uppercase tracking-tight">Applications</h2>
              </div>
              <ul className="space-y-3">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-foreground text-background relative overflow-hidden group">
              <Zap className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 text-accent group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  <h2 className="text-xl font-heading font-bold uppercase tracking-tight">Key Benefits</h2>
                </div>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm font-medium leading-relaxed flex gap-3 italic">
                      <span className="text-accent">—</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
