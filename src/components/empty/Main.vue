<template>
    <div id='empty'>
        <img v-if="name === 'emptyClassGroup'" :src="url.emptyClassGroup">
        <img v-if="name === 'emptyClassGroupNotice'" :src="url.emptyClassGroupNotice">
        <h1 v-if="h1">{{h1}}</h1>
        <h2 v-if="h2">{{h2}}</h2>
    </div>
</template>

<script>
  import emptyClassGroup from '../../assets/images/placeholder/general_icon_not_available_class_group.png'
  import emptyClassGroupNotice from '../../assets/images/placeholder/general_icon_not_available_notice.png'

  export default {
    data () {
      return {
        url: {
          emptyClassGroup: emptyClassGroup,
          emptyClassGroupNotice: emptyClassGroupNotice,
        }
      }
    },
    props: ['name', 'h1', 'h2'],
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #empty {
        background-color: #fff;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        padding:px2em(40px);
        img {
            width: px2em(360px);
            height: px2em(360px);
        }
        h1{
            margin-top:px2em(10px);
            color:#333;
            @include font-dpr(20px);
        }
        h2{
            margin-top:px2em(14px);
            color:#999;
            @include font-dpr(15px);
        }
    }
</style>
