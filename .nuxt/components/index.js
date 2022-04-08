export { default as CardsGtCampaignsCard } from '../../components/cards/gt-campaigns-card.vue'
export { default as CardsGtCategoriesCard } from '../../components/cards/gt-categories-card.vue'
export { default as CardsGtProductCard } from '../../components/cards/gt-product-card.vue'
export { default as CardsGtPromotionCard } from '../../components/cards/gt-promotion-card.vue'
export { default as CarouselGtSlickCarousel } from '../../components/carousel/gt-slick-carousel.vue'
export { default as ButtonTwButton } from '../../components/button/tw-button.vue'
export { default as IconTwIcon } from '../../components/icon/tw-icon.vue'
export { default as HeaderMenu } from '../../components/header/header-menu.vue'
export { default as ImageTwImageCard } from '../../components/image/tw-image-card.vue'
export { default as LinkGtLink } from '../../components/link/gt-link.vue'
export { default as TextFieldTwTextField } from '../../components/text-field/tw-text-field.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
