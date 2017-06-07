import axios from 'axios';

export function axPost(url,formObj,sucFun,failFun=function(err){}){
	//跨域（两个项目Vue前台+koa后台） 访问koa2的注册
     axios.post(url,formObj)//类似ajax表单提交
       .then(function(res){//如果成功
			sucFun(res);
		})
		.catch(function(err){//捕获
			failFun(err);
		});
}

export function axGet(url,formObj,sucFun,failFun=function(err){}){
	//跨域（两个项目Vue前台+koa后台） 访问koa2的注册
     axios.get(url,formObj)//类似ajax表单提交
       .then(function(res){//如果成功
			sucFun(res);
		})
		.catch(function(err){//捕获
			failFun(err);
		});
}

