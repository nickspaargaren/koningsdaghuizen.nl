<template>
  <div class="bg-primary text-white">
    <UContainer
      class="flex justify-between items-center gap-6 whitespace-nowrap"
    >
      <span class="text-xs">Koningsdag Huizen</span>
      <NuxtLink
        to="https://github.com/nickspaargaren/koningsdaghuizen.nl"
        class="leading-none text-xl text-white hover:text-white/75"
      >
        <UTooltip
          text="Broncode"
          :popper="{ placement: 'top' }"
        >
          <UIcon name="i-mdi-github" />
        </UTooltip>
      </NuxtLink>
    </UContainer>
  </div>
</template>
