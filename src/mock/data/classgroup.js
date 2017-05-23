import Mock from 'mockjs';
const classGroupList = {
  code:'',
  msg:'success',
  data:[]
};
const classGroupInfo = {
  code:'',
  msg:'',
  data:{
    "classInfo": {
      "bookId": Mock.Random.integer(1, 100000),
      "bookName": '民教版',
      "classId": Mock.Random.integer(1, 100000),
      "className": '二班',
      "serialId": Mock.Random.integer(1, 100000),
      "serialName": '册名',
      "schoolName": "平潭一中",
      "gradeId": Mock.Random.integer(1, 100),
      "gradeName": "高三年",
      "state": "1", //0解散 //1有效，解散的不用返回        
      "createUserName": Mock.Random.cname(), //创建者姓名
      "createUserId": Mock.Random.integer(1, 100), //创建者id       
      "teacherId": Mock.Random.integer(1, 100),
      "teacherName": Mock.Random.cname(),
      "startDate": "2014.09",
      "endDate": "2015.07",
      "createTime": "2017-04-08T16:31:21.833+0800",
    },
    "members": []
  }
}
const gradeInfo = {
  code:'',
  msg:'success',
  data:[{
    "type": "小学",
    "list": [{
      "gradeId": "34667279476064256",
      "gradeName": "一年级",
      "state": "1",
      "gradeType": "小学"
    }, {
      "gradeId": "34667279480258560",
      "gradeName": "二年级",
      "state": "1",
      "gradeType": "小学"
    }, {
      "gradeId": "34667279480258561",
      "gradeName": "三年级",
      "state": "1",
      "gradeType": "小学"
    }, {
      "gradeId": "34667279480258562",
      "gradeName": "四年级",
      "state": "1",
      "gradeType": "小学"
    }, {
      "gradeId": "34667279480258563",
      "gradeName": "五年级",
      "state": "1",
      "gradeType": "小学"
    }, {"gradeId": "34667279480258564", "gradeName": "六年级", "state": "1", "gradeType": "小学"}]
  }, {
    "type": "初中",
    "list": [{
      "gradeId": "34667279480258565",
      "gradeName": "七年级",
      "state": "1",
      "gradeType": "初中"
    }, {
      "gradeId": "34667279480258566",
      "gradeName": "八年级",
      "state": "1",
      "gradeType": "初中"
    }, {"gradeId": "34667279480258567", "gradeName": "九年级", "state": "1", "gradeType": "初中"}]
  }, {
    "type": "高中",
    "list": [{
      "gradeId": "34667279480258568",
      "gradeName": "高一年",
      "state": "1",
      "gradeType": "高中"
    }, {
      "gradeId": "34667523509059584",
      "gradeName": "高二年",
      "state": "1",
      "gradeType": "高中"
    }, {"gradeId": "34667523509059585", "gradeName": "高三年", "state": "1", "gradeType": "高中"}]
  }]
};
const textbook = {
  code:'',
  msg:'',
  data:[]
}
const noticeInfo={
  code:'',
  msg:'',
  data:{
    "notifyId": "41187717379260416",
    "notifyTitle": "标题3",
    "notifyContent": "内容3",
    "userId": "37202589871243264",
    "openid": null,
    "createTime": "2017-04-24 15:45:17",
    "startTime": null,
    "endTime": null,
    "classId": "39682245648187392",
    "state": "1",
    "img1": null,
    "img2": null,
    "img3": null
  }
}

for (let i = 0; i < 10; i++) {
  textbook.data.push(Mock.mock({
    bookId: Mock.Random.integer(1, 100),
    serialId: Mock.Random.integer(1, 100),
    bookName: '民教版',
    serialName: '？册',
  }));
}
for (let i = 0; i < 10; i++) {
  classGroupInfo.data.members.push(Mock.mock({
    "userId": Mock.Random.integer(1, 100), //用户唯一编号
    "roleId": Mock.Random.integer(1, 3), //学生、家长or老师
    "userName": Mock.Random.cname(), //姓名
    "headimgurl": "", //头像
    "parentName": Mock.Random.cname(), //家长姓名，可能为空
    "taskStatus": "", //最新任务完成情
  }));
}
for (let i = 0; i < 10; i++) {
  classGroupList.data.push(Mock.mock({
    "bookId": Mock.Random.integer(1, 100000),
    "bookName": '民教版',
    "classId": Mock.Random.integer(1, 100000),
    "className": '二班',
    "serialId": Mock.Random.integer(1, 100000),
    "serialName": '册名',
    "schoolName": "平潭一中",
    "gradeId": Mock.Random.integer(1, 100),
    "gradeName": "高三年",
    "state": "1", //0解散 //1有效，解散的不用返回        
    "createUserName": Mock.Random.cname(), //创建者姓名
    "createUserId": Mock.Random.integer(1, 100), //创建者id       
    "teacherId": Mock.Random.integer(1, 100),
    "teacherName": Mock.Random.cname(),
    "startDate": "2014.09",
    "endDate": "2015.07",
    "createTime": "2017-04-08T16:31:21.833+0800",
  }));
}
export {
  classGroupList,
  classGroupInfo,
  gradeInfo,
  textbook,
  noticeInfo
};
