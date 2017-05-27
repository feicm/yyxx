<template>
    <div id='main'>
        <div class="group">
            <router-link :to="'/user/info'">
                <mt-button size="large" plain>用户中心</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup'">
                <mt-button size="large" plain>我的班群</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/join'">
                <mt-button size="large" plain>加入班群</mt-button>
            </router-link>
            <a href="/user/recharge/?#/user/recharge">
                <mt-button size="large" plain>快速充值</mt-button>
            </a>
            <router-link :to="'/default'">
                <mt-button size="large" plain>字母音标</mt-button>
            </router-link>
            <router-link :to="'/default'">
                <mt-button size="large" plain>单词背诵</mt-button>
            </router-link>
            <router-link :to="'/default'">
                <mt-button size="large" plain>同步教学</mt-button>
            </router-link>
            <router-link :to="'/default'">
                <mt-button size="large" plain>考题演练</mt-button>
            </router-link>
            <router-link :to="'/default'">
                <mt-button size="large" plain>讲台</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #main {
        padding: px2em(10px)
    }

    .group > a {
        display: block;
        margin-bottom: px2em(10px);
        text-decoration: none;
    }

</style>
