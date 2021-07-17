<template>
  <div><nuxt-content :document="page" /></div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content }) {
    const page = await $content('verkeer-en-parkeren').fetch()

    return {
      page
    }
  }
}
</script>
