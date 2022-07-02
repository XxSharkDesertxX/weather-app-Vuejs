import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');


// api ==> send info of user in server and resive

// get api of open wehater map

// my api thran for show weather :
// https://api.openweathermap.org/data/2.5/weather?lat=35.24561909420681&lon=51.4599609375&appid=7f211fba7918b94a6b46deb05517fb51