<template>
  <div class="aboutChina">
    <div class="cshowData">
      <cshowData
        :covData="covData"
        :covData_="covData_"
        :modifyTime="modifyTime"
      ></cshowData>
    </div>

    <div class="quickReport">
      <quickReport></quickReport>
    </div>

    <nav>
      <router-link
        class="link"
        active-class="active"
        :to="{ name: 'cExisConfirmed' }"
        >现有确诊</router-link
      >
      <router-link
        class="link"
        active-class="active"
        :to="{ name: 'cNewConfirmed' }"
        >新增确诊</router-link
      >
    </nav>
    <!-- 地图显示信息 -->
    <div class="map_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import cshowData from "../components/China/CShowData.vue";
import quickReport from "../components/China/QuickReport.vue";
import api from "../path/api";
export default {
  name: "aboutChina",
  components: { cshowData, quickReport },
  data() {
    return {
      result: {},
      covData: {}, //全国疫情数据
      covData_: [], //全国疫情数据
      modifyTime: {},
    };
  },
  beforeCreate() {
    api.getWholeDataTest().then((res) => {
      // res.data 是服务器返回的数据
      // console.log(res.data);
      this.result = res.data.newslist[0].desc;
      // console.log(this.result);
      this.modifyTime = this.result.modifyTime; //后面会吧更新日期字符串化，所以要先定义

      const covData = {}; //定义一个箱子
      const covData_ = []; //定义一个箱子

      //console.log(Object.keys(this.result)); //这个是全国疫情数据数组

      Object.keys(this.result).forEach((key) => {
        // 装箱 this.result[key]根据key值拿到里面的小东西
        covData[key] = this.result[key].toLocaleString();
      });
      this.covData = covData; //把定义的箱子里面的东西赋值给另一个箱子
      this.covData_ = covData_;

      // this.covData = { ...this.result };
      // this.covData.put((res) => {});

      // 这样太慢啦！！
      // this.covData = {
      //   modifyTime: this.result.modifyTime, //更新时间
      //   foreignStatistics: this.result.foreignStatistics, //   国外疫情统计数据
      //   globalStatistics: this.result.globalStatistics, //   全球疫情统计数据
      //   riskarea: this.result.riskarea, //   国内风险地区，high高风险、mid中风险
      //   currentConfirmedCount:
      //   this.result.currentConfirmedCount, //   现存确诊人数
      //   confirmedCount: this.result.confirmedCount, //   累计确诊人数
      //   suspectedCount: this.result.suspectedCount, //   累计境外输入人数
      //   curedCount: this.result.curedCount, //   累计治愈人数
      //   deadCount: this.result.deadCount, //   累计死亡人数
      //   seriousCount: this.result.seriousCount, //   现存无症状人数
      //   suspectedIncr: this.result.suspectedIncr, //   新增境外输入人数
      //   currentConfirmedIncr: this.result.currentConfirmedIncr, //   相比昨天现存确诊人数
      //   confirmedIncr: this.result.confirmedIncr, //   相比昨天累计确诊人数
      //   curedIncr: this.result.curedIncr, //   相比昨天新增治愈人数
      //   deadIncr: this.result.deadIncr, //   相比昨天新增死亡人数
      //   seriousIncr: this.result.seriousIncr, //   相比昨天现存无症状人数
      //   yesterdayConfirmedCountIncr: this.result.yesterdayConfirmedCountIncr, //   相比昨天新增累计确诊人数
      //   yesterdaySuspectedCountIncr: this.result.yesterdaySuspectedCountIncr, //   相比昨天境外输入确诊人数
      //   highDangerCount: this.result.highDangerCount, //   国内高风险地区个数
      //   midDangerCount: this.result.midDangerCount, //   国内中风险地区个数
      // };
    });
  },
};
</script>

<style scoped>
.cshowData,
.quickReport {
  background-color: #fff;
}
nav {
  display: flex;
  text-align: center;
  /* width: 100%; */
  height: 1.4rem;
  background: rgb(226, 226, 226);
  border-radius: 0.2rem;
}
.link {
  flex: 1;
  font-size: 0.6rem;
  height: 1.2rem;
  margin: auto 0.1rem;
  color: rgb(0, 0, 0);
  font-weight: bold;
  line-height: 1.4rem;
  text-decoration: none;
}
.active {
  background-color: #fff;
  border-radius: 0.2rem;
}
.map_view {
  margin-bottom: 0.5rem;
}
</style>睡觉~~~~~