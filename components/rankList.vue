<template>
    <section class="rank-list">
        <h2>排行榜
            <router-link :to="{name: 'rank',query:{nav:'rank'}}" class="sub-title">
                更多
            </router-link>
        </h2>
        <p>当下最热门的App，快用起来吧！</p>
        <ul class="rank">
            <li v-for="item in list">
                 <router-link :to="{
                        name: 'appId',
                        params: {id: item.id},
                        query:{nav:$route.query.nav}}">
                    <img :src="item.icon">
                    <span class="app-name">{{item.name}}</span>
                    <span class="category">{{getTypeCN(item.type)}}</span>
                 </router-link>
            </li>
            <li v-if="!list" v-for="i in fadeListNum">            
                 <a>
                    <span style="display:block;width:72px;height:72px"></span>
                    <span class="app-name">&nbsp</span>
                    <span class="category">&nbsp</span>
                 </a>
            </li>
        </ul>
    </section>
</template>
<script>
// import {mapGetters} from 'vuex';
export default {
    name: 'rank',
    // computed: {
    //     ...mapGetters(['getTypeCN'])
    // },
    data () {
        return {
            list:null,
            fadeListNum: 5
        }
    },
    async mounted () {
        const res = await this.AjaxService.getTopList()
        this.list = res.data.data.list
    }
}
</script>

<style lang="stylus" scoped>
.rank-list {
    padding-left: 0;
    border-top: 0.5px solid rgba(0, 0, 0, 0.15);
    padding-top: 15px;

    h2 {
        padding-left: 20px;
        font-size: 18px;
        color: #000000;
        font-weight: 500;
        margin: 0px 0px 4px;
        line-height: 25px;
    }

    p {
        padding-left: 20px;
        font-size: 14px;
        color: #999999;
        margin-bottom: 20px;
    }

    .sub-title {
        color: #3b8cf7;
        text-decoration: none;
        line-height: 25px;
        float: right;
        font-size: 14px;
        margin-right: 10px;
    }

    .rank {
        -webkit-scroll-snap-type: mandatory;
        scroll-snap-type: x mandatory;
        -webkit-scroll-snap-points-x: repeat(100%);
        scroll-snap-points-x: repeat(100%);
        list-style: none;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        padding: 0 15px 20px 35px;

        li {
            display: inline-block;
            -webkit-scroll-snap-align: start;
            scroll-snap-align: start;
            margin: 0px 21px 0px -35px;
            padding-left: 20px;

            a {
                box-sizing: content-box;
                width: 100px;
                font-size: 14px;
                display: inline-block;
                text-align: center;
                color: #000000;
                text-decoration: none;
                text-overflow: ellipsis;
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
                border: 0.5px solid rgba(0, 0, 0, 0.15);
                padding: 14px 6px;

                img {
                    display: block;
                    width: 72px;
                    height: 72px;
                    margin: 0px auto 12px;
                    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
                }

                span.category {
                    display: block;
                    font-size: 14px;
                    color: #999999;
                    text-transform: capitalize;
                    line-height: 16px;
                }
            }
        }
    }
}
</style>
