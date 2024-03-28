<template>
  <div>
    <div v-for="(event, index) in events" :key="index" class="event">
      <h3>{{ event.description }}</h3>
      <p class="text-lg m-0">{{ event.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: [
      {
        description: "string",
        time: "string",
      },
    ],
  },
};
</script>
