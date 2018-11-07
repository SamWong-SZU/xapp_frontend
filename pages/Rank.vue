<template>
   <app-list type="rank" rank :request="this.AjaxService.getTopList" from="/rank?nav=rank"></app-list>
</template>

<script>
import appList from '../components/appList'
export default {
    components:{
        appList
    },
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '最受欢迎的PWA，添加到你的桌面尝鲜吧！'}
        ]
    },
    name: 'category',
    data () {
        return {
            state:{
                appHeaderState: {
                    show: true,
                    title: '排行榜',
                    showMenu: false,
                    showBack: false,
                    showLogo: false,
                    actions: []
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
.detail-content {
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;

    .detail-title {
        margin-bottom: 20px;
        padding: 10px 0;
        font-size: 36px;
        font-weight: bold;
    }
}
</style>
