<script setup lang="ts">
const plein2000 = await queryCollection('content').path('/plein-2000').first()
const taptoe = await queryCollection('content').path('/taptoe').first()
const kindervrijmarkt = await queryCollection('content')
  .path('/kindervrijmarkt')
  .first()
const welkom = await queryCollection('content').path('/welkom').first()
const welkomAfsluiter = await queryCollection('content')
  .path('/welkom-afsluiter')
  .first()

useHead({
  titleTemplate: () => 'Welkom | Koningsdag Huizen',
})
</script>

<template>
  <div>
    <Slider />

    <UContainer>
      <div style="text-align: center">
        <ContentRenderer
          v-if="welkom"
          :value="welkom"
        />
      </div>
    </UContainer>
    <UContainer>
      <div className="gap-5 grid md:grid-cols-3">
        <Card
          :title="plein2000?.title"
          :content="plein2000?.intro"
        />
        <Card
          :title="taptoe?.title"
          :content="taptoe?.intro"
        />
        <Card
          :title="kindervrijmarkt?.title"
          :content="kindervrijmarkt?.intro"
        />
      </div>
    </UContainer>
    <UContainer>
      <ContentRenderer
        v-if="welkomAfsluiter"
        :value="welkomAfsluiter"
      />
    </UContainer>
  </div>
</template>
