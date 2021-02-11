import Vue from 'vue';

window.Vue = require('vue').default;

import HeaderBar from './components/app-navigation/HeaderBar.vue';
import FooterBar from './components/app-navigation/FooterBar.vue';
import MainHero from './components/heroes/MainHero.vue';
import LoginScreen from './components/auth/LoginScreen.vue';
import SignUpScreen from './components/auth/SignUpScreen.vue';

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

new Vue({
    components: {
        HeaderBar,
        FooterBar,
        MainHero,
        LoginScreen,
        SignUpScreen
    },

}).$mount('#app');
