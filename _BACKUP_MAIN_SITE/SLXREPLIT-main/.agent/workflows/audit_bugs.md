---
description: Workflow para auditoria completa de bugs e correção
---

1. Ler o arquivo `SLX_PROJECT_MEMORY.md` para entender o contexto atual e regras (Golden Rules).
2. Analisar os arquivos recentes na pasta `client/` e `client/public/` procurando por:
   - Listeners de eventos faltantes (botões sem ação).
   - Erros de referência (variáveis não definidas).
   - Inconsistências de tradução (strings hardcoded).
3. Criar ou atualizar o artefato `bug_report.md` com a lista de problemas encontrados.
4. Parar e solicitar aprovação do usuário para aplicar as correções.
5. Se aprovado, aplicar as correções um arquivo por vez.
6. Atualizar `task.md` com os bugs corrigidos.
7. Executar `git push` para salvar as correções.
