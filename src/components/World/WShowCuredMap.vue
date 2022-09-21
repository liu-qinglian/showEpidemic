<template>
  <div class="show_cured_map">
    <div id="main" style="width: 16rem; height: 14rem"></div>
    <!-- <div id="main2" style="width: 16rem; height: 14rem"></div> -->
  </div>
</template>

<script>
// import * as echarts from "echarts";
import api from "../../path/api";
export default {
  name: "wShowCuredMap",
  data() {
    return {
      // newConfirmArr:[]
    };
  },
  mounted() {
    api.getWholeWorldDataTest().then((res) => {
      // console.log("world", res.data);
      let countrys = res.data.newslist;
      // console.log(countrys);
      let curedArr = []; //治愈
      for (let i = 0; i < countrys.length; i++) {
        let now = {};
        now.name = countrys[i].provinceName;
        now.value = countrys[i].curedCount;
        // let now={}
        curedArr.push(now);
      }
      // console.log("治愈", curedArr);
      this.$myCharts.WorldMap("main", curedArr);
    });
  },
};
</script>

<style>
</style>