<template>
  <div class="content">
    <h1 v-if="error.statusCode === 404">
      Helaas!
    </h1>
    <h1 v-else>
      Er is een fout opgetreden
    </h1>
    <p>Deze pagina bestaat niet.</p>
  </div>
</template>

<script lang="ts">

export default {
  layout: 'error',
  props: {
    error: { type: Object, required: true }
  }
}

</script>
