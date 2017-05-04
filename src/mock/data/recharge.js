import Mock from 'mockjs';
const recharge = {
  "price_rate": "100", //1元 = 100金币
  "gold_unit": "金币",
  goods: []
}
const order = {
  "order_id": Mock.Random.integer(1, 100),//唯一订单编号
  "app_id": "wx43435",
  "time_stamp": new Date().getTime(),// 时间戳
  "nonce_string": 'slfjslafjsdfl',// 随机串
  "package": "prepay_id=123456789",// 订单详情扩展字符串
  "sign_type": "MD5",// 签名方式
  "pay_sign": "1414561699"// 签名
}
for (let i = 0; i < 6; i++) {
  recharge.goods.push(Mock.mock({
    "good_code": "g_" + Mock.Random.integer(1, 100), //商品id
    "good_price": Mock.Random.integer(1, 100),  //价格
    "good_unit": "元",  //单位
    "good_desc": "充值" + Mock.Random.integer(1, 100) + "元",  //商品描述
    "good_give": Mock.Random.integer(1, 10), //赠送额度
  }));
}

export {recharge,order};
