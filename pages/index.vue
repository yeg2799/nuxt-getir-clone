<template lang="pug">
.gt-main-page
  gt-slick-carousel(:carouselDataList="sliderData")
  gt-category-card(:categorieDataList="categorieDataList" headerTitle="Kategoriler")
  .campaigns-wrapper
    .container
      .campaigns-header
        span Kampanyalar
      .campaigns-list
          .campaigns-list-item
            tw-image-card(src="https://cdn.getir.com/misc/62504ae8338f484278d20cda_banner_tr_1649431688512.jpeg") 
          .campaigns-list-item
            tw-image-card(src="https://cdn.getir.com/misc/62150453fcf66e6eee451fca_banner_tr_1649140530464.jpeg") 
          .campaigns-list-item
            tw-image-card(src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg") 
    .favorites-wrapper
      .container 
        .favorites-header
          span Favoriler
        .favorites-list
          .favorites-list-item
</template>

<script>
import { categorieDataList, sliderData } from '@/helpers/mocks';
import GtSlickCarousel from '@/components/carousel/gt-slick-carousel.vue';
import GtCategoryCard from '@/components/cards/gt-categories-card.vue';
export default {
  name: 'MainPage',
  components: {
    GtSlickCarousel,
    GtCategoryCard,
  },
  setup(){
    return {
      categorieDataList,
      sliderData,
    }
  }
};
</script>
<style lang="scss">
.gt-main-page {
  height: 47.5px;
}

.campaigns-wrapper {
  .campaigns-header {
    padding: 10px 0 0 10px;
    font-weight: 700;
  }
  .campaigns-list {
    display: flex;
    margin-top: 10px;
    &-item {
      margin-right: 20px;
      img {
        border-radius: 5px;
        width: 400px;
        height: 175px;
      }

    }
  } 
}
.favorites-wrapper {
  .favorites-header {
    padding: 10px 0 0 10px;
    font-weight: 700;
  }
  .favorites-list {
    display: flex;
    margin-top: 10px;
    &-item {
      margin-right: 20px;
      img {
        border-radius: 5px;
        width: 400px;
        height: 175px;
      }

    }
  } 
}

</style>
