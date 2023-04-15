<!-- Wizard.svelte -->
<script>
  import { mdsvex } from 'mdsvex';

  const steps = [
    { title: 'Step 1', md: './steps/step1.md' },
    { title: 'Step 2', md: './steps/step2.md' },
    { title: 'Step 3', md: './steps/step3.md' },
    { title: 'Step 4', md: './steps/step4.md' },
    { title: 'Step 5', md: './steps/step5.md' }
  ];

  let currentStep = 0;

  const renderMarkdown = async () => {
    const md = await fetch(steps[currentStep].md);
    const content = await md.text();

    return mdsvex().markup({ content, filename: steps[currentStep].md });
  };
</script>

<main>
  <div class="wizard-container">
    <h2>{steps[currentStep].title}</h2>
    {#await renderMarkdown()}
      <p>Loading...</p>
    {:then html}
      <div
        class="markdown"
        on:keypress={() => currentStep++}
        on:click={() => currentStep++}
        on:animationend={() => currentStep++}
      >
        {html}
      </div>
    {:catch error}
      <p>{error.message}</p>
    {/await}
    <div class="wizard-progress">
      {#each steps as step, i}
        <div class="progress-step" class:selected={i === currentStep}>
          {i + 1}
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  .wizard-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .markdown {
    width: 100%;
    max-height: 500px;
    overflow: auto;
    cursor: pointer;
    padding: 20px;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    animation: fade-in 0.5s ease-in;
  }

  .wizard-progress {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .progress-step {
    width: 40px;
    height: 40px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .progress-step:hover {
    transform: scale(1.2);
  }

  .progress-step.selected {
    background: #007aff;
    color: #fff;
  }
</style>
