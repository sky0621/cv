import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

// use App.vue
import Avatar from 'primevue/avatar'
import TabMenu from 'primevue/tabmenu'

// use components/Basic.vue etc...
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// use components/basic/Like.vue etc...
import DataView from 'primevue/dataview'
import Chip from 'primevue/chip'
// use components/basic/Qualification.vue
import Card from 'primevue/card'

// use
import Textarea from 'primevue/textarea'

// use components/CareerGroup.vue
import Panel from 'primevue/panel'
// use components/career/Career.vue etc...
import Divider from 'primevue/divider'
// use components/CareerGroup.vue
import Timeline from 'primevue/timeline'

// use components/skill/Skill.vue
import Inplace from 'primevue/inplace'

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

app.mount('#app')
