---
description: Workflow para testar as funcionalidades críticas do site e jogos
---

1. Listar todos os jogos ativos no `SLX_PROJECT_MEMORY.md`.
2. Para cada jogo, verificar (lendo o código):
   - Se o botão "Iniciar" tem listener.
   - Se a função `showAd` chama o callback corretamente.
   - Se o botão "Home" e "Hub" existem e têm os links corretos.
   - Se as chaves de tradução (`data-i18n`) principais estão presentes.
3. Verificar configurações de Deploy:
   - Checar `vercel.json` por regras de rewrite.
   - Checar `package.json` por scripts de build.
4. Gerar um relatório rápido no chat confirmando o status de cada item (Passou/Falhou).
