<template lang="pug">
  .layout(:style="{ height: `${layoutHeight}px` }")
    header-menu
    Nuxt 
    gt-footer
</template>

<script>
import { onMounted, ref, onUnmounted } from '@nuxtjs/composition-api';
import HeaderMenu from '@/components/header/header-menu.vue';
import GtFooter from '@/components/footer/gt-footer.vue';

export default {
  middleware: 'main',
  components: {
    HeaderMenu,
    GtFooter,
  },
  setup() {
    const layoutHeight = ref('');
    const handleResize = () => {
      layoutHeight.value = window.innerHeight;
    };
    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      layoutHeight,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

  &,
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

*,
*:focus {
  outline: none;
}

html {
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}

body {
  overflow-x: hidden !important;
  color: #393c3e;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  background: #f7f7f7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  @media screen and (min-width: 1200px) {
    max-width: 1280px !important;
  }
}
</style>
