//开发成vue插件来使用echars
// /javascript:
/*object.defineProperties(obj, props)
    方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象
    obj在其上定义或修改属性的对象
    props要定义其可枚举属性或修改的属性描述符的对象
// */

import echarts from 'echarts'
import './map'

var chinaMapGlobal
const install = function (Vue, options) {
    //添加实例方法
    //Vue.prototype.demo=function()0//obj.name
    //Vue.prototype.$myChart = { demo(), fun(), ...}
    Object.defineProperties(Vue.prototype, {
        $myCharts: {
            get() {
                return {
                    // 1、绘制一个折线图

                    // line(id) {
                    //     var myChart = echarts.init(document.getElementById(id));
                    //     var option = {
                    //         title: {
                    //             text: "ECharts 入门示例",
                    //         },
                    //         tooltip: {},
                    //         legend: {
                    //             data: ["销量"],
                    //         },
                    //         xAxis: {
                    //             data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                    //         },
                    //         yAxis: {},
                    //         series: [
                    //             {
                    //                 name: "销量",
                    //                 type: "line",
                    //                 data: [5, 20, 36, 10, 10, 20],
                    //             },
                    //         ],
                    //     };

                    //     // 使用刚指定的配置项和数据显示图表。
                    //     myChart.setOption(option);
                    // },


                    // 2、绘制一个中国地图
                    chinaMap(id, data) {
                        this.chinachart = echarts.init(document.getElementById(id))
                        chinaMapGlobal = this.chinachart
                        // 进行相关配置
                        this.chartOption = {
                            tooltip: {
                                triggerOn: "click",//提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false

                                // 鼠标移到图里面的浮动提示框
                                // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
                                formatter(params, ticket, callback) {

                                    // params.data 就是series配置项中的data数据遍历
                                    // 浮动提示框里面的数据
                                    let city
                                    let localValue


                                    if (params.data) {
                                        // console.log(params.data);
                                        city = params.data.name
                                        localValue = params.data.value
                                    } else { // 为了防止没有定义数据的时候报错写的
                                        city = ''
                                        localValue = 0

                                    }
                                    return `
                                    <p style='text-align:left;'>
                                        省份：${city}<br/>  确诊：${localValue} 
                                        <a href="/cityShow/${city}" style="color:#fff">详情></a>     
                                       
                                    </p>
                                  `


                                },
                                backgroundColor: "rgb(225,225,225)",//提示标签背景颜色
                                textStyle: { color: "#fff" } //提示标签字体颜色
                            },
                            // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
                            visualMap: { // 左下角的颜色区域
                                type: 'piecewise', // 定义为分段型 visualMap
                                min: 0,
                                // max: 1000,
                                itemWidth: 50,
                                // bottom: 10,
                                left: 10,
                                pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                                    { gt: 99999, label: '>10000', color: 'rgb(226, 17, 17)' }, // (900, 1000]
                                    { gt: 9999, lte: 9998, label: '1000~9999', color: 'rgb(228, 81, 81)' }, // (500, 900]
                                    { gt: 99, lte: 998, label: '100~999', color: 'rgb(235, 101, 101)' }, // (310, 500]
                                    { gt: 9, lte: 98, label: '10~99', color: 'rgb(235, 160, 145)' }, // (200, 300]
                                    { gt: 0, lte: 8, label: '1~9', color: 'rgb(235, 190, 187)' }, // (10, 200]
                                    { value: 0, label: '0', color: '#fff' } // [0]
                                ]
                            },
                            // geo配置详解： https://echarts.baidu.com/option.html#geo
                            geo: { // 地理坐标系组件用于地图的绘制
                                map: 'china', // 表示中国地图
                                // roam: true, // 是否开启鼠标缩放和平移漫游
                                zoom: 1, // 当前视角的缩放比例（地图的放大比例）
                                label: {
                                    show: true
                                },
                                itemStyle: { // 地图区域的多边形 图形样式。
                                    borderColor: 'rgba(0, 0, 0, 0.2)',
                                    emphasis: { // 高亮状态下的多边形和标签样式
                                        shadowBlur: 20,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            series: [
                                {
                                    name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
                                    type: 'map',
                                    geoIndex: 0,
                                    label: {
                                        show: true
                                    },
                                    data,
                                    // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
                                    // data: [{
                                    //     'name': '北京',
                                    //     'value': 599,
                                    //     'perf': '0.501s', // 性能
                                    //     'downloadSpeep': '1.221MB/s', // 下载速度
                                    //     'usability': '100%', // 可用性
                                    //     'point': '250' // 监测点
                                    // }, ]
                                }
                            ],
                            grid: { show: 'true', borderWidth: '0', height: "60%", width: "80%", y: "20%", x: "12%" },
                        },
                            // this.media = [
                            //     {
                            //         option: {
                            //             grid: [
                            //                 { left: '10%', right: '55%', top: '10%', bottom: '10%' },
                            //                 { left: '55%', right: '10%', top: '10%', bottom: '10%' },
                            //             ]
                            //         },
                            //     },
                            //     {
                            //         query: {
                            //             maxWidth: 768
                            //         },
                            //         option: {
                            //             grid: [
                            //                 { left: '10%', right: '10%', top: '10%', bottom: '55%' },
                            //                 { left: '10%', right: '10%', top: '55%', bottom: '10%' },
                            //             ]
                            //         },
                            //     },
                            // ];
                            this.chinachart.setOption(this.chartOption)

                        /*窗口尺寸发生变化时，echarts 实例重置尺寸*/
                        window.addEventListener('resize', function () {
                            chinaMapGlobal.resize();
                        });
                        // window.resize(function () {
                        //     chinachart.resize();
                        //     // myChart1.resize();

                        // })
                        // $(window).resize(function () {
                        //     chinachart.resize();
                        //     // myChart1.resize();

                        // })

                    },


                    // 绘制中国省地图
                    ProvinceMap(id, cityname, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                //                    show: false //不显示提示标签
                                formatter: '{b}', //提示标签格式
                                backgroundColor: " rgb(225, 207, 152)",//提示标签背景颜色
                                textStyle: { color: "#fff" }, //提示标签字体颜色
                                formatter(data) {
                                    return '累计确诊：' + data.value
                                }
                            },
                            visualMap: { // 视觉映射组件
                                show: true,
                                inverse: true, // 反转
                                top: '70%',
                                bottom: '2%',
                                left: '2%',
                                textStyle: {
                                    fontsize: 12
                                },
                                splitList: [ // 自定义范围
                                    { start: 0, end: 100 },
                                    { start: 100, end: 300 },
                                    { start: 300, end: 500 },
                                    { start: 500, end: 1000 },
                                    { start: 1000 }
                                ],
                                color: ['#BF242A', '#CD5459', '#DC878A', '#EAB7B9', '#F3D7D9'] //自定义范围的颜色
                            },
                            series: [{
                                type: 'map',
                                mapType: 'nanning',
                                name: '市',
                                map: cityname,
                                label: {
                                    normal: {
                                        show: true,//显示省份标签
                                        textStyle: { color: "#c71585" },//省份标签字体颜色

                                    },
                                    emphasis: {//对应的鼠标悬浮效果
                                        show: true,
                                        textStyle: { color: "#800080" }
                                    }
                                },
                                itemStyle: {
                                    normal: {// 静态的时候显示的默认样式
                                        borderWidth: .5,//区域边框宽度
                                        borderColor: '#009fe8',//区域边框颜色
                                        areaColor: "#ffefd5",//区域颜色
                                    },
                                    emphasis: {// 鼠标移入动态的时候显示的默认样式
                                        borderWidth: .5,
                                        borderColor: '#4b0082',
                                        areaColor: "#f47920",
                                    }
                                },
                                data,
                                // data: [
                                //     { name: '青秀区', selected: true },//广西为选中状态
                                //     { name: '江南区', selected: true },//贵州为选中状态
                                //     { name: '西乡塘区', selected: true },//云南为选中状态
                                //     { name: '良庆区', selected: true },//云南为选中状态
                                //     { name: '兴宁区', selected: true },//云南为选中状态
                                //     { name: '邕宁区', selected: true },//云南为选中状态
                                // ]
                            }],
                        };

                        myChart.setOption(option);
                        // myChart.on('mouseover', function (params) {
                        //     var dataIndex = params.dataIndex;
                        //     console.log(params);
                        // });
                        window.addEventListener('resize', function () {
                            myChart.resize();
                        });
                    },


                    // 1、绘制一个世界地图
                    WorldMap(id, data) {
                        var worldchart = echarts.init(document.getElementById(id))
                        // 进行相关配置
                        var option = {
                            title: {
                                left: 'center',
                                top: 'top'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: function (params) {
                                    let LocalValue
                                    if (params.data) {
                                        LocalValue = params.data.value
                                    } else { // 为了防止没有定义数据的时候报错写的
                                        LocalValue = 0

                                    }
                                    // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                                    //     + '.' + value[1];
                                    return params.name + '<br/>' + ' : ' + LocalValue;
                                }
                            },
                            visualMap: {
                                type: 'piecewise',
                                min: 0,
                                // max: 1000000,
                                // text: ['High', 'Low'],
                                realtime: false,
                                calculable: true,
                                bottom: 10,
                                // left: 20,
                                // color: ['orangered', 'yellow', 'lightskyblue']
                                pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式


                                    { gt: 10000000, label: '>1000万', color: 'rgb(85, 3, 3)' }, // (900, 1000]
                                    { gt: 5000000, lte: 10000000, label: '500万~1000万', color: 'rgb(136, 7, 7)' }, // (500, 900]
                                    { gt: 1000000, lte: 5000000, label: '100万~500万', color: 'rgb(165, 26, 26)' }, // (900, 1000]
                                    { gt: 100000, lte: 1000000, label: '10万~100万', color: 'rgb(204, 24, 24)' }, // (500, 900]
                                    { gt: 9999, lte: 100000, label: '1万~10万', color: 'rgb(212, 68, 68)' }, // (310, 500]
                                    { gt: 4999, lte: 9999, label: '5000~9999', color: 'rgb(243, 148, 148)' }, // (200, 300]
                                    { gt: 0, lte: 4999, label: '1~4999', color: 'rgb(240, 192, 192)' }, // (10, 200]
                                    { value: 0, label: '0', color: '#fff' } // [0]
                                ]
                            },
                            // geo: { // 地理坐标系组件用于地图的绘制
                            //     map: 'world', // 表示中国地图
                            //     // roam: true, // 是否开启鼠标缩放和平移漫游
                            //     zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
                            //     label: {
                            //         show: true
                            //     },
                            //     itemStyle: { // 地图区域的多边形 图形样式。
                            //         borderColor: 'rgba(0, 0, 0, 0.2)',
                            //         emphasis: { // 高亮状态下的多边形和标签样式
                            //             shadowBlur: 20,
                            //             shadowColor: 'rgba(0, 0, 0, 0.5)'
                            //         }
                            //     },
                            //     // nameMap: {
                            //     //     Afghanistan: '阿富汗',
                            //     //     Singapore: '新加坡',
                            //     //     "Zimbabwe": "津巴布韦"
                            //     // }
                            // },
                            series: [
                                {
                                    name: 'World Population (2010)',
                                    type: 'map',
                                    mapType: 'world',
                                    zoom: 1.1, // 当前视角的缩放比例（地图的放大比例）
                                    // roam: true,    //移动地图
                                    itemStyle: {
                                        // emphasis: { label: { show: true } }
                                    },
                                    data,

                                }
                            ]
                        }

                        worldchart.setOption(option);
                        window.addEventListener('resize', function () {
                            worldchart.resize();
                        });
                    }



                }
            }
        }
    })
}
export default install