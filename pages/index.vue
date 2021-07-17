<template>
  <div>
    <div style="text-align: center;">
      <nuxt-content :document="page" />
    </div>

    <div class="grid-3x">
      <Blok :title="plein2000.title" :content="plein2000.intro" />
      <Blok :title="taptoe.title" :content="taptoe.intro" />
      <Blok :title="kermis.title" :content="kermis.intro" />
    </div>
  </div>
</template>

<script lang="ts">
import Blok from '~/components/Blok.vue'
export default {
  components: { Blok },
  async asyncData ({ $content }: { $content: any}) {
    const page = await $content('welkom').fetch()
    const kermis = await $content('kermis').fetch()
    const taptoe = await $content('taptoe').fetch()
    const plein2000 = await $content('plein-2000').fetch()

    return {
      page,
      plein2000,
      kermis,
      taptoe
    }
  }
}
</script>
