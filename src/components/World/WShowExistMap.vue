<template>
  <div class="show_exist_map">
    <div id="main" style="width: 16rem; height: 14rem"></div>
    <!-- <div id="main2" style="width: 16rem; height: 14rem"></div> -->
  </div>
</template>

<script>
// import * as echarts from "echarts";
import api from "../../path/api";
export default {
  name: "wShowExistMap",
  data() {
    return {
      // newConfirmArr:[]
    };
  },
  mounted() {
    api.getWholeWorldDataTest().then((res) => {
      // console.log("world", res.data);
      let countrys = res.data.newslist;
      console.log(countrys);
      let newConfirmArr = []; //累计
      for (let i = 0; i < countrys.length; i++) {
        let now = {};
        now.name = countrys[i].provinceName;
        now.value = countrys[i].confirmedCount;
        // let now={}
        newConfirmArr.push(now);
      }
      console.log("累计", newConfirmArr);
      this.$myCharts.WorldMap("main", newConfirmArr);
    });
  },
};
</script>

<style>
</style>