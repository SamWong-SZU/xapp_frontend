<template>
    <section class="recomment-page">
        <h2>精品推荐</h2>
        <ul class="recommend" ref='recommentList'>
            <li v-for="item in list">
                <router-link :to="{
                        name: 'appId',
                        params: {id: item.id},
                        query:{nav:$route.query.nav}}">
                    <div class="cover-container" :style="{background:'url('+item.img+')'}">
                        <div class="cover"></div>
                    </div>
                    <span class="recommend-title">{{item.name}}</span>
                    <p class="brief">{{item.description}}</p>
                </router-link>
            </li>
            <li v-if="!list" v-for="i in fadeListNum">
                <a>
                    <div class="cover-container" >
                        <div class="cover"></div>
                    </div>
                    <span class="recommend-title">&nbsp</span>
                    <p class="brief">&nbsp</p>
                </a>
            </li>
            <li></li>
        </ul>
    </section>
</template>
<script>

export default {
    name: 'recommend',
    data () {
        return {
            list:null,
            fadeListNum: 3
        }
    },
    activated () {
        this.setUlScroll()
    },
    methods: {
        setUlScroll() {
            this.$nextTick(()=>{
                const ul = this.$refs.recommentList
                ul.scrollTo(20,0)
            })
        }
    },
    mounted () {
        const data = this.AjaxService.getRecommendList()
        this.list = data.data.list 
        this.setUlScroll()
    }
}
</script>

<style lang="stylus" scoped>
h2 {
    padding-left: 20px;
    font-size: 18px;
    color: #000000;
    font-weight: 500;
    margin: 0px 0px 10px 0px;
    line-height: 25px;
}

.recommend {
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -ms-scroll-snap-points-x: repeat(100%);
    scroll-snap-points-x: repeat(100%);
    white-space: nowrap;
    list-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding-left: 20px;

    a {
        color: #000000;
        text-decoration: none;
    }

    li {
        display: inline-block;
        width: calc(100%);
        -webkit-scroll-snap-align: start;
        scroll-snap-align: start;
        padding-left: 20px;
        margin-right: -10px;
    }

    li:last-child {
        width: 40px;
    }

    .cover-container {
        width: 100%;
        padding-top: 64%;
        position: relative;
        margin-bottom: 10px;
        background: #eaeaea;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: shimmer;
        animation-name: shimmer;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        -webkit-background-size: 800px 104px;
        background-size: 800px 104px;
        border-radius: 10px;

        .cover {
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border-radius: 10px;
        }
    }

    .recommend-title {
        font-size: 16px;
    }

    p.brief {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 0 20px 0;
        color: #999999;
    }
}
</style>
