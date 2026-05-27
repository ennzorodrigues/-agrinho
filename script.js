function calcularSimulacao() {
    // Captura o valor digitado pelo usuário
    const gastoMensal = parseFloat(document.getElementById('gasto').value);
    
    // Validação simples
    if (isNaN(gastoMensal) || gastoMensal <= 0) {
        alert("Por favor, insira um valor válido maior que zero.");
        return;
    }

    // Cálculos matemáticos aproximados baseados em médias de mercado:
    // 1. Economia anual estimada (cerca de 90% da conta multiplicada por 12 meses)
    const economiaAnual = (gastoMensal * 0.90) * 12;

    /* 2. Estimativa de placas:
       Considerando uma tarifa média de R$ 0,95 por kWh e que cada painel solar 
       produza em média 40 kWh por mês no campo.
    */
    const kwhEstimado = gastoMensal / 0.95;
    const numeroPaineis = Math.ceil(kwhEstimado / 40);

    // Inserindo os resultados na tela
    document.getElementById('economia-anual').innerText = economiaAnual.toFixed(2).replace('.', ',');
    document.getElementById('paineis').innerText = numeroPaineis;

    // Mostra a caixinha de resultado que estava escondida
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');
}