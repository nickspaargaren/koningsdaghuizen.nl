<template>
  <UCard>
    <h2>{{ title }}</h2>
    {{ content }}
  </UCard>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    content: {
      type: String,
      default: 'Content',
    },
  },
}
</script>
