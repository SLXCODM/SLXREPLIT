import { ShoppingCart, ChevronRight, Mouse, Headset, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SetupCarousel() {
  const { language } = useLanguage();
  const affiliateLink = "https://meli.la/1w2ZJTY";

  const setupItems = [
    { 
      id: 1, 
      name: "Mouse Gamer", 
      icon: Mouse, 
      desc: language === 'pt' ? "Precisão cirúrgica para FPS" : "Surgical precision for FPS",
      link: affiliateLink 
    },
    { 
      id: 2, 
      name: "Smartphone PRO", 
      icon: Smartphone, 
      desc: language === 'pt' ? "Alta performance no CODM" : "High performance in CODM",
      link: affiliateLink 
    },
    { 
      id: 3, 
      name: "Headset Tático", 
      icon: Headset, 
      desc: language === 'pt' ? "Áudio imersivo e limpo" : "Immersive and clean audio",
      link: affiliateLink 
    },
    { 
      id: 4, 
      name: "Monitor Ultrawide", 
      icon: Monitor, 
      desc: language === 'pt' ? "Visão máxima de jogo" : "Maximum game vision",
      link: affiliateLink 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-border/30 mt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}>
            {language === 'pt' ? 'Meu Setup' : 'My Setup'}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {language === 'pt' ? 'Equipamentos que eu uso e recomendo para alta performance.' : 'Gear I use and recommend for high performance.'}
          </p>
        </div>
        <Button variant="ghost" asChild className="hidden md:flex hover:bg-white/5 text-muted-foreground hover:text-primary">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            {language === 'pt' ? 'Ver Coleção no Mercado Livre' : 'View Full Collection'} <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>

      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {setupItems.map((item) => (
          <a 
            key={item.id} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[240px] md:min-w-[280px] snap-start bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">{item.desc}</p>
            <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-medium">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Ver Produto' : 'View Product'}
            </Button>
          </a>
        ))}
      </div>
      
      {/* Mobile only "View All" button */}
      <Button variant="outline" asChild className="w-full md:hidden mt-4 border-border/50 text-muted-foreground">
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
          {language === 'pt' ? 'Coleção Completa' : 'Full Collection'} <ChevronRight className="ml-2 w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}
