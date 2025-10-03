<script lang="ts">
	import '../app.css';
	import { assets } from '../lib/assets';
	import { onMount, onDestroy } from 'svelte';

	let activeSection = 'home';
	let mounted = false;
	let skillsVisible = false;
	let skillsExpanded = false;
	let projectsVisible = false;
	let aboutVisible = false;

	
	let currentSlide = 0;
	let totalSlides = 4;
	let carouselInterval: number;

	
	let showTyping = false;
	let typedText = '';
	let fullText = 'Fullstack Developer';
	let typingIndex = 0;
	let showHeroImage = false;
	
	
	let skillCards: HTMLElement[] = [];
	let skillAnimationTimeout: number;

	onMount(() => {
		mounted = true;
		
		
		activeSection = 'home';
		
		
		setTimeout(() => {
			showTyping = true;
			startTypingEffect();
		}, 1000);

		
		setTimeout(() => {
			showHeroImage = true;
		}, 1800);

		const setupObserver = () => {
			const sections = [
				document.getElementById('home'),
				document.getElementById('about'),
				document.getElementById('skills'),
				document.getElementById('projects'),
				document.getElementById('contact')
			];

			if (sections.some(section => !section)) {
				setTimeout(setupObserver, 50);
				return;
			}

			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
						
						
						if (entry.target.id === 'skills' && !skillsVisible) {
							skillsVisible = true;
							
							setTimeout(() => {
								skillsExpanded = true;
								
								animateSkillCards();
							}, 300);
						}
						if (entry.target.id === 'projects' && !projectsVisible) {
							projectsVisible = true;
							startCarousel();
							
							setTimeout(() => {
								const cards = document.querySelectorAll('.project-card');
								cards.forEach((card, index) => {
									setTimeout(() => {
										card.classList.add('visible');
									}, index * 200);
								});
							}, 300);
						}
						if (entry.target.id === 'about') aboutVisible = true;
					}
				});
			}, {
				threshold: 0.5,
				rootMargin: '-10% 0px -10% 0px'
			});

			sections.forEach(section => {
				if (section) {
					observer.observe(section);
				}
			});

			
			const revealElements = document.querySelectorAll('.reveal');
			const revealObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active');
					}
				});
			}, { threshold: 0.1 });

			revealElements.forEach(el => revealObserver.observe(el));

			return () => {
				sections.forEach(section => {
					if (section) observer.unobserve(section);
				});
				revealElements.forEach(el => revealObserver.unobserve(el));
			};
		};

		setupObserver();
	});

	onDestroy(() => {
		if (carouselInterval) {
			clearInterval(carouselInterval);
		}
	});

	function startCarousel() {
		
		carouselInterval = setInterval(() => {
			nextSlide();
		}, 5000);
	}

	function stopCarousel() {
		if (carouselInterval) {
			clearInterval(carouselInterval);
		}
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
	}

	function prevSlide() {
		currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}

	function animateSkillCards() {
		const cards = document.querySelectorAll('.skill-card');
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add('animate');
			}, index * 100);
		});
	}

	function isActive(sectionId: string): boolean {
		return activeSection === sectionId;
	}

	function startTypingEffect() {
		const typeChar = () => {
			if (typingIndex < fullText.length) {
				typedText += fullText[typingIndex];
				typingIndex++;
				setTimeout(typeChar, 100); 
			}
		};
		typeChar();
	}

	function handleProjectClick(url: string) {
		window.open(url, '_blank');
	}

	function handleKeyPress(event: KeyboardEvent, url: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleProjectClick(url);
		}
	}


	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	let formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
	let formMessage = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		formStatus = 'sending';
		formMessage = '';

		try {

			const mailtoLink = `mailto:razeball@rzcorpsr.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			)}`;
			
			window.location.href = mailtoLink;
			
			formStatus = 'success';
			formMessage = 'Opening your email client...';
			

			setTimeout(() => {
				formData = { name: '', email: '', subject: '', message: '' };
				formStatus = 'idle';
				formMessage = '';
			}, 3000);
		} catch (error) {
			formStatus = 'error';
			formMessage = 'There was an error. Please try again or email directly.';
		}
	}
</script>

