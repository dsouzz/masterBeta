document.addEventListener("DOMContentLoaded", function () {
    const usuarioNome = localStorage.getItem("usuarioNome");

    if (usuarioNome) {
        document.getElementById("msgBoasVindas").textContent = `Olá ${usuarioNome}, seja bem-vindo!`;
        document.getElementById("userName").textContent = usuarioNome;

        // Saudação de acordo com o horário
        const agora = new Date();
        const hora = agora.getHours();
        let saudacao;

        if (hora >= 5 && hora < 12) {
            saudacao = "bom dia, espero que tenha um ótimo começo de jornada!";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "boa tarde, como está seu dia até agora?";
        } else {
            saudacao = "boa noite, espero que tenha um descanso maravilhoso!";
        }

        document.getElementById("msgBoasVindas").textContent = `Olá ${usuarioNome}, ${saudacao}!`;
    } else {
        document.getElementById("msgBoasVindas").textContent = "Usuário não encontrado!";
        document.getElementById("userName").textContent = "Usuário não encontrado!";
    }
});


// Busca os posts de maneira dinâmica a partir do JSON
fetch("content.json")
    .then(response => response.json()) // Converte para objeto JS
    .then(data => {
        const imagens = data.imagens; // Array de imagens
        const descricoes = data.descricoes; // Array de descrições
        const usuarios = data.nomes;

        // Função para gerar uma hora aleatória
        function gerarHora() {
            let escolha = Math.floor(Math.random() * 3);

            let valor;

            switch (escolha) {
                case 0: // Gera um valor aleatório para horas (0 a 11)
                    valor = Math.floor(Math.random() * 12) + "h";
                    break;
                case 1: // Gera um valor aleatório para minutos (0 a 59)
                    valor = Math.floor(Math.random() * 60) + "m";
                    break;
                case 2: // Gera um valor aleatório para segundos (0 a 59)
                    valor = Math.floor(Math.random() * 60) + "s";
                    break;
            }

            return valor;
        }

        let hora = [];
        for (let i = 0; i < 1; i++) {
            hora.push(gerarHora());
        }


        // Função para gerar um post
        function gerarPost() {
            const imgAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
            const descAleatoria = descricoes[Math.floor(Math.random() * descricoes.length)];
            const usuAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];
            const horaAleatoria = gerarHora(); // Gera um horário diferente para cada post
            
            // Curtidas
            const curtidas = Math.floor(Math.random() * 1000000)
            const curtidasFormat = curtidas.toLocaleString('pt-BR')

            const post = document.createElement("div");
            post.classList.add("post");
            post.innerHTML = `
                <div class="profile">
                    <img src="./assets/defPFP.jpg" alt="pfp">
                    <p><b>${usuAleatorio}</b></p>
                </div>
                <p id="hour">Há ${horaAleatoria}</p>
                <br>
                <img src="assets/content/${imgAleatoria}" alt="Postagem">
                <div class="interactions">
                    <button class="like-btn">
                        <svg class="like-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <button>
                        <svg viewBox="0 0 32 32" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>comment-3</title>
                                <desc>Created with Sketch Beta.</desc>
                                <defs> </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                    <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -255.000000)"
                                        fill="#808080">
                                        <path
                                            d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
                                            id="comment-3" sketch:type="MSShapeGroup"> </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button class="share-btn">
                        <a href="mailto:">
                            <svg viewBox="0 0 24 24" fill="none" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                                        fill="#808080" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </a>
                    </button>
                </div>
                <p><b>${curtidasFormat} Curtidas</b></p>
                <p><b id="nameUs">${usuAleatorio}:</b> ${descAleatoria}</p>
            `;

            document.querySelector("#mainContent").appendChild(post);

            // Adiciona evento de clique ao botão de curtida APÓS ser inserido no DOM
            const likeButton = post.querySelector(".like-btn");
            const likeIcon = post.querySelector(".like-icon");

            likeButton.addEventListener("click", () => {
                likeIcon.classList.toggle("liked");
            });
        }

        let totalPosts = 0;
        const maxPosts = 300;
        const postsPorCarga = 15;

        // Seleciona os elementos principais
        const mainContent = document.querySelector("#mainContent");
        const endContent = document.querySelector("#endContent");

        // Gera os primeiros posts automaticamente ao carregar a página
        for (let i = 0; i < postsPorCarga; i++) {
            gerarPost();
        }

        // Cria a mensagem de fim (já adicionada no HTML, então apenas configuramos o texto)
        const mensagemFim = document.createElement("div");
        mensagemFim.id = "mensagemFim";
        mensagemFim.innerHTML = `<p>Que pena, parece que você chegou ao fim 😕</p>`;

        // Cria o botão de carregar mais posts
        const botaoCarregarMais = document.createElement("button");
        botaoCarregarMais.id = "botaoCarregarMais";
        botaoCarregarMais.innerText = "Carregar mais posts";

        // Evento para carregar mais posts ao clicar
        botaoCarregarMais.addEventListener("click", () => {
            for (let i = 0; i < postsPorCarga; i++) {
                gerarPost();
            }
        });

        // Adiciona os elementos ao <div id="endContent">
        endContent.appendChild(botaoCarregarMais);
        endContent.appendChild(mensagemFim);

    })
    .catch(error => console.error("Erro ao carregar JSON:", error));

// Script do Botão de Curtida
document.getElementById('likeBtn').addEventListener('click', function () {
    this.classList.toggle('liked');
});