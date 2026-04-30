import { useLanguage } from "@/contexts/LanguageContext";
import SocialLinks from "@/components/SocialLinks";

export default function SocialLinksPage() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Redes Sociais",
      description: "Acompanhe meu conteúdo nas principais redes sociais",
    },
    en: {
      title: "Social Networks",
      description: "Follow my content on the main social networks",
    }
  };

  const t = texts[language];

  return (
    <div className="min-h-screen py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12 text-center">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-social-title">
              {t.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-social-description">
              {t.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="py-8">
            <SocialLinks language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
