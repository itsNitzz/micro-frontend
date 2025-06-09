import {createApp} from 'vue'
import Dashboard from "./components/Dashboard.vue"


const htmlElRef =  document.getElementById('_dashboard-root-dev');

if(process.env.NODE_ENV === 'development'&&htmlElRef){
   mount(htmlElRef)
}

function mount(el){
    const app = createApp(Dashboard)
    app.mount(el)
 }


export {mount};