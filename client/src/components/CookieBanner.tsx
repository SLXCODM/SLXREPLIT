import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Cookie, Shield } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("slx_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't appear immediately over the language selector
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("slx_cookie_consent", "accepted");
    setVisible(false);
    // Push consent to AdSense / Google
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("slx_cookie_consent", "declined");
    setVisible(false);
  };

  const texts = {
    pt: {
      title: "Este site usa cookies",
      description:
        "Usamos cookies para melhorar sua experiência e exibir anúncios relevantes via Google AdSense. Ao continuar, você concorda com nossa",
      policy: "Política de Privacidade",
      accept: "Aceitar",
      decline: "Recusar",
    },
    en: {
      title: "This site uses cookies",
      description:
        "We use cookies to improve your experience and show relevant ads via Google AdSense. By continuing, you agree to our",
      policy: "Privacy Policy",
      accept: "Accept",
      decline: "Decline",
    },
  };

  const t = texts[language as keyof typeof texts] || texts.pt;

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500"
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-banner"
    >
      <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden">
        <div className="flex items-start gap-4 p-5 md:p-6">
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm text-foreground">{t.title}</h3>
              <Shield className="w-3.5 h-3.5 text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.description}{" "}
              <a
                href="/privacy"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                {t.policy}
              </a>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors duration-200"
              data-testid="cookie-decline"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm"
              data-testid="cookie-accept"
            >
              {t.accept}
            </button>
            <button
              onClick={handleDecline}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors duration-200 ml-1"
              aria-label="Fechar"
              data-testid="cookie-close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
