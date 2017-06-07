
<template>
	<el-row style="margin-bottom: 18px">
			<el-col :span='6'>
				<levelnav/>
			</el-col>
			<el-col :span='18'>
				<roomlist/>
			</el-col>
	</el-row>
		
		
</template>>
<script >
import {getRoomList} from '../../vuex/actions/HallAction'
import Levelnav from './Levelnav'
import RoomList from './RoomList'
	export default {//vue 实例  任何一个组件都绑定一个Vue实例
		mounted:function(){
			//axios 向服务器发请求，获取房间列表（先校验session）
			getRoomList(this);
		},
		components:{//组件
			levelnav:Levelnav,
			roomlist:RoomList
		}
	}
</script>