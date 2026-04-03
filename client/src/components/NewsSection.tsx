import { ExternalLink, Clock, Tag, ChevronRight, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { useLanguage } from "@/contexts/LanguageContext";

interface Article {
  id: string;
  titlePt: string;
  titleEn: string;
  excerptPt: string;
  excerptEn: string;
  tag: string;
  readTimePt: string;
  readTimeEn: string;
  url?: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: "sensitivity-guide",
    titlePt: "A Sensibilidade Perfeita para CODM: Como Encontrar a Sua",
    titleEn: "The Perfect CODM Sensitivity: How to Find Yours",
    excerptPt:
      "A sensibilidade é um dos fatores mais críticos para quem quer ter alta performance no Call of Duty Mobile. Não existe uma configuração universal — cada jogador tem um estilo diferente de mirar. O segredo está em calibrar progressivamente: comece com sensibilidade baixa (60-80) para aprender a controlar o recuo, depois suba gradualmente até encontrar o ponto onde sua mira flui naturalmente. Evite mudar tudo de uma vez — dê pelo menos 2 semanas em cada configuração.",
    excerptEn:
      "Sensitivity is one of the most critical factors for high performance in Call of Duty Mobile. There's no universal setting — each player has a different aiming style. The secret lies in calibrating progressively: start with low sensitivity (60-80) to learn recoil control, then gradually increase until you find the point where your aim flows naturally. Avoid changing everything at once — give at least 2 weeks for each configuration.",
    tag: "Guia",
    readTimePt: "5 min de leitura",
    readTimeEn: "5 min read",
    featured: true,
  },
  {
    id: "hud-pro",
    titlePt: "HUD Pro: Configure seu Layout como um Profissional",
    titleEn: "Pro HUD: Set Up Your Layout Like a Professional",
    excerptPt:
      "O HUD é sua interface com o jogo — e um HUD mal configurado pode custar partidas. A configuração profissional envolve três princípios: os controles de mira e atirar devem ser grandes o suficiente para não errar em momentos de pressão; botões como agachamento e pulo devem estar acessíveis ao polegar sem tirar o dedo do look; e a miniatura do mapa deve estar em um canto onde você consegue checar sem perder o foco.",
    excerptEn:
      "The HUD is your interface with the game — and a poorly configured HUD can cost you matches. Professional configuration involves three principles: aim and shoot controls should be large enough not to miss under pressure; buttons like crouch and jump should be accessible to the thumb without removing the finger from the look; and the mini-map should be in a corner where you can check it without losing focus.",
    tag: "Tutorial",
    readTimePt: "4 min de leitura",
    readTimeEn: "4 min read",
  },
  {
    id: "recoil-control",
    titlePt: "Controle de Recuo: A Diferença entre Amador e Pro",
    titleEn: "Recoil Control: The Difference Between Amateur and Pro",
    excerptPt:
      "O controle de recuo é a habilidade mecânica que separa os bons jogadores dos excelentes. No CODM cada arma tem um padrão de recuo específico — uma sequência previsível de movimento que você pode aprender e compensar. A prática começa no modo Treino de Tiro: 20 minutos por dia em um alvo fixo, focando em arrastar o polegar para baixo enquanto atira. Com constância, o controle vira memória muscular.",
    excerptEn:
      "Recoil control is the mechanical skill that separates good players from excellent ones. In CODM each weapon has a specific recoil pattern — a predictable sequence of movement that you can learn and compensate for. Practice starts in Shooting Range mode: 20 minutes a day on a fixed target, focusing on dragging your thumb down while shooting. With consistency, control becomes muscle memory.",
    tag: "Mecânica",
    readTimePt: "6 min de leitura",
    readTimeEn: "6 min read",
  },
  {
    id: "mental-game",
    titlePt: "Mentalidade Competitiva: Como Manter o Foco sob Pressão",
    titleEn: "Competitive Mindset: How to Stay Focused Under Pressure",
    excerptPt:
      "Performance mental é tão importante quanto habilidade mecânica. Jogadores que tiltam depois de uma morte ruim tomam decisões piores nas próximas jogadas, criando um ciclo negativo. A técnica é simples mas subestimada: respira fundo, lembra que a última morte já aconteceu e não pode ser desfeita, e foca 100% na próxima jogada. O melhor jogador não é o que erra menos — é o que se recupera mais rápido.",
    excerptEn:
      "Mental performance is as important as mechanical skill. Players who tilt after a bad death make worse decisions in subsequent plays, creating a negative cycle. The technique is simple but underestimated: breathe deeply, remember the last death already happened and can't be undone, and focus 100% on the next play. The best player isn't the one who makes fewer mistakes — it's the one who recovers fastest.",
    tag: "Mentalidade",
    readTimePt: "7 min de leitura",
    readTimeEn: "7 min read",
  },
  {
    id: "classe-meta",
    titlePt: "Classes Meta do CODM: O que Realmente Funciona",
    titleEn: "CODM Meta Loadouts: What Actually Works",
    excerptPt:
      "Meta não significa 'overpowered' — significa o que oferece vantagem consistente nas situações mais comuns do jogo. Atualmente as classes que mais se destacam são as que combinam mobilidade com precisão no médio alcance. Rifles de assalto com cano curto e mira reflex oferecem o melhor custo-benefício. Evite classes com muitos attachments que sacrificam velocidade de ADS — no CODM, quem mira primeiro geralmente vence.",
    excerptEn:
      "Meta doesn't mean 'overpowered' — it means what offers consistent advantage in the most common in-game situations. Currently the loadouts that stand out most are those combining mobility with medium-range accuracy. Assault rifles with short barrel and reflex sight offer the best cost-benefit. Avoid loadouts with too many attachments that sacrifice ADS speed — in CODM, who aims first usually wins.",
    tag: "Classes",
    readTimePt: "5 min de leitura",
    readTimeEn: "5 min read",
  },
];

