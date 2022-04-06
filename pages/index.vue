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
</template>

<script>
export default {
  name: 'MainPage',

};
</script>
<style lang="scss">

</style>
