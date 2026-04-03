import { useEffect } from 'react';

interface AdSenseUnitProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle' | 'fluid';
  layout?: 'in-article'; // usado apenas para anúncios In-article
  style?: React.CSSProperties;
  className?: string;
  /** Minimum height to reserve space for the ad, preventing layout shift */
  minHeight?: number;
}

// ⚠️ IMPORTANTE: Substitua os valores de 'slot' nos componentes que usam AdSenseUnit
// pelos IDs reais gerados no painel do Google AdSense.
// Slots fictícios (ex: "1234567890") não exibem anúncios reais.

export function AdSenseUnit({ 
  slot, 
  format = 'auto',
  layout,
  style = {},
  className = '',
  minHeight = 90,
}: AdSenseUnitProps) {
  const isPlaceholder = slot === 'SUBSTITUA_PELO_SLOT_REAL' || slot === '1234567890' || slot === '2345678901';

  useEffect(() => {
    if (isPlaceholder) return; // Don't push fake slots
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.debug('AdSense error:', error);
    }
  }, [slot, isPlaceholder]);

  // In development or with placeholder slots, show a visible placeholder
  if (isPlaceholder || import.meta.env.DEV) {
    return (
      <div
        className={`my-6 flex items-center justify-center rounded-lg border-2 border-dashed border-border/40 bg-card/30 text-muted-foreground text-xs font-mono select-none ${className}`}
        style={{ minHeight }}
      >
        <span className="opacity-40">[ Anúncio — substitua o slot pelo ID real do AdSense ]</span>
      </div>
    );
  }

  return (
    <div
      className={`my-6 overflow-hidden ${layout === 'in-article' ? 'text-center' : ''} ${className}`}
      style={{ minHeight }}
      aria-label="Publicidade"
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          ...(layout === 'in-article' ? { textAlign: 'center' } : {}),
          ...style,
        }}
        data-ad-client="ca-pub-2053964731459379"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { 'data-ad-layout': layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
