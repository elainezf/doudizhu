import Vue from 'vue';//导入Vue
import Vuex from 'vuex';
Vue.use(Vuex);	//vuex初始化

let UserStore = Vuex.Store({
	state:{ 		//存储空间
		loginbean:null //存储单元
	},

	mutations:{		//事件响应，修改存储的方法集
	    register:function(state,data){
            state.loginbean = data;
            alert('store中收到参数:'+data);
        },
		login:function(state,data){
			state.loginbean = data;
			alert('Store中收到参数：'+data);
		},
	}
});
export default UserStore;