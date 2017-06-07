<style>
	#log{
		height: 200px;
	    width: 500px;
	    border: 1px solid #e5e9f2;
	    padding: 100px 100px 100px 50px;
	    border-radius: 20px;
	    margin: auto;
	    margin-top: 20px; 
	    background: url(../assets/timd.jpg);
	}
</style>
<template>
	<div>
		欢迎进入斗地主
	  <el-row>
		  <el-col :span="4">&nbsp;</el-col>
		  <el-col :span="16">
		  <div id="log">
		  
		  	<el-form :ref="dynamicValidateForm" label-width="100px"  name = 'loginForm'>
			 	  <el-form-item
				    prop="username"
				    label="用户名"
				    :rules="[
				      { required: true, message: '请输入用户名', trigger: 'blur' },
				    ]" name = 'username'
				  >
				    <el-input v-model="dynamicValidateForm.email" ></el-input>
				  </el-form-item>
				  <el-form-item
				    label="密码"
				    prop="password"
				    :rules="[
				    {
				      required: true, message: '密码不能为空', trigger: 'blur'
				    }
				    ]"
				    name = 'password'
				  >
				  <el-input v-model="dynamicValidateForm.password"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click = 'login'>登陆</el-button>				  
				    <router-link to="/register">
				    	<el-button>注册</el-button>
				    </router-link>
				  </el-form-item>
				</el-form>
		  </div>
				
		  </el-col>
		  <el-col :span="4"></el-col>
	</el-row>

	</div>
</template>
<script >
// import {axPost} from '../../common/HttpBean.js'
import {login} from '../vuex/actions/UserAction';
//import {getLogin} from  '../vuex/getters/UserGetter';
export default {//
  data () {//赋值--会自动绑定
	 return {
	        dynamicValidateForm: {
	         
	        },
	      //  data:0
	      };
  },
  methods: {

    login:function(e){
	  	login(loginForm,this)
	 }

   },
    // computed:{  //监听  ：实时计算
    //     data:getLogin  //数据绑定，随时监听
    // }
}
</script>