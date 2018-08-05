// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
Mock.mock('http://test.com', function(options) {
  console.log(options);
  return Mock.mock({
    "user|1-3": [{
      'name': '@cname',
      'id|+1': 88
    }
    ]
  });
});
