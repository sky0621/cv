import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

import BadgeDirective from 'primevue/badgedirective'

// use App.vue
import TabMenu from 'primevue/tabmenu'
// use components/Basic.vue etc...
import DataTable from 'primevue/datatable'
// use components/basic/Like.vue etc...
import DataView from 'primevue/dataview'
import Chip from 'primevue/chip'
// use components/basic/Nickname.vue
import Avatar from 'primevue/avatar'
// use components/basic/Qualification.vue
import Card from 'primevue/card'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('AvatarGroup', AvatarGroup)
app.component('Badge', Badge)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)

app.directive('badge', BadgeDirective)

app.component('TabMenu', TabMenu)
app.component('DataTable', DataTable)
app.component('DataView', DataView)
app.component('Chip', Chip)
app.component('Avatar', Avatar)
app.component('Card', Card)

app.mount('#app')
