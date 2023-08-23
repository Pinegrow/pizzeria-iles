<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
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
  <section class="bg-secondary-500 poster relative text-gray-300">
    <header>
      <div class="container mx-auto relative">
        <nav class="flex flex-wrap items-center px-4">
          <a
            href="#"
            class="bg-primary-500 flex-col font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mr-4 p-6 space-y-2 text-white text-xl"
            ><svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              xml:space="preserve"
              stroke="currentColor"
              viewBox="0 0 64 64"
              height="2.5em"
            >
              <path
                d="M45.432 45.432A18.937 18.937 0 0132 51c-10.486 0-19-8.514-19-19s8.514-19 19-19 19 8.514 19 19H32l13.432 13.432zM32 8v48m16.971-40.971L15.029 48.971M51 32H8m37 13L15.029 15.029M19 27l-1 1m27-2v1m-9 17v-2m1-23h-1"
                fill="none"
                stroke-width="2"
              ></path>
              <path
                d="M52.126 32.846a2.99 2.99 0 01-1.188-2.21C50.251 20.785 42.027 13 32 13c-10.486 0-19 8.514-19 19s8.514 19 19 19c4.932 0 9.427-1.883 12.806-4.969a2.396 2.396 0 011.496-.639c.119-.015.247-.023.381-.03a2.409 2.409 0 012.434 3.131v.001a2.013 2.013 0 01-.519.84C44.283 53.461 38.436 56 32 56 18.754 56 8 45.246 8 32S18.754 8 32 8c12.783 0 23.245 10.015 23.961 22.619a2.745 2.745 0 01-.959 2.22l.007.008a2.21 2.21 0 01-2.766.087l-.117-.088z"
                fill="none"
                stroke-width="2"
              ></path></svg
            ><span>The Pizzeria</span>
          </a>
          <button
            class="hover:bg-primary-500 hover:text-white ml-auto px-3 py-2 rounded text-white lg:hidden"
            data-name="nav-toggler"
            data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
            data-pg-ia-apply="$nav [data-name=nav-toggler]"
          >
            <span class="block border-b-2 border-current my-1 w-6"></span
            ><span class="block border-b-2 border-current my-1 w-6"></span
            ><span class="block border-b-2 border-current my-1 w-6"></span>
          </button>
          <div
            class="hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto flex-grow"
            data-name="nav-menu"
          >
            <div class="flex flex-col mx-auto lg:flex-row">
              <a href="#" class="hover:text-gray-400 lg:p-4 py-2 text-white"
                >Home</a
              >
              <a href="#" class="hover:text-gray-400 lg:p-4 py-2 text-white"
                >Menu</a
              >
              <a href="#" class="hover:text-gray-400 lg:p-4 py-2 text-white"
                >Order</a
              >
              <a href="#" class="hover:text-gray-400 lg:p-4 py-2 text-white"
                >About Us</a
              >
            </div>
            <div class="flex-wrap inline-flex py-1 space-x-3">
              <BaseButton icon="i-logos-facebook" variant="ghost"></BaseButton>
              <BaseButton icon="i-devicon-twitter" variant="ghost"></BaseButton>
              <BaseButton
                icon="i-skill-icons-instagram"
                variant="ghost"
              ></BaseButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="container mx-auto pb-72 pt-48 px-4">
      <div
        class="-mx-4 flex flex-wrap items-center justify-center space-y-6 lg:space-y-0"
      >
        <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
          <p class="font-bold font-serif mb-1 text-2xl text-white">
            Are You Hungry?
          </p>
          <h1
            class="capitalize font-bold mb-6 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl"
          >
            Fill your tummy with the Yummiest pizza in town
          </h1>
          <BaseButton label="Order Now" size="lg"></BaseButton>
          <BaseButton
            label="Our Menu"
            size="lg"
            style="margin-left: 10px"
            variant="soft"
          ></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
