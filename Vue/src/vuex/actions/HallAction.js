import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa){//注册方法
	axGet('api/hall/getRoomList',{},function(res){//提交到服务端
        alert(res.data);
        if (res.data == 1){
        	thisa.$router.push('/gamehall');//跳转到游戏大厅
        }
        uerStore.commit('register',res.data);//Vuex提供的消息机制，调用存储时使用，传参调用别的方法
    },function(err){
        alert(err);
    });
}

