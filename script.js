
/* ==========================================================================
   1. VARIÁVEIS GLOBAIS (:root) - Identidade Visual e Alto Contraste
   ========================================================================== */
:root {
    /* Cores Principais (Tema Agro/Sustentabilidade/Alerta) */
    --color-primary: #1b4d3e;       /* Verde Floresta Técnico (Sustentabilidade e Base) */
    --color-secondary: #e65c00;     /* Laranja Alerta/Chama (Atenção e Focos de Incêndio) */
    --color-accent: #f4f9f4;        /* Off-White Claro (Fundo para Alto Contraste) */
    
    /* Cores de Suporte */
    --color-dark: #111827;          /* Grafite Escuro para Textos Principais */
    --color-card-bg: #ffffff;       /* Branco Puro para blocos isolados */
    --color-error: #dc2626;         /* Vermelho para mensagens de erro em tela */
    --color-border: #cbd5e1;        /* Cinza claro para divisórias e bordas */

    /* Tipografia e Espaçamento */
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --radius: 8px;                  /* Bordas arredondadas suaves */
    --transition: all 0.3s ease;    /* Transições suaves para interatividade */
}

/* ==========================================================================
   2. RESET GLOBAL (*) - Consistência entre Navegadores
   ========================================================================== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-main);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ==========================================================================
   3. ESTILIZAÇÃO ESTRUTURAL (HTML Semântico)
   ========================================================================== */
body {
    background-color: var(--color-accent);
    color: var(--color-dark);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 2rem 1rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.1rem;
    opacity: 0.9;
}

main {
    flex: 1;
    max-width: 12
