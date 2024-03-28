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

    <div>
      <div v-for="(event, index) in eventsAfternoon" :key="index" class="event">
        <h3>{{ event.description }}</h3>
        <p class="text-lg m-0">{{ event.time }}</p>
      </div>
    </div>

    <h2>Avondprogramma Plein 2000</h2>
    <p>18:50 - 23:00</p>

    <div>
      <div v-for="(event, index) in eventsEvening" :key="index" class="event">
        <h3>{{ event.description }}</h3>
        <p class="text-lg m-0">{{ event.time }}</p>
      </div>
    </div>
  </UContainer>
</template>
