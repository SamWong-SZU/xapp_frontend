<template>
    <div class="about-page">
        <h2>XApp空间是什么</h2>
        <p class="bottom">App是PWA (Progressive Web Apps) 的应用商店。在这里, 您可以找到许多跨平台的 (同时适用于iOS、安卓、PC) , 基于网页技术的应用程序。</p>
        <section class="follow">
            <h2>关注我们</h2>
            <p>关注我们的微信公众号，获取更多消息。</p>
            <div class="container">
                <i class="iconfont icon-wechat"><span class="gzh">微信公众号</span></i>
                <span class="click-here">XAppZone</span>
            </div>
        </section>
        <h2 style="margin-top:20px">PWA是什么？</h2>
        <p>渐进式网页应用程序（PWA - Progressive Web App）是应用程序的未来。无需下载，不占空间，添加主屏，离线可用——它们是小程序的终极形态。</p>
        <p class="bottom">这些应用程序提供与原生应用程序相同的功能，开发人员可以使用自己习惯的Web开发工具和语言，来制作应用程序，并且不再需要许可证来分发它们。</p>
        <h2>如何安装PWA？</h2>
        <p class="bottom">App空间建议——将您喜爱的PWA添加到您的主屏，访问更快速。</p>
        <h2>安卓</h2>
        <p class="bottom">当您打开PWA应用时，它们中的大部分会自动提示您安装。如果没有，点击（垂直三点图标）按钮，然后选择“添加到主屏幕”。</p>
        <h2>iOS</h2>
        <p class="bottom">在Safari中使用PWA时，点击浏览器中的    按钮。 在显示的选项中向左滚动，然后选择“添加到主屏幕”。</p>
        <h2>PWA相对传统应用程序的优势？</h2>
        <p class="bottom">PWA比原生应用更好，其优势有：
            <ul>
                <li><h4>跨平台兼容性</h4><p>传统应用如果需要跨平台，则需要分别为桌面，iOS以及Android开发应用程序，而PWA与这三者兼容！ 这意味着作为开发人员，您只需开发一个应用程序即可覆盖所有平台上的用户。</p></li>
                <li><h4>更简单的开发</h4><p>创建PWA就像创建网站一样简单。 PWA使用HTML5和Javascript制作，不需要像Swift这样的小众编程语言。</p></li>
                <li><h4>不依赖应用商店</h4><p>作为基于浏览器的应用程序，PWA不受传统应用商店官僚主义的影响。 这意味着可以立即进行更新，而无需等待审核小组的批准。 同样，不需要开发人员许可证，开发人员可以保留所有收入，避免本机应用程序强加的30％交易费用。</p></li>
                <li><h4>搜索引擎友好</h4><p>与传统应用程序不同，PWA可被被搜索引擎检索，使新用户更容易找到它们。</p></li>
            </ul>
        </p>
        <h2>如何提交我的PWA到XApp空间？</h2>
        <p class="bottom">请<span class="click-here">点击这里</span>向我们提交您的PWA，我们将在24小时内完成审核</p>
        <h2>如何联系你？</h2>
        <p class="bottom">如果您有任何问题或者意见，请<span class="click-here">点击这里</span>向我们反馈，我们将会尽快查看</p>

    </div>
</template>

<script>
import appList from '../components/appList'
export default {
    components:{
        appList
    },
    metaInfo: {
        title: 'Xapp',
        titleTemplate: '%s - PWA应用商店'
    },
    name: 'About',
    data () {
        return {
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
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.about-page {
    padding: 20px;
    color: #000;

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
    }
}
</style>
