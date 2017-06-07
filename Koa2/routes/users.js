const router = require('koa-router')()

var UserModel = require('../models/UserModel');

router.prefix('/users')


router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})


router.post('/zhuce', async function (ctx, next) {
	console.log("1111111111111111")
  // let username = ctx.request.body['username'];//ctx.query['username']
  // let password = ctx.request.body['password'];
  // let pickname = ctx.request.body['pickname'];
  var user = new UserModel({});
  user.username = ctx.request.body['username'];
  user.password = ctx.request.body['password'];
  user.nickname = ctx.request.body['nickname'];
  user.role = 1;
  user.createtime = new Date();
  try{
  	console.log("12222222222222222")

  	let rs = await user.save();//插入

  	console.log(rs);
  	ctx.status = 307; //HTTP状态码
  	ctx.redirect = ('login');
  	//ctx.redirect(307,'./login');//写法有误
  	return;
  }catch(err){
  	let errMsg = err.message;
  	if(errMsg.indexOf('$useruniq')>-1){
	      ctx.body = 1;		//{type:0,msg:'email重复'};
	    }else if(errMsg.indexOf('$nickuniq')>-1){
	      ctx.body = 2;		//{type:0,msg:'昵称重复'};
	    }else{
	      ctx.body = 0;		//{type:0,msg:'数据库错误'};
	    }
	    return;
	}
	
    ctx.body = '注册成功';//res.send('收到参数')
});

router.post('/login', async function (ctx, next) {
  var user = {};
  user.username = ctx.request.body['username'];
  user.password = ctx.request.body['password'];

  let rs = await UserModel.findOne(user);//查询--不会出错，可能会有查不到的情况
  console.log(rs);

  if(rs){

  	 let loginbean = {};
  	 loginbean.id = rs._id;
  	 loginbean.username = rs.username;
  	 loginbean.role = rs.role;
  	 ctx.session.loginbean = loginbean;
  	 console.log(ctx.session.loginbean);

	 ctx.body = 1;		//{type:0,msg:'email重复'};	   
   }else{
	 ctx.body = 0;		//{type:0,msg:'数据库错误'};
   }

	
});


module.exports = router
