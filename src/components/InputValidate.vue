<template>
  <div :class="cssPrefix + 'component-input_div'">
    <input :type="type"
           :name="name"
           :placeholder="placeholder"
           :minLength="minLength"
           :maxLength="maxLength"
           :required="required"
           :disabled="disabled"
           :readonly="readonly"
           v-model="value"
           @focus="onFocus"
           @input="onInput"
           @keydown.up="onInput"
           @keydown.down="onInput"
           ref="inputVal"
    />
<!--
    <Alert :class="cssPrefix + 'component-input_alert'" v-if="valueErrorState === true && valueErrorMsg !== ''" type="error" show-icon>{{valueErrorMsg}}</Alert>
-->
  </div>
</template>

<script>
  import Base from '@/components/Base'

  export default {
    name: "InputValidate",
    'extends': Base,
    data(){
      return{
        value: '',
        valueErrorState: false,
        valueErrorMsg: ''
      }
    },
    props: {
      type: {
        type: String,
          'default': 'text'
      },
      disabled: {
        type: Boolean,
          'default': false
      },
      readonly: {
        type: Boolean,
          'default': false
      },
      required: {
        type: Boolean,
          'default': true
      },
      minLength: {
        type: Number,
          'default': 3
      },
      maxLength: {
        type: Number,
          'default': 20
      },
      name: {
        type: String,
          'default': ''
      },
      placeholder: {
        type: String,
          'default': ''
      }
    },
    methods: {
      onFocus() {
        this.$emit('focus', this.$el.value);
      },
      onBlur() {
        this.$emit('blur', this.$el.value);
      },
      onInput(){
        this.value = this.$refs.inputVal.value || this.value;
        this.checkValue(this.value)
      },
      checkValue(){
        const value = this.$el.value || this.value;
        if(this.required){
          this.valueErrorState = true;
          if(value === ''){
            this.valueErrorMsg = '不能为空!'
          }else if(value.length < this.minLength || value.length > this.maxLength){
            this.valueErrorMsg = '长度限制';
          }else{
            this.valueErrorMsg = '';
            this.valueErrorState = false;
            this.$emit('setVal', value);
          }
        }
      }
    },
    watch:{
      value(){
        this.$emit('setVal', this.value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../themes/config/_variables";
  .#{$prefix}component-input_div > input{
    border-radius: 5px;
    width: 100%;
    text-align:center;
  }
</style>
