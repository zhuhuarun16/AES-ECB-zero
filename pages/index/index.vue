<template>
	<view class="content">
		加密算法
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mac:'00E0162F0005',	//mac地址字符串
				hex:'',	//经过CRC16-IBM校验以及算法后的值
				keyResylt:'',	//密钥
			}
		},
		watch:{
			hex(){	//监听设备hex信息改变，随机生成1~5数字，执行对应算法，获取加密密钥
				let x = Math.floor(Math.random() * 5) + 1;
				let Num = 1; 	//选择第几种算法
				this.keyResylt = this.AES_API.func(Num,this.hex);	//获取加密密钥
				console.log('密钥为：'+this.keyResylt);
			},
			keyResylt(){
				let str = 'test=data';	//需要加密的字符串
				let EncryptResult = this.AES_API.getEncryptResult(this.keyResylt,str);	//加密
				console.log("加密结果："+ EncryptResult); 
				
				const arrayBuffer = new Uint8Array(Buffer.from(EncryptResult, 'hex'));	//将hex转化为arrayBuffer
				const base64 = uni.arrayBufferToBase64(arrayBuffer);	//将arrayBuffer转化为base64
				let DecryptResult = this.AES_API.getDecryptResult(this.keyResylt,base64);	//解密
				console.log("解密结果："+ DecryptResult);
			},
		},
		methods: {
			
		},
		onLoad() {
			// this.hex = this.getCRC16_IBM(this.mac);	//获取CRC16-IBM校验值
			this.hex = this.AES_API.getCRC16_IBM(this.mac);	//获取CRC16-IBM校验值
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
