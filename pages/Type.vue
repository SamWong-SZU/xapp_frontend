<template>
    <div class="type-page">
        <h2>热门类别</h2>
        <ul>
            <li><i class="iconfont icon-game-ware"></i>游戏</li>
            <li><i class="iconfont icon-calculator"></i>工具</li>
            <li><i class="iconfont icon-food"></i>美食</li>
            <li><i class="iconfont icon-heart"></i>生活</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'type',
    metaInfo: {
        title: '分类页'
    },
    data () {
        return {
            state:{
                appHeaderState:{
                    show: true,
                    title: 'XApp',
                    showMenu: false,
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
.type-page {
    h2{
        padding:20px 20px 0;
        font-size: 18px;
        color: #000;
        font-weight: 500;
        margin: 0 0 10px;
        line-height: 25px;
        // border-bottom: .5px solid rgba(0,0,0,.15);
    }
}
</style>
