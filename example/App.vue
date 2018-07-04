<template>
  <form @submit.prevent="handleSubmit">
    <div class="field">
      <label for="message">message:</label>
      <input id="message" type="text" v-model="message" required>
    </div>
    <div class="field">
      <label for="duration">duration(ms):</label>
      <input id="duration" type="number" v-model.number="duration" min="0" required>
    </div>
    <div class="field">
      <label for="style">style:</label>
      <input id="style" type="text" v-model.trim="style">
    </div>
    <button type="submit">Toast</button>
  </form>
</template>

<script>
import toast from '../src'

export default {
  name: 'App',

  data() {
    return {
      message: 'message',
      duration: 3000,
      style: ''
    }
  },

  methods: {
    parseStyle(str = '') {
      if (!str) return str

      const expr = `(${
        /^[{[]/.test(str)
          ? str // may be an object or an array
          : `'${str}'`
      })`

      /* eslint-disable no-eval */
      return eval(expr)
    },

    handleSubmit() {
      try {
        const style = this.parseStyle(this.style)

        toast({
          message: this.message,
          duration: this.duration,
          style
        })
      } catch (e) {
        toast({
          message: e.message,
          style: {
            color: '#F56C6C',
            background: '#FEF0F0',
            border: '1px solid #FDE2E2'
          }
        })
      }
    }
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  -webkit-tap-highlight-color: transparent;
}

.field {
  margin-bottom: 20px;
}

label, input {
  display: block;
}

label {
  margin-bottom: 5px;
}

input {
  line-height: 34px;
}

button {
  margin-top: 30px;
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  color: #FFF;
  background: #007BFF;
  border: none;
  outline: none;
  cursor: pointer;
}

button:active {
  filter: brightness(95%);
}
</style>
