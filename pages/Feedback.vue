<template>
    <div class="feedback-page">
        <div class="email-line">联系邮箱：<input v-bind:class="{'email-error':showError}" v-model="email" ref="email" v-on:blur="validateEmail"></div>
        <v-textarea
          outline
          rows="10"
          :counter="textLimit"
          name="input-7-4"
          placeholder="请填写你宝贵的意见"
          v-model="content"
          v-on:input="validateAdvice"
        ></v-textarea>
        <button @click="submit">
            提交反馈
        </button>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'X App',
        titleTemplate: '%s - PWA应用商店'
    },
    name: 'Feedback',
    data () {
        return {
            textLimit:500,
            email:'',
            showError:false,
            content:'',
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
            this.showError = !result
            return result
        },
        validateAdvice(){
            return this.content > 0 && this.content <= this.textLimit
        },
        submit () {
            if (this.validateEmail() && this.validateAdvice()) {
                const {email,content} = this
                this.AjaxService.feedback({email,content}).then((res)=>{
                    this.email = ''
                    this.content = ''
                    this.showError = false
                    this.$router.push({name:'Thank',query:{nav:'about'}})
                })
            }
        }

    },
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus">
.feedback-page {
    padding: 20px;

    div.email-line {
        font-size: 16px;
        color: #000;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 12px;
        margin-bottom: 12px;

        input {
            font-size: 14px;
            padding-left: 12px;
            color: #333333;
            font-size: 14px;
            padding-left: 12px;
            color: #333;
            border-radius: 8px;
        }

        input.email-error {
            border: 1px solid red;
        }
    }

    textarea {
        margin-top: 12px !important;
    }

    button {
        background-color: #3399ff;
        width: 100%;
        bottom: 0px;
        position: absolute;
        margin: 0px -20px;
        color: #fff;
        z-index: 10000;
        font-size: 15px;
        height: 44px;
        padding: 0 32px;
    }
}
</style>
