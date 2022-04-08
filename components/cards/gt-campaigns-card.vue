<template lang="pug">
    .campaigns-wrapper
        .container
            .campaigns-header
                span {{ headerTitle }}
            .campaigns-list
                .campaigns-list-item(v-for="item in campaignsDataList" :key="item.id")
                    tw-image-card(:src="item.url") 
</template>

<script>
export default {
    props: {
        campaignsDataList: {
            type: Array,
            default: () => [],
        },
        headerTitle: {
            type: String,
            default: '', 
            required: true,
        }
    }
}
</script>

<style src="@/assets/scss/cards/gt-campaigns-card.scss" lang="scss" />