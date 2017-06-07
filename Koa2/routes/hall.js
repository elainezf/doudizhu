const router = require('koa-router')()

router.prefix('/hall')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/getRoomList', async (ctx, next) => {
  let loginbean =ctx.session.loginbean;
  if(!loginbean){
  	 ctx.body = '登录过期';
  	 return;
  }
  ctx.body =[];
})

module.exports = router
