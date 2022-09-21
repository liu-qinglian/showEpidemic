<template>
  <div class="exisConfirmed">
    <p>现有确诊病例数，排除治愈、死亡</p>
    <div class="mapDiv">
      <cShowExisMap> </cShowExisMap>
    </div>
  </div>
</template>

<script>
import cShowExisMap from "../components/China/CShowExisMap.vue";
export default {
  name: "cExisConfirmed",
  components: { cShowExisMap },
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