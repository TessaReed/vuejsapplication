import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

//creating a global component
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
  //render compiled JS code
  //es6 arrow function where h is the arrow function & takes vuejs template
})
