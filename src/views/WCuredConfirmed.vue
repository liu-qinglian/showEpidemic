<template>
  <div class="exisConfirmed">
    <p>累计治愈数</p>
    <div class="mapDiv">
      <!-- <cShowExisMap> </cShowExisMap> -->
      <wShowCuredMap></wShowCuredMap>
    </div>
  </div>
</template>

<script>
import wShowCuredMap from "../components/World/WShowCuredMap.vue";
export default {
  name: "wCuredConfirmed",
  components: { wShowCuredMap },
};
</script>

<style>
p {
  color: rgb(138, 136, 136);
  font-size: 0.4rem;
  text-align: center;
}
.mapDiv {
  background-color: #fff;
}
</style>  