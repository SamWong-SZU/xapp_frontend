<template>
    <div class="search-page">
        <h2>热门类别</h2>
        <ul>
            <router-link :to="{name: 'categoryGame',query:{nav:$route.query.nav}}">
                <li><i class="iconfont icon-game-ware"></i>游戏</li>
            </router-link>
            <router-link :to="{name: 'categoryTool',query:{nav:$route.query.nav}}">
                <li><i class="iconfont icon-calculator"></i>工具</li>
            </router-link>
            <router-link :to="{name: 'categoryFood',query:{nav:$route.query.nav}}">
                <li><i class="iconfont icon-food"></i>美食</li>
            </router-link>
            <router-link :to="{name: 'categoryLife',query:{nav:$route.query.nav}}">
                <li><i class="iconfont icon-heart"></i>生活</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'type',
    data () {
        return {
            state:{
                appHeaderState:{
                    show: true,
                    title: '分类页',
                    showMenu: false,
                    showBack: false,
                    showLogo: false,
                    actions: [],
                }
            }
        }
    },
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店'
    },
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.search-page {
    h2 {
        padding: 20px 20px 0;
        font-size: 18px;
        color: #000;
        font-weight: 500;
        margin: 0 0 10px;
        line-height: 25px;
    }

    ul {
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        padding-left: 0;

        a {
            color: #000000;
            text-decoration: none;
        }

        li {
            list-style-type: none;
            padding: 0 10px 0 20px;
            border-top: 0.5px solid rgba(0, 0, 0, 0.1);
            font-size: 16px;
            line-height: 54px;

            i {
                font-size: 20px;
                margin-right: 12px;
            }
        }
    }
}
</style>
