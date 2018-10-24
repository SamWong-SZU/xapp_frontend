<template>
    <div class="index-page">
        <recommend></recommend>
        <rank></rank>
    </div>
</template>

<script>
import recommend from '../components/recommend'
import rank from '../components/rank'
export default {
    name: 'index',
    components:{
        recommend,rank
    },
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    data () {
        return {
            state:{
                appHeaderState:{
                    show: true,
                    title: 'XApp',
                    showMenu: true,
                    showBack: false,
                    showLogo: false,
                    actions: [],
                }
            }
        }
    },
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.index-page {
    width: calc(100%);
    min-height: calc(100% - 52px - 56px);
    top: 52px;
    left: 0;
    background: #fff;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 70px;
}
</style>
