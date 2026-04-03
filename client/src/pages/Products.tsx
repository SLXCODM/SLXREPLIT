import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Package, Star, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useMemo } from "react";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

export default function Products() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/products");
      return res.json();
    }
  });

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return Array.from(cats);
  }, [products]);

  const filteredProducts = useMemo(() => {
    return selectedCategory 
      ? products.filter(p => p.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const t = {
    title: language === "pt" ? "Produtos Recomendados" : "Recommended Products",
    subtitle: language === "pt" ? "Equipamentos que eu uso e recomendo para garantir a melhor performance nas partidas." : "Gear I use and recommend to ensure the best performance in matches.",
    buyNow: language === "pt" ? "Comprar" : "Buy",
    all: language === "pt" ? "Todos" : "All",
    loading: language === "pt" ? "Carregando produtos..." : "Loading products...",
    noProducts: language === "pt" ? "Ainda não há produtos cadastrados." : "No products added yet."
  };

  return (
    <div className="min-h-screen bg-black text-white pb-24 pt-6 md:pt-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors gap-2 px-0 font-bold group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {language === 'pt' ? 'Voltar para Início' : 'Back to Home'}
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-16 text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Categories Filter */}
        <AnimatePresence>
          {categories.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={`rounded-xl px-6 font-bold transition-all ${
                  selectedCategory === null 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-primary bg-card/20"
                }`}
              >
                {t.all}
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-6 font-bold transition-all ${
                    selectedCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-primary bg-card/20"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* AdSense Unit */}
        <div className="mb-12">
          <AdSenseUnit slot="8830689235" format="auto" />
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <Card key={i} className="bg-card/40 border-border/40 rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="aspect-[4/3] w-full bg-zinc-800 animate-pulse" />
                <div className="p-5 space-y-4">
                  <Skeleton className="h-6 w-3/4 bg-zinc-800" />
                  <Skeleton className="h-4 w-full bg-zinc-800" />
                  <Skeleton className="h-8 w-full bg-zinc-800" />
                </div>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-card/40 rounded-3xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm relative">
                  
                  {/* Image Container - Matching Carousel Style */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-white">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={product.imageUrl || (product as any).image_url || "/placeholder-product.png"} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Badges */}
                    {product.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg shadow-primary/20 border-none px-3 py-1 font-black">
                        <Star className="w-3 h-3 mr-1 fill-white" /> FEAT
                      </Badge>
                    )}
                    <Badge variant="outline" className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border-white/10 text-[10px] text-white/80 py-0.5 px-2 uppercase tracking-widest font-bold">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Content - Matching Carousel Style */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-base font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300 min-h-[48px]">
                      {product.name}
                    </h3>
                    
                    <p className="text-2xl font-black text-primary mb-3">
                      R$ {(parseInt(product.price) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    
                    <p className="text-[11px] text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all font-black rounded-xl py-6 shadow-sm shadow-primary/10 text-sm uppercase tracking-wider"
                      onClick={() => {
                        const url = product.stripeProductId || "https://www.mercadolivre.com.br";
                        window.open(url, "_blank");
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {t.buyNow}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-card/20 rounded-[2.5rem] border-2 border-dashed border-primary/10"
          >
            <Package className="w-20 h-20 text-primary/10 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-muted-foreground">{t.noProducts}</h3>
            <Link href="/">
              <Button variant="link" className="text-primary mt-4 font-bold text-lg">
                Voltar para o Início
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom AdSense Unit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <AdSenseUnit slot="5495845816" format="fluid" layout="in-article" />
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
