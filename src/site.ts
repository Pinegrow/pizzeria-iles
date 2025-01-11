export default {
  title: `Pizzeria`,
  description: 'Yummy Pizzas',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pizzeria-iles.netlify.app',
  github: 'https://github.com/pinegrow/pizzeria-iles',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Menu',
        icon: 'i-mdi-home',
        to: '/menu',
      },
      {
        title: 'Order',
        icon: 'i-mdi-home',
        to: '/order',
      },
    ],
    secondary: [
      {
        title: 'About Us',
        icon: 'i-mdi-home',
        to: '/about-us',
      },
    ],
  },
}
