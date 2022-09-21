<template>
  <div class="show_new_map">
    <div id="main" style="width: 16rem; height: 14rem"></div>
    <!-- <div id="main2" style="width: 16rem; height: 14rem"></div> -->
  </div>
</template>

<script>
// import * as echarts from "echarts";
import api from "../../path/api";
export default {
  name: "cShowNewMap",
  data() {
    return {};
  },
  //   mounted() {
  //     // var myChart = echarts.init(document.getElementById("main"));
  //     // var option = {
  //     // }
  //   },
  mounted() {
    api.getChinaData().then((res) => {
      //   console.log("dadadada", res.data);
      // console.log(res.data.data.diseaseh5Shelf);

      let citys = res.data.data.diseaseh5Shelf.areaTree[0].children;

      let newConfirmArr = []; //新增
      for (let i = 0; i < citys.length; i++) {
        let now = {};
        now.name = citys[i].name;
        now.value = citys[i].today.confirm;
        // let now={}
        newConfirmArr.push(now);
      }
      //   console.log("newConfirmArr", newConfirmArr);
      this.$myCharts.chinaMap("main", newConfirmArr);
    });
    // console.log(this);
    // console.log(this.$myCharts);
    // this.$myCharts.line("main");

    // this.Echarts.chinaMap("main");
  },
};
</script>

<style>
</style>