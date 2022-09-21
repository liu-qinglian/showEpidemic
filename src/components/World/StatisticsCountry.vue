<template>
  <div class="statistics_country">
    <div class="title">国外各国家疫情统计汇总</div>
    <div class="tell">7:00-10:00为更新高峰，数据若滞后敬请谅解</div>
    <div class="country_infomation">
      <el-table
        :data="countryData"
        class="country_table"
        style="width: 95%"
        :cell-style="columnStyle"
        max-height="345"
        stripe
      >
        <!-- :default-sort="{ prop: 'date', order: 'descending' }"   row-click-->

        <el-table-column prop="provinceName" label="地区"> </el-table-column>
        <el-table-column
          prop="curedCount"
          label="治愈"
          sortable
        ></el-table-column>
        <el-table-column
          prop="currentConfirmedCount"
          label="现有确诊"
          sortable
          width="100rem"
        ></el-table-column>
        <el-table-column prop="deadCount" label="死亡" sortable>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "../../path/api";
export default {
  name: "statisticsCountry",
  data() {
    return {
      countryData: [
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
    },
  },
  mounted() {
    api.getWholeWorldDataTest().then((res) => {
      let countryData = res.data.newslist;
      console.log("countryData", countryData);
      this.countryData = countryData;
    });

    // let _countryDatas = {};
    // Object.keys(this.countryData).forEach((key) => {
    //   //     // 装箱 this.result[key]根据key值拿到里面的小东西
    //   _countryDatas[key] = this.countryData[key].toLocaleString();
    // });
    // this.countryData = _countryDatas;
  },
};
</script>

<style>
.title {
  font-size: 0.6rem;
}
.tell {
  font-size: 0.4rem;
  color: #aaa;
  margin-left: 0;
}
.country_table {
  margin: 0.3rem auto 0.5rem;
  font-size: 0.55rem;
}
</style>