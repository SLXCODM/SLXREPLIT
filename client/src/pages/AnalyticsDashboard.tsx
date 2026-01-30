import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, AreaChart, Area
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, TrendingUp, Users, MousePointer2, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function AnalyticsDashboard() {
    const [token, setToken] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [days, setDays] = useState(7);

    // Check for token in URL on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlToken = params.get("token");
        if (urlToken) {
            setToken(urlToken);
            setIsAuthorized(true);
        }
    }, []);

    const { data: stats, isLoading, error, refetch } = useQuery({
        queryKey: ["/api/analytics/stats", days, token],
        queryFn: async () => {
            const response = await fetch(`/api/analytics/stats?token=${encodeURIComponent(token)}&days=${days}`);
            if (!response.ok) throw new Error("Não autorizado ou erro no servidor");
            return response.json();
        },
        enabled: isAuthorized && !!token,
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuthorized(true);
        refetch();
    };

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-md border-primary/20 bg-black/40 backdrop-blur-xl">
                    <CardHeader className="text-center">
                        <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                        <CardTitle className="text-2xl font-bold tracking-tighter">SLX ANALYTICS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input
                                type="password"
                                placeholder="Insira o seu Token de Acesso"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                className="bg-white/5 border-white/10"
                            />
                            <Button type="submit" className="w-full font-bold">
                                ACESSAR PAINEL
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 pt-24">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter mb-2">TRAFFIC DASHBOARD</h1>
                        <p className="text-muted-foreground italic">Monitoramento de tráfego em tempo real</p>
                    </div>
                    <div className="flex gap-2">
                        {[7, 30, 90].map((d) => (
                            <Button
                                key={d}
                                variant={days === d ? "default" : "outline"}
                                size="sm"
                                onClick={() => setDays(d)}
                                className="rounded-full px-6"
                            >
                                {d} dias
                            </Button>
                        ))}
                    </div>
                </div>

                {error ? (
                    <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl text-center">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Token Inválido ou Erro</h2>
                        <p className="text-muted-foreground mb-4">Verifique se o seu ANALYTICS_SECRET está correto.</p>
                        <Button onClick={() => setIsAuthorized(false)} variant="outline">Voltar</Button>
                    </div>
                ) : isLoading ? (
                    <div className="flex items-center justify-center h-96">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : (
                    <>
                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="bg-neutral-900/50 border-white/5 border-l-4 border-l-primary overflow-hidden">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">TOTAL DE VISITAS</p>
                                        <h3 className="text-4xl font-black">{stats.total}</h3>
                                    </div>
                                    <Users className="w-10 h-10 text-primary opacity-50" />
                                </CardContent>
                            </Card>

                            <Card className="bg-neutral-900/50 border-white/5 overflow-hidden">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">VISITAS HOJE</p>
                                        <h3 className="text-4xl font-black">
                                            {stats.daily.length > 0 ? stats.daily[stats.daily.length - 1].count : 0}
                                        </h3>
                                    </div>
                                    <TrendingUp className="w-10 h-10 text-green-500/50" />
                                </CardContent>
                            </Card>

                            <Card className="bg-neutral-900/50 border-white/5 overflow-hidden">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">PÁGINA MAIS VISTA</p>
                                        <h3 className="text-xl font-bold truncate max-w-[200px]">
                                            {stats.paths.length > 0 ? stats.paths[0].path : "-"}
                                        </h3>
                                    </div>
                                    <MousePointer2 className="w-10 h-10 text-blue-500/50" />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Chart */}
                        <Card className="bg-neutral-900/50 border-white/5 p-6">
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-lg font-bold">Fluxo de Tráfego Diário</CardTitle>
                            </CardHeader>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={stats.daily}>
                                        <defs>
                                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                                        <XAxis
                                            dataKey="date"
                                            stroke="#666"
                                            tickFormatter={(dt) => format(new Date(dt), "dd/MM", { locale: ptBR })}
                                            tick={{ fontSize: 12 }}
                                        />
                                        <YAxis stroke="#666" tick={{ fontSize: 12 }} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "12px" }}
                                            labelFormatter={(dt) => format(new Date(dt), "dd MMM yyyy", { locale: ptBR })}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="count"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorCount)"
                                            name="Visitas"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        {/* Tables Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="bg-neutral-900/50 border-white/5 p-6">
                                <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg font-bold">Páginas Populares</CardTitle>
                                </CardHeader>
                                <div className="space-y-4">
                                    {stats.paths.slice(0, 10).map((p: any, i: number) => (
                                        <div key={p.path} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs text-muted-foreground w-4">{i + 1}</span>
                                                <span className="text-sm font-medium group-hover:text-primary transition-colors">{p.path}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary"
                                                        style={{ width: `${(p.count / stats.total) * 100}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold tabular-nums">{p.count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Tips for Sales */}
                            <div className="space-y-6">
                                <Card className="bg-primary/5 border-primary/20 border-dashed border-2 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                        <TrendingUp size={120} />
                                    </div>
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                                            ESTRATÉGIA <TrendingUp className="text-primary" />
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed italic mb-6">
                                            "Percebeu que uma página específica está com muitas visitas? Tente focar seu conteúdo principal nela para aumentar o engajamento."
                                        </p>
                                        <div className="flex gap-4">
                                            <Button className="font-bold underline" variant="outline" onClick={() => window.open('/conteudo', '_blank')}>Ver Meu Conteúdo</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
