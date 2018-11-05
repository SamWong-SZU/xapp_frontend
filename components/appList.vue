<template>
    <ul class="app-list">
        <li v-for="(item,index) in data">
            <router-link :to="{name: 'appId',params: {id: item.id},query:{nav:$route.query.nav,from}}" class="sub-title">
                <div style="float:left;margin-bottom: 15px;">
                    <img :src="item.icon" class="app-icon">
                </div>
                <div class="app-info">
                    <span class="index" v-if="rank">{{index+1}}</span>
                    <span class="index-none" v-else>{{index+1}}</span>                    
                    <span class="app-name">{{item.name}}</span>
                    <div></div>
                    <span class="index-none">{{index+1}}</span>
                    <span class="category" v-if="item.type">{{getTypeCN(item.type)}}</span>
                    <span class="category" v-else>{{getTypeCN(type)}}</span>
                </div>
            </router-link>
            <div style="clear:both"></div>
        </li>
    </ul>    
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:"appList",
    computed: {
        ...mapGetters({getTypeCN:'defaultSetting/getTypeCN'})
    },
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
        this.data = res.data.data.list
    },
}
</script>

<style lang="stylus" scoped>
ul.app-list {
    padding-left: 0;

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
                    padding-right: 5px;
                }

                .index-none {
                    visibility: hidden;
                }

                .category {
                    color: #999;
                    font-size:14px
                }
            }
        }
    }
}
</style>
