<template>
    <div id="app">
        <!-- <v-alert
      :value="true"
      type="success"
    ></v-alert> -->
        <v-app>
            <app-header
                class="app-shell-header"
                @click-menu="handleClickHeaderMenu"
                @click-back="handleClickHeaderBack">
            </app-header>
            
            <div class="footer-container"><app-footer :bottomNav="bottomNav" :changeNav="changeNav"></app-footer></div>
            <transition
                :name="pageTransitionEffect"
                @before-enter="handleBeforeEnter"
                @after-enter="handleAfterEnter"
                @before-leave="handleBeforeLeave">
                <keep-alive>
                        <router-view
                            :key="routerViewKey"
                            class="app-view"
                            :class="[{'app-view-with-header': appHeaderShow}, pageTransitionClass]"
                            :data-page-id="$route.fullPath"
                        ></router-view>
                </keep-alive>
            </transition>
            <update-toast></update-toast>
        </v-app>
    </div>
</template>

<script>

import Vue from 'vue';
import {mapState, mapActions} from 'vuex';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import AppSidebar from '@/components/AppSidebar';
import UpdateToast from '@/components/UpdateToast';
const ENABLE_SCROLL_CLASS = 'app-view-scroll-enabled';

export default {
    name: 'app',
    components: {
        UpdateToast,
        AppHeader,
        AppSidebar,
        AppFooter
    },
    computed: {
        ...mapState('pageTransition', {
            pageTransitionType: state => state.type,
            pageTransitionEffect: state => state.effect
        }),

        ...mapState('appShell/appHeader', {
            appHeaderShow: state => state.show,
            
        }),

        ...mapState('appShell/common', {
            scrollPostionMap: state => state.scrollPostionMap
        }),

        pageTransitionClass() {
            return `transition-${this.pageTransitionType}`;
        },
        routerViewKey() {
            let {name, params} = this.$route;
            let paramKeys = Object.keys(params);
            if (paramKeys.length) {
                return name + paramKeys.reduce((prev, cur) => prev + params[cur], '') + `-${this.bottomNav}`;
            }
            return null;
        }
    },
    data() {
        return {
            include:[],
            bottomNav:'home',
            tabCache:{},
            tabDefault: {
                home: '/',
                rank: '/rank',
                search: '/search',
                about: '/about'
            }
        };
    },
    methods: {
        ...mapActions('appShell/appSidebar', [
            'showSidebar',
            'hideSidebar'
        ]),
        ...mapActions('appShell/common', [
            'setPageSwitching',
            'savePageScrollPosition'
        ]),
        changeNav(nav) {
            const fromNav = this.bottomNav
            this.bottomNav = nav
            if (this.bottomNav === fromNav) {
                this.$router.push({path:this.tabDefault[nav],query:{nav}})
            } else {
                this.$router.push({path:this.tabCache[nav]||this.tabDefault[nav],query:{nav}})
            }
        },
        /**
         * make current page container scrollable,
         * and restore its scroll position.
         */
        restoreContainerScrollPosition(containerEl, scrollTop) {
            containerEl.classList.add(ENABLE_SCROLL_CLASS);
            containerEl.scrollTop = scrollTop;
        },

        /**
         * make body scrollable,
         * and restore its scroll position.
         */
        restoreBodyScrollPosition(containerEl, scrollTop) {
            containerEl.classList.remove(ENABLE_SCROLL_CLASS);
            document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
        },

        handleBeforeEnter(el) {
            let pageId = el.dataset.pageId;
            let {y: scrollTop = 0} = this.scrollPostionMap[pageId] || {};

            this.setPageSwitching(true);
            Vue.nextTick(() => {
                this.restoreContainerScrollPosition(el, scrollTop);
            });

        },
        handleAfterEnter(el) {
            let pageId = el.dataset.pageId;
            let {y: scrollTop = 0} = this.scrollPostionMap[pageId] || {};

            this.setPageSwitching(false);
            this.restoreBodyScrollPosition(el, scrollTop);
        },
        handleBeforeLeave(el) {
            let pageId = el.dataset.pageId;
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

            this.restoreContainerScrollPosition(el, scrollTop);
            // save current scroll position in a map
            this.savePageScrollPosition({
                pageId,
                scrollPosition: {y: scrollTop}
            });
        },
        handleClickHeaderBack(showBack) {
            if (showBack === true) {
                this.$router.go(-1)
            } else {
                this.$router.push(showBack)
            }
        },
        handleClickHeaderMenu() {
            this.showSidebar();
        }
        // handleHideSidebar() {
        //     this.hideSidebar();
        // },
        // handleShowSidebar() {
        //     this.showSidebar();
        // }
    },
    mounted () {
        console.log(this)
    },
    watch :{
        '$route' (to,from) {
            this.bottomNav = to.query.nav || 'home'
            if (to.fullPath.indexOf('#howtoinstall')>0) return
            this.tabCache[this.bottomNav] = to.fullPath
        }
    }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/variable';

$page-transition-duration = 0.35s;

#app {
    .footer-container {
        width: 100%;
        height: 56px;
        background: white;
        z-index: 1999;
        bottom: 0;
        position: fixed;
    }

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    background: #ffffff;

    .v-bottom-nav {
        box-sizing: border-box;
        bottom: 56px;
        background: #ffffff;
        border-top: 1px solid rgba(220, 164, 164, 0.2) !important;
        box-shadow: none;
    }

    .application--wrap {
        height: 100%;
        min-height: 100%;
    }

    .app-shell-header {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 140;
    }

    .app-view {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-overflow-scrolling: touch;
        background: white;
        overflow: scroll;
        height: calc(100% - 52px);
        height: -moz-calc(100% - 52px);
        height: -webkit-calc(100% - 52px);
        padding-bottom: 56px;

        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }

        &.app-view-with-header {
            top: $app-header-height;
        }

        &.transition-slide {
            transition: transform $page-transition-duration cubic-bezier(0, 0, 0.2, 1);

            &.slide-left-enter {
                transform: translate(100%, 0);
            }

            &.slide-left-enter-active {
                box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
            }

            &.slide-right-enter {
                transform: translate(-30%, 0);
                transition-timing-function: linear;
            }

            &.slide-right-leave-active {
                transform: translate(100%, 0);
                box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
                z-index: 99;
            }

            &.slide-left-leave-active {
                transform: translate(-30%, 0);
                transition-timing-function: linear;
            }

            &.app-view-scroll-enabled, &.slide-left-enter-active, &.slide-left-leave-active, &.slide-right-enter-active, &.slide-right-leave-active {
                overflow-y: auto;
            }
        }

        &.transition-fade {
            opacity: 1;
            transition: opacity 1s ease;

            &.fade-enter {
                opacity: 0;
            }

            &.fade-leave-active {
                opacity: 0;
            }
        }
    }

    .v-item-group.v-bottom-nav .v-btn--active {
        color: #39f !important;
    }
}
</style>
