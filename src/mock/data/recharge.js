import Mock from 'mockjs';
const recharge = {
  code:'',
  msg:'',
  data:{
    "priceRate": "100", //1元 = 100金币
    "goldUnit": "金币",
    goods: []
  }
}
const order = {
  code:'',
  data:{
    "orderId": Mock.Random.integer(1, 100),//唯一订单编号
    "appId": "wx43435",
    "timeStamp": new Date().getTime(),// 时间戳
    "nonceString": 'slfjslafjsdfl',// 随机串
    "package": "prepay_id=123456789",// 订单详情扩展字符串
    "signType": "MD5",// 签名方式
    "paySign": "1414561699"// 签名
  }
}
for (let i = 0; i < 6; i++) {
  recharge.data.goods.push(Mock.mock({
    "goodId": "g_" + Mock.Random.integer(1, 100), //商品id
    "goodPrice": Mock.Random.integer(1, 100),  //价格
    "goodUnit": "元",  //单位
    "goodDesc": "充值" + Mock.Random.integer(1, 100) + "元",  //商品描述
    "goodGive": Mock.Random.integer(1, 10), //赠送额度
  }));
}

export {recharge,order};
