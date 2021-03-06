import Vue from 'vue'
import App from './App.vue'
import router from "./routers/router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "assets/css/iconfont.css"
import 'element-ui/lib/theme-chalk/display.css'
import VueQuillEditor from 'vue-quill-editor'
// quill富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { Menu, Submenu, MenuItem, Button, MessageBox, Message, Dialog, Form,
  FormItem, Input, Option, Select, Row, Col} from 'element-ui';

Vue.use(VueAxios, axios)

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);

// quill富文本编辑器
Vue.use(VueQuillEditor);

Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
