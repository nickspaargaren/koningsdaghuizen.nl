<template>
  <div>
    <div
      v-for="(event, index) in events"
      :key="index"
      class="event relative border-l-2 pb-4 pl-6"
    >
      <h3 class="m-0">{{ event.description }}</h3>
      <p class="m-0">{{ event.time }}</p>
      <div
        class="absolute w-3.5 h-3.5 rounded-full border-2 bg-orange-100 border-gray-300 top-1 -left-2"
      ></div>
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
