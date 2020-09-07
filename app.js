const express = require('express');
require('./db/connect')

var cookieParser = require('cookie-parser');
const router = require('./routers/index.js')
var bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: '12345',
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());
app.use('/', router)
app.get('/search', (req, res) => {
    let _tempGoods = [{
        name: '好看的男装',
        price: 99
    }, {
        name: '美丽的女装',
        price: 44
    }, {
        name: '可爱的童装',
        price: 55
    }, {
        name: '干活的工作服',
        price: 66
    }];
    let goods = _tempGoods.filter(value => {
        return value.name.indexOf(req.query.value) != -1
    });
    let fal = [{
        name: '没有匹配',
        price: 0
    }]
    goods = goods.length > 0 ? goods : fal;
    res.send(goods)
    console.log(goods);
})
app.get('/tablist', (req, res) => {
    let list = [

        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '推荐',
        '个护清洁',
        '母婴亲子',
        '运动旅行',
        '数码家电',
        '严选全球'
    ];

    res.send(list);
})



app.get('/pay_swipper', (req, res) => {
    let pay_swipper = [{
            url: 'https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif',
            text0: '9.9超值',
            text1: '爆品定价直降'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/98f47f438097516c3c4b09adce6f486d.png?imageView&quality=65&thumbnail=120y120',
            text0: '好物大赏',
            text1: '每天1款内部价'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/e92a567f96b94dcea29eafea9ab42440.png?imageView&quality=65&thumbnail=120y120',
            text0: '好物大赏',
            text1: '官方排名发布'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/1d94b7dcbf10a3e836bab65729eeaaad.png?imageView&quality=65&thumbnail=120y120',
            text0: '明星商品',
            text1: '百万粉丝之选'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/7f2bb126ab7bb1ac5340f956edd31475.jpg?imageView&quality=65&thumbnail=120y120',
            text0: '每月好物',
            text1: '9月必买清单'
        },

        {
            url: 'https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif',
            text0: '选购指南',
            text1: '破解选择困难'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif',
            text0: '晒单',
            text1: '入选就有红包'
        }, {
            url: 'https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120y120',
            text0: '甄选家',
            text1: '爆品免费试用'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/f24cde417adc441b1844d197fc360e87.gif',
            text0: 'Pro会员',
            text1: '每周专享福利'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/2e038945352b0a8e7a339741b8c5f229.png?imageView&quality=65&thumbnail=120y120',
            text0: '全球好物',
            text1: '0关税即时达'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/ee3e05fed85f623c92256d5371087480.png?imageView&quality=65&thumbnail=120y120',
            text0: '中国风物志',
            text1: '系列微纪录片'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/c1fe06034fb5b4e378277e590d04845c.png?imageView&quality=65&thumbnail=120y120',
            text0: '每日穿搭',
            text1: '时尚买手力荐'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120y120',
            text0: '好吃研究所',
            text1: '时令美食抢先尝'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/321dac9cf0fa0edd8da0092a753531f3.png?imageView&quality=65&thumbnail=120y120',
            text0: 'HOME',
            text1: '实景家居专栏'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/17f2bc11d23d2be6b8d8fdf066bb68c9.png?imageView&quality=65&thumbnail=120y120',
            text0: '特色系列',
            text1: '发现格调好货'
        },
        {
            url: 'https://yanxuan.nosdn.127.net/e29bd9f1a9f61e37b969d59566ea15b2.png?imageView&quality=65&thumbnail=120y120',
            text0: '工厂考察团',
            text1: '探访严选工厂'
        },

    ]
    res.send(pay_swipper)
})
app.listen(8081);
console.log('启动成功');