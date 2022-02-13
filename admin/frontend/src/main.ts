import { createApp } from 'vue'
import App from './App.vue'
// ルーティング
// ------------------------------------------------------------------
import router from './router'
// UIフレームワーク
// ------------------------------------------------------------------
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// App.vue
import SpeedDial from 'primevue/speeddial'
// components/basic/
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const app = createApp(App)

app.use(router)

// バリデーション
// ------------------------------------------------------------------
// FIXME:
// import Vuelidate from 'vuelidate'
// app.use(Vuelidate)

app.use(PrimeVue, { ripple: true })

app.component('SpeedDial', SpeedDial)

app.component('Dialog', Dialog)

app.component('InputText', InputText)

app.component('Calendar', Calendar)

app.component('Button', Button)

app.component('DataTable', DataTable)

app.component('Column', Column)

app.mount('#app')
