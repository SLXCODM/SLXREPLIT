import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import type { Weapon } from "@shared/weaponsData";

interface WeaponCardProps {
    weapon: Weapon;
}

export default function WeaponCard({ weapon }: WeaponCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(weapon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col bg-card border-border/50">
            {/* Image Area */}
            <div className="aspect-video relative bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center overflow-hidden">
                <img
                    src={weapon.image}
                    alt={weapon.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {weapon.type}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col gap-3">
                <div>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                        {weapon.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {weapon.description}
                    </p>
                </div>

                <div className="mt-auto pt-2">
                    <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-md border border-border/50">
                        <code className="text-xs font-mono flex-1 truncate select-all">
                            {weapon.code}
                        </code>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 shrink-0 hover:bg-background"
                            onClick={handleCopy}
                            title="Copiar código"
                        >
                            {copied ? (
                                <Check className="h-3 w-3 text-green-500" />
                            ) : (
                                <Copy className="h-3 w-3 text-muted-foreground" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
