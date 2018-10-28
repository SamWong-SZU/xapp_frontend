<template>
   <app-list type="rank" rank :request="this.AjaxService.getTopList"></app-list>
</template>

<script>
import appList from '../components/appList'
export default {
    components:{
        appList
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
