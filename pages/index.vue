<template lang="pug">
.gt-main-page
  gt-slick-carousel(:carouselDataList="sliderData")
  gt-category-card(:categorieDataList="categorieDataList" headerTitle="Kategoriler")
  gt-campaigns-card(:campaignsDataList="campaignsDataList" headerTitle="Kampanyalar")
  gt-product-card(:productDataList="favoriteDataList" headerTitle="Favoriler")
  gt-promotion-card
  gt-info-card(:infoDataList="infoDataList") 
</template>

<script>
import { categorieDataList, sliderData, campaignsDataList, favoriteDataList, infoDataList  } from '@/helpers/mocks';
import GtSlickCarousel from '@/components/carousel/gt-slick-carousel.vue';
import GtCategoryCard from '@/components/cards/gt-categories-card.vue';
import GtCampaignsCard from '@/components/cards/gt-campaigns-card.vue';
import GtProductCard from '@/components/cards/gt-product-card.vue';
import GtPromotionCard from '@/components/cards/gt-promotion-card.vue';
import GtInfoCard from '@/components/cards/gt-info-card.vue';
export default {
  name: 'MainPage',
  components: {
    GtSlickCarousel,
    GtCategoryCard,
    GtCampaignsCard,
    GtProductCard,
    GtPromotionCard,
    GtInfoCard,
  },
  setup(){
    return {
      categorieDataList,
      sliderData,
      campaignsDataList,
      favoriteDataList,
      infoDataList,
    }
  }
};
</script>
<style lang="scss">
.gt-main-page {
  margin-top: 47.5px;
}




</style>
