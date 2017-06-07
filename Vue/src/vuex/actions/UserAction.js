import {axPost} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function register(form,thisa){//注册方法
	console.log($(form).serialize());
	axPost('http://localhost:3000/users/zhuce',$(form).serialize(),function(res){//提交到服务端
        alert(res.data);
        if (res.data == 1){
        	thisa.$router.push('/gamehall');//跳转到游戏大厅
        }
        userStore.commit('register',res.data);//Vuex提供的消息机制，调用存储时使用，传参调用别的方法
    },function(err){
        alert(err);
    });
}

export function login(form,thisa){//注册方法
	axPost('http://localhost:3000/users/login',$(form).serialize(),function(res){//提交到服务端
        if (res.data == 1){
        	//alert('登录成功')
        	thisa.$router.push('/gamehall');//跳转到游戏大厅
        	return;
        }else{
        	alert('账号或密码错误');
        }
        //alert(res.data);
      //  uerStore.commit('login',res.data);//Vuex提供的消息机制，调用存储时使用，传参调用别的方法
    },function(err){
        alert(err);
    });
}