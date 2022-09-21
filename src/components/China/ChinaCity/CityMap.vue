<template>
  <div class="city_map">
    <div id="main" style="width: 16rem; height: 14rem"></div>
    <!-- <div id="main2" style="width: 16rem; height: 14rem"></div> -->
  </div>
</template>

<script>
// import * as echarts from "echarts";
import api from "../../../path/api";
export default {
  name: "cityMap",
  props: ["city"],
  data() {
    return {
      chinaCitys: null,
      cityData: [],
    };
  },
  //   mounted() {
  //     // var myChart = echarts.init(document.getElementById("main"));
  //     // var option = {
  //     // }
  //   },
  watch: {
    // 第一种方式：监听整个对象，每个属性值的变化都会执行handler
    // 注意：属性值发生变化后，handler执行后获取的 newVal 值和 oldVal 值是一样的
    city: {
      // 每个属性值发生变化就会调用这个函数
      handler(newVal, oldVal) {
        console.log("oldVal:", oldVal);
        console.log("newVal:", newVal);
      },
      // 立即处理 进入页面就触发
      immediate: true,
      // 深度监听 属性的变化
      deep: true,
    },
  },

  mounted() {
    api.getChinaCityData().then((res) => {
      let chinaCitys = res.data.data.areaTree[2].children; //中国各地区数据
      console.log("chinaCitys", chinaCitys);
      let _chinaCitys = {};
      for (let i = 0; i < chinaCitys.length; i++) {
        // 拿到数组里面的数据   in的话是下标，重复了呀那老师阿朱哪里
        for (var item of chinaCitys) {
          _chinaCitys[item.name] = item;
        }
      }
      this.chinaCitys = _chinaCitys;
      console.log(this.chinaCitys);
      this.cityData = this.chinaCitys[this.city].children;
      //   console.log("aaaaa", this.chinaCitys[this.city].children);
      let newArr = [];
      this.cityData.forEach((element) => {
        let obj = {};
        obj.name = element.name + "市";
        obj.value = element.total.confirm; //累计确诊
        newArr.push(obj);
      });
      this.$myCharts.ProvinceMap("main", this.city, newArr);
    });
  },
};
</script>

<style>
</style>