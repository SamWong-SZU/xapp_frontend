<template>
    <v-bottom-nav
        :active.async="bottomNav"
        value
        fixed
        app

        color="transparent"
        @update:active = "handleChangeNav"
    >
        <v-btn color="teal" flat value="home">
            <span>首页</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn color="teal" flat value="type">
            <span>分类</span>
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn color="teal" flat value="rank">
            <span>排行榜</span>
            <i class="iconfont icon-rankedfirst"></i>            
        </v-btn>
        <v-btn color="teal" flat value="about">
            <span>关于</span>
            <v-icon>info</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>

export default {
    name: 'appFooter',
    props: {
        bottomNav: {
            type: String,
            default: 'home'
        },
        changeNav: {
            type: Function,
            require: true
        }
    },
    methods: {
        handleChangeNav(nav) {
            this.changeNav(nav)
        }
    }
};
</script>