<template>
    <div class="about-page">
        <div class="qrcode-container" v-show="showQr" @click="showQr=false"><img src="https://i.loli.net/2018/11/05/5be063ceae197.jpg"></div>
        <h2>XApp空间是什么</h2>
        <p class="bottom">XApp空间是中国首个PWA (Progressive Web Apps) 应用商店。在这里, 您可以找到许多跨平台的 (同时适用于iOS、安卓、PC) , 基于网页技术的应用程序。</p>
        <section class="follow">
            <h2>关注我们</h2>
            <p>关注我们的微信公众号，获取更多消息。</p>
            <div class="container">
                <i class="iconfont icon-wechat"><span class="gzh">微信公众号</span></i>
                <span class="click-here" @click="showQr=true">XAppZone</span>
            </div>
        </section>
        <h2 style="margin-top:20px">PWA是什么？</h2>
        <p>渐进式网页应用程序（PWA - Progressive Web App）是应用程序的未来。无需下载，不占空间，添加主屏，离线可用——它们是小程序的终极形态。</p>
        <p class="bottom">这些应用程序提供与原生应用程序几乎相同的功能。开发人员可以使用自己喜爱的Web开发工具和语言，来制作PWA应用程序，并且不再需要许可证来分发它们。</p>
        <h2 id="howtoinstall">如何安装PWA？</h2>
        <p class="bottom">XApp空间建议——将您喜爱的PWA添加到您的主屏，访问更快速。</p>
        <h2>安卓</h2>
        <p class="bottom">推荐使用Chrome浏览器。当您打开PWA应用时，它们中的大部分会自动提示您安装。如果没有，点击（垂直三点图标）按钮，然后选择“添加到主屏幕”。</p>
        <h2>iOS</h2>
        <p class="bottom">在Safari中使用PWA时，点击浏览器中的<i class="iconfont icon-upload"></i>按钮。 在显示的选项中向左滚动，然后选择“添加到主屏幕”。</p>
        <h2>PWA相对传统应用程序的优势？</h2>
        <p class="bottom">PWA比原生应用更好，其优势有：
            <ul>
                <li><h4>跨平台兼容性</h4><p>传统应用如果需要跨平台，则需要分别为桌面，iOS以及Android开发应用程序，而PWA与这三者兼容！ 这意味着作为开发人员，您只需开发一个应用程序即可覆盖所有平台上的用户。</p></li>
                <li><h4>更简单的开发</h4><p>创建PWA就像创建网站一样简单。 PWA使用HTML5和Javascript制作，不需要像Swift这样的小众编程语言。</p></li>
                <li><h4>不依赖应用商店</h4><p>作为基于浏览器的应用程序，PWA不受传统应用商店官僚主义的影响。 这意味着可以立即进行更新，而无需等待审核小组的批准。 同样，不需要开发人员许可证，开发人员可以保留所有收入，避免本机应用程序强加的30％交易费用。</p></li>
                <li><h4>搜索引擎友好</h4><p>与传统应用程序不同，PWA可被被搜索引擎检索，使新用户更容易找到它们。</p></li>
            </ul>
        </p>

        <h2>PWA与小程序有什么区别？</h2>
        <p class="bottom">设计思想上，微信、支付宝、百度，以及即将推出的头条系小程序和PWA是近似的。但PWA有其独特的优势。
            <ul>
                <li><h4>用户触及力</h4><p>用户可能不会安装抖音、百度，甚至支付宝、微信，但手机上一定会有浏览器。这就意味着你的PWA应用可以触及所有潜在用户。</p></li>
                <li><h4>优势融合</h4><p>你可以在微信小程序上使用支付宝付款吗？现在，PWA可以在提供更好的体验的同时，融合所有生态平台的能力，打造一个无比强大的应用。</p></li>
                <li><h4>去中心化</h4><p>由于PWA基于浏览器，避免了平台“封杀”、“限流”等不正当竞争手段。任何平台在万维网，都不是中心。</p></li>
            </ul>
        </p>


        <h2>如何提交我的PWA到XApp空间？</h2>
        <p class="bottom">请<span class="click-here" @click="toSubmit">点击这里</span>向我们提交您的PWA，我们将在24小时内完成审核</p>
        <h2>如何联系你？</h2>
        <p>如果您有任何问题或者意见，请<span class="click-here" @click="toFeedBack">点击这里</span>或者发送邮件到xapp.zone@gmail.com向我们反馈，我们将会尽快查看</p>

    </div>
</template>

<script>
import appList from '../components/appList'
export default {
    components:{
        appList
    },
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店'
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
