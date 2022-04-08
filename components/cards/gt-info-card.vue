<template lang="pug">
    .info-card-wrapper
        .container
            .info-card
                .info-card-item(v-for="item in infoDataList" :key="item.id")
                    .info-card-image
                        tw-image-card(:src="item.imageUrl")
                    .info-card-title
                        span {{ item.title }}
                    .info-card-description
                        span {{ item.description }}
</template>

<script>
export default {
    props: {
        infoDataList: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style src="@/assets/scss/cards/gt-info-card.scss" lang="scss" />