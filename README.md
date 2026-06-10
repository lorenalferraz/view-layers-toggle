# Comparar Cenários

Widget para Experience Builder que compara dois cenários climáticos lado a lado em **dois mapas** com a mesma base de dados.

## Cenários

- **Atual** — índice de conflito atual
- **Moderado** — SSP2-4.5 (camada `grande_245`)
- **Pessimista** — SSP5-8.5 (camada `grande_585`)

## Configuração na experiência

1. Adicione **dois** widgets de mapa na página (esquerda e direita).
2. Configure este widget nas propriedades:
   - **Mapa esquerdo** — primeiro mapa da comparação
   - **Mapa direito** — segundo mapa da comparação
3. Posicione o widget como painel flutuante (estilo pill, igual ao Filtro Sub-bacias).

### Layout em duas partes (opcional)

Em **Parte exibida**, escolha:

- **Completo (formato em T)** — barra de filtros + indicadores/legenda no mesmo widget (padrão).
- **Somente barra de filtros** — apenas os seletores; controle dos mapas.
- **Somente indicadores e legenda** — gráficos e legenda; lê o estado da barra de filtros.

Para separar na página, adicione **duas instâncias** do widget:

1. Uma com **Somente barra de filtros** (configure os mapas).
2. Outra com **Somente indicadores e legenda**.
3. Use o **mesmo ID de vínculo** nas duas (ex.: `default`).

## Uso

- Selecione **bacia** e **sub-bacia** — o filtro é aplicado nos dois mapas.
- Escolha o cenário de cada mapa (ex.: Atual à esquerda, Pessimista à direita).
- Use **Sincronizar extensão** para manter pan/zoom alinhados entre os mapas.

## Camadas

As URLs padrão apontam para o ambiente MPBA (`meioambiente.sistemas.mpba.mp.br`). Podem ser alteradas nas configurações do widget.
