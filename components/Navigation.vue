<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">
      <img src="~assets/logo.png" alt="Logo">
    </NuxtLink>

    <div v-if="menu" class="menu" @click="toggle">
      <NuxtLink to="/">
        Welkom
      </NuxtLink>
      <NuxtLink to="/oude-raadhuisplein">
        Oude Raadhuisplein
      </NuxtLink>
      <NuxtLink to="/plein-2000">
        Plein 2000
      </NuxtLink>
      <NuxtLink to="/kindervrijmarkt">
        Kindervrijmarkt
      </NuxtLink>
      <NuxtLink to="/oranjemarkt">
        Oranjemarkt
      </NuxtLink>
      <NuxtLink to="/kermis">
        Kermis
      </NuxtLink>
      <NuxtLink to="/taptoe">
        Taptoe
      </NuxtLink>
      <NuxtLink to="/fotos">
        Foto's
      </NuxtLink>
      <NuxtLink to="/toiletten">
        Toiletten
      </NuxtLink>
      <NuxtLink to="/verkeer-en-parkeren">
        Verkeer en Parkeren
      </NuxtLink>
      <NuxtLink to="/contact">
        Contact
      </NuxtLink>
    </div>
    <div class="menuButton" @click="toggle">
      Menu
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    menu () {
      return this.$store.state.menu.isOpen
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'menu/toggle'
    })
  }
}

</script>

<style scoped>
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
.nav .menu a.nuxt-link-exact-active {background: rgba(255,255,255,.15);}

.nav .menuButton {display: none;}

@media (max-width: 760px) {
  .nav .menuButton {display: block; margin: auto 0 auto auto; background: rgba(255,255,255,.15); color: #fff; padding: 10px; line-height: 1; font-size: 14px; font-weight: bold; border-radius: 3px;}
  .nav .menu {flex-direction: column; height: calc(100vh - 100px); overflow-y: auto; padding-top: 30px; box-sizing: border-box; position: absolute; top: 100px; left: 0; right: 0; background: #fff;}
  .nav .menu a {color: #000; display: block; border-bottom: 1px solid #eee; padding: 10px 0;}
  .nav .menu a.nuxt-link-exact-active {color: #fc8100;}
}
</style>
