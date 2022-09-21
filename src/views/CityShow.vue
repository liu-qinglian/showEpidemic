<template>
  <div class="city_show">
    <div class="cityShowData">
      <div class="title">{{ city }}</div>
      <cityShowData :city="city"></cityShowData>
    </div>

    <div class="mapDiv">
      <cityMap :city.sync="city"></cityMap>
    </div>
  </div>
</template>

<script>
import CityShowData from "../components/China/ChinaCity/CityShowData.vue";
import cityMap from "../components/China/ChinaCity/CityMap.vue";
export default {
  components: { CityShowData, cityMap },
  name: "cityShow",
  props: ["city"],
};
</script>

<style>
.cityShowData,
.mapDiv {
  background-color: #fff;
  margin-bottom: 0.3rem;
}
.mapDiv {
  padding-bottom: 1rem;
}
.title {
  padding-left: 0.2rem;
}
</style>