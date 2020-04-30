import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Columns from './views/Columns'
import Buttons from './views/Buttons'
import Typography from './views/Typography'

Vue.use(Router)

// prototype to transform routes names
String.prototype.toCamelCase = function() {
    return  (" " + this).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr){
        return chr.toUpperCase();
    });
}

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/columns',
            name: 'columns',
            component: Columns
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

export default router