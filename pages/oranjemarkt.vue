<template>
  <div class="content">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content }: { $content: any}) {
    const page = await $content('oranjemarkt').fetch()
    return {
      page
    }
  },
  head () {
    return {
      title: 'Oranjemarkt | Koningsdag Huizen'
    }
  }
}
</script>
