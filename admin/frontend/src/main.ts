import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// ルーティング
// ------------------------------------------------------------------
import router from './router'
app.use(router)

// バリデーション
// ------------------------------------------------------------------
import Vuelidate from 'vuelidate'
app.use(Vuelidate)

// UIフレームワーク
// ------------------------------------------------------------------
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
app.use(PrimeVue, { ripple: true })

// App.vue
import SpeedDial from 'primevue/speeddial'
app.component('SpeedDial', SpeedDial)

// components/basic/
import Dialog from 'primevue/dialog'
app.component('Dialog', Dialog)
import InputText from 'primevue/inputtext'
app.component('InputText', InputText)
import Calendar from 'primevue/calendar'
app.component('Calendar', Calendar)
import Button from 'primevue/button'
app.component('Button', Button)
import DataTable from 'primevue/datatable'
app.component('DataTable', DataTable)
import Column from 'primevue/column'
app.component('Column', Column)

app.mount('#app')
