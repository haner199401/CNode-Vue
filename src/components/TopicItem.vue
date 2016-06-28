<template>
    <li class="am-comment">
        <a href="#"><img :src="topic.author.avatar_url" src="../common/stylesheet/assets/images/logo.png" class="am-comment-avatar" width="48" height="48"></a>
        <div class="am-comment-main">
            <div class="am-comment-bd">
                <a v-link="{name:'topic.detail', params:{ topicId: topic.id }}"><p>{{topic.title}}</p></a>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props:['topic']
}
</script>

<style>
p{
    margin: 0;
}
</style>
