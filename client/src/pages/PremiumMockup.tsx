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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-200">
      
      {/* 1. HERO SECTION (The Facade) */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Novo E-book Disponível
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Domine o Sentido <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Tático Extremo
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          O guia definitivo que transformou centenas de jogadores casuais em analistas pro-level. Aprenda posicionamento, rotação e leitura de mapa avançada.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 rounded-xl text-lg shadow-lg shadow-purple-200 transition-all hover:scale-105 active:scale-95">
            Adquirir Agora
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white border-slate-200 text-slate-700 font-semibold px-8 py-6 rounded-xl text-lg hover:bg-slate-50 transition-all">
            Ver Amostra Grátis
          </Button>
        </div>
      </section>

      {/* 2. CONTENT TABS (The Drawers) */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Navegue por Conteúdo</h2>
          
          {/* 6 Buttons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-200 ${
                  activeTab === cat.id 
                    ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <cat.icon className={`w-8 h-8 mb-3 ${activeTab === cat.id ? 'text-purple-600' : 'text-slate-400'}`} />
                <span className="font-semibold text-sm md:text-base">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Dummy visual for selected content */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 min-h-[300px] flex items-center justify-center text-slate-400">
            [ Área limpa exibindo os projetos da aba "{categories.find(c => c.id === activeTab)?.label}" ]
          </div>
        </div>
      </section>

      {/* 3. SETUP & GEAR CAROUSEL (The Invisible Store) */}
      <section className="py-20 px-6 max-w-5xl mx-auto overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Meu Setup & Recomendações</h2>
            <p className="text-slate-500">Equipamentos testados e aprovados para alta performance.</p>
          </div>
          <Button variant="ghost" className="text-purple-600 font-semibold hover:text-purple-700 hover:bg-purple-50">
            Ver Todos <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {setupItems.map((item) => (
            <div key={item.id} className="min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 mb-4 overflow-hidden relative">
                {/* Fallback pattern for dummy images */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
              <p className="text-purple-600 font-bold mb-4">{item.price}</p>
              <Button className="w-full mt-auto bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-semibold">
                <ShoppingCart className="w-4 h-4 mr-2" /> Comprar
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DYNAMIC ALERTS (Raffles/Events) - Kept out of the way */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            🎁
          </div>
          <div className="pr-4">
            <p className="text-xs font-bold text-purple-600 mb-0.5">SORTEIO ATIVO</p>
            <p className="font-bold text-slate-900 text-sm">Ganhe um ROG Phone</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
