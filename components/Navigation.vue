<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">
      <img src="~assets/logo.png" alt="Logo">
    </NuxtLink>

    <div class="menu">
      <NuxtLink v-for="item in menuItems" :key="item.id" :to="item.url">
        {{ item.title }}
      </Nuxtlink>
    </div>

    <div v-if="menu" class="resmenu" @click="menu = !menu">
      <NuxtLink v-for="item in menuItems" :key="item.id" :to="item.url">
        {{ item.title }}
      </Nuxtlink>
    </div>

    <div class="menuButton" @click="menu = !menu">
      Menu
    </div>
  </div>
</template>

<script setup>
  const menu = useState('menu',  () => false)
</script>

<script>
  export default {
    data () {
      return {
        menuItems: [
          { id: 0, title: 'Welkom', url: '/' },
          { id: 1, title: 'Oude Raadhuisplein', url: '/oude-raadhuisplein' },
          { id: 2, title: 'Plein 2000', url: '/plein-2000' },
          { id: 3, title: 'Kindervrijmarkt', url: '/kindervrijmarkt' },
          { id: 4, title: 'Oranjemarkt', url: '/oranjemarkt' },
          { id: 5, title: 'Kermis', url: '/kermis' },
          { id: 6, title: 'Taptoe', url: '/taptoe' },
          { id: 7, title: 'Foto\'s', url: '/fotos' },
          { id: 8, title: 'Toiletten', url: '/toiletten' },
          { id: 9, title: 'Verkeer en Parkeren', url: '/verkeer-en-parkeren' },
          { id: 10, title: 'Contact', url: '/contact' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.nav {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 140px 1fr;
  padding: 15px;
  background-color: #fc8100;
  background: linear-gradient(#fe7500,#fc8100);
  position: relative;
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
}
.nav a.logo {
  margin: 0 0 -50px 0;
  background: #fff;
  display: block;
  padding: 15px;
  line-height: 0;
  box-shadow: 0 10px 20px 5px rgb(0 0 0 / 17%);
  border-radius: 0 0 3px 3px;
  top: -20px;
  position: relative;
  z-index: 1;
}
.nav a.logo img {width: 100%; height: auto;}

.nav .menu {display: flex; margin: auto 0 auto auto;}
.nav .menu a {color: #fff; font-size: 14px; display: block; text-decoration: none; outline: none; font-family: "Open Sans",Helvetica,Arial,Sans-Serif; display: block; padding: 10px; line-height: 1; border-radius: 3px; transition: all 0.3s ease 0s; font-weight: 700; margin-left: 10px;}
.nav .menu a.router-link-exact-active {background: rgba(255,255,255,.15);}

.nav .resmenu,
.nav .menuButton {display: none;}

@media (max-width: 760px) {
  .nav .menu {display: none;}
  .nav .menuButton {display: block; margin: auto 0 auto auto; background: rgba(255,255,255,.15); color: #fff; padding: 10px; line-height: 1; font-size: 14px; font-weight: bold; border-radius: 3px;}
  .nav .resmenu {display: block; height: calc(100vh - 100px); overflow-y: auto; padding-top: 30px; box-sizing: border-box; position: absolute; top: 100px; left: 0; right: 0; background: #fff;}
  .nav .resmenu a {color: #000; font-weight: bold; display: block; border-bottom: 1px solid #eee; padding: 10px; text-decoration: none;}
  .nav .resmenu a.router-link-exact-active {color: #fc8100;}
}
</style>
