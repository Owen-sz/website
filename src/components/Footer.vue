
<template>
  <footer
    class="flex flex-col md:flex-row gap-4 md:gap-0 max-w-screen-2xl justify-between mx-auto px-8 py-4 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 border-t border-gray-400 dark:border-gray-600"
  >
    <div class="flex flex-col">
      <span class="font-semibold tracking-wide">
        Copyright © 2021 - {{ new Date().getFullYear() }} Fyra Labs
      </span>
      <a
        href="/licenses"
        class="text-blue-500 dark:text-blue-400 hover:text-blue-600 hover:dark:text-blue-500"
        >License Notice & Credits</a
      >
    </div>
  </footer>
</template>
