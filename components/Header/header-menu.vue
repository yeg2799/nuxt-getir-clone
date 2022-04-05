<template lang="pug">
  .header-menu-wrapper
    .container.pl-4.pr-4
        .header-menu-item
            gt-link.item(v-for="menu in menus" :key="menu.id" :link="menu.link" :class="{ 'active': route.path === menu.link }")
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
                id: 0,
                title: 'getir',
                subTitle: '',
                link: '/',
            },
            {
                id: 1,
                title: 'getir',
                subTitle: 'yemek',
                link: '/yemek',
            },
            {
                id: 2,
                title: 'getir',
                subTitle: 'büyük',
                link: '/buyuk',
            },
            {
                id: 3,
                title: 'getir',
                subTitle: 'su',
                link: '/su',
            },
            {
                id: 4,
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

    padding: 5px 0px 0px;
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