<template>
    <div class="app-page">
        <section class="app-header">
            <div class="app-icon-container">
                <img class="app-icon" :src="data.icon">
            </div>
            <div class="app-info">
                <h1 class="app-title">{{data.name}}</h1>
                <span class="app-category">{{getTypeCN(data.type)}}</span>
                <div></div>
                <a :href="data.launchUrl" class="app-start" ><v-icon>launch</v-icon>启动应用</a>
            </div>
            <div style="clear:both"></div>
            <p id="app-description">{{data.description}}</p>
        </section>
        <section class="screenshots">
            <img v-for="img in data.screenShots" :src="img.screenShot">
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'appId',
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店'
    },
    computed: {
        ...mapGetters({getTypeCN:'defaultSetting/getTypeCN'})
    },
    data () {
        return {
            data:{},
            rendered: false,
            state:{
                appHeaderState: {
                    show: true,
                    title: '应用',
                    showMenu: false,
                    showBack: '/?nav=home',
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    created () {
        this.rendered = true
        this.getData()
    },
    methods: {
        async getData() {
            const from = this.$route.query.from
            if (from) this.state.appHeaderState.showBack = from
            const res = await this.AjaxService.getAppById(this.$route.params.id)
            this.data = res.data.data
            this.state.appHeaderState.title = res.data.data.name
            this.setState(this.$store,this.state)
        },
        isEmptyObject(obj){
            for(var key in obj) {
                return false
            }
            return true
        }
    },
    activated() {
        if(this.rendered && this.isEmptyObject(this.data)) this.getData()
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.app-page {
    color: #000;
    padding: 20px 20px 70px;

    .app-header {
        margin: 0 0 20px 0;

        .app-icon-container {
            width: 100px;
            margin: 0 20px 0 0;
            float: left;

            img.app-icon {
                width: 100px;
                height: 100px;
                border-radius: 15px;
            }
        }

        .app-info {
            width: calc(100% - 120px);
            float: left;

            h1.app-title {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 20px;
                margin: 0;
            }

            .app-category {
                color: #999999;
                font-size: 16px;
                text-transform: capitalize;
            }

            .app-start {
                display: inline-block;
                text-decoration: none;
                border-radius: 50px;
                box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
                border: 0.5px solid #3399FF;
                color: #3399FF;
                font-size: 14px;
                font-weight: 500;
                margin: 10px 0 0 0;
                padding: 4px 20px 4px 15px;

                i {
                    color: #3399FF;
                    padding-right: 10px;
                }
            }
        }

        p {
            color: #000000;
            display: block;
            font-size: 18px;
            margin-top: 20px;
        }
    }

    section.screenshots {
        border-top: 0.5px solid rgba(0, 0, 0, 0.1);
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        padding: 5px 15px 20px 20px;
        margin: -5px -20px 0;
        height: 355px;

        img {
            width: 200px;
            border-radius: 10px;
            margin: 0 5px 0 0;
        }
    }
}
</style>
