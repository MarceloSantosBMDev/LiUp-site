        document.addEventListener('DOMContentLoaded', function() {
            // Configuração do Processo Seletivo
            const processoConfig = {
                aberto: false, // Mude para true para abrir o processo
                dataLimite: "30/11/2025", // Data limite quando aberto
                mensagemFechado: "Nosso processo seletivo está atualmente fechado para novas inscrições.",
                mensagemAberto: `Nosso processo seletivo está aberto até <strong>${this.dataLimite}</strong>`
            };

            // Inicializar Processo Seletivo
            function initProcessoSeletivo() {
                const statusBadge = document.getElementById('statusBadge');
                const statusMessage = document.getElementById('statusMessage');
                const processoAbertoContent = document.getElementById('processoAbertoContent');
                const processoFechadoContent = document.getElementById('processoFechadoContent');
                
                if (processoConfig.aberto) {
                    statusBadge.className = 'status-badge aberto';
                    statusBadge.textContent = 'Aberto';
                    statusMessage.innerHTML = `Nosso processo seletivo está aberto até <strong>${processoConfig.dataLimite}</strong>`;
                    processoAbertoContent.style.display = 'block';
                    processoFechadoContent.style.display = 'none';
                } else {
                    statusBadge.className = 'status-badge fechado';
                    statusBadge.textContent = 'Fechado';
                    statusMessage.textContent = processoConfig.mensagemFechado;
                    processoAbertoContent.style.display = 'none';
                    processoFechadoContent.style.display = 'block';
                }
            }

            // Floating Navigation
            const floatingNav = document.querySelector('.floating-nav');
            let lastScrollPosition = 0;
            
            // Scroll Indicator
            const scrollIndicator = document.querySelector('.scroll-indicator');
            
            // Hide floating nav on scroll down, show on scroll up
            function handleScroll() {
                const currentScrollPosition = window.pageYOffset;
                
                if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
                    // Scrolling down
                    floatingNav.classList.add('hidden');
                } else {
                    // Scrolling up
                    floatingNav.classList.remove('hidden');
                }
                
                lastScrollPosition = currentScrollPosition;
                
                // Update scroll indicator
                updateScrollIndicator();
            }
            
            // Update scroll indicator
            function updateScrollIndicator() {
                const scrollTop = document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;
                const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
                scrollIndicator.style.width = scrollPercentage + '%';
            }
            
            window.addEventListener('scroll', handleScroll);
            
            // Smooth Scroll for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Dados dos Chapters
            const chaptersData = {
                modelagem: {
                    title: "Modelagem de Negócios",
                    subtitle: "Transformando ideias em modelos de negócios sustentáveis",
                    content: `
                        <div class="chapter-description">
                            <p>Nosso Chapter de Modelagem de Negócios é dedicado a transformar ideias em modelos de negócios viáveis e escaláveis. Através de metodologias como Business Model Canvas e Lean Startup, ajudamos empreendedores a validar suas hipóteses e estruturar operações sustentáveis.</p>
                            <p>Este chapter esensial para quem deseja entender profundamente seu mercado, identificar fontes de receita e construir propostas de valor diferenciadas.</p>
                        </div>
                        <div class="chapter-features">
                            <h3>O que você vai aprender</h3>
                            <ul>
                                <li>Estruturação de modelos de negócios com Canvas</li>
                                <li>Validação de mercado e MVP (Produto Mínimo Viável)</li>
                                <li>Estratégias de monetização e precificação</li>
                                <li>Análise de concorrência e diferenciação</li>
                                <li>Projeções financeiras básicas</li>
                                <li>Fontes de custos e estrutura de capital</li>
                            </ul>
                        </div>
                    `
                },
                gestao: {
                    title: "Gestão e Cultura",
                    subtitle: "Construindo equipes de alta performance e culturas inovadoras",
                    content: `
                        <div class="chapter-description">
                            <p>O Chapter de Gestão e Cultura é focado no desenvolvimento de habilidades essenciais para liderar times e criar ambientes que fomentam a inovação. Abordamos desde técnicas de gestão ágil até a construção de culturas organizacionais que atraem e retêm talentos.</p>
                            <p>Este chapter é ideal para quem deseja aprender a escalar operações, gerenciar equipes remotas e criar ambientes de trabalho inspiradores.</p>
                        </div>
                        <div class="chapter-features">
                            <h3>O que você vai aprender</h3>
                            <ul>
                                <li>Princípios de gestão ágil e lean</li>
                                <li>Construção de cultura organizacional</li>
                                <li>Liderança em ambientes inovadores</li>
                                <li>Gestão de equipes remotas e distribuídas</li>
                                <li>Processos de recrutamento e retenção</li>
                                <li>Ferramentas de produtividade e colaboração</li>
                            </ul>
                        </div>
                    `
                },
                design: {
                    title: "Design",
                    subtitle: "Criando experiências memoráveis e soluções centradas no usuário",
                    content: `
                        <div class="chapter-description">
                            <p>Nosso Chapter de Design ensina os princípios fundamentais do design thinking, UX/UI e prototipação rápida. Através de workshops práticos, os participantes aprendem a criar soluções intuitivas e encantadoras que resolvem problemas reais dos usuários.</p>
                            <p>Este chapter é perfeito para quem deseja desenvolver produtos e serviços com excelência em experiência do usuário, desde a concepção até a implementação.</p>
                        </div>
                        <div class="chapter-features">
                            <h3>O que você vai aprender</h3>
                            <ul>
                                <li>Fundamentos de Design Thinking</li>
                                <li>Pesquisa e entendimento do usuário</li>
                                <li>Princípios de UX/UI Design</li>
                                <li>Prototipação rápida e teste de conceitos</li>
                                <li>Ferramentas de design (Figma, Adobe XD)</li>
                                <li>Design de serviços e jornada do cliente</li>
                            </ul>
                        </div>
                    `
                },
                negociacao: {
                    title: "Negociação",
                    subtitle: "Dominando a arte de criar valor em qualquer negociação",
                    content: `
                        <div class="chapter-description">
                            <p>O Chapter de Negociação aborda técnicas avançadas para negociação estratégica, seja na captação de recursos, fechamento de parcerias ou construção de relacionamentos comerciais. Através de simulações e estudos de caso, os participantes desenvolvem confiança e habilidades práticas.</p>
                            <p>Este chapter é essencial para quem deseja aprender a criar valor em negociações, superar objeções e estabelecer relações comerciais duradouras.</p>
                        </div>
                        <div class="chapter-features">
                            <h3>O que você vai aprender</h3>
                            <ul>
                                <li>Preparação e estruturação de negociações</li>
                                <li>Técnicas de comunicação persuasiva</li>
                                <li>Negociação com investidores e clientes</li>
                                <li>Superação de objeções e fechamento</li>
                                <li>Negociação em contextos multiculturais</li>
                                <li>Ética e criação de valor mútuo</li>
                            </ul>
                        </div>
                    `
                }
            };

            // Modal de Chapters
            const chapterModal = document.getElementById('chapterModal');
            const modalChapterTitle = document.getElementById('modalChapterTitle');
            const modalChapterSubtitle = document.getElementById('modalChapterSubtitle');
            const modalChapterContent = document.getElementById('modalChapterContent');
            const closeModal = document.querySelectorAll('.close-modal');
            
            // Função para abrir o modal
            function openChapterModal(chapterId) {
                const chapterData = chaptersData[chapterId];
                
                if (!chapterData) return;
                
                modalChapterTitle.textContent = chapterData.title;
                modalChapterSubtitle.textContent = chapterData.subtitle;
                modalChapterContent.innerHTML = chapterData.content;
                
                // Mostrar o modal
                chapterModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
            
            // Event listeners para abrir modal
            document.querySelectorAll('.btn-chapter-details, .footer-col ul a[data-chapter]').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const chapterId = this.getAttribute('data-chapter') || this.closest('.chapter-card').getAttribute('data-chapter');
                    openChapterModal(chapterId);
                });
            });

            // Modal do Processo Seletivo
            const processoSeletivoModal = document.getElementById('processoSeletivoModal');
            
            // Abrir modal quando clicar no botão "Junte-se a nós"
            document.getElementById('openProcessoSeletivo').addEventListener('click', function(e) {
                e.preventDefault();
                processoSeletivoModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });

            // Event listener para fechar modais
            closeModal.forEach(btn => {
                btn.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                });
            });
            
            // Fechar quando clicar fora do conteúdo
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        this.classList.remove('show');
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // Fechar com ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal.show').forEach(modal => {
                        modal.classList.remove('show');
                        document.body.style.overflow = 'auto';
                    });
                }
            });

            // Formulário de inscrição
            const inscricaoForm = document.getElementById('inscricaoForm');
            if (inscricaoForm) {
                inscricaoForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const form = e.target;
                    const formMessage = document.getElementById('formMessage');
                    const submitBtn = form.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    
                    // Feedback visual enquanto envia
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                    submitBtn.disabled = true;
                    
                    // Enviar formulário via FormSubmit
                    fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            // Mostrar mensagem de sucesso
                            formMessage.className = 'form-message success';
                            formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Inscrição enviada com sucesso! Entraremos em contato em breve.';
                            
                            // Resetar formulário
                            form.reset();
                        } else {
                            throw new Error('Erro ao enviar formulário');
                        }
                    })
                    .catch(error => {
                        // Mostrar mensagem de erro
                        formMessage.className = 'form-message error';
                        formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.';
                    })
                    .finally(() => {
                        // Restaurar botão
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        
                        // Rolagem suave para o topo do formulário
                        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                });
            }

            // Inicializar o processo seletivo
            initProcessoSeletivo();

            // Animações ao scroll
            function initScrollAnimations() {
                const animateElements = document.querySelectorAll('.timeline-content, .chapter-card, .founder-card');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate');
                        }
                    });
                }, {
                    threshold: 0.1
                });
                
                animateElements.forEach(el => {
                    observer.observe(el);
                });
            }
            
            initScrollAnimations();

            console.log('Página Nossa História carregada com sucesso!');
        });
