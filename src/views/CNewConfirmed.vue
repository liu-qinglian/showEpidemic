<template>
  <div class="newConfirmed">
    <p>新增确诊病例数，包含本土新增、境外新增</p>
    <div class="mapDiv">
      <cSshowNewMap></cSshowNewMap>
    </div>
  </div>
</template>

<script>
import cSshowNewMap from "../components/China/CShowNewMap.vue";
export default {
  components: { cSshowNewMap },
  name: "wNewConfirmed",
};
</script>

<style>
.mapDiv {
  background-color: #fff;
}
</style>
