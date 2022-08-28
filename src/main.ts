import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdDragindicator, HiTrash, HiPlus, HiSolidSearch, BiTextLeft, BiTypeH1, BiTypeH2, BiTypeH3, BiHr, BiQuote } from 'oh-vue-icons/icons'

import '@/assets/css/main.css'
import App from './App.vue'

addIcons(MdDragindicator, HiTrash, HiPlus, HiSolidSearch, BiTextLeft, BiTypeH1, BiTypeH2, BiTypeH3, BiHr, BiQuote)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
