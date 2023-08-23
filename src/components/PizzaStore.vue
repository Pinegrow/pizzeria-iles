<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'PizzaStore',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <section class="pb-24 pt-12 text-center text-gray-50" data-pg-collapsed>
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
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIxfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA3Njg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Classic Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIyM3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMTUz&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Rompipalle Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDYyfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA4NzU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Fire &amp; Ice Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1564936281291-294551497d81?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyNXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Pizza Di Casa Mia
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwMnx8cGl6emF8ZW58MHx8fHwxNjMxMDgwOTQw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Parigina Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyOXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">Ettore Pizza</h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1620894599483-aefd71cb525f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                La Regina Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
          <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div
              class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
            >
              <img
                src="https://images.unsplash.com/photo-1572785031839-8d006462dcd4?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyN3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop"
                class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
                alt="..."
                width="600"
                height="600"
              />
              <h4 class="font-bold mb-2 text-gray-900 text-xl">
                Paesana Pizza
              </h4>
              <p class="mb-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="font-semibold font-serif mb-4 text-primary-500">
                $ 4.00
              </p>
              <a
                href="#"
                class="border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-4 py-1 rounded text-primary-500 text-sm"
                >Order Now</a
              >
            </div>
          </div>
        </div>
        <div>
          <a
            href="#"
            class="bg-primary-500 hover:bg-primary-600 inline-block m-1 px-6 py-2 rounded text-white"
            >Full Menu</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
