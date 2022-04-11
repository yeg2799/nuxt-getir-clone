<template lang="pug">
.gt-slick-carousel
    vue-slick-carousel.slick-carousel(:arrows="true" :autoplay="autoPlay" :autoplay-speed="autoPlaySpeed" :infinite="true" :speed="500" :fade="true" :adaptiveHeight="true" :slidesToShow="1" :slidesToScroll="1")
        .slick-slide(v-for="item in carouselDataList" :key="item.id")
            .slick-carousel-absolute-datas
                .slick-carousel-left
                    .left-image
                        tw-image-card(src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg")
                    .left-text
                        span Dakikalar içinde kapınızda
                .slick-carousel-right
                    .left-image
                        tw-image-card(src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg")
                    .left-text
                        span Dakikalar içinde kapınızda
            .slick-carousel-image
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

<style lang="scss">
.slick-carousel {
    position: relative;
    &-absolute-datas {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        width: 100%;
        height: 100%;
        .slick-carousel-left {
            .left-image {
                width: 180px;
                height: 180px;
            }
            .left-text {
                margin-top: 20px;
                font-size: 30px;
                font-weight: bold;
                max-width: 300px;
            }
        }


    //     background: linear-gradient( 90deg, #5d3ebc 0%,rgba(93,62,188,0) 100% );
    // opacity: 1;
    }
}
</style>