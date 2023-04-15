<script>
</script>

<section class="hero-section flex flex-row w-full h-screen bg-base-100">
  <div class="flex-1 h-full">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image cl-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Clio</h2>
      <p class="hero-text text-base text-center mx-6">
        Clio is the project that houses the homepage and download links for the software. It's like
        our marketing homepage.
      </p>
    </div>
  </div>
  <div class="flex-1 h-full bg-gray-200">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image th-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Thalia</h2>
      <p class="hero-text text-base text-center mx-6">Open Editor -></p>
    </div>
  </div>
  <div class="flex-1 h-full bg-gray-300">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="muse-image ca-muse" />
      <h2 class="text-2xl font-bold mt-4 mb-2">Calliope</h2>
      <a class="hero-text text-base text-center mx-6" href="/projects/calliope" target="_blank"
        >Calliope -></a
      >
      <p>
        Calliopie is our public API and related codebase for folks who want to run it themselves.
        It's completely open source.
      </p>
    </div>
  </div>
</section>

<style>
  .cl-muse {
    background-image: url('/clio_hero_circle.png');
  }

  .th-muse {
    background-image: url('/thalia_hero_circle.png');
  }

  .ca-muse {
    background-image: url('/calliope_hero_circle.png');
  }

  .muse-image {
    background-repeat: no-repeat;
    background-size: contain;
    height: 50%;
    width: 68%;
    margin-bottom: 20px;
  }

  .hero-text {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .hero-section:hover .hero-text {
    opacity: 1;
  }
</style>
