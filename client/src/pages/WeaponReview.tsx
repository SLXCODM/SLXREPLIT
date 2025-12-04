import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { weaponsData, type Weapon } from "@shared/weaponsData";

const CATEGORIES = [
    { label: "Assault", value: "Assault Rifle" },
    { label: "Sniper", value: "Sniper" },
    { label: "LMG", value: "LMG" },
    { label: "SMG", value: "SMG" },
    { label: "Shotgun", value: "Shotgun" },
    { label: "Marksman", value: "Marksman" },
    { label: "Pistol", value: "Pistol" },
];

export default function WeaponReview() {
    const [index, setIndex] = useState(0);
    const [weapons, setWeapons] = useState<Weapon[]>(weaponsData);
    const currentWeapon = weapons[index];

    const handleCategorySelect = (category: Weapon["type"]) => {
        const newWeapons = [...weapons];
        newWeapons[index] = { ...currentWeapon, type: category };
        setWeapons(newWeapons);

        // Auto-advance
        if (index < weapons.length - 1) {
            setIndex(index + 1);
        }
    };

    const handleSave = () => {
        const json = JSON.stringify(weapons, null, 2);
        const blob = new Blob([`export const weaponsData = ${json};`], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "weaponsData.ts";
        a.click();
    };

    if (!currentWeapon) return <div>Carregando...</div>;

    return (
        <div className="min-h-screen bg-background p-4 flex flex-col items-center">
            <div className="w-full max-w-[95vw] flex gap-8 h-[90vh]">
                {/* Image Side */}
                <div className="flex-[2] flex items-center justify-center bg-black/5 rounded-lg">
                    <div className="relative w-full h-full flex flex-col">
                        <Card className="flex-1 flex flex-col overflow-hidden">
                            <CardContent className="p-2 flex-1 flex items-center justify-center bg-slate-900">
                                <img
                                    src={currentWeapon.image}
                                    alt={currentWeapon.name}
                                    className="w-full h-full object-contain"
                                />
                            </CardContent>
                        </Card>
                        <div className="mt-2 text-center text-muted-foreground font-bold text-xl">
                            {currentWeapon.name} - {currentWeapon.code}
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                            Arma {index + 1} de {weapons.length}
                        </div>
                    </div>
                </div>

                {/* Categories Side */}
                <div className="flex-1 flex flex-col justify-center space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold">Categoria Atual:</h2>
                        <div className="text-3xl text-primary font-black">
                            {currentWeapon.type || "Sem Categoria"}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {CATEGORIES.map((cat) => (
                            <Button
                                key={cat.value}
                                variant={currentWeapon.type === cat.value ? "default" : "outline"}
                                className="h-24 text-xl font-bold"
                                onClick={() => handleCategorySelect(cat.value as Weapon["type"])}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-8">
                        <Button
                            variant="secondary"
                            className="flex-1 h-12"
                            onClick={() => index > 0 && setIndex(index - 1)}
                        >
                            Anterior
                        </Button>
                        <Button
                            variant="secondary"
                            className="flex-1 h-12"
                            onClick={() => index < weapons.length - 1 && setIndex(index + 1)}
                        >
                            Próximo
                        </Button>
                    </div>

                    <Button className="w-full h-16 text-xl mt-auto" onClick={handleSave}>
                        Baixar Arquivo Final
                    </Button>
                </div>
            </div>
        </div>
    );
}
