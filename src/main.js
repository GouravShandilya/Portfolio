import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2, {
  position: 'top-end',
  icon: 'success',
  showConfirmButton: false,
  timer: 1500,
  toast: true,
})

app.mount('#app')
