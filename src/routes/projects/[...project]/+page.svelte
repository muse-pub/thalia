<script>
  import { getProject } from '@theatre/core';

  const project = getProject('muses-animation');
  const sheet = project.sheet('muses-sheet');
</script>

<section class="hero-section flex flex-row w-full h-screen">
  <div class="flex-1 h-full bg-gray-100">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image cl-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Clio</h2>
      <p class="text-base text-center mx-6">
        Clio is the project that houses the homepage and download links for the software. It's like
        our marketing homepage.
      </p>
    </div>
  </div>
  <div class="flex-1 h-full bg-gray-200">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image th-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Thalia</h2>
      <p class="text-base text-center mx-6">
        Thalia is the name of the desktop app we've chosen. This will likely just be a link to
        github for now, but we can slot it in.
      </p>
    </div>
  </div>
  <div class="flex-1 h-full bg-gray-300">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image ca-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Calliope</h2>
      <p class="text-base text-center mx-6">
        Calliope is our public API and related codebase for folks who want to run it themselves.
        It's completely open source.
      </p>
    </div>
  </div>
</section>
