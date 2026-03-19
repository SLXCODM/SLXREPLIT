import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, ExternalLink, Package, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useMemo } from "react";
import { apiRequest } from "@/lib/queryClient";

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
    subtitle: language === "pt" ? "Os melhores equipamentos e acessórios para o seu setup" : "The best gear and accessories for your setup",
    buyNow: language === "pt" ? "Comprar Agora" : "Buy Now",
    all: language === "pt" ? "Todos" : "All",
    loading: language === "pt" ? "Carregando produtos..." : "Loading products...",
    noProducts: language === "pt" ? "Nenhum produto encontrado" : "No products found"
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20 pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center text-balance">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-red-600 hover:bg-red-700" : "border-zinc-800 text-zinc-400"}
            >
              {t.all}
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "bg-red-600 hover:bg-red-700" : "border-zinc-800 text-zinc-400"}
              >
                {cat}
              </Button>
            ))}
          </div>
        )}

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <Card key={i} className="bg-zinc-900/50 border-zinc-800">
                <CardHeader className="p-0">
                  <Skeleton className="h-48 w-full rounded-t-lg bg-zinc-800" />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <Skeleton className="h-6 w-3/4 bg-zinc-800" />
                  <Skeleton className="h-4 w-full bg-zinc-800" />
                  <Skeleton className="h-4 w-1/2 bg-zinc-800" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-all duration-300 group overflow-hidden flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-zinc-800">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Package className="w-12 h-12 text-zinc-700" />
                      </div>
                    )}
                    {product.featured && (
                      <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-600">
                        <Star className="w-3 h-3 mr-1 fill-white" /> Featured
                      </Badge>
                    )}
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-zinc-700 text-xs text-zinc-300">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-4 pb-0">
                    <h3 className="text-lg font-bold line-clamp-1 group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                  </CardHeader>

                  <CardContent className="p-4 flex-1">
                    <p className="text-zinc-400 text-sm line-clamp-3 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-black text-white">
                        R$ {(parseInt(product.price) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold gap-2 btn-minimal"
                      onClick={() => {
                        const baseUrl = "https://www.mercadolivre.com.br"; // Default or track click
                        window.open(product.stripeProductId || baseUrl, "_blank");
                      }}
                    >
                      {t.buyNow}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/20 rounded-2xl border border-dashed border-zinc-800">
            <Package className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500 text-lg">{t.noProducts}</p>
          </div>
        )}
      </div>
    </div>
  );
}
