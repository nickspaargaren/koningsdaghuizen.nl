<template>
  <div class="content">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }: { $content: any}) {
    const page = await $content('toiletten').fetch()
    return {
      page
    }
  },
  head () {
    return {
      title: `${this.$data.page.title} | Koningsdag Huizen`
    }
  }
})

</script>
