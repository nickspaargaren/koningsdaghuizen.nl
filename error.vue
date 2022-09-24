<template>
  <div>
    <Navigation />
      <div class="content">
        <h1>
          Helaas!
        </h1>
        <p>Deze pagina bestaat niet.</p>
      </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>


