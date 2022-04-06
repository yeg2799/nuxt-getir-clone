<template lang="pug">
  .header-menu-wrapper
    .container.pl-4.pr-4.header-menu
        .header-menu-item.left-menu
            gt-link.item(v-for="menu in leftMenuDataList" :key="menu.id" :link="menu.link" :class="{ 'active': route.path === menu.link }")
                span.title getir
                span.subTitle {{ menu.subTitle}}
        .right-menu
            .right-menu-item(v-for="menu in rightMenuDataList" :key="menu.id" @click="openModal")
                tw-icon(:icon="menu.icon" size="15")
                span {{ menu.title }}
</template>

<script>
import { useRoute, useContext } from '@nuxtjs/composition-api';
import { leftMenuDataList, rightMenuDataList } from '@/helpers/mocks';
export default {
    setup() {
        const { app } = useContext();
        const route = useRoute();

        const openModal = () => {
            app.$toast.show("Coming Soon!!", { 
	            theme: "bubble", 
	            position: "bottom-center", 
	            duration : 5000
            });
        }

        return {
            route,
            leftMenuDataList,
            rightMenuDataList,
            openModal,
        };
    },
}
</script>

<style lang="scss" scoped>
.header-menu-wrapper {
    background: #4C3398;
    color: #D5D3FB;
    font-size: 15px;
    font-weight: 700;
    padding: 5px 0px 0px;
    .header-menu {
        display: flex;
        justify-content: space-between;
        .header-menu-item.left-menu {
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
        .right-menu {
            display: flex;
            &-item {
                display: flex;
                align-items: center;
                margin-right: 15px;
                cursor: pointer;
                &:last-child {
                    margin-right: 0;
                }
                .tw-icon {
                    margin-right: 5px;
                }
            }
        }
    }

}
</style>