export function NewsSection() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      sectionTitle: "Guias & Dicas CODM",
      sectionSubtitle: "Conteúdo técnico e estratégico para elevar seu nível de jogo",
      readMore: "Ler artigo completo",
      viewAll: "Ver todos os guias",
      by: "Por SLX",
    },
    en: {
      sectionTitle: "CODM Guides & Tips",
      sectionSubtitle: "Technical and strategic content to elevate your gameplay",
      readMore: "Read full article",
      viewAll: "View all guides",
      by: "By SLX",
    },
  };

  const t = texts[language as keyof typeof texts] || texts.pt;

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section className="py-16 md:py-24" data-testid="section-news">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Call of Duty Mobile
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
          <a
            href="/conteudo?category=gaming"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0"
          >
            {t.viewAll}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          {/* Featured Article */}
          {featured && (
            <a
              href={featured.url || `/conteudo?category=gaming`}
              className="lg:col-span-3 group block"
              data-testid="article-featured"
            >
              <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate">
                {/* Gradient header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-end p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                  <Badge className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest">
                    {featured.tag}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                    {language === "pt" ? featured.titlePt : featured.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {language === "pt" ? featured.excerptPt : featured.excerptEn}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-medium">{t.by}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {language === "pt" ? featured.readTimePt : featured.readTimeEn}
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
          )}

          {/* Secondary Articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 2).map((article) => (
              <a
                key={article.id}
                href={article.url || `/conteudo?category=gaming`}
                className="group block flex-1"
                data-testid={`article-${article.id}`}
              >
                <Card className="h-full p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate flex flex-col justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-[10px] font-bold uppercase tracking-widest border-primary/30 text-primary"
                      >
                        <Tag className="w-2.5 h-2.5 mr-1" />
                        {article.tag}
                      </Badge>
                    </div>
                    <h3 className="font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {language === "pt" ? article.titlePt : article.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {language === "pt" ? article.excerptPt : article.excerptEn}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {language === "pt" ? article.readTimePt : article.readTimeEn}
                    </span>
                    <span className="text-primary font-bold flex items-center gap-1">
                      {t.readMore}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* AdSense — dentro do conteúdo (melhor posição) */}
        <div className="my-8">
          {/* IMPORTANTE: Substitua o slot abaixo pelo ID real da sua conta AdSense */}
          <AdSenseUnit slot="5495845816" format="fluid" layout="in-article" />

        </div>

        {/* Remaining Articles Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.slice(2).map((article) => (
            <a
              key={article.id}
              href={article.url || `/conteudo?category=gaming`}
              className="group block"
              data-testid={`article-${article.id}`}
            >
              <Card className="h-full p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate flex flex-col gap-3">
                <div className="space-y-2 flex-1">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold uppercase tracking-widest border-primary/30 text-primary"
                  >
                    <Tag className="w-2.5 h-2.5 mr-1" />
                    {article.tag}
                  </Badge>
                  <h3 className="font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {language === "pt" ? article.titlePt : article.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {language === "pt" ? article.excerptPt : article.excerptEn}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {language === "pt" ? article.readTimePt : article.readTimeEn}
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
      </div>
    </section>
  );
}
