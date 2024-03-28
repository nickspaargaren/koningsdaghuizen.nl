<script setup lang="ts">
useHead({
  titleTemplate: () => "Plein 2000 | Koningsdag Huizen",
});

const { events: eventsAfternoon } = await queryContent(
  "/program/plein2000-afternoon"
).findOne();
const { events: eventsEvening } = await queryContent(
  "/program/plein2000-evening"
).findOne();
</script>

<template>
  <UContainer>
    <h1>Plein 2000</h1>

    <h2>Middagprogramma Plein 2000</h2>
    <p>11:00 - 17:00</p>

    <Program :events="eventsAfternoon" />

    <h2>Avondprogramma Plein 2000</h2>
    <p>18:50 - 23:00</p>

    <Program :events="eventsEvening" />
  </UContainer>
</template>
