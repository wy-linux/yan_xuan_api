const express = require('express');
const router = express.Router();
const { User } = require('../db/user.js')
const { Family } = require('../db/family.js')

const { clothes } = require('../db/clothes.js')
const { wine } = require('../db/wine.js')
const { FamilyDetails } = require('../db/familyDetails.js')
const { clothesdetails } = require('../db/clothesdetails')
const { winedetails } = require('../db/winedetails')
let identify = {}

function random(length) {
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let result = ''
    for (var i = 0; i < length; i++) {
        let a = arr[Math.floor(Math.random() * 10)]
        result += a
    }
    return result
}
//值得买页面下方评论
router.get('/paylist', (req, res) => {
        let arr = [{
                img: 'https://yanxuan.nosdn.127.net/960535d3092a43d10e826097493292ec.jpg?imageView&thumbnail=345y345&quality=95',
                title: '只有0糖0脂0卡的快乐水，才能给到真正的快乐',
                icon: 'http://yanxuan.nosdn.127.net/d4379373d8e5200bdd8430896a6a5fbf.jpg?imageView&quality=65&thumbnail=48y48',
                name: '网易味央：小周',
                count: '952',
                des: '桃气啵啵水'
            },
            {
                img: 'https://yanxuan.nosdn.127.net/ceb34d6c6273fc0f0db18260d5ac26cc.jpg?imageView&thumbnail=345y345&quality=95',
                title: '两种意见 |  百元级真无线耳机，无敌是一种寂寞',
                icon: 'http://yanxuan.nosdn.127.net/8830006db2f5103f514290f252755f13.JPG?imageView&quality=65&thumbnail=48y48',
                name: '网易游戏：波涛',
                count: '2994',
                des: '网易云音乐真无线蓝牙耳机Lite版'
            },
            {
                img: 'https://yanxuan.nosdn.127.net/193dc84d69da0578f38c6c3d91a58406.jpg?imageView&thumbnail=345y191.66666666666669&quality=95',
                title: '用软fufu的“云朵”洁面，限时低至77折',
                icon: 'http://yanxuan.nosdn.127.net/9a6bad0f5c8ccf03c7647cc6f6d5ce43.png?imageView&quality=65&thumbnail=48y48',
                name: '明星商品',
                count: '22K',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/b1d60790c940d10c48e0e71d71c8d0bd.jpg?imageView&thumbnail=345y345&quality=95',
                title: '开学第一天，买支词典笔让孩子学得容易',
                icon: 'http://yanxuan.nosdn.127.net/3ba7a99d5b4e18db22696f5293b5daed.jpg?imageView&quality=65&thumbnail=48y48',
                name: '网易有道：莉莉',
                count: '2833',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/ccdc82f61e902bd15a773cb0776a35ff.jpg?imageView&thumbnail=345y191.66666666666669&quality=95',
                title: '初秋硕果累累，九月好物也如期而至~',
                icon: 'http://yanxuan.nosdn.127.net/cf5f5b4952001a655fa4191c25c94b01.png?imageView&quality=65&thumbnail=48y48',
                name: '每月好物',
                count: '8125',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/24381ca69d761e6246a26c186cad4f2e.jpg?imageView&thumbnail=345y345&quality=95',
                title: '又逢中秋，回家时顺便带点伴手礼吧~',
                icon: 'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                name: '好物大赏',
                count: '2126',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/3f5c5a653f77bbea55e1c9b6e41b77cd.jpg?imageView&thumbnail=345y460&quality=95',
                title: '乐****的晒图',
                icon: 'https://yanxuan.nosdn.127.net/9d4bfc607b5f7f715befe7cb01accae7.jpg?imageView&quality=65&thumbnail=48y48',
                name: '乐****',
                count: '0',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/b53c35af5d92d5f8dcb902acf2016b28.jpg?imageView&thumbnail=345y191.66666666666669&quality=95',
                title: '99超值专区9月上新',
                icon: 'http://yanxuan.nosdn.127.net/e7feacf488e52c437245de7d526595ab.png?imageView&quality=65&thumbnail=48y48',
                name: '9.9专区',
                count: '72K',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/045b6039b9919664a10faec4720af1c3.jpg?imageView&thumbnail=345y345&quality=95',
                title: '好评率近100%，碾压进口货的婴儿湿巾',
                icon: 'http://yanxuan.nosdn.127.net/3ba7a99d5b4e18db22696f5293b5daed.jpg?imageView&quality=65&thumbnail=48y48',
                name: '网易有道：莉莉',
                count: '4347',
                des: '婴儿手口湿巾 80抽'
            },
            {
                img: 'https://yanxuan.nosdn.127.net/908e5c3a7178968b8d9f714dc64a8120.jpg?imageView&thumbnail=345y229.77&quality=95',
                title: '♀****蕾的晒图',
                icon: 'http://q.qlogo.cn/qqapp/101330628/6E1F7F834CC44E8382D1A5FE6F17DF5B/100?imageView&quality=65&thumbnail=48y48',
                name: '♀****蕾',
                count: '0',
                des: ''
            },
            {
                img: 'https://yanxuan.nosdn.127.net/ec43a1bb79ae62fc439c5b77b293f9ad.jpg?imageView&thumbnail=345y345&quality=95',
                title: '把杭州最美味的客厅，搬到这本书上',
                icon: 'http://yanxuan.nosdn.127.net/d4379373d8e5200bdd8430896a6a5fbf.jpg?imageView&quality=65&thumbnail=48y488',
                name: '网易味央：小周',
                count: '8954',
                des: '滋味人生'
            },
            {
                img: 'https://yanxuan.nosdn.127.net/cfd27096e00f6cda2075a16c505996e2.jpg?imageView&thumbnail=345y345&quality=95',
                title: '王炸牛仔短裤，夏天显高显瘦神器',
                icon: 'http://yanxuan.nosdn.127.net/ffe2a907c0bcef00f366be066f5a2a71.jpg?imageView&quality=65&thumbnail=48y48',
                name: '网易文漫：小蕙',
                count: '9326',
                des: '女式夏日基础百搭牛仔短裤'
            },

        ]
        console.log(arr);
        res.send({
            status: 0,
            list: arr
        })
    })
    //获取首页轮播与标题
