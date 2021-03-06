<template>
    <transition
        name="slide-down">
        <header class="app-header-wrapper" id="header-container" v-show="show">
            <div class="app-header-left">
                <v-btn
                    icon
                    v-if="showMenu"
                    @click.native="handleClick('menu')">
                    <v-icon color="grey" class="app-header-icon">menu</v-icon>
                </v-btn>
                <v-btn
                    icon
                    v-if="showBack"
                    @click.native="handleClick('back',{showBack})">
                    <v-icon color="grey" class="app-header-icon">arrow_back</v-icon>
                </v-btn>
                <div v-if="showLogo" @click="handleClick('logo')">
                    <slot name="logo">
                        <img v-if="logoIcon.src" :src="logoIcon.src" :alt="logoIcon.alt" class="app-header-icon"></img>
                    </slot>
                </div>
            </div>
            <div class="app-header-middle" v-cloak>
                <slot name="title">
                    {{ title }}
                </slot>
            </div>
            <div class="app-header-right">
                <v-btn icon v-if="(showMenu||showBack||showLogo)&& (actions.length<=0)" style="visibility:hidden">
                    <v-icon color="grey" class="app-header-icon">arrow_back</v-icon>
                </v-btn>
                <slot name="actions"
                    v-for="(action, actionIdx) in actions"
                    :icon="action.icon"
                    :route="action.route">
                    <v-btn
                        icon="icon"
                        @click.native="handleClick('action', {actionIdx, route: action.route})">
                        <v-icon color="grey" v-if="action.icon" class="app-header-icon">{{ action.icon }}</v-icon>
                    </v-btn>
                </slot>
            </div>
        </header>
    </transition>
</template>

<script>
import {mapState} from 'vuex';
import EventBus from '@/core/event-bus';

export default {
    name: 'appHeader',
    mounted () {
        const h = document.getElementById('header-container')
        h.addEventListener('touchmove',function(event) {
            event.preventDefault();
        })
    },
    computed: {
        ...mapState('appShell/appHeader', [
            'show',
            'showMenu',
            'showBack',
            'showLogo',
            'logoIcon',
            'title',
            'actions'
        ]),
        ...mapState('appShell/common', [
            'isPageSwitching'
        ])
    },
    methods: {

        /**
         * 处理按钮点击事件
         *
         * @param {string} source 点击事件源名称 menu/logo/action
         * @param {Object} data 随点击事件附带的数据对象
         */
        handleClick(source, {actionIdx, route,showBack} = {}) {

            // 页面正在切换中，不允许操作，防止滑动效果进行中切换
            if (this.isPageSwitching) {
                return;
            }
            let eventData = {};

            // 点击右侧动作按钮，事件对象中附加序号
            if (source === 'action') {
                eventData.actionIdx = actionIdx;
            }
            if (source === 'back') {
                this.$emit(`click-${source}`, showBack);
                EventBus.$emit(`app-header:click-${source}`, showBack);
                return
            }
            // 发送给父组件，内部处理
            this.$emit(`click-${source}`, eventData);

            // 发送全局事件，便于非父子关系的路由组件监听
            EventBus.$emit(`app-header:click-${source}`, eventData);

            // 如果传递了路由对象，进入路由
            if (route) {
                this.$router.push(route);
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable';

$btn-color = #fff;

.app-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $app-header-height;
    background: white;
    color: $btn-color;
    padding: 0;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    // box-shadow 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)
    transition: transform 0.3s ease-out;

    &.slide-down-enter, &.slide-down-leave-to {
        transform: translate(0, -100%);
    }

    & > div {
        display: flex;
        align-items: center;
    }

    .app-header-middle {
        color: black;
        font-family: 'Helvetica,PingFangSC-Regular,Avenir,Arial,sans-serif';
        font-size: 1.5em;
        font-weight: 500;
    }

    // 改变 icon 大小
    .app-header-icon {
        color: $btn-color;
        width: 20px;
        height: 20px;
    }
}
</style>
