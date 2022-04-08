<template lang="pug">
    .favorites-wrapper
        .container 
            .favorites-header
                span {{ headerTitle }}
            .favorites-list
                .favorites-list-item(v-for="item in productDataList" :key="item.id")
                    .item-img
                        tw-image-card(:src="item.imageUrl")
                        .item-counter
                            span +
                    .item-price
                        span.item-discount(v-if="item.discount") ₺{{ item.discount }}
                        span ₺{{ item.price }}
                    .item-title
                        span {{ item.title }}
                    .item-property
                        span {{ item.property }}
</template>

<script>
export default {
    props: {
        productDataList: {
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


<style src="@/assets/scss/cards/gt-product-card.scss" lang="scss" />