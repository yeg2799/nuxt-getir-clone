<template lang="pug">
  .header-menu-wrapper
    .container
        .header-menu-item
            gt-link.item(v-for="menu in menus" :link="menu.link" :class="{ 'active': route.path === menu.link }")
                span.title getir
                span.subTitle {{ menu.subTitle}}
</template>

<script>
import { useRoute } from '@nuxtjs/composition-api';
export default {
    setup() {
        const route = useRoute();
        const menus = [
            {
                title: 'getir',
                subTitle: '',
                link: '/',
            },
            {
                title: 'getir',
                subTitle: 'yemek',
                link: '/yemek',
            },
            {
                title: 'getir',
                subTitle: 'büyük',
                link: '/buyuk',
            },
            {
                title: 'getir',
                subTitle: 'su',
                link: '/su',
            },
            {
                title: 'getir',
                subTitle: 'çarşı',
                link: '/carsi',
            },
        ];
        return {
            route,
            menus,
        };
    },
}
</script>

<style lang="scss" scoped>
.header-menu-wrapper {
    background: #4C3398;

    padding: 5px 10px 0px;
    .header-menu-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        .item {
            padding: 10px 20px;
            margin-right: 2px;
            cursor: pointer;
            span {
                font-size: 15px;
                font-weight: 700;
                color: #D5D3FB;
            }
        }
        .item.active {
            background: #5d3ebc;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            .title {
                color: #ffd300;
            }
            .subTitle {
                color: #fff;
            }  
        }
        .item:hover {
            background: #5d3ebc;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
    }
}
</style>