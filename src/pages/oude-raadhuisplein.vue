<script setup lang="ts">
useHead({
  titleTemplate: () => 'Oude raadhuisplein | Koningsdag Huizen',
})

const data = await queryCollection('program')
  .path('/program/ouderaadhuisplein')
  .first()
const events = data?.events || []
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
