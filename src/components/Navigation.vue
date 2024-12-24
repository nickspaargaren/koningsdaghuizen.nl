<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { label: 'Welkom', to: '/' },
  { label: 'Oude Raadhuisplein', to: '/oude-raadhuisplein' },
  { label: 'Plein 2000', to: '/plein-2000' },
  { label: 'Kindervrijmarkt', to: '/kindervrijmarkt' },
  { label: 'Oranjemarkt', to: '/oranjemarkt' },
  { label: 'Kermis', to: '/kermis' },
  { label: 'Taptoe', to: '/taptoe' },
  { label: 'Foto\'s', to: '/fotos' },
  { label: 'Toiletten', to: '/toiletten' },
  { label: 'Verkeer en Parkeren', to: '/verkeer-en-parkeren' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <div class="bg-primary top-0 p-4 gap-4 sticky z-10 flex">
    <NuxtLink
      to="/"
      class="relative bg-white p-4 pt-8 -top-4 -mb-12 rounded-b shadow-xl"
    >
      <img
        src="~assets/logo.png"
        class="w-24"
        alt="Logo"
      >
    </NuxtLink>

    <div class="hidden xl:flex gap-1 m-auto mr-0">
      <NuxtLink
        v-for="(item, index) in links"
        :key="index"
        :to="item.to"
        class="text-sm font-bold text-white leading-none p-3 rounded transition hover:bg-white/20 focus:bg-black"
        exact-active-class="bg-white/20"
      >
        {{ item.label }}
      </NuxtLink>
    </div>

    <button
      class="flex gap-2 m-auto mr-0 font-bold text-white leading-none p-3 rounded bg-white/20 xl:hidden"
      @click="isOpen = !isOpen"
    >
      Menu
      <UIcon name="i-mdi-menu" />
    </button>

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

        <UVerticalNavigation
          :links="links"
          @click="isOpen = false"
        />
      </UCard>
    </USlideover>
  </div>
</template>
