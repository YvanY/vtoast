<template>
  <div class="toast-item">{{ message }}</div>
</template>

<script>
export default {
  name: 'ToastItem',

  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000
    }
  },

  mounted() {
    if (this.duration) {
      setTimeout(() => this.$emit('remove'), this.duration)
    }
  }
}
</script>

<style scoped>
.toast-item {
  margin-bottom: 15px;
  padding: 10px 20px;
  line-height: 25px;
  color: #FFF;
  background-color: rgba(0, 0, 0, .9);
  border-radius: 5px;
  transition: all .3s;
}
</style>
