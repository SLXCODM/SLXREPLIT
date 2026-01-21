import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut, User as UserIcon } from "lucide-react";

export function CommunityHeader() {
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();

    const { data: auth } = useQuery({
        queryKey: ["/api/community/auth/me"],
        queryFn: async () => {
            const res = await fetch("/api/community/auth/me");
            if (!res.ok) return { loggedIn: false };
            return res.json();
        }
    });

    const logout = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/community/auth/logout", { method: "POST" });
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/community/auth/me"] });
            setLocation("/community");
        }
    });

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/community">
                    <div className="text-xl font-bold tracking-tighter text-emerald-500 cursor-pointer hover:text-emerald-400 transition-colors">
                        SLX <span className="text-white">Community</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/community/gallery">
                        <span className="hover:text-emerald-400 transition-colors cursor-pointer">Resultados</span>
                    </Link>
                    <a href="/community#metodologia" className="hover:text-emerald-400 transition-colors">Metodologia</a>
                    <a href="/community#analista" className="hover:text-emerald-400 transition-colors">O Analista</a>
                    <a href="/community#faq" className="hover:text-emerald-400 transition-colors">Dúvidas</a>
                </nav>

                <div className="flex items-center gap-4">
                    {auth?.loggedIn ? (
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                                <UserIcon className="w-3 h-3 text-emerald-500" />
                                <span className="max-w-[100px] truncate">{auth.user.name}</span>
                                {auth.user.role === "admin" && (
                                    <span className="ml-1 text-[8px] bg-emerald-500/20 text-emerald-400 px-1 rounded-sm uppercase tracking-tighter">Admin</span>
                                )}
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => logout.mutate()}
                                className="text-zinc-500 hover:text-red-400 hover:bg-red-500/10 p-2 sm:px-3"
                            >
                                <LogOut className="w-4 h-4 md:mr-2" />
                                <span className="hidden md:inline text-xs">Sair</span>
                            </Button>

                            {auth.user.role === "admin" && (
                                <Link href="/community/admin">
                                    <Button size="sm" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 rounded-full px-6 font-semibold">
                                        Painel do Analista
                                    </Button>
                                </Link>
                            )}

                            <Link href="/community/dashboard">
                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 font-semibold shadow-emerald-900/20 shadow-lg">
                                    Área do Aluno
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href="/community/login">
                                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-900">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/community/dashboard">
                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 font-semibold shadow-emerald-900/20 shadow-lg">
                                    Área do Aluno
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
