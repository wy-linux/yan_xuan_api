const mongoose = require('mongoose');
mongoose.connect('mongodb://wy:wy@localhost/yan_xuan')
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    })