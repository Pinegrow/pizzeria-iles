<script setup lang="ts">
  const pizzas = [
    {
      name: 'Classic Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIxfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA3Njg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Rompipalle Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIyM3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMTUz&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Fire & Ice Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDYyfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA4NzU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Pizza Di Casa Mia',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1564936281291-294551497d81?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyNXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Parigina Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwMnx8cGl6emF8ZW58MHx8fHwxNjMxMDgwOTQw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Ettore Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyOXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'La Regina Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1620894599483-aefd71cb525f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
    {
      name: 'Paesana Pizza',
      description: 'Yummiest of the lot',
      image:
        'https://images.unsplash.com/photo-1572785031839-8d006462dcd4?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyN3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      price: '$ 16.00',
    },
  ]
</script>
<template>
  <section class="pb-24 pt-12 text-center text-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-gray-50 px-12 py-16 rounded-lg text-gray-400">
        <div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
          <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
            <h2 class="font-medium mb-1 text-primary-500">Our Menu</h2>
            <h3 class="capitalize font-bold text-4xl text-gray-900">
              Most Loved Items
            </h3>
          </div>
        </div>
        <div class="-mx-3 flex flex-wrap justify-center mb-12">
          <PizzaCard
            v-for="(pizza, index) in pizzas"
            :key="index"
            :description="pizza.description"
            :image="pizza.image"
            :name="pizza.name"
            :price="pizza.price"
          />
        </div>
        <div>
          <BaseButton label="Full Menu" size="lg"></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
