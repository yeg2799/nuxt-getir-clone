<template lang="pug">
.gt-link
  a(v-if="isAbsoluteLink" :href="link" :target="target")
    slot
  a(v-else-if="externalLink" :href="link" :target="target")
    slot
  nuxt-link(v-else :to="link" :exact="exact" :exact-path="exactPath" :active-class="activeClass" :class="customClass")
    slot
</template>

<script>
import { computed } from '@nuxtjs/composition-api';

export default {
  name: 'YsLink',
  props: {
    link: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: '_blank',
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactPath: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: 'router-link-active',
    },
    externalLink: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const absoluteLinkRegex = /^(?:[a-z]+:)?\/\//;

    const isAbsoluteLink = computed(() => absoluteLinkRegex.test(props.link));

    return {
      isAbsoluteLink,
    };
  },
};
</script>

<style lang="scss" scoped>
.gt-link {
  a {
    text-decoration: none;
  }
}
</style>
