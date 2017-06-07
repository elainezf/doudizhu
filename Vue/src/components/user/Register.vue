<style>
	#log{
		  height: 280px;
	    width: 500px;
	    border: 1px solid #e5e9f2;
	    padding: 50px 100px 100px 50px;
	    border-radius: 20px;
	    margin: auto;
	    margin-top: 20px; 
	   
	}
</style>
<template>
<div>
		欢迎进入斗地主
	  <el-row>
		  <el-col :span="4">&nbsp;</el-col>
		  <el-col :span="16">
		  <div id="log">
     
		      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" name = 'zhuceForm'>		  	  
		  	  
		  	      <el-form-item label="用户名" >
				    <el-input  name = 'username'></el-input>
				  </el-form-item>
		  	      <el-form-item label="昵称" >
				    <el-input  name = 'nickname'></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass" >
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" name = 'password'></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass">
				    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click='register'>注册</el-button>
				    <router-link to="/">
				    	<el-button>返回登陆</el-button>
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
//var {axPost} require('../common/HttpBean')
//import {axPost} from '../../common/HttpBean'
import {register} from '../../vuex/actions/UserAction';
import {getRegister} from  '../../vuex/getters/UserGetter';
export default {//响应方法
  data() {//data ()赋值--会自动绑定
     
 	 var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
      //  data:0

      };

     },
    methods: {
      register:function(e){
     	  alert("1111");
        register(zhuceForm,this);
     	//封装过的
        // axPost('http://localhost:3000/users/zhuce',$(zhuceForm).serialize(),function(res){
        // 	alert(res.data);
        // },function(err){
        // 	alert(err);
        // });


         //  let formObj = {};
         //  formObj.uesrname = zhuceForm.uesrname.value;
         //  formObj.password = zhuceForm.password.value;
         //  formObj.pickname = zhuceForm.pickname.value;
         // alert(zhuceForm.uesrname.value);
         //跨域（两个项目Vue前台+koa后台） 访问koa2的注册
   //       axios.post('http://localhost:3000/users/zhuce',$(zhuceForm).serialize())//类似ajax表单提交
   //       .then(function(res){//如果成功
			// 	alert(res.data);
			// })
			// .catch(function(err){//捕获
			// 	console.log(err);
			// });

		}

    },
    computed:{  //监听  ：实时计算
        data:getRegister  //数据绑定，随时监听
    }


}
</script>
	