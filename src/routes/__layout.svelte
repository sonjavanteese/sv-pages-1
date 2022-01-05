<script>
    import "../app.css";
  </script>
  
  <main class="w-full">
    <slot />
  </main>
  <footer>
      <div>nwp-cgn</div>
  </footer>
  
  <style windi:preflights:global windi:safelist:global global>
    :global(#app) {
      @apply fixed inset-0 overflow-x-hidden overflow-y-auto flex flex-col;
    }
    :global(main > section) {
      width: 100%;
      max-width: var(--app-page-width, 760px);
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    #app {
      --app-body-color: #444444;
      --app-body-bg: #ffffff;
      --app-body-width: 780px;
      --app-bar-h: 56px;
      --app-foo-h: 30px;
      --app-foo-color: #ffffff;
      --app-foo-bg: #1f1f1f;
      --app-foo-justify: center;
      color: var(--app-body-color);
      background-color: var(--app-body-bg);
      font-size: 100%;
    }
    #app > footer {
      flex-shrink: 1;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: var(--app-foo-justify, start);
      min-height: var(--app-foo-h, auto);
      color: var(--app-foo-color);
      background-color: var(--app-foo-bg);
      font-weight: 300;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5 {
      @apply text-xl mt-0 mb-1 font-normal leading-normal text-blueGray-700;
    }
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
      @apply text-xl mt-0 mb-0 font-normal leading-normal text-blueGray-700;
    }
    h1,
    .h1 {
      @apply text-6xl;
    }
  
    h2,
    .h2 {
      @apply text-5xl;
    }
  
    h3,
    .h3 {
      @apply text-4xl;
    }
  
    h4,
    .h4 {
      @apply text-3xl;
    }
    h5,
    .h5 {
      @apply text-2xl;
    }
    h6,
    .h6 {
      @apply text-xl;
    }
    p {
      @apply text-lg mb-1 text-blueGray-500 leading-relaxed;
    }
    pre {
      @apply p-2 bg-gray-50 overflow-x-auto text-gray-400;
    }
  </style>