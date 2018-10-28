<template>
    <div class="app-page">
        <section class="app-header">
            <div class="app-icon-container">
                <img class="app-icon" src="https://d3frsattnbx5l6.cloudfront.net/1532688849983-twitterlite-icon-default.882fa4ccf6539401.png">
            </div>
            <div class="app-info">
                <h1 class="app-title">Twitter Lite</h1>
                <span class="app-category">Social</span>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'appId',
    data () {
        return {
            state:{
                appHeaderState: {
                    show: true,
                    title: 'Lavas123',
                    showMenu: false,
                    showBack: true,
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    mounted () {
    },
    activated() {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.app-page{
    padding: 20px 20px 70px;
    .app-header{
        margin: 0 0 20px 0;
        .app-icon-container{
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
                margin: 0 0 5px 0;
            }
            .app-category {
                color: #999999;
                font-size: 18px;
                text-transform: capitalize;
            }
        }
    }
}
</style>
