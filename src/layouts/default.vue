<script setup lang="ts">
  useHeadAndMeta()
  const { route } = usePage()
</script>
<template>
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <FloatingCart class="bottom-12 fixed right-2 z-20" client:load />
      <NavBar
        :class="[route.path === '/' ? 'absolute z-10' : '']"
        :current-path="route.path"
      ></NavBar>
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:none />
    </div>
  </div>
</template>
<style></style>
