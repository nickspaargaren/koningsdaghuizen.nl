<script setup lang="ts">
useHead({
  titleTemplate: () => 'Plein 2000 | Koningsdag Huizen',
})

const afternoonData = await queryCollection('program')
  .path('/program/plein2000-afternoon')
  .first()

const eveningData = await queryCollection('program')
  .path('/program/plein2000-evening')
  .first()

const eventsAfternoon = afternoonData?.events || []
const eventsEvening = eveningData?.events || []
</script>

<template>
  <UContainer>
    <ContentDoc path="/plein-2000" />

    <h2>Middagprogramma Plein 2000</h2>
    <p>11:00 - 17:00</p>

    <Program :events="eventsAfternoon" />

    <h2>Avondprogramma Plein 2000</h2>
    <p>18:50 - 23:00</p>

    <Program :events="eventsEvening" />
  </UContainer>
</template>
