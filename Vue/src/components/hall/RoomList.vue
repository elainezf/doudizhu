
<template>
	<div>
		房间列表
		<el-button :plain="true" type="info">新建房间</el-button>
 		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" name = 'zhuceForm'>		  	  
		  	  
		  	      <el-form-item label="用户名" >
				    <el-input  name = 'uesrname'></el-input>
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

	</div>
</template>>