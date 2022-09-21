<template>
  <div class="newConfirmed">
    <p>累计确诊病例数，包含治愈、死亡</p>
    <div class="mapDiv">
      <!-- <cSshowNewMap></cSshowNewMap> -->
      <wShowExistMap></wShowExistMap>
    </div>
  </div>
</template>

<script>
import wShowExistMap from "../components/World/WShowExistMap.vue";

export default {
  components: { wShowExistMap },
  name: "wExistConfirmed",
  data() {
    return {};
  },
};
</script>

<style>
.mapDiv {
  background-color: #fff;
}
</style>
  