import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Grid from './views/Grid'
import Buttons from './views/Buttons'
import Typography from './views/Typography'

Vue.use(Router)

// prototype to transform routes names
String.prototype.toCamelCase = function() {
    return  (" " + this).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr){
        return chr.toUpperCase();
    });
}

let routes = ['grid','queries','typography','buttons','forms','lists','code','tables','notifications','pagination','utilities']

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/grid',
            name: 'grid',
            component: Grid
        },{
            path: '/typography',
            name: 'typography',
            component: Typography
        },{
            path: '/buttons',
            name: 'buttons',
            component: Buttons
        }
    ]
})

export {
    router,
    routes
}