import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;

            return (
                <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center text-white font-sans">
                    <div className="p-4 bg-red-500/10 rounded-full mb-6 border border-red-500/20">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 text-red-100">Ops! Algo deu errado.</h1>
                    <p className="text-zinc-400 max-w-md mb-8">
                        Ocorreu um erro inesperado ao carregar esta página.
                    </p>

                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 text-left max-w-lg w-full overflow-auto mb-8 font-mono text-xs text-red-300">
                        {this.state.error?.message || "Erro desconhecido"}
                    </div>

                    <Button
                        onClick={() => window.location.reload()}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 font-bold"
                    >
                        <RefreshCw className="mr-2 w-4 h-4" /> Recarregar Página
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}
