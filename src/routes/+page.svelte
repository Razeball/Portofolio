<script lang="ts">
	import '../app.css';
	import profile from "./assets/Profile.jpg";
	import sb from "./assets/SB.png";
	import logo from "./assets/Logo.svg"
  import code from "./assets/code.png";
	import prodoku from "./assets/ProDoku.png";
  import teacherGrader from "./assets/TeacherGrader.png";
	import github from "./assets/github.svg";
	import linkedin from "./assets/linkedin.svg";
	import angular from "./assets/angular.svg";
	import react from "./assets/react.svg";
	import svelte from "./assets/svelte.svg";
	import websocket from "./assets/websocket.svg";
  import redux from "./assets/redux.svg";
  import zustand from "./assets/zustand.svg";
	import dotnet from "./assets/dotnet.svg";
	import docker from "./assets/docker.svg";
	import nodejs from "./assets/nodejs.svg";
  import mcp from "./assets/mcp.png";
  import machinelearning from "./assets/machinelearning.svg";

	import { onMount } from 'svelte';

	let activeSection = 'home';

		onMount(() => {
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
					}
				});
			}, {
				threshold: 0.3,
				rootMargin: '-15% 0px -15% 0px'
			});

		
			sections.forEach(section => {
				if (section) {
					observer.observe(section);
				}
			});

			
			return () => {
				sections.forEach(section => {
					if (section) observer.unobserve(section);
				});
			};
		};

		setupObserver();
	});

	function isActive(sectionId: string): boolean {
		return activeSection === sectionId;
	}
</script>

