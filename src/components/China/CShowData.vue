<template>
  <div class="cshow_data">
    <div class="title">国内疫情</div>
    <div class="table">
      <ul>
        <li>
          <div class="show_title">新增确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.currentConfirmedIncr)"
          >
            {{ covData.currentConfirmedIncr }}
          </div>
        </li>

        <li>
          <div class="show_title">新增境外</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.suspectedIncr)"
          >
            {{ covData.suspectedIncr }}
          </div>
        </li>

        <li>
          <div class="show_title">现有确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.currentConfirmedCount)"
          >
            {{ covData.currentConfirmedCount }}
          </div>
        </li>

        <li>
          <div class="show_title">现有无症状</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.seriousCount)"
          >
            {{ covData.seriousCount }}
          </div>
        </li>

        <li>
          <div class="show_title">累计确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.confirmedCount)"
          >
            {{ covData.confirmedCount }}
          </div>
          <div class="from_yesterday">
            较昨日<span>+{{ covData.confirmedIncr }}</span>
          </div>
        </li>
        <li>
          <div class="show_title">累计境外</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.suspectedCount)"
          >
            {{ covData.suspectedCount }}
          </div>
          <div class="from_yesterday">
            较昨日<span>+{{ covData.yesterdaySuspectedCountIncr }}</span>
          </div>
        </li>
        <!-- <li>
          <div class="show_title">累计境外</div>
          <div class=" show_data"  v-bind:style="numberColor">{{ covData.suspectedCount }}</div>
          <div class="from_yesterday">较昨日<span>+123</span></div>
        </li> -->
        <li>
          <div class="show_title">累计治愈</div>
          <div class="show_data" v-bind:style="numberColor(covData.curedCount)">
            {{ covData.curedCount }}
          </div>
          <div class="from_yesterday">
            较昨日<span>+{{ covData.curedIncr }}</span>
          </div>
        </li>
        <li>
          <div class="show_title">累计死亡</div>
          <div class="show_data" v-bind:style="numberColor(covData.deadCount)">
            {{ covData.deadCount }}
          </div>
          <div class="from_yesterday">
            较昨日<span>+{{ covData.deadIncr }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="statistical_time">
      截止{{ modifyTime | dateFormat }}全国数据统计
    </div>
    <!-- 这个实际已经进来了，就是在created的时候输出，父组件数据还没进入子组件，所以会空之前 -->
  </div>
  <!-- 让页面等数据-->
</template>

<script>
export default {
  name: "cshowData",
  // 这个里面的数据可以直接当data用
  props: ["covData", "modifyTime"], //就是这个enn
  //
  data() {
    return {
      // 看这里
      // covData:{
      //   deadCount:",
      //   curedCount:"
      // },
      data: this.covData,
      // number: 0,、
      // confirmedCount: this.data.desc.confirmedCount,
      // showData:[result.decs.confirmedCount
    };
  },
  computed: {
    // 对数值的大小改变颜色
    numberColor() {
      return function (number) {
        // console.log(typeof number);
        if (typeof number != "string") {
          return number;
        }

        let color;
        // console.log(number.replace(/,/g, ""));
        number = number.replace(/,/g, ""); //把所有,换成空字符就可以用来比较了
        if (number < 10) {
          color = "rgb(6, 228, 91)";
        } else if (number < 1000) {
          color = " rgb(260, 226, 47)";
        } else if (number < 10000) {
          color = " rgb(224, 173, 2)";
        } else if (number < 100000) {
          color = " rgb(240, 101, 9)";
        } else {
          color = "rgb(219, 50, 50)";
        }
        return "color:" + color;
      };
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 0.6rem;
}
.table ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0.375rem auto;
}
.table ul li {
  width: 25%;
  display: flex;
  text-align: center;
  flex-direction: column;
}
.table ul li .show_title {
  font-size: 0.5rem;
  color: rgb(22, 22, 22);
}
.table ul li .show_data {
  font-size: 0.6rem;
  font-weight: bold;
  color: rgb(204, 133, 26);
}
.from_yesterday {
  font-size: 0.4rem;
  color: #aaa;
  margin-top: -0.1rem;
}
.statistical_time {
  font-size: 0.4rem;
  color: #aaa;
  margin: 0.3125rem 0;
}
</style>