<script lang="ts">
	import '../app.css';
	import profile from "./assets/Profile.jpg";
	import sb from "./assets/SB.png";
	import logo from "./assets/Logo.svg"
  import code from "./assets/code.png";
	import prodoku from "./assets/ProDoku.png";
	import github from "./assets/github.svg";
	import linkedin from "./assets/linkedin.svg";
	import angular from "./assets/angular.svg";
	import react from "./assets/react.svg";
	import svelte from "./assets/svelte.svg";
	import websocket from "./assets/websocket.svg";
	import dotnet from "./assets/dotnet.svg";
	import docker from "./assets/docker.svg";
	import nodejs from "./assets/nodejs.svg";
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
        <a href="#home" class="hover:text-red-800 transition">Home</a>
        <a href="#about" class="hover:text-red-800 transition">About</a>
        <a href="#skills" class="hover:text-red-800 transition">Skills</a>
        <a href="#projects" class="hover:text-red-800 transition">Projects</a>
        <a href="#contact" class="hover:text-red-800 transition">Contact</a>
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
  <section id="about" class="bg-stone-100 py-16 px-6">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl text-center text-red-800 font-bold mb-10">About</h1>
      <div class="md:flex gap-10">
        <div class="md:w-1/2">
          <img src={code} alt="Code" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="md:w-1/2 text-lg">
          <p class="mb-4">I enjoy coding in various domains from web development to game development and machine learning. I love building complex and creative solutions.</p>
          <p class="font-semibold">Languages:</p>
          <ul class="list-disc list-inside">
            <li>Spanish - Native</li>
            <li>English - Advanced</li>
          </ul>
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
        </div>
        <div class="mt-8">
          <p class="font-semibold mb-4 text-lg">Technologies I'm Learning</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <div class="bg-white border rounded shadow p-3 hover:border-blue-600 transition hover:bg-blue-50 hover:border-2">
              <p class="font-bold">MCP</p>
              <p class="text-sm text-gray-600">Model Context Protocol</p>
            </div>
            <div class="bg-white border rounded shadow p-3 hover:border-green-600 transition hover:bg-green-50 hover:border-2">
              <p class="font-bold">Training Models</p>
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
        <div>
          <img src={prodoku} alt="Kanban App" class="rounded shadow-xl mb-2 neon-hover">
          <p class="text-center font-semibold">ProDoku - Kanban & Document App</p>
        </div>
        <div>
          <img src={sb} alt="E-commerce App" class="rounded shadow-xl mb-2 neon-hover">
          <p class="text-center font-semibold">SB - E-commerce Application</p>
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
