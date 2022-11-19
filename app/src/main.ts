import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

import Avatar from 'primevue/avatar'
import TabMenu from 'primevue/tabmenu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import DataView from 'primevue/dataview'
import Chip from 'primevue/chip'
import Card from 'primevue/card'
import Textarea from 'primevue/textarea'
import Panel from 'primevue/panel'
import Divider from 'primevue/divider'
import Timeline from 'primevue/timeline'
import Inplace from 'primevue/inplace'
import ProgressSpinner from 'primevue/progressspinner'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })

app.component('Avatar', Avatar)
app.component('TabMenu', TabMenu)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('DataView', DataView)
app.component('Chip', Chip)
app.component('Card', Card)
app.component('Textarea', Textarea)
app.component('Panel', Panel)
app.component('Divider', Divider)
app.component('Timeline', Timeline)
app.component('Inplace', Inplace)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
