<template lang="pug">
.gt-main-page
  vue-slick-carousel(:arrows="true" :dots="true" speed="300" dotsClass="slick-dots custom-dot-class")
    div 1
    div 2
    div 3
    div 4
</template>

<script>
export default {
  name: 'MainPage',

};
</script>
<style lang="scss">

</style>
