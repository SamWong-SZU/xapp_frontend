<template>
    <div class="index-page">
        <recommend></recommend>
        <rank-list></rank-list>
        <section class="how-to-install">
            <h2>如何安装PWA应用</h2>
                <router-link :to="{path:'/about',query:{nav:'about'}}">查看如何添加到主屏。</router-link>
            </p>
        </section>
    </div>
</template>

<script>
import recommend from '../components/recommend'
import rankList from '../components/rankList'
export default {
    name: 'index',
    components:{
        recommend,rankList
    },
    metaInfo: {
        title: 'PWA DEMO',
        titleTemplate: '%s - PWA应用商店',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
        ]
    },
    data () {
        return {
            state:{
                appHeaderState:{
                    show: true,
                    title: 'PWA DEMO',
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
.index-page {
    width: calc(100%);
    min-height: calc(100% - 52px - 56px);
    top: 52px;
    left: 0;
    background: #fff;
    position: absolute;
    padding-top: 20px;

    .how-to-install {
        padding: 0 20px;
        background-color: #f5fbff;
        border-top: 0.5px solid rgba(0, 0, 0, 0.15);
        padding-top: 15px;

        h2 {
            font-size: 18px;
            margin: 0 0 10px;
            line-height: 25px;
        }

        p {
            padding-bottom: 30px;
            margin-bottom: 0px;
        }

        a {
            color: #3399FF;
            text-decoration: none;
        }
    }
}
</style>
