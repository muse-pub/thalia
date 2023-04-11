<header
  class="fixed top-0 left-0 w-full h-14 flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white px-4"
>
  <div class="flex items-center space-x-4">
    <a href="/" class="text-xl font-bold">Muse</a>
    <nav class="flex space-x-4">
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
    </nav>
  </div>
  <div class="flex items-center space-x-4">
    <a href="#">Sign In</a>
    <a href="#" class="bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-600">Sign Up</a
    >
  </div>
</header>

<section class="bg-primary text-white py-20">
  <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
    <div class="mb-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 bg-neutral rounded-full p-4">
        <symbol id="icon-document" viewBox="0 0 20 20">
          <path
            d="M15,0H5C3.9,0,3,0.9,3,2v16c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V2C17,0.9,16.1,0,15,0z M15,18H5v-2h10V18z M15,14H5v-2h10V14z M15,10H5V8h10V10z"
          />
        </symbol>
        <symbol id="icon-save" viewBox="0 0 20 20">
          <path
            d="M11,0L1,5v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5L11,0z M14,16H6v-2h8V16z M14,12H6v-2h8V12z M16,5.2l-4-2.4L8,5.2v2.3h8V5.2z"
          />
        </symbol>
      </svg>
    </div>
    <h1 class="text-4xl font-bold mb-6 text-center">
      Write and Create with <span class="text-accent">Inspiration</span> from the Muses
    </h1>
    <p class="text-lg mb-10 text-center">
      Muse is the perfect tool for creative professionals to unleash their imagination and bring
      their ideas to life. With an easy-to-use interface and a suite of powerful tools, Muse makes
      it simple to write, design, and collaborate with others in real-time.
    </p>
    <div class="flex justify-center items-center space-x-6">
      <svg class="w-16 h-16 text-neutral fill-current animate-bounce">
        <use href="#icon-document" />
      </svg>
      <p class="text-lg mb-0">Write, Edit, and Collaborate on Documents</p>
      <svg class="w-16 h-16 text-neutral fill-current animate-bounce">
        <use href="#icon-save" />
      </svg>
      <p class="text-lg mb-0">Save Your Work Securely to the Cloud</p>
    </div>
  </div>
</section>
