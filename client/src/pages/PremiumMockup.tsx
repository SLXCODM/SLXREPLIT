import { useState } from "react";
import { ChevronRight, Gamepad2, Camera, PenTool, Sprout, Brain, Target, Mouse, Monitor, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PremiumMockup() {
  const [activeTab, setActiveTab] = useState('gaming');

  // Categories (2 rows of 3)
  const categories = [
    { id: 'gaming', label: 'COD Mobile', icon: Gamepad2 },
    { id: 'photography', label: 'Fotografia', icon: Camera },
    { id: 'writer', label: 'Escritor', icon: PenTool },
    { id: 'agriculture', label: 'Agricultura', icon: Sprout },
    { id: 'dev', label: 'Dev Pessoal', icon: Brain },
    { id: 'classes', label: 'Classes Pro', icon: Target },
  ];

  // Setup Items (Horizontal Carousel)
  const setupItems = [
    { id: 1, name: "Mouse ROG Gladius III", price: "R$ 499", image: "https://images.unsplash.com/photo-1527814050087-379381547336?w=400&q=80", link: "#" },
    { id: 2, name: "Placa de Captura Elgato", price: "R$ 1.299", image: "https://images.unsplash.com/photo-1593640495253-2394ceb8eebff?w=400&q=80", link: "#" },
    { id: 3, name: "Smartphone Gamer PRO", price: "R$ 4.599", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", link: "#" },
    { id: 4, name: "Headset V2", price: "R$ 399", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200">
      
      {/* 1. HERO SECTION (Clean & Minimalist) */}
      <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Removed the pulsing animation, kept it clean */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium mb-8 border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          Novo E-book Oficial Disponível
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Sentido Tático Extremo
        </h1>
        
        {/* Adjusted typography: removed "artificial" descriptions, kept it straight to the point */}
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Domine o posicionamento avançado, rotação de mapa e leitura de jogo no Call of Duty Mobile.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 rounded-xl text-md transition-all active:scale-95">
            Adquirir o E-book
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ADSENSE PLACEHOLDER (Top) - Clean integration */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="w-full h-24 bg-slate-50 border border-slate-100/50 rounded-xl flex items-center justify-center text-xs text-slate-300 font-mono tracking-widest">
          ADSENSE_HEADER_SPACE
        </div>
      </div>

      {/* 2. CONTENT TABS */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-8 border-b pb-4">Conteúdo</h2>
          
          {/* 6 Buttons Grid - Kept clean with subtle active states */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-xl border transition-all duration-200 ${
                  activeTab === cat.id 
                    ? 'border-purple-600 bg-purple-50/50 text-purple-700' 
                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                }`}
              >
                <cat.icon className={`w-6 h-6 mb-2 ${activeTab === cat.id ? 'text-purple-600' : 'text-slate-400'}`} />
                <span className="font-medium text-sm">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 min-h-[250px] flex items-center justify-center text-slate-400 text-sm">
            Exibindo lista de projetos para: {categories.find(c => c.id === activeTab)?.label}
          </div>
        </div>
      </section>

      {/* ADSENSE PLACEHOLDER (Middle) */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="w-full h-32 bg-slate-50 border border-slate-100/50 rounded-xl flex items-center justify-center text-xs text-slate-300 font-mono tracking-widest">
          ADSENSE_CONTENT_SPACE
        </div>
      </div>

      {/* 3. SETUP & GEAR CAROUSEL */}
      <section className="py-16 px-6 max-w-4xl mx-auto overflow-hidden">
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h2 className="text-xl font-bold text-slate-900">Equipamentos Base</h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {setupItems.map((item) => (
            <div key={item.id} className="min-w-[240px] md:min-w-[280px] snap-start bg-white rounded-2xl p-3 border border-slate-100 shadow-sm transition-shadow flex flex-col">
              <div className="aspect-[4/3] rounded-xl bg-slate-100 mb-3 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.name}</h3>
              <p className="text-purple-600 font-semibold text-xs mb-3">{item.price}</p>
              <Button size="sm" variant="outline" className="w-full mt-auto text-slate-600 border-slate-200">
                <ShoppingCart className="w-3 h-3 mr-2" /> Comprar
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DYNAMIC ALERTS (Clean text-only approach) */}
      <div className="pb-12 px-6 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
             <span className="text-purple-400 text-lg">💡</span>
             <p className="font-medium text-white text-sm">Sorteio ROG Phone 6 em andamento</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500" />
        </div>
      </div>
      
    </div>
  );
}
