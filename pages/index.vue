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

    <div class="content">
      <div style="text-align: center">
        <ContentDoc path="/welkom" />
      </div>

      <div class="grid-3x">
        <Blok :title="plein2000.title" :content="plein2000.intro" />
        <Blok :title="taptoe.title" :content="taptoe.intro" />
        <Blok :title="kermis.title" :content="kermis.intro" />
      </div>
      <ContentDoc path="/welkom-afsluiter" />
    </div>
  </div>
</template>
