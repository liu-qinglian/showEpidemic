// 公共请求的接口
const base = {
    // 疫情数据
    host: 'http://api.tianapi.com',//天行数据   疫情总信息
    covInfo: '/ncov/index?key=1caaf752e971799e8d0129c72ff7a038',

    host2: 'http://api.tianapi.com/ncovabroad/index', //天行数据   海外总肺炎疫情
    covInfo2: '?key=1caaf752e971799e8d0129c72ff7a038',

    // baseUrl: 'https://c.m.163.com/ug/api/wuhan/app/data/list-total',

    baseUrl: '/api/wuhan/app/data/list-total',  //163提供的接口地址    //省内城市（按省为一组）

    chinaInter: 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list',  //  FREE API:国内各省（按城市为一组）新冠疫情
    ChinaParam: '?modules=statisGradeCityDetail,diseaseh5Shelf',

    
}

export default base;