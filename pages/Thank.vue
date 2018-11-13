<template>
    <div class="thank-page">
        <p>感谢您的提交，我们将会尽快处理</p>
    </div>
</template>

<script>
export default {
    name: 'thank',
    data () {
        return {
            state:{
                appHeaderState: {
                    show: true,
                    title: 'PWA DEMO',
                    showMenu: false,
                    showBack: '/about?nav=about',
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
<style lang="stylus">
.thank-page {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 18px;
        color: #999999;
    }
}
</style>

