import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSelectProps {
  onComplete: () => void;
}

export default function LanguageSelect({ onComplete }: LanguageSelectProps) {
  const { setLanguage, language } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<"pt" | "en" | null>(null);


  const handleLanguageSelect = (lang: "pt" | "en") => {
    setSelectedLanguage(lang);
    setLanguage(lang);
    
    if (lang === "pt") {
      setLanguage(lang);
      onComplete();
    } else {
      onComplete();
    }
  };



  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <Globe className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900 }}>
              SLX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Escolha seu idioma • Choose your language
            </p>
          </div>

          {/* Language Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Portuguese */}
            <button
              onClick={() => handleLanguageSelect("pt")}
              className="group relative w-full sm:w-64 p-8 border-2 border-border rounded-lg hover-elevate transition-all duration-300"
              data-testid="button-select-portuguese"
            >
              <div className="space-y-4">
                <div className="text-5xl">🇧🇷</div>
                <h2 className="text-2xl font-bold">Português</h2>
                <p className="text-muted-foreground">
                  Conteúdo em Português Brasileiro
                </p>
                <div className="pt-4 text-primary font-semibold">
                  Selecionar →
                </div>
              </div>
            </button>

            {/* English */}
            <button
              onClick={() => handleLanguageSelect("en")}
              className="group relative w-full sm:w-64 p-8 border-2 border-border rounded-lg hover-elevate transition-all duration-300"
              data-testid="button-select-english"
            >
              <div className="space-y-4">
                <div className="text-5xl">🇺🇸</div>
                <h2 className="text-2xl font-bold">English</h2>
                <p className="text-muted-foreground">
                  English language content
                </p>
                <div className="pt-4 text-primary font-semibold">
                  Select →
                </div>
              </div>
            </button>
          </div>

        </div>
    </div>
  );
}
