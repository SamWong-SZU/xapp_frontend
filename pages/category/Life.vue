<template>
   <app-list type="life" :request="this.AjaxService.getAppListByType" from="/category/life?nav=search"></app-list>
</template>

<script>
import appList from '../../components/appList'
export default {
    components:{
        appList
    },
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店'
    },
    data () {
        return {
            state:{
                appHeaderState: {
                    show: true,
                    title: '生活',
                    showMenu: false,
                    showBack: '/search?nav=search',
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    activated() {
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
