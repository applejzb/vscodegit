import * as vue from 'vue'
import App from './App.vue'

console.log(vue)

const app = vue.createApp(App)

app.config.globalProperties = {
  a: 2
}

app.mount('#app')
