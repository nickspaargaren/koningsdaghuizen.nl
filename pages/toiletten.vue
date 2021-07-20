<template>
  <div class="content">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }: { $content: any}) {
    const page:Array<any> = await $content('toiletten').fetch()

    return {
      page
    }
  },
  head (): any {
    return {
      title: 'Toiletten | Koningsdag Huizen'
    }
  }
})

</script>
