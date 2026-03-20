import { ShoppingCart, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";

export default function SetupCarousel() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainCollectionLink = "https://meli.la/1w2ZJTY";

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const setupItems = [
    { 
      id: 1, 
      name: "Luva De Dedo Gamer Flydigi P1 Tecido Supercondutor", 
      price: "R$ 79",
      image: "https://http2.mlstatic.com/D_NQ_NP_685175-MLB54866724360_042023-O.webp",
      desc: language === 'pt' ? "Fibra de prata supercondutora, ultra-fina e anti-suor para jogos." : "Superconductive silver fiber, ultra-thin and anti-sweat for gaming.",
      link: "https://meli.la/2wg3FfZ" 
    },
    { 
      id: 2, 
      name: "Óculos Anti Luz Azul Descanso Gamer", 
      price: "R$ 87,20",
      image: "https://http2.mlstatic.com/D_NQ_NP_795610-MLB95098009738_102025-O.webp",
      desc: language === 'pt' ? "Filtro Blue Ray Blocker anti-fadiga para proteção ocular." : "Blue Ray Blocker anti-fatigue filter for eye protection.",
      link: "https://meli.la/2wwafwZ" 
    },
    { 
      id: 3, 
      name: "Webcam Obsbot Meet SE Grey 1080p 100fps", 
      price: "R$ 799",
      image: "https://http2.mlstatic.com/D_NQ_NP_864119-MLA95240406598_102025-O.webp",
      desc: language === 'pt' ? "Resolução 1080p com enquadramento automático por IA e foco rápido." : "1080p resolution with AI auto-framing and fast focus.",
      link: "https://www.mercadolivre.com.br/p/MLB47995865?pdp_filters=item_id:MLB5828994448#origin=share&sid=share&wid=MLB5828994448&action=copy" 
    },
    { 
      id: 4, 
      name: "Placa De Captura Ezcap 321 4k / 1080p 120 Fps", 
      price: "R$ 498,49",
      image: "https://http2.mlstatic.com/D_NQ_NP_931837-MLB70708269930_072023-O.webp",
      desc: language === 'pt' ? "Captura 4K ou 1080p a 120fps com interface USB 3.0." : "4K or 1080p capture at 120fps with USB 3.0 interface.",
      link: "https://meli.la/1UsQBPH" 
    },
    { 
      id: 5, 
      name: "Hand Grip Ante Braço Punho Ajuste Até 60 Kg", 
      price: "R$ 19",
      image: "https://http2.mlstatic.com/D_NQ_NP_667242-MLA100080029891_122025-O.webp",
      desc: language === 'pt' ? "Resistência ajustável até 60kg com contador integrado." : "Adjustable resistance up to 60kg with integrated counter.",
      link: "https://meli.la/1dYcX1a" 
    },
    { 
      id: 6, 
      name: "Cabo Usb C Para Hdmi 2.1 Ugreen 8k @60hz", 
      price: "R$ 206,51",
      image: "https://http2.mlstatic.com/D_NQ_NP_691216-CBT80660121394_112024-O.webp",
      desc: language === 'pt' ? "Suporte a 8K@60Hz e 4K@240Hz para alta performance." : "Support for 8K@60Hz and 4K@240Hz for high performance.",
      link: "https://meli.la/2DHk6ke" 
    },
    { 
      id: 7, 
      name: "Tablet Gamer Redmagic Astra 24G+1TB OLED", 
      price: "R$ 7.999,00",
      image: "https://http2.mlstatic.com/D_NQ_NP_602131-MLB82622359570_022025-O.webp",
      desc: language === 'pt' ? "Tablet gamer premium com Snapdragon 8 Elite e 24GB RAM." : "Premium gaming tablet with Snapdragon 8 Elite and 24GB RAM.",
      link: "https://meli.la/1guZEsS" 
    },
    { 
      id: 8, 
      name: "Capa Giopuey Para Tablet Redmagic Astra", 
      price: "R$ 38,48",
      image: "https://http2.mlstatic.com/D_NQ_NP_605553-MLB74070743621_012024-O.webp",
      desc: language === 'pt' ? "Capa protetora em TPU transparente de alta resistência." : "High-resistance transparent TPU protective case.",
      link: "https://meli.la/2148RCL" 
    },
    { 
      id: 9, 
      name: "Película Hydrogel Para Redmagic Astra", 
      price: "R$ 54,99",
      image: "https://http2.mlstatic.com/D_NQ_NP_900667-MLB71751842036_092023-O.webp",
      desc: language === 'pt' ? "Película de proteção em hydrogel TPU com auto-reparo." : "Hydrogel TPU screen protector with self-repair technology.",
      link: "https://meli.la/27TV7W7" 
    },
    { 
      id: 10, 
      name: "Monitor Gamer VXpro VX190Z 19\" LED", 
      price: "R$ 229,90",
      image: "https://http2.mlstatic.com/D_NQ_NP_632488-MLB76186835061_052024-O.webp",
      desc: language === 'pt' ? "Monitor LED de 19 polegadas com 60Hz e 5ms de resposta." : "19-inch LED monitor with 60Hz and 5ms response time.",
      link: "https://meli.la/2cEMTUz" 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-border/30 mt-12 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}>
            {language === 'pt' ? 'Meu Setup' : 'My Setup'}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            {language === 'pt' ? 'Equipamentos que eu uso e recomendo para garantir a melhor performance nas partidas.' : 'Gear I use and recommend to ensure the best performance in matches.'}
          </p>
        </div>
        <Button variant="outline" asChild className="hidden md:flex border-primary/20 hover:bg-primary/10 text-primary transition-all rounded-xl">
          <a href={mainCollectionLink} target="_blank" rel="noopener noreferrer">
            {language === 'pt' ? 'Coleção Completa' : 'Full Collection'} <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>

      <div className="relative group/arrows">
        {/* Navigation Arrows - Desktop only */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-full text-primary opacity-0 group-hover/arrows:opacity-100 transition-opacity hidden md:flex hover:bg-black/80 hover:scale-110 shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-full text-primary opacity-0 group-hover/arrows:opacity-100 transition-opacity hidden md:flex hover:bg-black/80 hover:scale-110 shadow-lg"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 md:gap-7 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        {setupItems.map((item) => (
          <a 
            key={item.id} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] md:min-w-[320px] snap-start bg-card/40 rounded-3xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-500 group flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer backdrop-blur-sm"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-base font-bold mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-lg font-black text-primary mb-2">
                {item.price}
              </p>
              <p className="text-[10px] text-muted-foreground mb-4 line-clamp-2 leading-tight">
                {item.desc}
              </p>
              
              <Button size="sm" className="w-full mt-auto bg-primary text-primary-foreground hover:opacity-90 transition-all font-semibold rounded-lg py-4 md:py-5 shadow-sm">
                <ShoppingCart className="w-3 h-3 mr-2" />
                {language === 'pt' ? 'Comprar' : 'Buy'}
              </Button>
            </div>
          </a>
        ))}
        </div>
      </div>
      
      {/* Mobile only "View All" button */}
      <Button variant="outline" size="sm" asChild className="w-full md:hidden mt-2 border-primary/20 text-primary py-4 rounded-lg font-semibold">
        <a href={mainCollectionLink} target="_blank" rel="noopener noreferrer">
          {language === 'pt' ? 'Ver Tudo' : 'View All'} <ChevronRight className="ml-2 w-3 h-3" />
        </a>
      </Button>
    </div>
  );
}

