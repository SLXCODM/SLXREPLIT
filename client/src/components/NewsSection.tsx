import { ExternalLink, Clock, Tag, ChevronRight, Gamepad2, Loader2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export function NewsSection() {
  const { language } = useLanguage();
  const [articles, setArticles] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Consumindo Feed RSS da IGN Brasil via rss2json (público e gratuito)
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://br.ign.com/feed.xml");
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        
        if (data.status === "ok" && data.items) {
          // Filtra os primeiros 5 itens com thumbnail garantida
          const validItems = data.items
            .filter((item: any) => item.thumbnail || (item.enclosure && item.enclosure.link))
            .slice(0, 5)
            .map((item: any) => ({
              ...item,
              thumbnail: item.thumbnail || (item.enclosure && item.enclosure.link) || ""
            }));
            
          setArticles(validItems);
        } else {
          throw new Error("Invalid RSS data format");
        }
      } catch (err) {
        console.error("Failed to fetch RSS news:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const texts = {
    pt: {
      sectionTitle: "Portal Gaming: IGN Brasil",
      sectionSubtitle: "Últimas notícias, análises e tendências do mundo dos jogos trazidas em tempo real.",
      readMore: "Ler no portal",
      by: "Por IGN BRASIL",
      loading: "Conectando ao núcleo da IGN..",
      errorMsg: "As comunicações com a base falharam no momento.",
      pubNews: "Notícia Publicada",
    },
    en: {
      sectionTitle: "Gaming Hub: IGN Brazil",
      sectionSubtitle: "Latest news, reviews, and gaming trends brought straight to you in real-time.",
      readMore: "Read full article",
      by: "By IGN BRAZIL",
      loading: "Connecting to IGN core..",
      errorMsg: "Communications with base have failed for now.",
      pubNews: "Published News",
    },
  };

  const t = texts[language as keyof typeof texts] || texts.pt;

  // Função auxiliar para arrumar texto HTML que costuma vir no description do RSS
  const stripHtml = (htmlContent: string) => {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    return doc.body.textContent || "";
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit', month: 'short', hour: '2-digit', minute:'2-digit'
    }).format(d);
  };

  return (
    <section className="py-16 md:py-24" data-testid="section-news">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Real-Time Gaming News
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
            >
              {t.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              {t.sectionSubtitle}
            </p>
          </div>
        </div>

        {loading ? (
           <div className="flex flex-col items-center justify-center py-24 space-y-4 text-center border border-border/50 rounded-2xl bg-card/20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <div className="text-primary font-bold uppercase tracking-widest text-sm">{t.loading}</div>
           </div>
        ) : error || articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-4 text-center border border-destructive/20 rounded-2xl bg-destructive/5">
             <AlertCircle className="w-10 h-10 text-destructive" />
             <div className="text-muted-foreground font-medium">{t.errorMsg}</div>
          </div>
        ) : (
          <>
            {/* Featured + Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
              {/* Featured Article (primeiro do RSS) */}
              <a
                href={articles[0].link}
                target="_blank" rel="noopener noreferrer"
                className="lg:col-span-3 group block"
                data-testid="article-featured"
              >
                <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate">
                  {/* Dynamic Thumbnail Header */}
                  <div 
                     className="h-56 bg-cover bg-center flex items-end p-6 relative overflow-hidden" 
                     style={{ backgroundImage: `url(${articles[0].thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <Badge className="bg-primary hover:bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest z-10">
                      {articles[0].categories && articles[0].categories.length > 0 ? articles[0].categories[0] : t.pubNews}
                    </Badge>
                  </div>

                  <div className="p-6 space-y-4 bg-card">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {articles[0].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {stripHtml(articles[0].description)}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium text-emerald-500">{t.by}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(articles[0].pubDate)}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        {t.readMore}
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Card>
              </a>

              {/* Secondary Articles (2 seguintes) */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {articles.slice(1, 3).map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    target="_blank" rel="noopener noreferrer"
                    className="group block flex-1"
                  >
                    <Card className="h-full p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate flex gap-4 bg-card cursor-pointer">
                      <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden relative">
                         <img src={article.thumbnail} alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between overflow-hidden">
                        <div className="space-y-1">
                           <h3 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-3">
                            {article.title}
                           </h3>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatDate(article.pubDate)}
                          </span>
                          <ExternalLink className="w-3 h-3 group-hover:text-primary transition-colors text-zinc-600" />
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Remaining Articles Row (últimos 2) */}
            {articles.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.slice(3, 5).map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    target="_blank" rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="h-full p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate flex flex-col gap-3">
                      <div className="h-40 w-full overflow-hidden rounded-md relative mb-2">
                        <img src={article.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-2 left-2 flex gap-1">
                          {article.categories && article.categories.slice(0,1).map(cat => (
                            <Badge variant="secondary" className="text-[10px] bg-black/60 backdrop-blur-md border-white/10 text-white leading-none">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                           {stripHtml(article.description)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(article.pubDate)}
                        </span>
                        <span className="text-primary font-bold flex items-center gap-1">
                          {t.readMore}
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

