<template>
  <div>
    <Navigation />
    <UContainer>
      <h1>Helaas!</h1>
      <p>Deze pagina bestaat niet.</p>
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
