<template>
    <section class="rank-page">
        <h2>排行榜
            <router-link :to="{name: 'detailId',params: {id: 1},query:{nav:this.$route.query.nav}}" class="sub-title">
                更多
            </router-link>
        </h2>
        <p>当下最热门的App，快用起来吧！</p>
        <ul class="rank" ref='rankList'>
            <li>
                 <router-link :to="{
                        name: 'detailId',
                        params: {id: 1},
                        query:{nav:this.$route.query.nav}}">
                    <img src="https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png">
                    <span class="app-name">Instagram</span>
                    <span class="category">Social</span>
                 </router-link>
            </li>
            <li>
                 <router-link :to="{
                        name: 'detailId',
                        params: {id: 1},
                        query:{nav:this.$route.query.nav}}">
                    <img src="https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png">
                    <span class="app-name">Instagram</span>
                    <span class="category">Social</span>
                 </router-link>
            </li>
            <li>
                 <router-link :to="{
                        name: 'detailId',
                        params: {id: 1},
                        query:{nav:this.$route.query.nav}}">
                    <img src="https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png">
                    <span class="app-name">Instagram</span>
                    <span class="category">Social</span>
                 </router-link>
            </li>
            <li>
                 <router-link :to="{
                        name: 'detailId',
                        params: {id: 1},
                        query:{nav:this.$route.query.nav}}">
                    <img src="https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png">
                    <span class="app-name">Instagram</span>
                    <span class="category">Social</span>
                 </router-link>
            </li>
            
        </ul>
    </section>
</template>
<script>

export default {
    name: 'rank',
    mounted () {
    }
}
</script>

<style lang="stylus" scoped>
.rank-page {
    border-top: 0.5px solid rgba(0, 0, 0, 0.15);
    padding-top: 15px;

    h2 {
        padding-left: 20px;
        font-size: 18px;
        color: #000000;
        font-weight: 500;
        margin: 0px 10px 4px;
        line-height: 25px;
    }

    p {
        padding-left: 20px;
        margin: 0px 10px 0px;
        font-size: 14px;
        color: #999999;
        margin-bottom: 20px;
    }

    .sub-title {
        color: #1976D2;
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
            margin: 0px 20px 0px -35px;
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
                    margin: 3px 0 0 0;
                }
            }
        }
    }
}
</style>