router.get('/index/:index', (req, res) => {
        console.log(req.params.index);
        switch (req.params.index) {
            case '3':
                res.send({
                    status: 0,
                    list: {
                        swiper: ['https://yanxuan.nosdn.127.net/9d483f1147270fd454f739976c46ab81.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/2518d6beca1d16c4d59e58109a2e377e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/6a48f8080a34047dd540d78416e31006.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/ddc31987e57c4bc144ddda329ab4ccaa.png?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/51d3705c93fed46983af2fff3a074d1e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                        ],
                        title1: '',
                        title2: ''
                    }
                });
                break;
            case '0':
                res.send({
                    status: 0,
                    list: {
                        swiper: [
                            'https://yanxuan.nosdn.127.net/0b6c324a226dc541e4cd118c3659f7fb.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/4fac53ef549f5b4200e5787bc5d33ecc.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/a7698225c3859ea7425cafd4eb8bdda6.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/8fa7911c47501a8c5074fe1273fb5ab6.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
                            'https://yanxuan.nosdn.127.net/470e1325805bb60d8230cfcb5953ae13.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
                        ],
                        title1: '口碑好物',
                        title2: '口碑好物'
                    }
                })
                break;
            case '1':
                res.send({
                    status: 0,
                    list: {
                        swiper: [
                            'https://yanxuan.nosdn.127.net/f9993d15323113a2d396e42037cac347.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/c5e40b011e7e7f5f3d67adc444a200be.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/e2839dbee0ce2f64a1840b5c428f4c3f.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/0d151683ff0de0d9bcae825afcd89409.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/3b9c0553f51b8504441f51ed13f606a3.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
                        ],
                        title1: '热销爆款',
                        title2: '人气好物放心购'
                    }
                })
                break;
            case '2':
                res.send({
                    status: 0,
                    list: {
                        swiper: [
                            'https://yanxuan.nosdn.127.net/52809ea37e7e822324ae4fe71a2edfdf.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/676ba1c1a7830b1e2f270d154a8b56bd.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/758ed67a71a610195c6d778d3a98bdff.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/ef18499d52e8739e95f2599916d8c4e8.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/c299b5289c0f1d3a622f520c19293346.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
                        ],
                        title1: '9月推荐',
                        title2: '9月美食推荐，秋季养生正当时'
                    }
                })
        }
    })
    //发送验证码
router.get('/idenCode', (req, res) => {
        let phone = req.query.phone
        let code = random(6);
        console.log(`验证码是${code}`)
        setTimeout(() => {
            res.send({
                status: 0,
                code: code
            })
            identify[phone] = code
        }, Math.floor(Math.random() * 7 + 3) * 1000)

    })
    //手机号验证码登陆
router.post('/login_c', async(req, res) => {
        let phone = req.body.phone
        let code = req.body.code
        console.log(code);
        console.log(identify[phone]);
        if (identify[phone] != code) {
            res.send({
                status: 1,
                msg: '验证码错误，请重新获取'
            })

        } else {
            let user = await User.findOne({ phone })
            if (user) {
                let { vip, _id } = user
                req.session.phone = user.phone
                console.log(req.session.phone);
                res.send({
                    status: 0,
                    user
                })
            } else {
                let { vip } = await User.create({
                    phone
                })
                console.log(vip);
                req.session.phone = user.phone
                res.send({
                    status: 0,
                    user
                })

            }
        }
        identify[phone] = ''
    })
    //密码验证
router.post('/login_pwd', async(req, res) => {
    let phone = req.body.phone;
    let pwd = req.body.pwd;


    let user = await User.findOne({ phone })
    console.log(user);
    if (user) {
        console.log(user.pwd);
        if (user.pwd) {
            if (user.pwd == pwd) {
                req.session.phone = user.phone
                res.send({
                    status: 0,
                    user
                })
            } else {
                res.send({
                    status: 1,
                    msg: '手机号或者密码不正确'
                })
            }
        } else {
            let user = await User.updateOne({ phone }, { phone, pwd })
            req.session.phone = user.phone
            res.send({
                status: 0,
                user
            })
        }
    } else {

        let user = await User.create({
            phone,
            pwd
        })
        req.session.phone = user.phone
        res.send({
            status: 0,
            user
        })
    }

})

//会话维持
router.get('/session', async(req, res) => {
        let phone = req.session.phone
        console.log(phone);
        let user = await User.findOne({ phone: phone })
        if (user) {
            res.send({
                user,
                status: 0
            })
        } else {
            res.send({
                status: 1,
                msg: '请重新登录'
            })
        }
    })
    //退出登录
router.get('/logout', function(req, res) {
    // 清除浏览器保存的userid的cookie
    delete req.session.phone
        // 返回数据
    res.send({ code: 0 })
})


//发送goods数据
router.get('/goods/:index', async(req, res) => {
        req.session.index = req.params.index
        console.log(req.session.index);
        switch (req.params.index) {
            case '0':
                let good0 = await Family.find({})
                if (good0) {
                    res.send({
                        status: 0,
                        good0
                    })

                }
                break;
            case '1':
                let good1 = await clothes.find({})
                if (good1) {
                    res.send({
                        status: 0,
                        good1
                    })

                }
                break;
            case '2':
                let good2 = await wine.find({})
                if (good2) {
                    res.send({
                        status: 0,
                        good2
                    })

                }
                break;
        }
    })
    //发送购物详情数据
router.get('/goodsDetails/:index', async(req, res) => {
        switch (req.session.index) {
            case '0':

                let good0 = await FamilyDetails.find({}).limit(1).skip(Number(req.params.index))

                if (good0) {
                    res.send({
                        status: 0,
                        good0: good0[0],
                        index: req.session.index
                    })

                }
                break;
            case '1':

                let good1 = await clothesdetails.find({}).limit(1).skip(Number(req.params.index))

                if (good1) {
                    res.send({
                        status: 0,
                        good1: good1[0],
                        index: req.session.index
                    })

                }
                break;
            case '2':

                let good2 = await winedetails.find({}).limit(1).skip(Number(req.params.index))

                if (good2) {
                    res.send({
                        status: 0,
                        good2: good2[0],
                        index: req.session.index
                    })

                }
                break;

        }

    })
    //用户购物车添加
router.put('/carput', async(req, res) => {


    let b = await User.findOne({ phone: req.body.phone });
    b.carlist.push(req.body.carlist)
    let a = await User.updateOne({ phone: req.body.phone }, { carlist: b.carlist })

})
router.post('/cardelete', async(req, res) => {

    console.log(req.body);
    let a = await User.updateOne({ phone: req.session.phone }, { carlist: req.body.carlist })
})
router.get('/search/:value', async(req, res) => {
    let a = await Family.find();
    let b = await clothes.find();
    let c = await wine.find();
    let arr = [];
    a.forEach(value => {
        arr.push(value.title)
    })
    c.forEach(value => {
        arr.push(value.title)
    })
    d.forEach(value => {
        arr.push(value.title)
    })
    console.log(arr);
})
module.exports = router