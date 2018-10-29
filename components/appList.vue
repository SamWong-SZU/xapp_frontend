<template>
    <ul class="app-list">
        <li v-for="item in data">
            <router-link :to="{name: 'appId',params: {id: item.id},query:{nav:$route.query.nav,from}}" class="sub-title">
                <div style="float:left;margin-bottom: 15px;">
                    <img :src="item.icon" class="app-icon">
                </div>
                <div class="app-info">
                    <span class="index" v-if="rank">1</span>
                    <span class="app-name">{{item.name}}</span>
                    <div></div>
                    <span class="index-none" v-if="rank">1</span>
                    <span class="category" v-if="item.type">{{item.type}}</span>
                    <span class="category" v-else>{{type}}</span>
                </div>
            </router-link>
            <div style="clear:both"></div>
        </li>
    </ul>    
</template>

<script>
export default {
    name:"appList",
    props:{
        type:{
            type: String
        },
        rank:{
            type: Boolean
        },
        request:{
            type:Function
        },
        from:{
            type:String
        }
    },
    data () {
        return {
            data: []
        }
    },
    async mounted() {
        const res = await this.request(this.type)
        if (res.resultCode === 0) {
            this.data = res.data.list
        }
    },
}
</script>

<style lang="stylus" scoped>
ul.app-list {
    li {
        list-style-type: none;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        background: #ffffff;

        a {
            font-size: 16px;
            display: block;
            padding: 15px 20px 15px 20px;
            text-decoration: none;
            color: #000000;

            img {
                display: block;
                width: 64px;
                height: 64px;
            }

            div.app-info {
                float: left;
                padding: 10px 0 0 15px;
                height: 54px;

                .index, .index-none {
                    display: inline-block;
                    width: 20px;
                    color: #999999;
                    text-align: right;
                    padding-right: 10px;
                }

                .index-none {
                    visibility: hidden;
                }

                .category {
                    color: #999;
                }
            }
        }
    }
}
</style>
