<template lang="pug">
.gt-main-page
  vue-slick-carousel(:arrows="true" :autoplay="true" :autoplay-speed="3000" :infinite="true" :speed="500" :fade="true" :adaptiveHeight="true" :slidesToShow="1" :slidesToScroll="1")
    div
      tw-image-card(src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg")
    div
      tw-image-card(src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg")
    div
      tw-image-card(src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg")
    div
      tw-image-card(src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg")
  .categories-wrapper
    .container
      .categories-header
        span Kategoriler
      .categories-list
          gt-link(v-for="item in categorieDataList" :key="item.id" :link="item.url" customClass="categories-list-item")
            tw-image-card.item-image(:src="item.img")
            span {{ item.title}}
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
import { categorieDataList } from '@/helpers/mocks';
export default {
  name: 'MainPage',
  setup(){
    return {
      categorieDataList,
    }
  }
};
</script>
<style lang="scss">
.gt-main-page {
  height: 47.5px;
}
.categories-wrapper {
  background: #fff;
  .categories-header {
    padding: 10px 0 0 10px;
    font-weight: 700;
  }
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    font-weight: 700;
    .gt-link {
      width: 125px;
      .categories-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 5px 20px;
        border-radius: 4px;
        &:last-child {
          margin-right: 0;
        }
        cursor: pointer;
        &:hover {
          background: #F3F0FE;
          color: #5D3EBC;
        }
        .item-image {
          border: 1px solid #F3F0FE;
          border-radius: 2px;
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
        }
    }
    }

  }
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
