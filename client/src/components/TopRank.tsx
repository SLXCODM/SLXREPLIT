import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Ranking {
    id: string;
    username: string;
    score: number;
}

export default function TopRank({ gameId }: { gameId: string }) {
    const [rankings, setRankings] = useState<Ranking[]>([]);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();

    const t = {
        pt: {
            title: 'Top Rankings',
            loading: 'Carregando...',
            empty: 'Ainda não há recordes.',
            score: 'pontos'
        },
        en: {
            title: 'Top Rankings',
            loading: 'Loading...',
            empty: 'No records yet.',
            score: 'pts'
        }
    }[language as 'pt' | 'en'];

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const response = await fetch(`/api/rankings/${gameId}`);
                if (response.ok) {
                    const data = await response.json();
                    setRankings(data);
                }
            } catch (error) {
                console.error('Error fetching rankings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRankings();
    }, [gameId]);

    const getRankIcon = (index: number) => {
        switch (index) {
            case 0: return <Trophy className="w-6 h-6 text-yellow-400" />;
            case 1: return <Medal className="w-6 h-6 text-gray-400" />;
            case 2: return <Medal className="w-6 h-6 text-amber-600" />;
            default: return <span className="w-6 text-center font-bold text-muted-foreground">{index + 1}</span>;
        }
    };

    return (
        <Card className="w-full bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
            <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <Trophy className="text-primary w-6 h-6" />
                    {t.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center p-12"
                        >
                            <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        </motion.div>
                    ) : rankings.length > 0 ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="divide-y divide-border/50"
                        >
                            {rankings.map((rank, index) => (
                                <motion.div
                                    key={rank.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-8 flex justify-center">
                                        {getRankIcon(index)}
                                    </div>
                                    <div className="flex-grow flex items-center gap-3">
                                        <div className="bg-primary/10 p-2 rounded-full group-hover:scale-110 transition-transform">
                                            <User className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-semibold truncate max-w-[150px]">{rank.username}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-primary">{rank.score}</span>
                                        <span className="text-[10px] block uppercase tracking-wider text-muted-foreground font-medium">
                                            {t.score}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.p
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center p-8 text-muted-foreground italic"
                        >
                            {t.empty}
                        </motion.p>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
