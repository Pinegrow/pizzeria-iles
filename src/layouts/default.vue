<script setup lang="ts">
  const { frontmatter, site, route } = usePage()
  const { title, description, ogImage, generator, tags } = frontmatter
  const canonicalUrl = new URL(route.path, site.url)

  useHeadAndMeta({ title, description, ogImage, canonicalUrl, generator, tags })

  const currentPath = computed(() => {
    return route.path
  })
</script>

<template>
  <div>
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <FloatingCart class="bottom-12 fixed right-2 z-20" client:load />
      <NavBar
        :class="[route.path === '/' ? 'absolute z-10' : '']"
        :current-path="currentPath"
      ></NavBar>
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:none />
    </div>
  </div>
</template>
<style></style>
