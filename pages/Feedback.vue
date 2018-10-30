<template>
    <div class="feedback-page">
        <div>联系邮箱：<input v-model="email" ref="email" v-on:blur="validateEmail"></div>
        <textarea rows="10"></textarea>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Xapp',
        titleTemplate: '%s - PWA应用商店'
    },
    name: 'Feedback',
    data () {
        return {
            showQr:false,
            email:'',
            state:{
                appHeaderState: {
                    show: true,
                    title: '反馈',
                    showMenu: false,
                    showBack: '/about?nav=about',
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    methods:{
        validateEmail(){
            const reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
            const result = reg.test(this.email)
            if (!result) {
            }
            return result
        }
    },
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.feedback-page{
    padding:20px
    div{
        font-size: 16px;
        color: #000;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 12px;
        input {
            font-size: 14px;
            padding-left: 12px;
            color: #333333;
        }
    }
}
</style>
