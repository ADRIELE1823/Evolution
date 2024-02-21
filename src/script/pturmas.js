
    // Obtenha os elementos de seleção
    const selectTurma = document.getElementById("turma");
    const selectAno = document.getElementById("ano");

    // Opções de ano para cada turma
    const opcoesAno = {
        ti: ["1", "2", "3", "4"],
        eletromecanica: ["1", "2", "3", "4"],
    };

    // Evento de mudança no elemento de seleção de turma
    selectTurma.addEventListener("change", function () {
        const turmaSelecionada = selectTurma.value;
        const anosDisponiveis = opcoesAno[turmaSelecionada] || [];

        // Limpe as opções existentes
        selectAno.innerHTML = "";

        // Adicione as novas opções
        anosDisponiveis.forEach((ano) => {
            const option = document.createElement("option");
            option.value = ano;
            option.textContent = `${ano}º Ano`;
            selectAno.appendChild(option);
        });
    });

