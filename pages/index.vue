<script setup>
const { data: plein2000 } = await useAsyncData("plein2000", () =>
  queryContent("/plein-2000").findOne()
);
const { data: taptoe } = await useAsyncData("taptoe", () =>
  queryContent("/taptoe").findOne()
);
const { data: kermis } = await useAsyncData("kermis", () =>
  queryContent("/kermis").findOne()
);

useHead({
  titleTemplate: () => "Welkom | Koningsdag Huizen",
});
</script>

<template>
  <div>
    <Slider />

    <UContainer>
      <div style="text-align: center">
        <ContentDoc path="/welkom" />
      </div>
    </UContainer>
    <UContainer>
      <div className="gap-5 grid md:grid-cols-3">
        <Blok :title="plein2000.title" :content="plein2000.intro" />
        <Blok :title="taptoe.title" :content="taptoe.intro" />
        <Blok :title="kermis.title" :content="kermis.intro" />
      </div>
    </UContainer>
    <UContainer>
      <ContentDoc path="/welkom-afsluiter" />
    </UContainer>
  </div>
</template>
