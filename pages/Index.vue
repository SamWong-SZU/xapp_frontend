<template>
    <div>
        <div class="content">
            <div>
                <h2>LAVAS</h2>
                <h4>[ˈlɑ:vəz]</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    data () {
        return {
            state:{
                appHeaderState:{
                    show: true,
                    title: 'XApp',
                    showMenu: true,
                    showBack: false,
                    showLogo: false,
                    actions: [],
                },
                appNavState:{
                    bottomNav:'home',
                    tabCache:{
                        bottomNav:this.$route.path                        
                    }
                }
            }
        }
    },

    activated() {
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;

    h2 {
        font-size: 46px;
        font-weight: 500;
    }
}
</style>
