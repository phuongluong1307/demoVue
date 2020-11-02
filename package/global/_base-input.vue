<template>
    <input
      :type="type" @blur="handleOnBlur($event)"
    />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      }
    }
  },
  data(){
    return {
      status_error: false,
      txt_error: ''
    }
  },
  methods: {
    handleOnBlur(e){
      let val = e.target.value;
      switch (this.type) {
        case 'text':
          if(val == ''){
            this.status_error = true;
            this.txt_error = 'Không được rỗng!'
          }else{
            this.status_error = false;
            this.txt_error = ''
          }
          break;
        case 'email':
          let mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(mail_format.test(val)){
            this.status_error = false;
            this.txt_error = ''
          }else{
            this.status_error = true;
            this.txt_error = 'Email không đúng định dạng!'
          }
          break;
        default:
          break;
      }
      this.$emit('update', this.status_error, this.txt_error)
    }
  }
}
</script>

<style>

</style>