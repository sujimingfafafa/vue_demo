import {
	getUser,
	getAddressList
} from '../service/getData'
// getAddressList  解构出获取地址列表  getUser 解构出获取用户信息
import {
	GET_USERINFO,
	SAVE_ADDRESS
} from './mutation-types.js'

export default {

	 getUserInfo({
		 //async 异步 为ajax shuxing ......qwewqewqeqwr v32qr32q4rc reqwr fdewerc 23cr
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
	async saveAddress({
		commit,
		state
	}) {
		console.log(state)
		if(state.removeAddress.length > 0) return;
		
		let addres = await getAddressList(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);	
	},
}