import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import FollowToUnlock from "@/components/FollowToUnlock";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@shared/schema";
import { SiSubstack } from "react-icons/si";
import { PenTool, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const photoSilhouettes = "/attached_assets/photo-silhouettes.jpg";
const photoSelfPortrait = "/attached_assets/photo-selfportrait.jpg";
const photoIntimacy = "/attached_assets/photo-intimacy.jpg";
const photoCreativity = "/attached_assets/photo-creativity.jpg";
const photoNature = "/attached_assets/photo-nature.jpg";
const photoPoetry = "/attached_assets/photo-poetry.jpg";
const photoAgricultureWork = "/attached_assets/photo-agriculture-work.jpg";

export default function Content() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("all");
  const { language } = useLanguage();

  // Fetch projects from API
  const { data: projects = [], isLoading, isError, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Check URL params for category filter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && ["gaming", "photography", "agriculture", "development"].includes(category)) {
      setActiveTab(category);
    }
  }, [location]);

  const tabs = [
    { value: "gaming", label: "Call of Duty Mobile", testId: "tab-gaming" },
    { value: "photography", label: language === "pt" ? "Fotografia" : "Photography", testId: "tab-photography" },
    { value: "agriculture", label: language === "pt" ? "Agricultura" : "Agriculture", testId: "tab-agriculture" },
    { value: "development", label: language === "pt" ? "Dev Pessoal" : "Personal Dev", testId: "tab-development" },
    { value: "writer", label: language === "pt" ? "Escritor" : "Writer", testId: "tab-writer" },
  ];

  const contentTexts = {
    pt: {
      title: "Conteúdo",
      description: "Explore meus projetos, tutoriais e criações em diferentes áreas"
    },
    en: {
      title: "Content",
      description: "Explore my projects, tutorials and creations in different areas"
    }
  };

  const ct = contentTexts[language];

  // Set default tab to gaming
  const defaultTab = "gaming";
  const currentTab = activeTab === "all" ? defaultTab : activeTab;

  const filteredProjects = projects.filter(p => p.category === currentTab);

  const writerPosts = [
    {
      title: "Eu criei um EU totalmente digital",
      url: "https://substack.com/@slnx/p-191813717?utm_source=profile&utm_medium=reader2",
      description: "Reflexões sobre a criação de uma presença digital e a dualidade entre o ser real e o virtual.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ed61191-a51a-4631-8545-3dc84050cd52_1116x1501.jpeg"
    },
    {
      title: "Simplesmente, um cérebro composto por caos",
      url: "https://substack.com/@slnx/p-189383888?utm_source=profile&utm_medium=reader2",
      description: "Um mergulho na neurodivergência e na complexidade de processar o mundo com hiperfoco.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F971037ee-63f8-462b-8406-378285449614_3120x3900.jpeg"
    },
    {
      title: "Eu simplesmente criei algo foda.",
      url: "https://substack.com/@slnx/p-188816809?utm_source=profile&utm_medium=reader2",
      description: "Sobre o processo criativo e a satisfação de materializar ideias complexas em projetos reais.",
      imageUrl: null
    },
    {
      title: "Como funciona uma crise existencial?",
      url: "https://substack.com/@slnx/p-184613697?utm_source=profile&utm_medium=reader2",
      description: "Análise psicológica e pessoal sobre os momentos de questionamento profundo sobre a vida.",
      imageUrl: null
    },
    {
      title: "Não Use Droga, Use Whey Protein",
      url: "https://substack.com/@slnx/p-174704423?utm_source=profile&utm_medium=reader2",
      description: "Uma visão provocativa sobre saúde, disciplina e substituição de vícios por hábitos produtivos.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa8e5e0cd-cbed-497a-8e46-4b69eae9fc4a_678x511.png"
    },
    {
      title: "O Vazio da Internet",
      url: "https://substack.com/@slnx/p-174645674?utm_source=profile&utm_medium=reader2",
      description: "A solidão em meio ao excesso de conexões e a busca por significado na era digital.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8770a7e4-5648-453f-ab0c-6c825d414eb9_1662x2216.jpeg"
    },
    {
      title: "Discurso de Violência Sexual Online",
      url: "https://substack.com/@slnx/p-174303051?utm_source=profile&utm_medium=reader2",
      description: "Discussão séria sobre os perigos e a ética nos ambientes digitais modernos.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2834dce7-a1ff-4735-af4f-e443007053a9_310x163.jpeg"
    },
    {
      title: "Relacionamento à Distância e Toque Físico",
      url: "https://substack.com/@slnx/p-174182095?utm_source=profile&utm_medium=reader2",
      description: "As dificuldades e descobertas de manter conexões emocionais sem a presença física.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed4a7de1-8aa3-4787-b8c8-6bd2ab81d43d_1200x1600.jpeg"
    },
    {
      title: "Por Que Indivíduos Altamente Inteligentes Sempre se Subestimam?",
      url: "https://substack.com/@slnx/p-174174879?utm_source=profile&utm_medium=reader2",
      description: "Um estudo sobre a Síndrome do Impostor e como o conhecimento revela novas dúvidas.",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2b33d902-9ee2-4e91-b0ba-14b466692264_1920x1080.png"
    }
  ];

  const contentComponent = (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-content-title">
              {ct.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-content-description">
              {ct.description}
            </p>
          </div>

          {/* Tabs Filter */}
          <Tabs
            value={currentTab}
            onValueChange={(val) => {
              setActiveTab(val);
              // Update URL so AnalyticsTracker picks it up
              const newUrl = val === "all" || val === "gaming"
                ? window.location.pathname
                : `${window.location.pathname}?category=${val}`;
              window.history.pushState({}, '', newUrl);
              // We dispatch a popstate event to simulate a location change manually 
              // so useLocation in AnalyticsTracker might pick it up, although Wouter might handle it.
              window.dispatchEvent(new Event('popstate'));
            }}
            className="w-full"
          >
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap gap-2 bg-transparent h-auto p-0" data-testid="tabs-content-filter">
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md bg-card hover:bg-primary/10 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:hover:bg-primary"
                  data-testid={tab.testId}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>



            {currentTab === "gaming" ? (
              <FollowToUnlock contentName="Call of Duty Mobile" language={language}>
                <TabsContent value={currentTab} className="mt-8 space-y-12">
                  {/* EBOOK HERO SECTION */}

                  {/* Error State */}
                  {isError ? (
                    <div className="text-center py-16 space-y-4" data-testid="error-state-content">
                      <p className="text-destructive font-medium">
                        {language === "pt" ? "Erro ao carregar projetos" : "Error loading projects"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {error instanceof Error ? error.message : (language === "pt" ? "Tente novamente mais tarde" : "Try again later")}
                      </p>
                    </div>
                  ) : isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="loading-content-projects">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-96 bg-card border border-border rounded-lg animate-pulse" />
                      ))}
                    </div>
                  ) : filteredProjects.length > 0 ? (
                    <div className="space-y-8">
                      {/* AdSense — dentro do conteúdo de gaming */}

                      {/* Original Projects Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                        {filteredProjects.slice(0, 1).map(project => (
                          <ProjectCard key={project.id} project={project} language={language} />
                        ))}
                        <a href="/training_hub.html" data-testid="button-focus-training-gaming">
                          <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
                            <div className="aspect-video overflow-hidden relative"><img src="/attached_assets/treino_de_foco.png" alt="Treino de Foco" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                              <span className="text-6xl"></span>
                            </div>
                            <div className="p-6 space-y-3">
                              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {language === "pt" ? "Treino de Foco" : "Focus Training"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {language === "pt" ? "Níveis impossíveis e reflexos extremos. O único treino capaz de superar o SLX." : "Impossible levels and extreme reflexes. The only training capable of surpassing SLX."}
                              </p>
                            </div>
                          </Card>
                        </a>
                        <a href="/community" data-testid="button-analysis-pro-gaming">
                          <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full border border-emerald-500/50">
                            <div className="aspect-video overflow-hidden relative">
                              <img src="/slx_analysis_pro.png" alt="Análise Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            </div>
                            <div className="p-6 space-y-3">
                              <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors text-emerald-500">
                                {language === "pt" ? "ANÁLISE PRO" : "ANALYSIS PRO"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {language === "pt" ? "Descubra por que você ainda não é um pro-player. Análise técnica detalhada da sua gameplay." : "Discover why you are not a pro-player yet. Detailed technical analysis of your gameplay."}
                              </p>
                            </div>
                          </Card>
                        </a>
                        {filteredProjects.slice(1).map(project => (
                          <ProjectCard key={project.id} project={project} language={language} />
                        ))}
                        
                        <a href="https://www.tiktok.com/@slxcodm_/playlist/Edits-7635319705230560021?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" data-testid="button-edits-gaming">
                          <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full border border-purple-500/20 bg-zinc-900/50">
                            <div className="p-6 space-y-3 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                              <SiTiktok className="w-10 h-10 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                              <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                                {language === "pt" ? "Edits Insanos (TikTok)" : "Insane Edits (TikTok)"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {language === "pt" ? "Montagens e clipes de alta qualidade com foco em sincronia." : "High quality montages and clips focused on sync."}
                              </p>
                            </div>
                          </Card>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-16" data-testid="empty-state-content">
                      <p className="text-muted-foreground">
                        {projects.length === 0
                          ? (language === "pt" ? "Nenhum projeto disponível no momento." : "No projects available at the moment.")
                          : (language === "pt" ? "Nenhum conteúdo encontrado nesta categoria ainda." : "No content found in this category yet.")}
                      </p>
                    </div>
                  )}
                </TabsContent>
              </FollowToUnlock>
            ) : currentTab === "photography" ? (
              <TabsContent value={currentTab} className="mt-8">
                <div className="space-y-8">
                  {/* Intro Text */}
                  <div className="bg-card/50 border border-border rounded-lg p-6 md:p-8">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {language === "pt"
                        ? "Fotos melancólicas com sentido e sentimento. Cada imagem conta uma história de profundidade e emoção. Conheça meu trabalho no Instagram e explore mais sobre a forma como vejo e capto o mundo."
                        : "Melancholic photos with meaning and feeling. Each image tells a story of depth and emotion. Get to know my work on Instagram and explore how I see and capture the world."}
                    </p>
                  </div>

                  {/* AdSense — In-article Photography */}

                  {/* Photography Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-1"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoSilhouettes}
                            alt="Melancholic hands"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "Melancolia Visual" : "Visual Melancholy"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "Essa é a forma que enxergo o mundo, escuro, sombrio e vazio, mas não triste, apenas confortável e sozinho." : "This is how I see the world — dark, gloomy and empty, but not sad, just comfortable and alone."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-2"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoSelfPortrait}
                            alt="Mirror reflection"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "Quem sou eu?" : "Who am I?"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "As pessoas querem ver meu rosto inteiro, querem entender quem eu sou só pela aparência. Não entendem o que somente os gestos traduzem.." : "People want to see my whole face, want to understand who I am just by appearance. They don't understand what only gestures translate.."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-3"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoIntimacy}
                            alt="Intimate moments"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "Gatinhos" : "Kittens"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "Fotos de gatinhos fofos pra te lembrar da leveza da vida." : "Cute kitten photos to remind you of life's lightness."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-4"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoCreativity}
                            alt="Creative workspace"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "O que eu faço?" : "What do I do?"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "Enquanto todo mundo vive no barulho, eu fico aqui... Criando, editando, produzindo ideias que ninguém vê. Silêncio, foco, e um pouco de esquizofrenia" : "While everyone else lives in the noise, I stay here... Creating, editing, producing ideas no one sees. Silence, focus, and a little schizophrenia."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-5"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoNature}
                            alt="Nature connection"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "Meu trabalho" : "My work"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "Um trabalho pesado, sujo e cansativo. um lembrete que sou o melhor, não por ser bom, mas por conseguir me doar 100% em tudo o que faço e trazer o melhor possível para meu público." : "Heavy, dirty and tiring work. A reminder that I'm the best, not for being good, but for being able to give 100% in everything I do and bring the best possible to my audience."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-photo-collection-6"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-card relative">
                          <img
                            src={photoPoetry}
                            alt="Poetic nature"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                              {language === "pt" ? "Foco nos detalhes" : "Focus on details"}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                              {language === "pt" ? "Tem coisa que quase ninguém vê somente porque não param pra observar, eu paro. E quanto mais eu observo, mais percebo o quanto o mundo é cheio de detalhes que não cabem na pressa." : "There are things almost no one sees only because they don't stop to observe. I do. And the more I observe, the more I realize how full the world is of details that don't fit in the rush."}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>
                  </div>
                </div>
              </TabsContent>
            ) : currentTab === "writer" ? (
              <TabsContent value={currentTab} className="mt-8">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Substack Card */}
                    <a
                      href="https://slnx.substack.com/?utm_campaign=profile&utm_medium=profile-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-writer-substack"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full border-primary/20">
                        {/* Background with gradient and icon */}
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/10 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-black/20" />
                          <SiSubstack className="h-32 w-32 text-purple-400/30 transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary text-primary-foreground">Blog Principal</Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                              Substack (SLNX)
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {language === "pt"
                              ? "Reflexões sobre superdotação, melancolia, desenvolvimento pessoal e estudos. Desabafos sinceros sobre como vejo a realidade e as complexidades da vida."
                              : "Reflections on giftedness, melancholy, personal development and learning. Honest thoughts on how I see reality and life's complexities."}
                          </p>
                        </div>
                      </Card>
                    </a>

                    {/* Write.as Card (disabled) */}
                    <div
                      className="opacity-60 cursor-not-allowed"
                      title={language === "pt" ? "Em breve" : "Coming soon"}
                      data-testid="button-writer-writeas"
                    >
                      <Card className="overflow-hidden h-full">
                        {/* Background with gradient and icon */}
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-700/20 to-slate-600/10 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-black/40" />
                          <PenTool className="h-32 w-32 text-slate-400/30" />
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary">Em Breve</Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-semibold leading-tight text-muted-foreground">
                              Write.as
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground/70 leading-relaxed">
                            {language === "pt"
                              ? "Diários anônimos. Desabafos sinceros, melancolia profunda e reflexões sobre como eu vejo a realidade. Textos pesados sobre a minha vida, depressão e solidão."
                              : "Anonymous diaries. Honest confessions, deep melancholy and reflections on how I see reality. Heavy texts about my life, depression and loneliness."}
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* AdSense — In-article Writer */}

                  {/* Recent Posts Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-bold">
                        {language === "pt" ? "Publicações Recentes" : "Recent Posts"}
                      </h3>
                      <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {writerPosts.map((post, idx) => (
                        <a
                          key={idx}
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <Card className="overflow-hidden h-full hover-elevate transition-all duration-300 border-border/50 hover:border-primary/30 active:scale-[0.98]">
                            {/* Card Header Image */}
                            <div className="aspect-video overflow-hidden relative">
                              {post.imageUrl ? (
                                <img
                                  src={post.imageUrl}
                                  alt={post.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-purple-600/20 flex items-center justify-center">
                                  <SiSubstack className="w-12 h-12 text-purple-400/30" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                                <Badge variant="secondary" className="bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-tighter border-white/10 text-white">
                                  Substack
                                </Badge>
                                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" />
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 space-y-3">
                              <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              {post.description && (
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                  {post.description}
                                </p>
                              )}
                              <div className="pt-2 flex items-center text-[10px] font-bold text-primary uppercase tracking-widest gap-2">
                                {language === "pt" ? "Ler Publicação" : "Read Publication"}
                                <ChevronRight className="w-3 h-3" />
                              </div>
                            </div>
                          </Card>
                        </a>
                      ))}
                    </div>

                    {/* Dynamic projects from DB (if any) */}
                    {filteredProjects.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                        {filteredProjects.map(project => (
                          <ProjectCard key={project.id} project={project} language={language} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ) : (
              <TabsContent value={currentTab} className="mt-8">
                {/* Error State */}
                {isError ? (
                  <div className="text-center py-16 space-y-4" data-testid="error-state-content">
                    <p className="text-destructive font-medium">
                      {language === "pt" ? "Erro ao carregar projetos" : "Error loading projects"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {error instanceof Error ? error.message : (language === "pt" ? "Tente novamente mais tarde" : "Try again later")}
                    </p>
                  </div>
                ) : isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="loading-content-projects">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="h-96 bg-card border border-border rounded-lg animate-pulse" />
                    ))}
                  </div>
                ) : currentTab === "agriculture" ? (
                  <div className="space-y-8">
                    {/* AdSense — Display Agriculture */}
                    
                    {/* Agriculture Stories Card */}
                    <a
                      href="https://www.instagram.com/slx.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-agriculture-stories"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="aspect-square overflow-hidden bg-card relative order-2 md:order-1">
                            <img
                              src={photoAgricultureWork}
                              alt="Agriculture work"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          {/* Content */}
                          <div className="p-6 md:p-8 flex flex-col justify-center order-1 md:order-2">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                                  {language === "pt" ? "Meu Trabalho" : "My Work"}
                                </h3>
                                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                                  {language === "pt" ? "Stories do Instagram" : "Instagram Stories"}
                                </p>
                              </div>
                              <p className="text-base text-muted-foreground leading-relaxed">
                                {language === "pt"
                                  ? "No Instagram (@slx.wav) eu mostro o dia a dia no campo, a rotina na agricultura e o trabalho com a terra, do jeito que ele realmente é. Tenho certeza que você irá gostar."
                                  : "Follow my Instagram Stories (@slx.wav) for daily content about agriculture, cultivation techniques, sustainability and the beauty of working with the land. Stories that show the daily life of the agricultural process with a deep and reflective perspective."}
                              </p>
                              <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                                {language === "pt" ? "Ver Stories" : "View Stories"}
                                <ExternalLink className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>

                    {/* Projects Grid */}
                    {filteredProjects.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-6" data-testid="text-agriculture-projects">
                          {language === "pt" ? "YouTube" : "YouTube"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                          {filteredProjects.slice(0, 1).map(project => (
                            <ProjectCard key={project.id} project={project} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : currentTab === "development" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                    {/* AdSense — In-article Development */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    </div>
                    {/* Substack card first */}
                    <a
                      href="https://slnx.substack.com/?utm_campaign=profile&utm_medium=profile-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-dev-substack"
                    >
                      <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
                        {/* Background with gradient and icon */}
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/10 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-black/20" />
                          <SiSubstack className="h-32 w-32 text-purple-400/30 transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 space-y-2">
                              <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                                Substack
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-orange-500/10 text-orange-400 border-orange-500/20"
                              >
                                {language === "pt" ? "Dev Pessoal" : "Personal Dev"}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {language === "pt"
                              ? "Reflexões sobre superdotação, melancolia, desenvolvimento pessoal e estudos. Desabafos sinceros sobre como vejo a realidade e as complexidades da vida."
                              : "Reflections on giftedness, melancholy, personal development and learning. Honest thoughts on how I see reality and life's complexities."}
                          </p>
                        </div>
                      </Card>
                    </a>

                    {/* Development projects from storage (excluding duplicates if any) */}
                    {filteredProjects.slice(0, 1).map(project => (
                      <ProjectCard key={project.id} project={project} language={language} />
                    ))}
                  </div>
                ) : filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                    {filteredProjects.slice(0, 1).map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16" data-testid="empty-state-content">
                    <p className="text-muted-foreground">
                      {projects.length === 0
                        ? (language === "pt" ? "Nenhum projeto disponível no momento." : "No projects available at the moment.")
                        : (language === "pt" ? "Nenhum conteúdo encontrado nesta categoria ainda." : "No content found in this category yet.")}
                    </p>
                  </div>
                )}
              </TabsContent>
            )}
            {/* Advertisement Section - Bottom Region */}
            <div className="my-8">
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );

  return contentComponent;
}
