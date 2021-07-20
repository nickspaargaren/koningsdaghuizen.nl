<template>
  <div class="content">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content }: { $content: any}) {
    const page = await $content('verkeer-en-parkeren').fetch()

    return {
      page
    }
  },
  head (): any {
    return {
      title: 'Verkeer en parkeren | Koningsdag Huizen'
    }
  }
}
</script>
