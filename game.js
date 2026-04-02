const Game = {
            // =========================================
            // 1. ESTADO DO JOGO
            // =========================================
            userName: "",
            userAge: "",
            currentCat: "",
            currentIdx: 0,
            isMuted: false,
            progress: { identificacao: 0, emocoes: 0, intrusos: 0, quantidades: 0, arrastar: 0 },

            // =========================================
            // 2. CONFIGURAÇÕES E FASES
            // =========================================
            meta: {
                identificacao: { start: "🏠", end: "🚀", title: "Missão Espacial", bg: "Primeirocaminho.jpeg", startPos: { left: 50, top: 10 }, endPos: { left: 55, top: 92 }, Coords: [{ left: 60, top: 25 }, { left: 53, top: 44 }, { left: 39, top: 60 }, { left: 56, top: 69 }, { left: 43, top: 85 }] },
                emocoes: { start: "🏠", end: "🏰", title: "Reino dos Sentimentos", bg: "SegundoCaminho.jpeg", startPos: { left: 56, top: 10 }, endPos: { left: 60, top: 90 }, Coords: [{ left: 47, top: 28 }, { left: 58, top: 48 }, { left: 43, top: 61 }, { left: 56, top: 72 }, { left: 45, top: 86 }] },
                intrusos: { start: "🏠", end: "🏝️", title: "Ilha Misteriosa", bg: "TerceiroCaminho.jpeg", startPos: { left: 45, top: 10 }, endPos: { left: 44, top: 92 }, Coords: [{ left: 37, top: 27 }, { left: 49, top: 35 }, { left: 45, top: 53 }, { left: 56, top: 62 }, { left: 53, top: 80 }] },
                quantidades: { start: "🏠", end: "🏔️", title: "Montanha dos Números", bg: "QuartoCaminho.jpeg", startPos: { left: 50, top: 9 }, endPos: { left: 49, top: 92 }, Coords: [{ left: 47, top: 30 }, { left: 57, top: 40 }, { left: 56, top: 60 }, { left: 45, top: 70 }, { left: 39, top: 86 }] },
                arrastar: { start: "🏠", end: "🌳", title: "Floresta Mágica", bg: "QuintoCaminho.jpeg", startPos: { left: 56, top: 9 }, endPos: { left: 53, top: 90 }, Coords: [{ left: 53, top: 30 }, { left: 59, top: 47 }, { left: 43, top: 55 }, { left: 55, top: 70 }, { left: 41, top: 80 }] }
            },

            levels: {
                identificacao: [
                    { type: 'click', task: 'Ache a Estrela', items: ['🍎', '🎈', '⭐', '🍀', '💎'], correct: '⭐' },
                    { type: 'click', task: 'Encontre o Sol', items: ['☁️', '🌙', '☀️', '⭐', '🌈'], correct: '☀️' },
                    { type: 'click', task: 'Cadê a Borboleta?', items: ['🐜', '🐝', '🦋', '🕷️', '🦗'], correct: '🦋' },
                    { type: 'click', task: 'Ache o Avião', items: ['🚗', '🚲', '✈️', '🚢', '🚜'], correct: '✈️' },
                    { type: 'click', task: 'Onde está o Presente?', items: ['📦', '🎁', '🛍️', '🎒', '💼'], correct: '🎁' }
                ],
                emocoes: [
                    { type: 'click', task: 'Quem está Feliz?', items: ['😢', '😡', '😊', '😴', '🤢'], correct: '😊' },
                    { type: 'click', task: 'Quem está Triste?', items: ['😂', '😎', '😢', '🤩', '😜'], correct: '😢' },
                    { type: 'click', task: 'Quem está Bravo?', items: ['😇', '😡', '😱', '😍', '🤔'], correct: '😡' },
                    { type: 'click', task: 'Quem está com Sono?', items: ['😴', '🙄', '🥳', '🤓', '🤡'], correct: '😴' },
                    { type: 'click', task: 'Quem está Assustado?', items: ['🥶', '😱', '🤤', '🤠', '🤫'], correct: '😱' }
                ],
                intrusos: [
                    { type: 'click', task: 'O que NÃO é fruta?', items: ['🍎', '🍌', '👟', '🍇', '🍓'], correct: '👟' },
                    { type: 'click', task: 'O que NÃO é animal?', items: ['🐶', '🐱', '🦁', '🚗', '🐘'], correct: '🚗' },
                    { type: 'click', task: 'O que NÃO é de comer?', items: ['🍕', '🍔', '🍦', '🔨', '🍎'], correct: '🔨' },
                    { type: 'click', task: 'O que NÃO é brinquedo?', items: ['🧸', '🪁', '🏐', '🥦', '🪀'], correct: '🥦' },
                    { type: 'click', task: 'O que NÃO usamos no frio?', items: ['🧤', '🧣', '🧥', '🩱', '🧦'], correct: '🩱' }
                ],
                quantidades: [
                    { type: 'click', task: 'Onde tem 3 bolas?', items: ['⚽', '⚽⚽', '⚽⚽⚽', '⚽⚽⚽⚽'], correct: '⚽⚽⚽' },
                    { type: 'click', task: 'Onde tem 1 coração?', items: ['❤️❤️', '❤️', '❤️❤️❤️', '❤️❤️❤️❤️'], correct: '❤️' },
                    { type: 'click', task: 'Onde tem 5 estrelas?', items: ['⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'], correct: '⭐⭐⭐⭐⭐' },
                    { type: 'click', task: 'Onde tem 2 carros?', items: ['🚗', '🚗🚗', '🚗🚗🚗', '🚗🚗🚗🚗'], correct: '🚗🚗' },
                    { type: 'click', task: 'Onde tem 4 lápis?', items: ['✏️', '✏️✏️', '✏️✏️✏️', '✏️✏️✏️✏️'], correct: '✏️✏️✏️✏️' }
                ],
                arrastar: [
                    { type: 'drag', task: 'Combine as Frutas', pairs: [{ id: '1', s: '🍎' }, { id: '2', s: '🍌' }, { id: '3', s: '🍇' }] },
                    { type: 'drag', task: 'Combine os Climas', pairs: [{ id: '4', s: '☀️' }, { id: '5', s: '🌧️' }, { id: '6', s: '❄️' }] },
                    { type: 'drag', task: 'Combine os Animais', pairs: [{ id: '7', s: '🐶' }, { id: '8', s: '🐱' }, { id: '9', s: '🦁' }] },
                    { type: 'drag', task: 'Combine as Formas', pairs: [{ id: 'a', s: '🔴' }, { id: 'b', s: '🟦' }, { id: 'c', s: '🟡' }] },
                    { type: 'drag', task: 'Combine as Cores', pairs: [{ id: 'd', s: '❤️' }, { id: 'e', s: '💚' }, { id: 'f', s: '💙' }, { id: 'g', s: '💛' }] }
                ]
            },

            // =========================================
            // 3. CONTROLE GERAL E ÁUDIO
            // =========================================
            toggleSound() {
                this.isMuted = !this.isMuted;
                document.getElementById('bg-music').muted = this.isMuted;
                document.getElementById('btn-sound').innerText = this.isMuted ? "🔇" : "🔊";
            },

            showView(id) {
                document.querySelectorAll('#game-container > div').forEach(v => {
                    if (v.id !== 'btn-sound') v.classList.add('hidden');
                });
                document.getElementById(id).classList.remove('hidden');
                if (id === 'view-worlds') this.updateWorldCards();
            },

            // =========================================
            // 4. LÓGICA DA TELA 1 (LOGIN)
            // =========================================
            doLogin() {
                const inputNome = document.getElementById('nomeUsuario').value;
                const inputIdade = document.getElementById('idadeUsuario').value;

                // Validação solicitada (Alerta de campos vazios)
                if (inputNome === '' || inputIdade === '') {
                    alert("Por favor, preencha todos os campos!");
                    return; // Impede de avançar se estiver vazio
                }

                this.userName = inputNome;
                this.userAge = inputIdade;

                // Mensagem de Sucesso (Opcional, comentada para não travar o fluxo, mas você pode usar)
                // alert("Olá " + this.userName + "! Você tem " + this.userAge + " anos. Acesso realizado com sucesso!");

                const hour = new Date().getHours();
                let periodo = "Boa noite!🌛";
                if (hour >= 5 && hour < 12) periodo = "Bom dia!🌞";
                else if (hour >= 12 && hour < 18) periodo = "Boa tarde!🌤️";

                document.getElementById('txt-welcome').innerText = periodo + ", " + this.userName + "✨";

                // Iniciar música num volume base super perceptível (30%)
                const bgAudio = document.getElementById('bg-music');
                bgAudio.load(); // Força o navegador a buscar o trilha.mp3 recém-baixado
                bgAudio.volume = 0.3;
                if (!this.isMuted) {
                    bgAudio.play().catch((err) => {
                        console.log("Atenção, o navegador impediu o som por questões de cache ou bloqueio local: ", err);
                    });
                }

                this.showView('view-worlds');
            },

            // =========================================
            // 5. LÓGICA DA TELA 2 (MUNDOS) E TELA 3 (TRILHA)
            // =========================================
            updateWorldCards() {
                for (let cat in this.progress) {
                    if (this.progress[cat] >= 5) {
                        document.querySelector(`#card-${cat} .check-mark`).style.display = 'inline';
                    }
                }
            },

            openTrail(cat) {
                this.currentCat = cat;
                const container = document.getElementById('trail-nodes');
                container.innerHTML = "";
                const info = this.meta[cat];
                container.style.backgroundImage = `url('${info.bg}')`;
                container.style.backgroundSize = "cover";
                container.style.backgroundPosition = "center";
                document.getElementById('txt-trail-title').innerText = info.title;

                // Ícone de início
                const startIcon = document.createElement('span');
                startIcon.className = 'map-icon';
                startIcon.innerText = info.start;
                startIcon.style.left = (info.startPos ? info.startPos.left : 50) + "%";
                startIcon.style.top = (info.startPos ? info.startPos.top : 2) + "%";
                container.appendChild(startIcon);

                // Fases
                const prog = this.progress[cat];
                for (let i = 0; i < 5; i++) {
                    const node = document.createElement('div');
                    node.className = "node";
                    node.innerText = i + 1;

                    if (info.Coords && info.Coords[i]) {
                        node.style.left = info.Coords[i].left + "%";
                        node.style.top = info.Coords[i].top + "%";
                    } else {
                        node.style.left = "50%";
                        node.style.top = (15 + i * 18) + "%";
                    }

                    if (i < prog) node.classList.add('done');
                    else if (i === prog) node.classList.add('active');
                    node.onclick = () => { if (i <= prog) this.startLevel(i); };
                    container.appendChild(node);
                }

                // Ícone de fim
                const endIcon = document.createElement('span');
                endIcon.className = 'map-icon';
                endIcon.innerText = info.end;
                endIcon.style.left = (info.endPos ? info.endPos.left : 50) + "%";
                endIcon.style.top = (info.endPos ? info.endPos.top : 96) + "%";
                container.appendChild(endIcon);

                this.showView('view-trail');
            },

            // =========================================
            // 6. LÓGICA DA TELA 4 (JOGABILIDADE)
            // =========================================
            startLevel(idx) {
                this.currentIdx = idx;
                this.showView('view-play');
                this.renderGame();
            },

            renderGame() {
                const lv = this.levels[this.currentCat][this.currentIdx];
                document.getElementById('txt-level-num').innerText = "Fase " + (this.currentIdx + 1);
                document.getElementById('txt-task').innerText = lv.task;
                document.getElementById('txt-feedback').innerText = "";
                document.getElementById('btn-next').classList.add('hidden');

                const a1 = document.getElementById('area-1'); a1.innerHTML = "";
                const a2 = document.getElementById('area-2'); a2.innerHTML = "";

                if (lv.type === 'click') {
                    [...lv.items].sort(() => Math.random() - 0.5).forEach(it => {
                        const el = document.createElement('div');
                        el.className = 'card'; el.innerText = it;
                        el.onclick = () => {
                            if (it === lv.correct) {
                                el.classList.remove('wrong');
                                el.classList.add('correct');
                                this.win();
                            } else {
                                el.classList.remove('wrong');
                                void el.offsetWidth; // Dispara o 'reflow' p/ a animação repetir caso o erro se repita
                                el.classList.add('wrong');
                                document.getElementById('txt-feedback').innerText = "Tente de novo! 😊";
                            }
                        };
                        a1.appendChild(el);
                    });
                } else {
                    this.matches = 0;
                    [...lv.pairs].sort(() => Math.random() - 0.5).forEach(p => {
                        const el = document.createElement('div');
                        el.className = 'card'; el.innerText = p.s; el.draggable = true;
                        el.id = "d-" + p.id;
                        el.ondragstart = (e) => e.dataTransfer.setData('text', p.id);
                        a1.appendChild(el);
                    });
                    [...lv.pairs].sort(() => Math.random() - 0.5).forEach(p => {
                        const zone = document.createElement('div');
                        zone.className = 'drop-zone'; zone.innerText = p.s;
                        zone.ondragover = (e) => e.preventDefault();
                        zone.ondrop = (e) => {
                            const id = e.dataTransfer.getData('text');
                            if (id === p.id) {
                                zone.classList.add('filled');
                                document.getElementById("d-" + id).style.visibility = "hidden";
                                this.matches++;
                                if (this.matches === lv.pairs.length) this.win();
                            }
                        };
                        a2.appendChild(zone);
                    });
                }
            },

            win() {
                document.getElementById('txt-feedback').innerText = "Parabéns! ✨";
                document.getElementById('btn-next').classList.remove('hidden');
            },

            finishLevel() {
                if (this.currentIdx === this.progress[this.currentCat]) this.progress[this.currentCat]++;
                if (this.progress[this.currentCat] >= 5) {
                    document.getElementById('win-icon').innerText = this.meta[this.currentCat].end;
                    this.showView('view-win');
                } else {
                    this.openTrail(this.currentCat);
                }
            },

            // =========================================
            // 7. LÓGICA DAS TELAS FINAIS
            // =========================================
            checkUltimateVictory() {
                const allDone = Object.values(this.progress).every(p => p >= 5);
                if (allDone) {
                    this.showView('view-grand-finale');
                    this.releaseBalloons();
                } else {
                    this.showView('view-worlds');
                }
            },

            releaseBalloons() {
                const emojis = ['🎈', '✨', '🎈', '🎉', '🎊', '🎀']; // Diferentes emojis temáticos
                for (let i = 0; i < 40; i++) { // Vai espalhar 40 balões
                    setTimeout(() => {
                        const b = document.createElement('div');
                        b.className = 'balloon';
                        b.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                        b.style.left = (Math.random() * 90) + 'vw'; // Posição horizontal aleatória
                        b.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Sobe entre 4 e 7 segundos
                        b.style.fontSize = (Math.random() * 30 + 40) + 'px'; // Tamanhos variados
                        document.body.appendChild(b);

                        // O balão desaparece e é apagado do código para não travar
                        setTimeout(() => b.remove(), 7500);
                    }, Math.random() * 4000); // Eles vão aparecendo de forma sortida durante 4 segundos
                }
            }
        };