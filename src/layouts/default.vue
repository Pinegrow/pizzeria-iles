<script setup lang="ts">
  const currentRoute = useRoute()
</script>
<template>
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <FloatingCart class="bottom-12 fixed right-2 z-20" client:load />
      <NavBar
        :class="[currentRoute.path === '/' ? 'absolute z-10' : '']"
      ></NavBar>
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:none />
    </div>
  </div>
</template>
<style></style>
