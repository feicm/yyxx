<template>
    <div class="mint-radiolist">
        <mt-cell v-for="option in options" :key="option">
            <label class="mint-radiolist-label" slot="title">
            <span class="mint-radio is-right">
            <input
                    class="mint-radio-input"
                    type="radio"
                    v-model="currentValue"
                    :disabled="option.disabled"
                    :value="option.value || option">
                <span class="mint-radio-core"></span>
            </span>
                <span class="mint-radio-label" v-text="option.label || option"></span>
            </label>
        </mt-cell>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Cell} from 'mint-ui';

  Vue.component(Cell.name, Cell);

  export default {
    data(){
      return {
        currentValue: this.value
      }
    },
    props: {
      name: String,
      value: String,
      options: {
        type: Array,
        required: true
      }
    },
    watch: {
      currentValue(val) {
        console.log(val)
        this.$emit('input', val);
      }
    },
    components: {
      Cell,
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

</style>
