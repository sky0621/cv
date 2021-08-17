import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import SpeedDial from 'primevue/speeddial'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('SpeedDial', SpeedDial)
app.component('InputText', InputText)

app.mount('#app')
