<template>
  <div>
    <div style="text-align: center;">
      <nuxt-content :document="page" />
    </div>

    <div class="grid-3x">
      <div class="blok">
        <h2>
          {{ plein2000.title }}
        </h2>
        {{ plein2000.intro }}
      </div>
      <div class="blok">
        <h2>
          {{ taptoe.title }}
        </h2>
        {{ taptoe.intro }}
      </div>
      <div class="blok">
        <h2>
          {{ kermis.title }}
        </h2>
        {{ kermis.intro }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
