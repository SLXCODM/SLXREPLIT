import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import WeaponCard from "@/components/WeaponCard";
import FollowToUnlock from "@/components/FollowToUnlock";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@shared/schema";
import { weaponsData } from "@shared/weaponsData";
import { SiSubstack } from "react-icons/si";
import { PenTool, ExternalLink } from "lucide-react";

export default function Content() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("all");
  const [weaponCategory, setWeaponCategory] = useState("Assault");
  const [searchQuery, setSearchQuery] = useState("");
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

  const weaponCategories = [
    "Assault",
    "Sniper",
    "LMG",
    "SMG",
    "Shotgun",
    "Marksman",
    "Pistol",
  ];

  const contentTexts = {
    pt: {
      title: "Conteúdo",
      description: "Explore meus projetos, tutoriais e criações em diferentes áreas",
      searchPlaceholder: "Pesquisar arma...",
      noWeapons: "Nenhuma arma encontrada.",
    },
    en: {
      title: "Content",
      description: "Explore my projects, tutorials and creations in different areas",
      searchPlaceholder: "Search weapon...",
      noWeapons: "No weapons found.",
    },
  };

  const ct = contentTexts[language];

  // Set default tab to gaming
  const defaultTab = "gaming";
  const currentTab = activeTab === "all" ? defaultTab : activeTab;

  const filteredProjects = currentTab === "writer"
    ? []
    : projects.filter(p => p.category === currentTab);

  // Filter weapons
  const filteredWeapons = weaponsData.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = weaponCategory === "All" || w.type === weaponCategory;
    return matchesSearch && matchesCategory;
  });

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
          <Tabs value={currentTab} onValueChange={setActiveTab} className="w-full">
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
                <TabsContent value={currentTab} className="mt-8 space-y-8">
                  {/* Weapon Search and Filter */}
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-lg border border-border/50">
                    <div className="relative w-full md:w-72">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={ct.searchPlaceholder}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                      {weaponCategories.map(cat => (
                        <Button
                          key={cat}
                          variant={weaponCategory === cat ? "default" : "outline"}
                          size="sm"
                          onClick={() => setWeaponCategory(cat)}
                          className="whitespace-nowrap"
                        >
                          {cat}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Weapons Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="grid-weapons">
                    {filteredWeapons.length > 0 ? (
                      filteredWeapons.map(weapon => (
                        <WeaponCard key={weapon.id} weapon={weapon} />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12 text-muted-foreground">
                        {ct.noWeapons}
                      </div>
                    )}
                  </div>
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
                  {/* Photography Grid (omitted for brevity) */}
                </div>
              </TabsContent>
            ) : currentTab === "agriculture" ? (
              <TabsContent value={currentTab} className="mt-8">
                <div className="space-y-8">
                  {/* Agriculture Stories Card */}
                  <a href="https://www.instagram.com/slx.wav" target="_blank" rel="noopener noreferrer" data-testid="button-agriculture-stories">
                    <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="aspect-square overflow-hidden bg-card relative order-2 md:order-1">
                          <img src="/attached_assets/photo-agriculture-work.jpg" alt="Agriculture work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
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
                          </div>
                          <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                            {language === "pt" ? "Ver Stories" : "View Stories"}
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                  {filteredProjects.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-6" data-testid="text-agriculture-projects">{language === "pt" ? "YouTube" : "YouTube"}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                        {filteredProjects.map(project => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            ) : currentTab === "development" ? (
              <TabsContent value={currentTab} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                  <a href="https://slnx.substack.com/?utm_campaign=profile&utm_medium=profile-page" target="_blank" rel="noopener noreferrer" data-testid="button-dev-substack">
                    <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
                      <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/10 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <SiSubstack className="h-32 w-32 text-purple-400/30 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 space-y-2">
                            <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">Substack</h3>
                            <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
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
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            ) : filteredProjects.length > 0 ? (
              <TabsContent value={currentTab} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="grid-content-projects">
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            ) : (
              <TabsContent value={currentTab} className="mt-8">
                <div className="text-center py-16" data-testid="empty-state-content">
                  <p className="text-muted-foreground">
                    {projects.length === 0
                      ? language === "pt" ? "Nenhum projeto disponível no momento." : "No projects available at the moment."
                      : language === "pt" ? "Nenhum conteúdo encontrado nesta categoria ainda." : "No content found in this category yet."}
                  </p>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
        <div className="mt-16 mb-8">
          <AdSenseUnit slot="5678901234" format="auto" />
        </div>
      </div>
    </div>
  );

  return contentComponent;
}
