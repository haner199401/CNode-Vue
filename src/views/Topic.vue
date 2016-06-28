<template>
    <div class="am-g am-g-fixed blog-g-fixed">
        <div class="am-u-md-8 am-u-sm-centered">
            <article class="blog-main">
                <h3 class="am-article-title blog-title">
                    <a>{{topic.title}}</a>
                </h3>
                <h4 class="am-article-meta blog-meta">
                    <a>{{topic.author.loginname}}</a> 发表于 {{topic.create_at | timeago}} 访问量:{{topic.visit_count}}</h4>

                <div class="am-g blog-content">
                    <div class="am-u-lg-7">
                       {{{topic.content}}}
                    </div>
                </div>
            </article>
            <loader class="logo--loading center" v-if="fetching"></loader>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import * as api from '../api';
    import Loader from '../components/Loader.vue';

    export default{
        data(){
            return {
                topic: {},
                fetching: true
            }
        },
        route: {
            data(router){
                api.getTopicDetail(router.to.params.topicId, res=> {
                    this.topic = res.data;
                    this.fetching = false;
                });
            }
        },
        components: {
            Loader
        }

    }
</script>

<style>
    .blog-content img, .blog-team img {
        max-width: 100%;
        height: auto;
    }
    @media only screen and (min-width: 1200px){
        .blog-g-fixed {
            max-width: 1200px;
        }
    }
    .blog-g-fixed{
        margin-top: 20px;
    }

</style>
