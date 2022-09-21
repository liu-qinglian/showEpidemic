<template>
  <div class="quick_report">
    <div class="title">疫情速报</div>
    <div class="tell">
      该数据为31省（自治区、直辖市）本土新增，及港澳台新增确诊数据
    </div>
    <div class="region_infomation">
      <el-table
        :data="chinaCitys"
        class="region_table"
        style="width: 90%"
        :cell-style="columnStyle"
        max-height="345"
        stripe
      >
        <!-- :default-sort="{ prop: 'date', order: 'descending' }"   row-click-->

        <el-table-column prop="city" label="地区"> </el-table-column>
        <!-- <a href="#/cityShow/:city"></a> -->
        <el-table-column
          prop="confirmAdd"
          label="新增确诊"
          sortable
          width="100rem"
        ></el-table-column>
        <el-table-column
          prop="nowConfirm"
          label="现有确诊"
          sortable
          width="100rem"
        ></el-table-column>
        <el-table-column prop="province" label="所在省" :formatter="formatter">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "../../path/api";
export default {
  name: "quickReport",
  data() {
    return {
      chinaCitys: [
        {
          // city: "11",
        },
      ],
    };
  },
  methods: {
    formatter(row, column) {
      return row.province;
    },
    columnStyle({ row, column, rowIndex, columnIndex }) {
      //注意：第一行的索引为0
      if (columnIndex === 0) {
        //如果有多个css样式，使用;隔开
        return "color: rgb(22, 207, 207);font-weight: bolder;  ";
      }
      if (columnIndex === 3) {
        //如果有多个css样式，使用;隔开
        return "color: rgb(46, 46, 46);font-weight: bold;  ";
      }
    },
  },
  mounted() {
    api.getChinaData().then((res) => {
      let chinaCitys = res.data.data.statisGradeCityDetail; //中国各地区数据
      console.log("chinaCitys", chinaCitys);
      this.chinaCitys = chinaCitys;
    });
  },
};
</script>

<style scoped>
.title {
  font-size: 0.6rem;
}
.tell {
  font-size: 0.4rem;
  color: #aaa;
  margin-left: 0;
}
.region_table {
  margin: 0.3rem auto 0.5rem;
  font-size: 0.55rem;
}
</style>