<template>
    <v-bottom-nav
        :active.async="bottomNav"
        value
        fixed
        color="transparent"
    >
        <v-btn color="teal" flat value="home" @click="handleChangeNav('home')">
            <span>首页</span>
            <i class="iconfont icon-home"></i>
        </v-btn>
        <v-btn color="teal" flat value="search" @click="handleChangeNav('search')">
            <span>分类</span>
            <i class="iconfont icon-search"></i>            
        </v-btn>
        <v-btn color="teal" flat value="rank" @click="handleChangeNav('rank')">
            <span>排行榜</span>
            <i class="iconfont icon-trophy"></i>            
        </v-btn>
        <v-btn color="teal" flat value="about" @click="handleChangeNav('about')">
            <span>关于</span>
            <i class="iconfont icon-question-circle"></i>            
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