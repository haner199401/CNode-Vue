<template>
    <div class="am-g">
        <div class="am-u-md-8 am-u-sm-centered">
            <div class="am-panel am-panel-default">
                <div class="am-panel-bd am-collapse am-in am-cf">
                    <ul class="am-comments-list admin-content-comment">
                        <template v-for="topic in topics">
                            <topic-item :topic="topic"></topic-item>
                        </template>
                    </ul>
                    <loader class="logo--loading center" v-if="fetching"></loader>
                    <div class="load-more" v-if="!isAll&&!fetching" @click="fetchTopics(page+=1)">{{loadTip}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .am-panel {
        border: none;
        box-shadow: none;
    }

    .am-panel-hd {
        border: 1px solid rgba(0, 0, 0, 0);
    }

    .load-more{
        text-align: center;
        background: rgba(226, 226, 226, 0.6);
        border-radius: 5px;
        font-size: 13px;
        padding: 5px;

        &:hover{
            background: #aaaaaa;
         }
    }
</style>
<script type="text/ecmascript-6">
    import * as api from '../api';
    import TopicItem from '../components/TopicItem.vue';
    import Loader from '../components/Loader.vue';

    export default {
        data() {
            return {
                fetching: true,
                page:1,
                isAll:false,
                topics: [],
                loadTip:'加载更多...'
            }
        },
        methods: {
            fetchTopics() {
                if(this.isAll)return;
                this.fetching = true;
                api.getTopicList({
                    tab:'ask',
                    page:this.page
                },res => {
                    this.fetching = false;
                    this.topics = this.topics.concat(res.data);
                    if(res.data.length == 0 ){
                        this.isAll = true;
                        this.loadTip = '都加载完了,还点个毛...';
                    }

                });
            }
        },
        route: {
            data(transition) {
                api.getTopicList({
                    tab:'ask',
                    page:this.page
                },res =>{
                    transition.next({
                        topics: res.data,
                        fetching: false
                    });
                });
            }
        },
        components: {
            TopicItem,
            Loader
        }
    };
</script>