<main class="font-sans">
  <!-- Navbar -->
  <div class="bg-stone-200 shadow-md mb-4 sticky top-0 z-50">
    <nav class="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <a href="#home" class="flex items-center gap-2">
        <img src={logo} alt="Logo" class="w-10 h-10">
        <span class="text-xl font-bold text-red-800">Said Rivera</span>
      </a>
      <div class="flex gap-5 text-sm sm:text-base">
        <a href="#home" class="hover:text-red-800 transition {isActive('home') ? 'text-red-800 border-b-2 border-red-800' : ''}">Home</a>
        <a href="#about" class="hover:text-red-800 transition {isActive('about') ? 'text-red-800 border-b-2 border-red-800' : ''}">About</a>
        <a href="#skills" class="hover:text-red-800 transition {isActive('skills') ? 'text-red-800 border-b-2 border-red-800' : ''}">Skills</a>
        <a href="#projects" class="hover:text-red-800 transition {isActive('projects') ? 'text-red-800 border-b-2 border-red-800' : ''}">Projects</a>
        <a href="#contact" class="hover:text-red-800 transition {isActive('contact') ? 'text-red-800 border-b-2 border-red-800' : ''}">Contact</a>
        <span class="text-xs text-gray-500">({activeSection})</span>
      </div>
    </nav>
  </div>

  <!-- Hero Section -->
  <section id="home" class="bg-white py-20">
    <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-10">
      <div class="md:w-1/2">
        <h1 class="text-5xl font-extrabold mb-4 leading-tight">Hi, I'm <span class="text-red-800">Said Rivera</span></h1>
        <h2 class="text-3xl font-semibold mb-4">Fullstack Developer</h2>
        <p class="text-lg mb-6 max-w-xl">I'm a fullstack developer experienced in React, Angular, Svelte, Node.js and .NET. I focus on building efficient and scalable applications.</p>
        <a href="#contact" class="inline-block bg-red-800 text-white px-5 py-2 rounded hover:bg-red-700 active:bg-red-900 transition">Contact</a>
        <div class="flex gap-4 mt-4">
          <a href="https://github.com/Razeball" target="_blank" class="hover:text-red-800">
            <img src={github} alt="GitHub" class="w-6 h-6">
          </a>
          <a href="https://www.linkedin.com/in/said-rivera-444992308" target="_blank" class="hover:text-red-800">
            <img src={linkedin} alt="LinkedIn" class="w-6 h-6">
          </a>
        </div>
      </div>
      <div class="md:w-1/2">
        <img src={profile} alt="Profile" class="rounded shadow-md max-h-96 w-full object-cover">
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="bg-stone-100 py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-16">About Me</h1>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Passionate Developer</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              I'm a developer with a passion for creating innovative digital solutions. 
              My journey in software development has led me through various domains, from web applications 
              to real-time systems, machine learning etc. If there is something to create and code I will be there.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and making the applications
              modular so it can grow in the future. Every project is an opportunity to 
              learn, innovate, and push the boundaries of what's possible. My motto is to be the most efficient
              possible so I will use every tool in my hand to achieve it.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
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
            
            <div class="bg-white p-6 rounded-lg shadow-md">
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
        
        <div class="relative">
          <img src={code} alt="Code" class="w-full h-96 object-cover rounded-lg shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">What I Do</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Web Development</h3>
            <p class="text-gray-600">Building responsive, modern web applications.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Real-time Systems</h3>
            <p class="text-gray-600">Creating dynamic, interactive applications.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
  <section id="skills" class="py-16 px-6">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-10">Skills</h1>
      <div class="text-center">
        <p class="text-xl font-semibold mb-6">Technologies I Use</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div class="bg-white border rounded shadow p-4 hover:border-rose-800 transition hover:bg-rose-100 hover:border-2">
            <img src={angular} alt="Angular" class="w-6 h-6">
            <p class="font-bold text-lg">Angular</p>
            <p class="text-sm text-gray-600">Frontend framework</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-blue-800 transition hover:bg-blue-100 hover:border-2">
            <img src={react} alt="React" class="w-6 h-6">
            <p class="font-bold text-lg">React</p>
            <p class="text-sm text-gray-600">Frontend library</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-orange-600 transition hover:bg-orange-100 hover:border-2">
            <img src={svelte} alt="Svelte" class="w-6 h-6">
            <p class="font-bold text-lg">Svelte</p>
            <p class="text-sm text-gray-600">Frontend framework</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-green-800 transition hover:bg-green-100 hover:border-2">
            <img src={websocket} alt="WebSockets" class="w-6 h-6">
            <p class="font-bold text-lg">WebSockets</p>
            <p class="text-sm text-gray-600">Real-time communication</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-purple-800 transition hover:bg-purple-100 hover:border-2">
            <img src={redux} alt="Redux" class="w-6 h-6">
            <p class="font-bold text-lg">Redux</p>
            <p class="text-sm text-gray-600">State management</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-amber-800 transition hover:bg-amber-100 hover:border-2">
            <img src={zustand} alt="Zustand" class="w-6 h-6">
            <p class="font-bold text-lg">Zustand</p>
            <p class="text-sm text-gray-600">State management</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-black transition hover:bg-black/25 hover:border-2">
            <img src={nodejs} alt="Node.js" class="w-6 h-6">
            <p class="font-bold text-lg">Node.js / Express</p>
            <p class="text-sm text-gray-600">Backend development</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-purple-800 transition hover:bg-purple-100 hover:border-2">
            <img src={dotnet} alt=".NET" class="w-6 h-6">
            <p class="font-bold text-lg">.NET</p>
            <p class="text-sm text-gray-600">Backend development</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-sky-800 transition hover:bg-sky-100 hover:border-2">
            <img src={docker} alt="Docker" class="w-6 h-6">
            <p class="font-bold text-lg">Docker</p>
            <p class="text-sm text-gray-600">Containerization</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-indigo-800 transition hover:bg-indigo-100 hover:border-2">
            <img src={mcp} alt="MCP" class="w-6 h-6">
            <p class="font-bold text-lg">MCP</p>
            <p class="text-sm text-gray-600">Model Context Protocol</p>
          </div>
          <div class="bg-white border rounded shadow p-4 hover:border-gray-800 transition hover:bg-gray-100 hover:border-2">
            <img src={machinelearning} alt="Machine Learning" class="w-6 h-6">
            <p class="font-bold text-lg">Machine Learning</p>
            <p class="text-sm text-gray-600">Deep Learning | Python | TensorFlow</p>
          </div>
        </div>
        <div class="mt-8">
          <p class="font-semibold mb-4 text-lg">Technologies I'm Learning</p>
          <div class="grid grid-cols-1 md:grid-cols-1 gap-3 max-w-2xl mx-auto">
            <div class="bg-white border rounded shadow p-3 hover:border-green-600 transition hover:bg-green-50 hover:border-2">
              <p class="font-bold">Generative AI</p>
              <p class="text-sm text-gray-600">Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-16 px-6 bg-stone-100">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-10">Projects</h1>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- ProDoku Project -->
        <div class="bg-white rounded shadow p-6 flex flex-col items-center">
          <p class="text-2xl font-bold mb-2 text-center">ProDoku</p>
          <img src={prodoku} alt="ProDoku Kanban App" class="rounded shadow-xl mb-4 neon-hover w-full max-w-xs cursor-pointer" on:click={() => window.open('https://github.com/Razeball/KanbanApp')}>
          <div class="mb-2 text-center text-gray-700">Kanban & Document App</div>
          <div class="flex flex-wrap gap-2 justify-center mt-2">
            <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">Angular</span>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Node.js/Express</span>
            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">WebSockets</span>
            <span class="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-semibold">Docker</span>
          </div>
        </div>
        <!-- SB Project -->
        <div class="bg-white rounded shadow p-6 flex flex-col items-center">
          <p class="text-2xl font-bold mb-2 text-center">S&B</p>
          <img src={sb} alt="SB E-commerce App" class="rounded shadow-xl mb-4 neon-hover w-full max-w-xs cursor-pointer">
          <div class="mb-2 text-center text-gray-700">E-commerce Application</div>
          <div class="flex flex-wrap gap-2 justify-center mt-2">
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">React</span>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Node.js/Express</span>
            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">PostgreSQL</span>
            <span class="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-semibold">JWS security</span>
          </div>
        </div>
        <!-- Teacher Grader Project -->
        <div class="bg-white rounded shadow p-6 flex flex-col items-center">
          <p class="text-2xl font-bold mb-2 text-center">Teacher Grader</p>
          <img src={teacherGrader} alt="Teacher Grader App" class="rounded shadow-xl mb-4 neon-hover w-full max-w-xs cursor-pointer" on:click={() => window.open('https://github.com/Razeball/TeacherGraderExe')}>
          <div class="mb-2 text-center text-gray-700">Grading App for teachers</div>
          <div class="flex flex-wrap gap-2 justify-center mt-2">
            <span class="bg-black/10 text-black/80 px-2 py-1 rounded text-xs font-semibold">Next.js</span>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Node.js/Express</span>
            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Electron</span>
            <span class="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs font-semibold">Sqlite</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl text-red-800 font-bold mb-6">Contact</h1>
      <p class="text-lg">Email: <a href="mailto:razeball@rzcorpsr.com" class="text-blue-600 hover:underline">razeball@rzcorpsr.com</a></p>
      <p class="text-lg">Phone: (+507) 6837-8259</p>
      <div class="flex gap-4 mt-4 justify-center">
        <a href="https://github.com/Razeball" target="_blank" class="hover:text-red-800">
          <img src={github} alt="GitHub" class="w-6 h-6">
        </a>
        <a href="https://www.linkedin.com/in/said-rivera-444992308" target="_blank" class="hover:text-red-800">
          <img src={linkedin} alt="LinkedIn" class="w-6 h-6">
        </a>
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
