<template>
  <div class="aboutWorld">
    <div class="wShowData">
      <wShowData :covData="covData" :modifyTime="modifyTime"></wShowData>
    </div>
    <div class="statisticsCountry">
      <statisticsCountry></statisticsCountry>
    </div>

    <nav>
      <router-link
        class="link"
        active-class="active"
        :to="{ name: 'wCuredConfirmed' }"
        >累计治愈</router-link
      >
      <router-link
        class="link"
        active-class="active"
        :to="{ name: 'wExisConfirmed' }"
        >累计确诊</router-link
      >
    </nav>
    <!-- 地图显示信息 -->
    <div class="map_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import api from "../path/api";
import wShowData from "../components/World/WShowData.vue";
import StatisticsCountry from "../components/World/StatisticsCountry.vue";
export default {
  name: "aboutWorld",
  components: { wShowData, StatisticsCountry },
  data() {
    return {
      result: {},
      covData: {}, //全国疫情数据
      modifyTime: {},
    };
  },
  beforeCreate() {
    api.getWholeDataTest().then((res) => {
      // res.data 是服务器返回的数据
      // console.log(res.data);
      this.result = res.data.newslist[0].desc;
      // console.log("qqq", this.result);
      this.modifyTime = this.result.modifyTime; //后面会更新日期字符串化，所以要先定义

      const covData = {};
      Object.keys(this.result.foreignStatistics).forEach((key) => {
        covData[key] = this.result[key].toLocaleString();
      });
      this.covData = covData;
    });
  },
};
</script>
<style scoped>
.wShowData,
.statisticsCountry {
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
</style>