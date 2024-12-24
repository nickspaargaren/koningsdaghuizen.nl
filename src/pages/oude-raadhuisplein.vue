<script setup lang="ts">
useHead({
  titleTemplate: () => 'Oude raadhuisplein | Koningsdag Huizen',
})

const { events } = await queryContent('/program/ouderaadhuisplein').findOne()
</script>

<template>
  <UContainer>
    <h1>Het Oude Raadhuisplein</h1>
    <h5>
      10:00 - 18:00 uur<br>
      Presentatie Eric Holzhauer
    </h5>

    <Program :events="events" />
  </UContainer>
</template>
