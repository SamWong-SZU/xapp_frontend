<template>
    <div class="submit-page">
        <h2>提交App</h2>
        <p class="mb16">请填写下面的信息以提交您的PWA。我们将在1个工作日内完成审核，并通过您提供的邮箱地址（如果您提供了）告知审核结果。尽可能完整地填写有助于快速通过审核。</p>
        <form ref="form">
            <h3>URL*</h3>
            <input type="text" v-bind:class="{'submit-error':urlError}" name="launchUrl" placeholder="https://" v-on:blur="validateUrl"></input>
            <h3 class="light">电子邮箱</h3>
            <p>我们将会通过该电子邮箱与您联系。</p>
            <input type="text" name="email" placeholder="请输入您的邮件地址"></input>
            <h3 class="light mb6">更多信息</h3>
            <div class="icon-box"></div>
            <input type="text" class="none-width" name="name" placeholder="名称"></input>
            <input type="text" class="none-width" name="description" placeholder="描述"></input>
            <input type="text" class="none-width" name="icon" placeholder="图标URL"></input>
            <v-select ref="type" label="分类" v-bind:class="{'type-error':typeError}" name="type" :items="items" itemText="label" itemValue="value" ></v-select>
            <button type="button" @click="submit">提交</button>
        </form>
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
    name: 'Submit',
    data () {
        return {
            urlError:false,
            typeError:false,
            items:[
                {label:'游戏',value:'game'},
                {label:'工具',value:'tool'},
                {label:'美食',value:'food'},
                {label:'生活',value:'lifestyle'}
            ],
            state:{
                appHeaderState: {
                    show: true,
                    title: '提交PWA',
                    showMenu: false,
                    showBack: '/about?nav=about',
                    showLogo: false,
                    actions: []
                }
            }
        }
    },
    methods: {
        reset () {
            this.$refs.form.reset()
            this.$refs.type.reset()
        },
        validateType () {
            if (this.$refs.type.value) {
                this.urlError = false
                return true
            }
            this.typeError = true
            return false
        },
        validateUrl () {
            if (this.$refs.form.launchUrl.value) { 
                this.urlError = false
                return true
            }
            this.urlError = true
            return false
        },
        submit () {
            if (this.validateType() && this.validateUrl()) {
                const params = {}
                Array.from(this.$refs.form).forEach((property)=>{
                    if (property.name)
                    params[property.name] = property.value
                })
                params.type = this.$refs.type.value
                this.AjaxService.submitApp(params)
                this.reset()
                this.$router.push({name:'thank',query:{nav:'about'}})
            }

        }
    },
    activated () {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.submit-page {
    color: #000;
    padding: 20px;

    h2 {
        font-size: 18px;
    }

    h3.light {
        font-weight: 400;
    }

    p {
        color: #999;
        letter-spacing: 0.3px;
        font-size: 14px;
        padding-top: 6px;
        margin-bottom: 0;
    }

    .mb6 {
        margin-bottom: 6px;
    }

    .mb16 {
        margin-bottom: 16px;
    }

    input {
        border-style: groove;
        border: 0.5px solid #aaaaaa;
        border-radius: 7px;
        width: 100%;
        height: 36px;
        padding-left: 8px;
        margin-top: 6px;
        margin-bottom: 16px;
    }

    input.none-width {
        width: auto;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    .icon-box {
        background: url('') no-repeat center center #f5f5f5; // appsco.pe/img/appscope-logo-background.png) no-repeat center center #f5f5f5;
        background-size: contain;
        height: 130px;
        width: 130px;
        border-radius: 20px;
        float: left;
        margin: 0 10px 0 0;
    }

    button {
        background-color: #3399ff;
        width: calc(100% + 40px);
        bottom: 56px;
        position: static;
        margin: 0px -20px;
        color: #fff;
        font-size: 15px;
        height: 44px;
        padding: 0 32px;
    }

    .submit-error {
        border: 1px solid red;
    }
}
</style>
