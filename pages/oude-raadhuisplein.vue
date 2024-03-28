<script setup>
useHead({
  titleTemplate: () => "Oude raadhuisplein | Koningsdag Huizen",
});

const { events } = await queryContent("/program/ouderaadhuisplein").findOne();
</script>

<template>
  <UContainer>
    <h1>Het Oude Raadhuisplein</h1>
    <h5>
      10:00 - 18:00 uur<br />
      Presentatie Eric Holzhauer
    </h5>

    <div>
      <div v-for="(event, index) in events" :key="index" class="event">
        <h3>{{ event.description }}</h3>
        <p class="text-lg">{{ event.time }}</p>
      </div>
    </div>
  </UContainer>
</template>
