<template>
  <div class="blok">
    <h2>{{ title }}</h2>
    {{ content }}
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    content: {
      type: String,
      default: 'Content'
    }
  }
}
</script>

<style lang="scss" scoped>
.blok {
    padding: 30px 30px 20px;
    background: #fff;
    box-shadow: 10px 20px 40px 0 rgb(48 63 77 / 10%);
    border-radius: 3px;
    transition: all .3s ease;
}
</style>
