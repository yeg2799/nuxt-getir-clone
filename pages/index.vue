<template lang="pug">
.gt-main-page
  gt-slick-carousel(:carouselDataList="sliderData")
  gt-category-card(:categorieDataList="categorieDataList" headerTitle="Kategoriler")
  gt-campaigns-card(:campaignsDataList="campaignsDataList" headerTitle="Kampanyalar")
  gt-product-card(:productDataList="favoriteDataList" headerTitle="Favoriler")
</template>

<script>
import { categorieDataList, sliderData, campaignsDataList, favoriteDataList } from '@/helpers/mocks';
import GtSlickCarousel from '@/components/carousel/gt-slick-carousel.vue';
import GtCategoryCard from '@/components/cards/gt-categories-card.vue';
import GtCampaignsCard from '@/components/cards/gt-campaigns-card.vue';
import GtProductCard from '@/components/cards/gt-product-card.vue';
export default {
  name: 'MainPage',
  components: {
    GtSlickCarousel,
    GtCategoryCard,
    GtCampaignsCard,
    GtProductCard,
  },
  setup(){
    return {
      categorieDataList,
      sliderData,
      campaignsDataList,
      favoriteDataList,
    }
  }
};
</script>
<style lang="scss">
.gt-main-page {
  height: 47.5px;
}




</style>
