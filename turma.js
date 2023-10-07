document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");
    const cursoInput = document.getElementById("curso");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = nomeInput.value.trim();
        const idade = idadeInput.value.trim();
        const curso = cursoInput.value.trim();

        // Validações
        let isValid = true;

        if (nome === "") {
            setError("nomeError", "Por favor, insira o nome do aluno.");
            isValid = false;
        } else {
            setError("nomeError", "");
        }

        if (idade === "") {
            setError("idadeError", "Por favor, insira a idade do aluno.");
            isValid = false;
        } else if (isNaN(idade) || idade < 0) {
            setError("idadeError", "A idade deve ser um número positivo.");
            isValid = false;
        } else {
            setError("idadeError", "");
        }

        if (curso === "") {
            setError("cursoError", "Por favor, insira o curso do aluno.");
            isValid = false;
        } else {
            setError("cursoError", "");
        }

        if (isValid) {
            // Se todas as validações passarem, você pode enviar os dados para onde for necessário.
            // Por exemplo, você pode criar um objeto aluno e fazer algo com ele.

            const aluno = {
                nome: nome,
                idade: idade,
                curso: curso
            };

            // Limpe o formulário após o envio bem-sucedido
            form.reset();
        }
    });

    function setError(id, message) {
        const errorSpan = document.getElementById(id);
        errorSpan.textContent = message;
    }
});
