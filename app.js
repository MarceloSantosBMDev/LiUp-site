        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainNav = document.querySelector('.main-nav');
            
            if (mobileMenuBtn && mainNav) {
                mobileMenuBtn.addEventListener('click', function() {
                    mainNav.classList.toggle('active');
                    this.innerHTML = mainNav.classList.contains('active') ? 
                        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
                });
            }
            
            // Header Scroll Effect
            const header = document.querySelector('.premium-header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Smooth Scroll for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu if open
                        if (mainNav && mainNav.classList.contains('active')) {
                            mainNav.classList.remove('active');
                            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                        
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Dados das áreas e membros
            const areasData = {
                capacitacao: {
                    name: "Capacitação e Parceria",
                    description: "Responsável pelo desenvolvimento de competências dos membros e pelo estabelecimento de parcerias estratégicas que fortaleçam o ecossistema de startups da LiUP.",
                    members: [
                        {
                            name: "Hyago",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/32.jpg",
                            bio: "Responsável por estabelecer conexões estratégicas e desenvolver programas de capacitação para os membros.",
                            contacts: {
                                instagram: "hyago",
                                linkedin: "Hyago",
                                email: ""
                            }
                        },
                        {
                            name: "Yoon Song Jang",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/women/44.jpg",
                            bio: "Atua na identificação de oportunidades de parcerias e no desenvolvimento de competências técnicas.",
                            contacts: {
                                instagram: "YoonSong",
                                linkedin: "YoonSang",
                                email: ""
                            }
                        },
                        {
                            name: "Sofia (Dory)",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/women/63.jpg",
                            bio: "Envolvida na criação de conteúdos para capacitação e na gestão das parcerias estabelecidas.",
                            contacts: {
                                instagram: "sofiadory",
                                linkedin: "sofiadory",
                                email: ""
                            }
                        },
                        {
                            name: "Eduardo Paziani",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/22.jpg",
                            bio: "Focado no desenvolvimento de programas de mentoria e no relacionamento com parceiros.",
                            contacts: {
                                instagram: "paziani",
                                linkedin: "pazianeslasla",
                                email: ""
                            }
                        }
                    ]
                },
                aceleracao: {
                    name: "Aceleração",
                    description: "Área dedicada a impulsionar projetos e ideias empreendedoras, proporcionando mentoria, recursos e conexões para o desenvolvimento de startups.",
                    members: [
                        {
                            name: "Arthur",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/45.jpg",
                            bio: "Atua no acompanhamento de projetos e na conexão com mentores e investidores.",
                            contacts: {
                                instagram: "arthur",
                                linkedin: "arthur",
                                email: ""
                            }
                        },
                        {
                            name: "João Guilherme",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/67.jpg",
                            bio: "Responsável pela organização de programas de aceleração e eventos de pitch.",
                            contacts: {
                                instagram: "john_guilherme",
                                linkedin: "johnxxxxx",
                                email: ""
                            }
                        }
                    ]
                },
                modelos: {
                    name: "Modelos Internos",
                    description: "Responsável pela estruturação e organização interna da liga, garantindo processos eficientes e uma governança transparente.",
                    members: [
                        {
                            name: "Marcelo Santos",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/33.jpg",
                            bio: "Atua na documentação de processos e na estruturação dos modelos de gestão da liga.",
                            contacts: {
                                linkedin: "marcelo-dos-santos-da-boa-morte-5985a3262/",
                                instagram: "marcelo_grr",
                                email: ""
                            }
                        },
                        {
                            name: "Enzo Bergamachi",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/28.jpg",
                            bio: "Responsável pela implementação de melhorias nos processos internos.",
                            contacts: {
                                instagram: "enzo",
                                linkedin: "addadadd",
                                email: ""
                            }
                        },
                        {
                            name: "Lucas Gabriel",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/19.jpg",
                            bio: "Envolvido na criação de métricas e indicadores para avaliação interna.",
                            contacts: {
                                instagram: "LucasGabriel",
                                linkedin: "Lucasslaoq",
                                email: ""
                            }
                        },
                        {
                            name: "Leo Basset",
                            role: "Membro",
                            photo: "https://randomuser.me/api/portraits/men/42.jpg",
                            bio: "Focado na otimização dos fluxos de trabalho e comunicação interna.",
                            contacts: {
                                instagram: "LeoBasset",
                                linkedin: "Basset",
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
                            name: "Rafael",
                            role: "Presidente",
                            photo: "https://randomuser.me/api/portraits/men/75.jpg",
                            bio: "Lidera a estratégia geral da liga, representação institucional e tomada de decisões importantes.",
                            contacts: {
                                instagram: "rafael",
                                linkedin: "rafael",
                                email: ""
                            }
                        },
                        {
                            name: "Julia Fernandes",
                            role: "Vice-Presidente",
                            photo: "https://randomuser.me/api/portraits/women/65.jpg",
                            bio: "Apoia a presidência na gestão estratégica e coordena a execução das atividades entre as áreas.",
                            contacts: {
                                instagram: "julia",
                                linkedin: "julia",
                                email: ""
                            }
                        },
                        {
                            name: "Ana Julia Gotto",
                            role: "PMO",
                            photo: "https://randomuser.me/api/portraits/women/33.jpg",
                            bio: "Responsável pela gestão de projetos, metodologias e acompanhamento de métricas da liga.",
                            contacts: {
                                instagram: "anajulia",
                                linkedin: "anajulia",
                                email: ""
                            }
                        }
                    ]
                }
            };

            // Modal de Áreas
            const areaModal = document.getElementById('areaModal');
            const modalAreaName = document.getElementById('modalAreaName');
            const modalAreaDescription = document.getElementById('modalAreaDescription');
            const modalMembersGrid = document.getElementById('modalMembersGrid');
            const closeModal = document.querySelectorAll('.close-modal');
            
            // Função para abrir o modal
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
            
            // Função para fechar o modal
            function closeAreaModal() {
                areaModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
            
            // Event listeners para abrir modal
            document.querySelectorAll('.btn-area-details, .footer-col ul a[data-area]').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const areaId = this.getAttribute('data-area') || this.closest('.area-card').getAttribute('data-area');
                    openAreaModal(areaId);
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