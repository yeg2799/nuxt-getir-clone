<template lang="pug">
.gt-slick-carousel
    vue-slick-carousel(:arrows="true" :autoplay="autoPlay" :autoplay-speed="autoPlaySpeed" :infinite="true" :speed="500" :fade="true" :adaptiveHeight="true" :slidesToShow="1" :slidesToScroll="1")
        .slick-slide(v-for="item in carouselDataList" :key="item.id")
            tw-image-card(:src="item.url")
</template>

<script>
export default {
props: {
    carouselDataList: {
        type: Array,
        default: () => [],
    },
    autoPlay: {
        type: Boolean,
        default: true,
    },
    autoPlaySpeed: {
        type: String,
        default: 3000,
    },
}
}
</script>

<style>

</style>