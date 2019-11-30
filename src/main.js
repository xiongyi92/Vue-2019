//入口文件
import Vue from 'vue';
import './lib/mui-master/css/mui.min.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import app from './App.vue';
Vue.use(Mint);

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
});
