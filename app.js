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
        if (window.scrollY > 100) {
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
                    top: targetElement.offsetTop - 80,
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
                photo: "people/Hyago.jpg",
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
                photo: "captação/Yoon.jpg",
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
                photo: "marketing/Sofia.jpg",
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
                photo: "eventos/eduardo.jpg",
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
                photo: "people/Arthur.jpg",
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
                photo: "marketing/Joãogui.jpg",
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
                photo: "marketing/Marcelo.jpg",
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
                photo: "eventos/enzo.jpg",
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
                photo: "captação/Lucas_Gabriel.jpg",
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
                photo: "captação/Leo_Basset.jpg",
                bio: "Focado na otimização dos fluxos de trabalho e comunicação interna.",
                contacts: {
                    instagram: "LeoBasset",
                    linkedin: "Basset",
                    email: ""
                }
            }
        ]
    },
    presidencia: {
        name: "Presidência",
        description: "Liderança estratégica da LiUP, responsável pela representação institucional, tomada de decisões e coordenação das demais áreas.",
        members: [
            {
                name: "Rafa",
                role: "Presidente",
                photo: "presidencia/rafa.jpg",
                bio: "Lidera a estratégia geral da liga e as relações institucionais.",
                contacts: {
                    instagram: "rafa",
                    linkedin: "rafa",
                    email: ""
                }
            },
            {
                name: "Júlia Fernandes",
                role: "Presidente",
                photo: "presidencia/julia.jpg",
                bio: "Coordena a execução das atividades e a integração entre as áreas.",
                contacts: {
                    instagram: "julia",
                    linkedin: "julia",
                    email: ""
                }
            }
        ]
    }
};

    // Dados de eventos
    const eventsData = [
        {
            title: "Palestra sobre dar vida a sua StartUp",
            date: "15/05/2025",
            time: "14:00 - 17:00",
            location: "Unicamp - Sala PA01",
            description: "Aprenda como dar vida a sua startup para tornar o ambiente mais acolhedor e agradando mais os funcionários.",
            image: "projetos/palestra.png"
        },
        {
            title: "Simulação de empreendedorismo",
            date: "09/06/2025",
            time: "19:00 - 21:30",
            location: "Online",
            description: "Conversa com empreendedores de sucesso que compartilharão suas experiências e depois coloque a mão na massa simulando uma startup do ínicio",
            image: "projetos/simulacao.png"
        },
        {
            title: "Evento com empresas que iniciaram como startup",
            date: "05/12/2025",
            time: "09:00 - 12:00",
            location: "Pátio da FCA",
            description: "Converse com funcionarios pioneiros e donos de empresas que iniciaram de startup",
            image: "projetos/eventoempresas.png"
        }
    ];

    // Carregar eventos
    function loadEvents() {
        const eventsSlider = document.querySelector('.events-slider');
        
        if (eventsSlider) {
            eventsSlider.innerHTML = '';
            
            eventsData.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.innerHTML = `
                    <div class="event-image" style="background-image: url('${event.image}')"></div>
                    <div class="event-content">
                        <span class="event-date">${event.date}</span>
                        <h3>${event.title}</h3>
                        <div class="event-meta">
                            <i class="far fa-clock"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="event-meta">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                        <p>${event.description}</p>
                        <a href="#" class="btn btn-primary">Mais Informações</a>
                    </div>
                `;
                eventsSlider.appendChild(eventCard);
            });
        }
    }
    
    // Inicializar eventos
    loadEvents();

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
                <img src="${member.photo}" alt="${member.name}" class="member-photo" onerror="this.src='images/members/default.jpg'">
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
    const mascoteBtn = document.getElementById('mascoteBtn');
    const mascoteModal = document.getElementById('mascoteModal');
    
    if (mascoteBtn && mascoteModal) {
        mascoteBtn.addEventListener('click', function() {
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

// Abrir modal do Lio
document.getElementById('openLioModal').addEventListener('click', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById('mascoteModal').classList.add('show');
    document.body.style.overflow = 'hidden'; // Impede o scroll da página
});

// Fechar modal (já deve existir no seu código)
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = 'auto'; // Restaura o scroll da página
    });
});

// Fechar modal ao clicar fora do conteúdo
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
            document.body.style.overflow = 'auto'
        }
    });
});
