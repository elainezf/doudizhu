import userStore from '../stores/UserStore'  //默认时不加{}，有default加{}
export function getRegister(vuea){
	//默认传入所在的Vue对象
	alert('loginbean值发送改变='+userStore.state.loginbean);
    return userStore.state.loginbean;
}
export function getLogin(vuea){
	//默认传入所在的Vue对象
	alert('loginbean值发送改变='+userStore.state.loginbean);
    return userStore.state.loginbean;
}