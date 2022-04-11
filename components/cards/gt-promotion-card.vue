<template lang="pug">
   .promotion-card-wrapper
    .container
      .promotion-card
        .promotion-card-text
          span.title Getir'i indirin!
          span.description İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        .promotion-card-social-media
          gt-link.social-media-item(link="https://apps.apple.com/app/id995280265" externalLink)
            tw-image-card(src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg")
          gt-link.social-media-item(link="https://play.google.com/store/apps/details?id=com.getir" externalLink)
            tw-image-card(src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg")
          gt-link.social-media-item(link="https://appgallery.huawei.com/#/app/C100954039" externalLink)
            tw-image-card(src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg")
        tw-image-card.promotion-image(src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png")
</template>

<script>
export default {

}
</script>

<style src="@/assets/scss/cards/gt-promotion-card.scss" lang="scss" />