<main class="font-sans">
  <!-- Navbar -->
  <div class="bg-stone-200 shadow-md mb-4 sticky top-0 z-50 navbar-slide">
    <nav class="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <a href="#home" class="flex items-center gap-2 hover-lift">
        <img src={assets.logo} alt="Logo" class="w-10 h-10 {mounted ? 'bounce-in' : ''}">
        <span class="text-xl font-bold text-red-800 {mounted ? 'slide-in-left delay-200' : ''}">Said Rivera</span>
      </a>
      <div class="flex gap-5 text-sm sm:text-base">
        <a href="#home" class="nav-link hover:text-red-800 transition-all duration-300 transform hover:scale-110 {isActive('home') ? 'active' : ''} {mounted ? 'fade-in delay-300' : ''}">Home</a>
        <a href="#about" class="nav-link hover:text-red-800 transition-all duration-300 transform hover:scale-110 {isActive('about') ? 'active' : ''} {mounted ? 'fade-in delay-400' : ''}">About</a>
        <a href="#skills" class="nav-link hover:text-red-800 transition-all duration-300 transform hover:scale-110 {isActive('skills') ? 'active' : ''} {mounted ? 'fade-in delay-500' : ''}">Skills</a>
        <a href="#projects" class="nav-link hover:text-red-800 transition-all duration-300 transform hover:scale-110 {isActive('projects') ? 'active' : ''} {mounted ? 'fade-in delay-600' : ''}">Projects</a>
        <a href="#contact" class="nav-link hover:text-red-800 transition-all duration-300 transform hover:scale-110 {isActive('contact') ? 'active' : ''} {mounted ? 'fade-in delay-700' : ''}">Contact</a>
      </div>
    </nav>
  </div>

  <!-- Hero Section -->
  <section id="home" class="bg-white py-20 reserved-space-hero">
    <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-10">
      <div class="md:w-1/2">
        <h1 class="text-5xl font-extrabold mb-4 leading-tight no-shift {mounted ? 'visible slide-in-left' : ''}">
          Hi, I'm <span class="text-gradient">Said Rivera</span>
        </h1>
        <div class="h-16 mb-4">
          <h2 class="text-3xl font-semibold no-shift {mounted ? 'visible slide-in-left delay-200' : ''}">
            {#if showTyping}
              <span class="typing-cursor">{typedText}<span class="blinking-cursor">|</span></span>
            {/if}
          </h2>
        </div>
        <p class="text-lg mb-6 max-w-xl no-shift {mounted ? 'visible slide-in-left delay-400' : ''}">
          I'm a fullstack developer experienced in React, Angular, Svelte, Node.js and .NET. I focus on building efficient and scalable applications.
        </p>
        <a href="#contact" class="inline-block bg-red-800 text-white px-5 py-2 rounded hover:bg-red-700 active:bg-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg no-shift {mounted ? 'visible scale-in delay-600' : ''}">
          Contact
        </a>
        <div class="flex gap-4 mt-4 no-shift {mounted ? 'visible fade-in delay-800' : ''}">
          <a href="https://github.com/Razeball" target="_blank" class="hover:text-red-800 transition-all duration-300 transform hover:scale-125 hover:-rotate-12">
            <img src={assets.github} alt="GitHub" class="w-6 h-6">
          </a>
          <a href="https://www.linkedin.com/in/said-rivera-444992308" target="_blank" class="hover:text-red-800 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
            <img src={assets.linkedin} alt="LinkedIn" class="w-6 h-6">
          </a>
        </div>
      </div>
      <div class="md:w-1/2">
        <img src={assets.profile} alt="Profile" class="rounded shadow-md max-h-96 w-full object-cover hover-lift slide-in-from-right {showHeroImage ? 'visible' : ''}">
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="bg-stone-100 py-20 px-6 reserved-space-about">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-16 reveal">About Me</h1>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div class="reveal">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 no-shift {aboutVisible ? 'visible slide-in-left' : ''}">Passionate Developer</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-4 no-shift {aboutVisible ? 'visible slide-in-left delay-200' : ''}">
              I'm a developer with a passion for creating innovative digital solutions. 
              My journey in software development has led me through various domains, from web applications 
              to real-time systems, machine learning etc. If there is something to create and code I will be there.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed no-shift {aboutVisible ? 'visible slide-in-left delay-300' : ''}">
              I believe in writing clean, maintainable code and making the applications
              modular so it can grow in the future. Every project is an opportunity to 
              learn, innovate, and push the boundaries of what's possible. My motto is to be the most efficient
              possible so I will use every tool in my hand to achieve it.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md hover-lift no-shift {aboutVisible ? 'visible scale-in delay-400' : ''}">
              <h3 class="font-bold text-lg text-red-800 mb-3">Experience</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Fullstack Development
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Real-time Applications
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  API Development
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Database Design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Deployment & CI/CD
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Machine Learning
                </li>
              </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover-lift no-shift {aboutVisible ? 'visible scale-in delay-500' : ''}">
              <h3 class="font-bold text-lg text-red-800 mb-3">Languages</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Spanish - Native
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  English - Advanced
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="relative no-shift {aboutVisible ? 'visible slide-in-right delay-300' : ''}">
          <img src={assets.code} alt="Code" class="w-full h-96 object-cover rounded-lg shadow-xl hover-lift">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8 reveal">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center no-shift {aboutVisible ? 'visible fade-in delay-600' : ''}">What I Do</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center no-shift {aboutVisible ? 'visible bounce-in delay-700' : ''}">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
              <svg class="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Web Development</h3>
            <p class="text-gray-600">Building responsive, modern web applications.</p>
          </div>
          
          <div class="text-center no-shift {aboutVisible ? 'visible bounce-in delay-800' : ''}">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
              <svg class="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Real-time Systems</h3>
            <p class="text-gray-600">Creating dynamic, interactive applications.</p>
          </div>
          
          <div class="text-center no-shift {aboutVisible ? 'visible bounce-in delay-900' : ''}">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
              <svg class="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Innovation</h3>
            <p class="text-gray-600">Exploring emerging technologies like AI/ML and staying ahead of industry trends.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="py-16 px-6 reserved-space-skills">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-10 reveal">Skills</h1>
      <div class="text-center">
        <p class="text-xl font-semibold mb-6 reveal">Technologies I Use</p>
        
\
        <div class="skills-container {skillsExpanded ? 'expanded' : ''}">
          <div class="skills-grid {skillsExpanded ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-rose-800 transition hover:bg-rose-100 hover:border-2">
              <img src={assets.angular} alt="Angular" class="w-6 h-6">
              <p class="font-bold text-lg">Angular</p>
              <p class="text-sm text-gray-600">Frontend framework</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-blue-800 transition hover:bg-blue-100 hover:border-2">
              <img src={assets.react} alt="React" class="w-6 h-6">
              <p class="font-bold text-lg">React</p>
              <p class="text-sm text-gray-600">Frontend library</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-orange-600 transition hover:bg-orange-100 hover:border-2">
              <img src={assets.svelte} alt="Svelte" class="w-6 h-6">
              <p class="font-bold text-lg">Svelte</p>
              <p class="text-sm text-gray-600">Frontend framework</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-green-800 transition hover:bg-green-100 hover:border-2">
              <img src={assets.websocket} alt="WebSockets" class="w-6 h-6">
              <p class="font-bold text-lg">WebSockets</p>
              <p class="text-sm text-gray-600">Real-time communication</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-purple-800 transition hover:bg-purple-100 hover:border-2">
              <img src={assets.redux} alt="Redux" class="w-6 h-6">
              <p class="font-bold text-lg">Redux</p>
              <p class="text-sm text-gray-600">State management</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-amber-800 transition hover:bg-amber-100 hover:border-2">
              <img src={assets.zustand} alt="Zustand" class="w-6 h-6">
              <p class="font-bold text-lg">Zustand</p>
              <p class="text-sm text-gray-600">State management</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-black transition hover:bg-black/25 hover:border-2">
              <img src={assets.nodejs} alt="Node.js" class="w-6 h-6">
              <p class="font-bold text-lg">Node.js / Express</p>
              <p class="text-sm text-gray-600">Backend development</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-purple-800 transition hover:bg-purple-100 hover:border-2">
              <img src={assets.dotnet} alt=".NET" class="w-6 h-6">
              <p class="font-bold text-lg">.NET</p>
              <p class="text-sm text-gray-600">Backend development</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-sky-800 transition hover:bg-sky-100 hover:border-2">
              <img src={assets.docker} alt="Docker" class="w-6 h-6">
              <p class="font-bold text-lg">Docker</p>
              <p class="text-sm text-gray-600">Containerization</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-indigo-800 transition hover:bg-indigo-100 hover:border-2">
              <img src={assets.mcp} alt="MCP" class="w-6 h-6">
              <p class="font-bold text-lg">MCP</p>
              <p class="text-sm text-gray-600">Model Context Protocol</p>
            </div>
            <div class="bg-white border rounded shadow p-4 skill-card hover:border-gray-800 transition hover:bg-gray-100 hover:border-2">
              <img src={assets.machinelearning} alt="Machine Learning" class="w-6 h-6">
              <p class="font-bold text-lg">Machine Learning</p>
              <p class="text-sm text-gray-600">Deep Learning | Python | TensorFlow</p>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <p class="font-semibold mb-4 text-lg reveal">Technologies I'm Learning</p>
          <div class="grid grid-cols-1 md:grid-cols-1 gap-3 max-w-2xl mx-auto">
            <div class="bg-white border rounded shadow p-3 skill-card hover:border-green-600 transition hover:bg-green-50 hover:border-2 {skillsExpanded ? 'animate' : ''}" style="animation-delay: 1.2s;">
              <p class="font-bold">Generative AI</p>
              <p class="text-sm text-gray-600">Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-16 px-6 bg-stone-100 reserved-space-projects">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-10 reveal">Projects</h1>
      

      <div class="carousel-container relative">
        <div 
          class="carousel-track"
          style="transform: translateX(-{currentSlide * 33.333}%)"
          role="region"
          aria-label="Projects carousel"
          on:mouseenter={stopCarousel}
          on:mouseleave={startCarousel}
        >
          <!-- ProDoku Project -->
          <div class="carousel-slide">
            <div class="bg-white rounded-lg shadow-lg p-8 project-card {projectsVisible ? '' : ''}"
                 role="button"
                 tabindex="0"
                 on:click={() => handleProjectClick('https://github.com/Razeball/KanbanApp')}
                 on:keypress={(e) => handleKeyPress(e, 'https://github.com/Razeball/KanbanApp')}>
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="lg:w-1/2">
                  <h2 class="text-3xl font-bold mb-4 text-center lg:text-left text-red-800">ProDoku</h2>
                  <p class="text-xl text-gray-700 mb-4 text-center lg:text-left">Kanban & Document Management App</p>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    A comprehensive project management application that combines Kanban boards with document management. 
                    Built with real-time collaboration features using WebSockets, allowing teams to work together seamlessly.
                  </p>
                  <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Angular</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js/Express</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">WebSockets</span>
                    <span class="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold">Docker</span>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <img src={assets.prodoku} alt="ProDoku Kanban App" class="rounded-lg shadow-xl w-full max-w-md mx-auto hover-lift">
                </div>
              </div>
            </div>
          </div>
          
          <!-- SB Project -->
          <div class="carousel-slide">
            <div class="bg-white rounded-lg shadow-lg p-8 project-card">
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="lg:w-1/2">
                  <h2 class="text-3xl font-bold mb-4 text-center lg:text-left text-red-800">S&B</h2>
                  <p class="text-xl text-gray-700 mb-4 text-center lg:text-left">E-commerce Platform</p>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    A modern e-commerce application featuring user authentication, product catalog, shopping cart, 
                    and secure payment processing. Built with React and secured with JWT authentication.
                  </p>
                  <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">React</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js/Express</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">PostgreSQL</span>
                    <span class="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold">JWT Security</span>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <img src={assets.sb} alt="SB E-commerce App" class="rounded-lg shadow-xl w-full max-w-md mx-auto hover-lift">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Teacher Grader Project -->
          <div class="carousel-slide">
            <div class="bg-white rounded-lg shadow-lg p-8 project-card"
                 role="button"
                 tabindex="0"
                 on:click={() => handleProjectClick('https://github.com/Razeball/TeacherGraderExe')}
                 on:keypress={(e) => handleKeyPress(e, 'https://github.com/Razeball/TeacherGraderExe')}>
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="lg:w-1/2">
                  <h2 class="text-3xl font-bold mb-4 text-center lg:text-left text-red-800">Teacher Grader</h2>
                  <p class="text-xl text-gray-700 mb-4 text-center lg:text-left">Desktop Grading Application</p>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    A desktop application built with Electron for teachers to efficiently grade student assignments. 
                    Features local data storage with SQLite and an intuitive interface built with Next.js.
                  </p>
                  <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span class="bg-black/10 text-black/80 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js/Express</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Electron</span>
                    <span class="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold">SQLite</span>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <img src={assets.teacherGrader} alt="Teacher Grader App" class="rounded-lg shadow-xl w-full max-w-md mx-auto hover-lift">
                </div>
              </div>
            </div>
          </div>
          <!-- Ticket Manager Backend -->
          <div class="carousel-slide">
            <div class="bg-white rounded-lg shadow-lg p-8 project-card"
                 role="button"
                 tabindex="0"
                 on:click={() => handleProjectClick('https://github.com/Razeball/TicketManager')}
                 on:keypress={(e) => handleKeyPress(e, 'https://github.com/Razeball/TicketManager')}>
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="lg:w-1/2">
                  <h2 class="text-3xl font-bold mb-4 text-center lg:text-left text-red-800">Ticket Manager</h2>
                  <p class="text-xl text-gray-700 mb-4 text-center lg:text-left">Backend API for Ticket Management</p>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    A backend made with .NET Core for managing tickets in a support system. 
                    Features include ticket creation, assignment, status tracking, and user management.
                  </p>
                  <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">.NET</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Entity Framework Core</span>
                    <span class="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">Clean Architecture</span>
                    <span class="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold">Paypal</span>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <img src={assets.ticketManager} alt="Ticket Manager Backend" class="rounded-lg shadow-xl w-full max-w-md mx-auto hover-lift">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <!-- Carousel Controls -->
      <div class="carousel-controls">
        <button 
          class="carousel-button" 
          on:click={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous project"
        >
          ←
        </button>
        <button 
          class="carousel-button" 
          on:click={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next project"
        >
          →
        </button>
      </div>
      
      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        {#each Array(totalSlides) as _, index}
          <button
            class="carousel-indicator {currentSlide === index ? 'active' : ''}"
            on:click={() => goToSlide(index)}
            aria-label="Go to project {index + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 px-6 bg-stone-100 reserved-space-contact">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-12 reveal">Get In Touch</h1>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="reveal">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p class="text-gray-600 mb-8">
              Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <div class="space-y-6 reveal">
            <div class="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover-lift">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Email</h3>
                <a href="mailto:razeball@rzcorpsr.com" class="text-blue-600 hover:text-blue-800 transition-colors">
                  razeball@rzcorpsr.com
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover-lift">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Phone</h3>
                <a href="tel:+50768378259" class="text-gray-600 hover:text-gray-800 transition-colors">
                  (+507) 6837-8259
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover-lift">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Location</h3>
                <p class="text-gray-600">Panama</p>
              </div>
            </div>
          </div>
          
          <div class="reveal">
            <h3 class="font-bold text-lg text-gray-800 mb-4">Follow Me</h3>
            <div class="flex gap-4">
              <a href="https://github.com/Razeball" target="_blank" 
                 class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-800 hover:shadow-lg transition-all duration-300 transform hover:scale-110 group">
                <img src={assets.github} alt="GitHub" class="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="https://www.linkedin.com/in/said-rivera-444992308" target="_blank" 
                 class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-800 hover:shadow-lg transition-all duration-300 transform hover:scale-110 group">
                <img src={assets.linkedin} alt="LinkedIn" class="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all">
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="reveal">
          <div class="bg-white p-8 rounded-lg shadow-xl">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
            
            <form on:submit={handleSubmit} class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  bind:value={formData.subject}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  bind:value={formData.message}
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                class="w-full bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {#if formStatus === 'sending'}
                  Sending...
                {:else if formStatus === 'success'}
                  Message Sent!
                {:else}
                  Send Message
                {/if}
              </button>
              
              {#if formMessage}
                <div class="text-center p-3 rounded-lg {formStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                  {formMessage}
                </div>
              {/if}
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@600&display=swap');
  main {
    font-family: 'Inter', sans-serif;
  }
  h1, h2 {
    font-family: 'Playfair Display', serif;
  }
</style>
