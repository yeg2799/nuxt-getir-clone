<template lang="pug">
  .categories-wrapper
    .container
      .categories-header
        span {{ headerTitle }}
      .categories-list
          gt-link(v-for="item in categorieDataList" :key="item.id" :link="item.url" customClass="categories-list-item")
            tw-image-card.item-image(:src="item.img")
            span {{ item.title}}
</template>

<script>
export default {
    props: {
        categorieDataList: {
            type: Array,
            default: () => [],
        },
        headerTitle: {
            type: String,
            default: '',
            required: true,
        },
    }
}
</script>

<style src="./gt-categories-card.scss" lang="scss" />