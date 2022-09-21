<template>
  <div class="show_exis_map">
    <div id="main" style="width: 16rem; height: 14rem"></div>
    <!-- <div id="main2" style="width: 16rem; height: 14rem"></div> -->
  </div>
</template>

<script>
// import * as echarts from "echarts";
import api from "../../path/api";
export default {
  name: "cShowExisMap",
  data() {
    return {
      // areaTree: [],
      // diseaseh5Shelf: {},
    };
  },
  // resize() {
  //   this.chart.resize();
  // },

  //   mounted() {
  //     // var myChart = echarts.init(document.getElementById("main"));
  //     // var option = {
  //     // }
  //   },
  mounted() {
    // window.addEventListener("resize", this.resize);

    api.getChinaData().then((res) => {
      // console.log("dadadada", res.data);
      // console.log(res.data.data.diseaseh5Shelf);

      let citys = res.data.data.diseaseh5Shelf.areaTree[0].children;

      let todayConfirmArr = []; //现存
      for (let i = 0; i < citys.length; i++) {
        let now = {};
        now.name = citys[i].name;
        now.value = citys[i].total.nowConfirm;
        // let now={}
        todayConfirmArr.push(now);
      }
      //  等待延迟加载
      //       this.$nextTick(() => {
      //  // console.log("todayConfirmArr", todayConfirmArr);
      //       })
      this.$myCharts.chinaMap("main", todayConfirmArr);
    });
    // console.log(this);
    // console.log(this.$myCharts);
    // this.$myCharts.line("main");

    // this.Echarts.chinaMap("main");
  },
  // beforeDestroy() {
  //   // beforeDestroy 生命钩子中，清空 resize 事件处理函数
  //   window.removeEventListener("resize", this.resize);
  // },
};
</script>

<style>
.main {
  margin: 1.25rem auto;
}
</style>