<page>
    title: Home
</page>
<script setup lang="ts">
  import { $fetch } from 'ofetch'

  const pizzas = await $fetch(
    'https://my-json-server.typicode.com/Pinegrow/pizzeria-iles/pizzas',
  )
</script>
<template>
  <main>
    <HeroSection />
    <FeatureSection />
    <TheDivider />
    <IslandPizzaStore client:visible :pizzas="pizzas" />
    <DeliverySection />
    <SubscribeSection />
  </main>
</template>
<style scoped></style>
