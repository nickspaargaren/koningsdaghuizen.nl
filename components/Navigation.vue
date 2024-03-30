<script setup lang="ts">
const isOpen = ref(false);

const links = [
  { label: "Welkom", to: "/" },
  { label: "Oude Raadhuisplein", to: "/oude-raadhuisplein" },
  { label: "Plein 2000", to: "/plein-2000" },
  { label: "Kindervrijmarkt", to: "/kindervrijmarkt" },
  { label: "Oranjemarkt", to: "/oranjemarkt" },
  { label: "Kermis", to: "/kermis" },
  { label: "Taptoe", to: "/taptoe" },
  { label: "Foto's", to: "/fotos" },
  { label: "Toiletten", to: "/toiletten" },
  { label: "Verkeer en Parkeren", to: "/verkeer-en-parkeren" },
  { label: "Contact", to: "/contact" },
];
</script>

<template>
  <div class="nav">
    <NuxtLink to="/" class="logo">
      <img src="~assets/logo.png" alt="Logo" />
    </NuxtLink>

    <div class="menu">
      <NuxtLink v-for="(item, index) in links" :key="index" :to="item.to">
        {{ item.label }}
      </NuxtLink>
    </div>

    <button class="menuButton" @click="isOpen = !isOpen">Menu</button>

    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <UVerticalNavigation :links="links" @click="isOpen = false" />

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 140px 1fr;
  padding: 15px;
  background-color: #fc8100;
  background: linear-gradient(#fe7500, #fc8100);
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
.nav a.logo img {
  width: 100%;
  height: auto;
}

.nav .menu {
  display: flex;
  margin: auto 0 auto auto;
}
.nav .menu a {
  color: #fff;
  font-size: 14px;
  display: block;
  text-decoration: none;
  outline: none;
  font-family: "Open Sans", Helvetica, Arial, Sans-Serif;
  display: block;
  padding: 10px;
  line-height: 1;
  border-radius: 3px;
  transition: all 0.3s ease 0s;
  font-weight: 700;
  margin-left: 10px;
}
.nav .menu a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.15);
}

.nav .menuButton {
  display: none;
}

@media (max-width: 760px) {
  .nav .menu {
    display: none;
  }
  .nav .menuButton {
    display: block;
    margin: auto 0 auto auto;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 10px;
    line-height: 1;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
  }
}
</style>
