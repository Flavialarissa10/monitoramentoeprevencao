/* ==========================================================================
   INTERATIVIDADE E VALIDAÇÃO: CALCULADORA DE RISCO DE INCÊNDIO
   ========================================================================== */

// 1. Captura dos elementos do DOM utilizando document.querySelector
const botaoCalcular = document.querySelector('#btn-calcular');
const inputTemperatura = document.querySelector('#input-temperatura');
const inputUmidade = document.querySelector('#input-umidade');
const containerResultado = document.querySelector('#container-resultado');

// 2. Adição do escutador de eventos (Event Listener) para o clique do botão
botaoCalcular.addEventListener('click', function(event) {
    // Impede o recarregamento da página caso esteja dentro de um formulário
    event.preventDefault(); 
    
    // Limpa resultados ou erros anteriores da tela para atualizar a UX
    containerResultado.innerHTML = '';

    // Captura e conversão dos valores digitados pelo usuário
    const temperatura = parseFloat(inputTemperatura.value);
    const umidade = parseFloat(inputUmidade.value);

    /* ==========================================================================
       VALIDAÇÃO ESTRITA: Intercepção de dados inválidos
       ========================================================================== */
    
    // Validação 1: Campos Vazios (IsNaN verifica se o valor não é um número válido)
    if (isNaN(temperatura) || isNaN(umidade)) {
        renderizarErro("Por favor, preencha todos os campos numéricos antes de calcular.");
        return; // Interrompe a execução do código (Early Return)
    }

    // Validação 2: Valores Negativos Extremos ou fora da realidade física local
    if (temperatura < 0 || umidade < 0) {
        renderizarErro("Atenção: Não são permitidos valores negativos para temperatura ou umidade.");
        return;
    }

    // Validação 3: Consistência de dados (A umidade relativa do ar não pode passar de 100%)
    if (umidade > 100) {
        renderizarErro("A umidade relativa do ar não pode ser superior a 100%.");
        return;
    }

    /* ==========================================================================
       PROCESSAMENTO DE DADOS: Lógica de Alerta (Baseada em dados do Setor Agro)
       ========================================================================== */
    
    let nivelRisco = "";
    let recomendacao = "";
    let classeCSS = "";

    // Regra de negócio simples para monitoramento de risco ambiental
    if (temperatura > 32 && umidade < 30) {
        nivelRisco = "CRÍTICO (ALERTA MÁXIMO)";
        recomendacao = "Risco altíssimo de ignição acidental. Evite a manutenção de colhedoras nas horas mais quentes do dia para evitar faíscas. Realize a checagem imediata dos aceiros da propriedade.";
        classeCSS = "color: #dc2626; font-weight: bold;"; // Vermelho erro/alerta severo
    } else if (temperatura > 25 || umidade < 50) {
        nivelRisco = "MODERADO / ATENÇÃO";
        recomendacao = "Condições favoráveis à propagação de fumaça e fogo. Mantenha os tanques de água de prontidão e avise os brigadistas vizinhos.";
        classeCSS = "color: #e65c00; font-weight: bold;"; // Laranja secundário
    } else {
        nivelRisco = "BAIXO / SEGURO";
        recomendacao = "Condições meteorológicas estáveis. Continue seguindo o manual de boas práticas do programa Agrinho.";
        classeCSS = "color: #1b4d3e; font-weight: bold;"; // Verde primário
    }

    /* ==========================================================================
       RENDERIZAÇÃO NA TELA: Exibição elegante do resultado final para o usuário
       ========================================================================== */
    renderizarResultado(nivelRisco, recomendacao, classeCSS);
});

/* ==========================================================================
   FUNÇÕES AUXILIARES DE RENDERIZAÇÃO (Injeção de HTML dinâmico)
   ========================================================================== */

// Função para gerar o alerta de erro amigável DIRETAMENTE NA TELA
function renderizarErro(mensagem) {
    containerResultado.innerHTML = `
        <div class="error-message">
            <span>⚠️</span> 
            <p>${mensagem}</p>
        </div>
    `;
}

// Função para renderizar o sucesso e o cálculo estruturado
function renderizarResultado(risco, textoRecomendacao, estiloRisco) {
    containerResultado.innerHTML = `
        <div class="result-box">
            <h3>Análise Meteorológica Rural</h3>
            <p style="margin: 0.5rem 0;">Status do Foco: <span style="${estiloRisco}">${risco}</span></p>
            <p><strong>Recomendação Técnica:</strong> ${textoRecomendacao}</p>
        </div>
    `;
}
