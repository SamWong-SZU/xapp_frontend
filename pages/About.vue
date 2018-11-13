<template>
    <div class="about-page">
        <div class="qrcode-container" v-show="showQr" @click="showQr=false"><img src="https://i.loli.net/2018/11/05/5be063ceae197.jpg"></div>
        
        <h2>PWA是什么？</h2>
        <p>渐进式网页应用程序（PWA - Progressive Web App）是应用程序的未来。无需下载，不占空间，添加主屏，离线可用——它们是小程序的终极形态。</p>
        <p class="bottom">这些应用程序提供与原生应用程序几乎相同的功能。开发人员可以使用自己喜爱的Web开发工具和语言，来制作PWA应用程序，并且不再需要许可证来分发它们。</p>
        <h2 id="howtoinstall">如何安装PWA？</h2>
        <h2>安卓</h2>
        <p class="bottom">推荐使用Chrome浏览器。当您打开PWA应用时，它们中的大部分会自动提示您安装。如果没有，点击（垂直三点图标）按钮，然后选择“添加到主屏幕”。</p>
        <h2>iOS</h2>
        <p class="bottom">在Safari中使用PWA时，点击浏览器中的<i class="iconfont icon-upload"></i>按钮。 在显示的选项中向左滚动，然后选择“添加到主屏幕”。</p>
    </div>
</template>

<script>
import appList from '../components/appList'
export default {
    components:{
        appList
    },
    metaInfo: {
        title: 'PWA DEMO',
        titleTemplate: '%s - PWA应用商店',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: 'XApp.zone以及PWA的介绍'}
        ]
    },
    name: 'About',
    data () {
        return {
            showQr:false,
            state:{
                appHeaderState: {
                    show: true,
                    title: '关于',
                    showMenu: false,
                    showBack: false,
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    methods: {
        toFeedBack(){
            this.$router.push({name:'feedback',query:{nav:'about'}})
        },
        toSubmit () {
            this.$router.push({name:'submit',query:{nav:'about'}})
        },
        scroll () {
            const ele = document.getElementById('howtoinstall')
            const app = document.getElementsByClassName('app-view')[0]
            app.scrollTop = ele.offsetTop
        }
    },
    activated () {
        const fullPath =this.$route.fullPath
        if (fullPath.indexOf('#howtoinstall') > 0) {
            setTimeout(()=>{
                this.scroll()
            },100)
        }
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.about-page {
    padding: 20px;
    color: #000;
    padding-bottom: 0px;

    .qrcode-container {
        background: rgba(255, 255, 255, 0.9);
        width: calc(100%);
        height: calc(100% - 52px - 56px);
        position: fixed;
        top: 52px;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 200px;
        }
    }

    .click-here {
        color: #3399FF;
    }

    .follow {
        background: #f6fbff;
        margin: 0 -20px 0 -20px;
        padding: 20px;

        p {
            padding-bottom: 0;
        }

        .container {
            padding: 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
        }

        i {
            font-size: 32px;
            color: #bcbcbc;
        }

        span.gzh {
            font-size: 14px;
            color: #bcbcbc;
        }
    }

    h2 {
        font-size: 18px;
    }

    p {
        color: #999999;
        letter-spacing: 0.3px;
        font-size: 14px;
        padding-top: 6px;
    }

    p.bottom {
        margin-bottom: 25px;
    }

    ul {
        list-style-type: decimal;
        padding-left: 20px;
        margin-top: 10px;
        color: #000000;

        h4 {
            font-weight: 400;
        }
    }
}
</style>
