import Mock from 'mockjs';
const classGroupList = [];
const classGroupInfo = {
  "classInfo": {
    "class_id": "299290857268314112",
    "school_name": "平潭一中",
    "state": "1", //0解散 //1有效，解散的不用返回         
    "class": "二班",
    "grade": "高三年",
    "create_user_name": Mock.Random.cname(), //创建者姓名
    "create_user_id": "2", //创建者id        
    "teacher_name": Mock.Random.cname(),
    "teacher_id": "老师id",//可能为空        
    "start_date": "2014.09",
    "end_date": "2015.07",
    "createTime": "2017-04-08T16:31:21.833+0800"
  },
  "students": []
}
const gradeInfo = [{
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
}];
const textbook = []
const noticeInfo={
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

for (let i = 0; i < 10; i++) {
  textbook.push(Mock.mock({
    textbook_id: Mock.Random.integer(1, 100),
    textbook_code: Mock.Random.integer(1, 100)+'',
    textbook_name: "闽教版"+Mock.Random.integer(1, 100000)
  }));
}
for (let i = 0; i < 10; i++) {
  classGroupInfo.students.push(Mock.mock({
    "user_id": Mock.Random.integer(1, 100), //用户唯一编号
    "role_id": Mock.Random.integer(1, 3), //学生、家长or老师
    "student_name": Mock.Random.cname(), //学生姓名
    "headimgurl": "", //头像
    "parent_name": Mock.Random.cname(), //家长姓名，可能为空
    "task_status": "", //最新任务完成情
  }));
}
/*for (let i = 0; i < 10; i++) {
  classGroupList.push(Mock.mock({
    "class_id": Mock.Random.integer(1, 100000),
    "school_name": "平潭一中",
    "grade": "高三年",
    "state": "1", //0解散 //1有效，解散的不用返回        
    "class": "二班",
    "create_user_name": Mock.Random.cname(), //创建者姓名
    "create_user_id": Mock.Random.integer(1, 100), //创建者id       
    "teacher_name": Mock.Random.cname(),
    "start_date": "2014.09",
    "end_date": "2015.07",
    "createTime": "2017-04-08T16:31:21.833+0800",
    "textbook": "教材版本"
  }));
}*/
export {
  classGroupList,
  classGroupInfo,
  gradeInfo,
  textbook,
  noticeInfo
};
