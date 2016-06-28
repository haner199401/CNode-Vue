<template>
    <div>
        <header class="am-topbar am-topbar-inverse admin-header">
            <div class="am-topbar-brand">
                <a href="/"><strong>CNode</strong></a>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<style>
    .am-topbar{
        margin-bottom: 0;
    }
</style>