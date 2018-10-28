<template>
    <div class="detail-wrapper">
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <article class="detail-content text-xs-center">
                    <header class="detail-title text-xs-center">
                        Detail {{$route.params.id}}
                    </header>
                    <router-link :to="{
                        name: 'appId',
                        params: {
                            id: Number($route.params.id) + 1
                        },
                        query:{
                            nav:this.$route.query.nav
                        }
                    }">
                        Detail {{Number($route.params.id) + 1}}
                    </router-link>
                    <p>
                    Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
                    </p>
                    <p>
                    Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
                    </p>
                    <p>
                    Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
                    </p>
                    <p>
                    Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
                    </p>
                    <p>
                    Progressive Web Apps are user experiences that have the reach of the web, and are:
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
                    </p>
                </article>
            </v-flex>
        </v-layout>
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
        console.log('mounted')
    },
    activated() {
        console.log('act')
        this.setState(this.$store,this.state)
    }
};
</script>

<style lang="stylus" scoped>
.detail-content {
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;

    .detail-title {
        margin-bottom: 20px;
        padding: 10px 0;
        font-size: 36px;
        font-weight: bold;
    }
}
</style>
