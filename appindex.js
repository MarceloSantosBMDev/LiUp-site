        document.addEventListener('DOMContentLoaded', function() {
            // Floating Navigation
            const floatingNav = document.querySelector('.floating-nav');
            let lastScrollPosition = 0;
            
            // Scroll Indicator
            const scrollIndicator = document.querySelector('.scroll-indicator');
            
            // Back to Top Button
            const backToTopBtn = document.querySelector('.back-to-top');
            
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
                
                // Show/hide back to top button
                if (scrollTop > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
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
            
            // Dados das áreas e membros
            const areasData = {
                capacitacao: {
                    name: "Capacitação e Parceria",
                    description: "Área responsável por expandir o networking da liga com outras instituições, privadas ou públicas, e figuras importantes do empreendedorismo, buscando capacitações constantes para os membros, além de parcerias estratégicas.",
                    members: [
                        {
                            name: "Yoon Song Jang",
                            role: "Membro",
                            photo: "captaçãoparceria/Yoon.jpg",
                            bio: "",
                            contacts: {
                                instagram: "YoonSong",
                                linkedin: "YoonSang",
                                email: ""
                            }
                        },
                        {
                            name: "Sofia (Dory)",
                            role: "Membro",
                            photo: "captaçãoparceria/Sofia.jpg",
                            bio: "",
                            contacts: {
                                instagram: "sofiadory",
                                linkedin: "sofiadory",
                                email: ""
                            }
                        },
                        {
                            name: "Mariana Midori",
                            role: "Membro",
                            photo: "captaçãoparceria/midori.png",
                            bio: "",
                            contacts: {
                                instagram: "midorii.gunji",
                                linkedin: "",
                                email: ""
                            }
                        },
                        {
                            name: "Eduardo Paziani",
                            role: "Membro",
                            photo: "captaçãoparceria/eduardo.jpg",
                            bio: "Graduando em Engenharia de Telecomunicações, com experiência em organização de eventos de tecnologia e empreendedorismo, liderança de equipes e pesquisa aplicada em radiofrequência e análise de dados. Eduardo é movido pela curiosidade, pela busca constante por excelência e pelo desejo em gerar impacto. Ao longo de sua jornada, atuou como diretor e conselheiro em outras organizações estudantis, sempre com uma postura proativa e colaborativa. Atualmente, é responsável por impulsionar parcerias na LiUP, visando escalar as oportunidades dos membros e da liga. No futuro, aspira construir o seu próprio negócio e se tornar investidor de iniciativas inovadoras, acreditando na força das conexões para transformar realidades.",
                            contacts: {
                                instagram: "@10_dudu",
                                linkedin: "eduardo-paziani",
                                email: ""
                            }
                        },
                        {
                            name: "Marcos Mazon",
                            role: "Membro",
                            photo: "captaçãoparceria/marcosmazon.png",
                            bio: "Discente em Administração empresarial, sou um entusiasta da tecnologia, empreendendorismo e inovação. Com o sonho de me tornar um profissional renomado da área, foco em me especializar fortemente na área de vendas e gestão de projetos.",
                            contacts: {
                                instagram: "_marcosmazon",
                                linkedin: "marcosmazon",
                                email: ""
                            }
                        },
                     {
                            name: "Cauã",
                            role: "Membro",
                            photo: "captaçãoparceria/caua.png",
                            bio: "Estudante de administração de empresas, apaixonado por empreendedorismo e inovação. Busco constantemente aprender e me desenvolver, visando contribuir para o crescimento de projetos e organizações. Tenho interesse em estratégias de negócios, marketing e gestão, com o objetivo de aplicar meus conhecimentos em ambientes dinâmicos e desafiadores.",
                            contacts: {
                                instagram: "caua.menezes_",
                                linkedin: "Cauã Menezes",
                                email: ""
                            }
                        }
                    ]
                },
                aceleracao: {
                    name: "Aceleração",
                    description: "Área responsável por gerir, medir o progresso e buscar oportunidades para o desenvolvimento das startups que nascem na LiUp.",
                    members: [
                        {
                            name: "Arthur",
                            role: "Membro",
                            photo: "aceleracao/Arthur.jpg",
                            bio: "Estudante de Sistemas de Informação na Unicamp e técnico em Desenvolvimento de Sistemas pelo SENAI, possui experiência prática em desenvolvimento web freelance e na criação de chatbots interativos. É um profissional proativo, com forte pensamento crítico e criatividade.",
                            contacts: {
                                instagram: "arthur_malveste",
                                linkedin: "arthur-malveste-5008842aa",
                                email: ""
                            }
                        },
                    {
                            name: "Lara",
                            role: "Membro",
                            photo: "aceleracao/",
                            bio: "",
                            contacts: {
                                instagram: "sss",
                                linkedin: "ss",
                                email: ""
                            }
                        },
                        {
                            name: "João Guilherme",
                            role: "Membro",
                            photo: "aceleracao/Joãogui.jpg",
                            bio: "Cursando Sistemas de Informação, possui grande paixão por empreendedorismo e tecnologia, sempre fascinado por inovação. Fluente em inglês, deseja conhecer vários lugares e pessoas diferentes para enriquecer seu conhecimento e sua visão de mundo. Por fim, ama lidar com pessoas, é extrovertido, e deseja levar isso para seu caminho profissional.",
                            contacts: {
                                instagram: "johngui.fernandes",
                                linkedin: "joão-guilherme-fernandes-frota-a14397356",
                                email: ""
                            }
                        },
                        
                    ]
                },
                modelos: {
                    name: "Modelos Internos",
                    description: "Área responsável por desenvolver a liga como uma startup, buscando demandas do mercado (FT, FCA e Limeira) que a LiUp pode atender com um modelo de negócios próprio. Nesse processo, os membros aprendem na prática o passo a passo para o desenvolvimento de uma startup.",
                    members: [
                        {
                            name: "Marcelo Santos",
                            role: "Membro",
                            photo: "modelosinternos/Marcelo.jpg",
                            bio: "Graduando em Análise e Desenvolvimento de Sistemas, entusiasta da tecnologia e profundamente dedicado à área de Experiência do Usuário (UX) e Interface do Usuário (UI). Possui um olhar criativo e focado em criar soluções que sejam não apenas funcionais, mas também intuitivas e visualmente atraentes. Está sempre explorando novas tendências de design e metodologias. Seu objetivo é aplicar seus conhecimentos para desenvolver sistemas e aplicações que ofereçam uma experiência de usuário excepcional.",
                            contacts: {
                                linkedin: "marcelo-dos-santos-da-boa-morte-5985a3262/",
                                instagram: "marcelo_grr",
                                email: ""
                            }
                        },
                        {
                            name: "Enzo Bergamachi",
                            role: "Membro",
                            photo: "modelosinternos/enzo.jpg",
                            bio: "Nascido e criado no interior de São Paulo, trilhei um caminho de aprendizado e dedicação que hoje me conduz à graduação em Administração Empresarial na Faculdade de Ciências Aplicadas da Unicamp. Sou um entusiasta do comércio exterior e do mercado AgTech. Desde a infância, carrego uma vocação empreendedora, marcada pelo desejo de transformar ideias em realizações. Hoje, na Liga de Startups da Unicamp, esse espírito infantil, criativo e sonhador, renasce com maturidade e se concretiza em minha determinação de atuar como empresário e agente de transformação.",
                            contacts: {
                                instagram: "",
                                linkedin: "Enzo Bergamaschi ramon",
                                email: ""
                            }
                        },
                        {
                            name: "Lucas Gabriel",
                            role: "Membro",
                            photo: "modelosinternos/Lucas_Gabriel.jpg",
                            bio: "",
                            contacts: {
                                instagram: "LucasGabriel",
                                linkedin: "Lucasslaoq",
                                email: ""
                            }
                        },
                        {
                            name: "Leo Basset",
                            role: "Membro",
                            photo: "modelosinternos/Leo_Basset.jpg",
                            bio: "Graduando em Bacharelado em Sistemas de Informação, com especialização em Inteligência Artificial, possui experiência em pesquisa acadêmica na área de visão computacional, com foco em classificação de imagens. É fluente em inglês e está constantemente em busca de novos aprendizados e desafios. Seu objetivo é aplicar o conhecimento adquirido não apenas no campo tecnológico, mas também no empreendedorismo, explorando soluções inovadoras e de impacto.",
                            contacts: {
                                instagram: "leonardo.basset",
                                linkedin: "leonardo-basset-figueiredo-pereira-521627297/",
                                email: ""
                            }
                        },
                        {
                            name: "Maria Laura Cruvinel",
                            role: "Membro",
                            photo: "modelosinternos/laura.png",
                            bio: "Graduanda em Engenharia de Telecomunicações na Unicamp, com atuação em Inteligência Artificial, Ciência de Dados e Telecomunicações. Possui experiência com Modelos de Linguagem (LLMs), aprendizado de máquina e análise de dados. Interessa-se pelo desenvolvimento de soluções que integrem IA a sistemas de comunicação e redes, explorando aplicações inovadoras que conectam tecnologia, dados e impacto social.",
                            contacts: {
                                instagram: "laura__cruvinel",
                                linkedin: "maria-laura-cruvinel-64b8351b8",
                                email: ""
                            }
                        }
                    ]
                },
                administracao: {
                    name: "Administração",
                    description: "Responsável pela gestão estratégica e operacional da LiUP, garantindo o alinhamento com a missão e valores da liga e a coordenação entre todas as áreas.",
                    members: [
                        {
                            name: "Rafael Henrique",
                            role: "Presidente",
                            photo: "administracao/rafa.jpg",
                            bio: "Presidente-fundador da LiUp, Rafael é estudante de Sistemas de Informação, apaixonado por empreendedorismo, geração de impacto e interações sociais. Sonhou numa LiUp acolhedora, inovadora e que alcançasse com velocidade alta patamares cada vez maiores na Unicamp e no mundo, o que se mostra realidade desde as bases da organização até agora.",
                            contacts: {
                                instagram: "rafa.planks",
                                linkedin: "rafaelhenri",
                                email: ""
                            }
                        },
                        {
                            name: "Julia Fernandes",
                            role: "Vice-Presidente",
                            photo: "administracao/julia.jpg",
                            bio: "Cursando Sistemas de Informação, possui grande paixão por empreendedorismo e tecnologia, sempre fascinado por inovação. Fluente em inglês, deseja conhecer vários lugares e pessoas diferentes para enriquecer seu conhecimento e sua visão de mundo. Por fim, ama lidar com pessoas, é extrovertido, e deseja levar isso para seu caminho profissional.",
                            contacts: {
                                instagram: "who.is_juuh",
                                linkedin: "julia-fernandes-9b5453262",
                                email: ""
                            }
                        },
                        {
                            name: "Ana Julia Gotto",
                            role: "PMO",
                            photo: "administracao/Júlia.jpg",
                            bio: "Graduanda em Engenharia Ambiental, com experiência em planejamento estratégico, gestão de projetos e cultura organizacional. Já atuou como Presidente, coordenadora e concelho de uma empresa júnior, onde ganhou prêmios e reconhecimento por sua performance. Atualmente, ocupa o cargo de PMO na LiUP, onde é responsável por liderar projetos e fornecer suporte estratégico aos membros, visando o alcance dos objetivos da liga.",
                            contacts: {
                                instagram: "anaju_gotto",
                                linkedin: "anajuliagotto",
                                email: ""
                            }
                        }
                    ]
                }
            };

            // Dados dos eventos
            const eventsData = {
                "palestra-cultura": {
                    title: "Palestra sobre dar vida a sua StartUp",
                    date: "15/05/2025",
                    time: "14:00 - 17:00",
                    location: "Unicamp - Sala PA01",
                    image: "startlab.png",
                    description: "A StartLab será um evento imersivo voltado para Modelagem de Negócios, Inovação e Empreendedorismo, que ocorrerá na Faculdade de Tecnologia e na Faculdade de Ciências Aplicadas da Unicamp, em Limeira, nos dias 23, 24 e 25 de setembro. Durante esses dias, especialistas renomados do mercado irão compartilhar conhecimentos para capacitar os participantes, e a organização espera receber cerca de 300 estudantes.",
                    schedule: [
                        "23/09/2025 - 12:00: Costumer Development",
                        "23/09/2025 - 16:00: Costumer Development",
                        "23/09/2025 - 17:00: Pesquisa de Mercado e Concorrência",
                        "24/09/2025 - 12:00: Proposta de Valor e BMC",
                        "24/09/2025 - 17:00: Produto Mínimo viável (MVP)",
                        "25/09/2025 - 12:00: Tração primeiras vendas",
                        "25/09/2025 - 17:00: Fundraising: Recebendo investimentos",




                    ],
                    
                    registrationLink: "#"
                },
            };

            // Modal de Áreas
            const areaModal = document.getElementById('areaModal');
            const modalAreaName = document.getElementById('modalAreaName');
            const modalAreaDescription = document.getElementById('modalAreaDescription');
            const modalMembersGrid = document.getElementById('modalMembersGrid');
            
            // Modal de Eventos
            const eventModal = document.getElementById('eventModal');
            const modalEventTitle = document.getElementById('modalEventTitle');
            const modalEventDate = document.getElementById('modalEventDate');
            const modalEventTime = document.getElementById('modalEventTime');
            const modalEventLocation = document.getElementById('modalEventLocation');
            const modalEventImage = document.getElementById('modalEventImage');
            const modalEventDescription = document.getElementById('modalEventDescription');
            const modalEventSchedule = document.getElementById('modalEventSchedule');
            const modalEventSpeakers = document.getElementById('modalEventSpeakers');
            
            const closeModal = document.querySelectorAll('.close-modal');
            
            // Função para abrir o modal de área
            function openAreaModal(areaId) {
                const areaData = areasData[areaId];
                
                if (!areaData) return;
                
                modalAreaName.textContent = areaData.name;
                modalAreaDescription.textContent = areaData.description;
                
                // Limpar membros anteriores
                modalMembersGrid.innerHTML = '';
                
                // Adicionar novos membros
                areaData.members.forEach(member => {
                    const memberCard = document.createElement('div');
                    memberCard.className = 'member-card';
                    
                    let contactsHTML = '';
                    if (member.contacts.email) {
                        contactsHTML += `<a href="mailto:${member.contacts.email}" title="Email"><i class="fas fa-envelope"></i></a>`;
                    }
                    if (member.contacts.linkedin) {
                        contactsHTML += `<a href="https://linkedin.com/in/${member.contacts.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
                    }
                    if (member.contacts.instagram) {
                        contactsHTML += `<a href="https://instagram.com/${member.contacts.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>`;
                    }
                    
                    memberCard.innerHTML = `
                        <img src="${member.photo}" alt="${member.name}" class="member-photo">
                        <h4 class="member-name">${member.name}</h4>
                        <p class="member-role">${member.role}</p>
                        <p class="member-bio">${member.bio}</p>
                        <div class="member-contact">
                            ${contactsHTML}
                        </div>
                    `;
                    modalMembersGrid.appendChild(memberCard);
                });
                
                // Mostrar o modal
                areaModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
            
            // Função para abrir o modal de evento
            function openEventModal(eventId) {
                const eventData = eventsData[eventId];
                
                if (!eventData) return;
                
                // Preencher os dados do evento
                modalEventTitle.textContent = eventData.title;
                modalEventDate.textContent = eventData.date;
                modalEventTime.textContent = eventData.time;
                modalEventLocation.textContent = eventData.location;
                modalEventImage.style.backgroundImage = `url('${eventData.image}')`;
                modalEventDescription.textContent = eventData.description;
                
                // Limpar programação anterior
                modalEventSchedule.innerHTML = '';
                
                // Adicionar nova programação
                eventData.schedule.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    modalEventSchedule.appendChild(li);
                });
                

                

                // Mostrar o modal
                eventModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
            
            // Função para fechar modais
            function closeModals() {
                document.querySelectorAll('.modal.show').forEach(modal => {
                    modal.classList.remove('show');
                });
                document.body.style.overflow = 'auto';
            }
            
            // Event listeners para abrir modais
            document.querySelectorAll('.btn-area-details, .footer-col ul a[data-area]').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const areaId = this.getAttribute('data-area') || this.closest('.area-card').getAttribute('data-area');
                    openAreaModal(areaId);
                });
            });
            
            document.querySelectorAll('.btn-event-details').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const eventId = this.closest('.event-card').getAttribute('data-event');
                    openEventModal(eventId);
                });
            });
            
            // Modal do Mascote
            const mascoteModal = document.getElementById('mascoteModal');
            const openLioModal = document.getElementById('openLioModal');
            
            if (openLioModal && mascoteModal) {
                openLioModal.addEventListener('click', function(e) {
                    e.preventDefault();
                    mascoteModal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                });
            }

            // Event listener para fechar modais
            closeModal.forEach(btn => {
                btn.addEventListener('click', closeModals);
            });
            
            // Fechar quando clicar fora do conteúdo
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        closeModals();
                    }
                });
            });
            
            // Fechar com ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModals();
                }
            });

            // Formulário de contato
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Simular envio
                    const submitBtn = this.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
                        
                        // Resetar após 2 segundos
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            this.reset();
                        }, 2000);
                    }, 1500);
                });
            }

            // Animações ao scroll
            function initScrollAnimations() {
                const animateElements = document.querySelectorAll('.about-content, .area-card, .event-card, .info-item');
                
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

            console.log('Site LiUP carregado com sucesso!');
        });