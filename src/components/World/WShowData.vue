<template>
  <div class="show_data">
    <div class="title">国外疫情</div>
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
          <div class="show_title">新增死亡</div>
          <div class="show_data" v-bind:style="numberColor(covData.deadIncr)">
            {{ covData.deadIncr }}
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
          <div class="show_title">累计确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(covData.confirmedCount)"
          >
            {{ covData.confirmedCount }}
          </div>
          <!-- <div class="from_yesterday">
            较昨日<span>+{{ covData.confirmedIncr }}</span>
          </div> -->
        </li>

        <li>
          <div class="show_title">累计死亡</div>
          <div class="show_data" v-bind:style="numberColor(covData.deadCount)">
            {{ covData.deadCount }}
          </div>
          <!-- <div class="from_yesterday">
            较昨日<span>+{{ covData.deadIncr }}</span>
          </div> -->
        </li>
        <li>
          <div class="show_title">累计治愈</div>
          <div class="show_data" v-bind:style="numberColor(covData.curedCount)">
            {{ covData.curedCount }}
          </div>
          <!-- <div class="from_yesterday">
            较昨日<span>+{{ covData.curedIncr }}</span>
          </div> -->
        </li>
      </ul>
    </div>
    <div class="statistical_time">
      截止{{ modifyTime | dateFormat }}全国数据统计
    </div>
  </div>
</template>

<script>
export default {
  name: "wShowData",
  props: ["covData", "modifyTime"],

  data() {
    return {
      data: this.covData,
    };
  },
  computed: {
    numberColor() {
      return function (number) {
        // console.log(typeof number);
        //因为字符串才有replace方法（如果不是字符串就不能用）
        if (typeof number == "string") {
          number = Number(number.replace(/,/g, ""));
        }

        // 这个啥意思呀

        let color;
        if (number < 10) {
          color = "rgb(6, 228, 91)";
        } else if (number < 1000) {
          color = " rgb(230, 226, 47)";
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
  width: 33.3%;
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