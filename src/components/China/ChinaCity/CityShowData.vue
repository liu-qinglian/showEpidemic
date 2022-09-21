<template>
  <div class="cshow_data">
    <div class="table">
      <ul v-if="chinaCitys != null && chinaCitys != {}">
        <li>
          <div class="show_title">今日确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(chinaCitys[city].today.confirm)"
          >
            {{ chinaCitys[city].today.confirm }}
          </div>
        </li>
        <li>
          <div class="show_title">现有确诊</div>
          <div
            class="show_data"
            v-bind:style="
              numberColor(
                this.chinaCitys[city].today.confirm +
                  this.chinaCitys[city].today.storeConfirm
              )
            "
          >
            {{
              this.chinaCitys[city].today.confirm +
              this.chinaCitys[city].today.storeConfirm
            }}
          </div>
        </li>
        <li>
          <div class="show_title">今日死亡</div>
          <div
            class="show_data"
            v-bind:style="numberColor(chinaCitys[city].today.dead)"
          >
            {{ chinaCitys[city].today.dead }}
          </div>
        </li>
        <li>
          <div class="show_title">累计确诊</div>
          <div
            class="show_data"
            v-bind:style="numberColor(chinaCitys[city].total.confirm)"
          >
            {{ chinaCitys[city].total.confirm }}
          </div>
        </li>

        <li>
          <div class="show_title">累计治愈</div>
          <div
            class="show_data"
            v-bind:style="numberColor(chinaCitys[city].total.heal)"
          >
            {{ chinaCitys[city].total.heal }}
          </div>
        </li>

        <li>
          <div class="show_title">累计死亡</div>
          <div
            class="show_data"
            v-bind:style="numberColor(chinaCitys[city].total.dead)"
          >
            {{ chinaCitys[city].total.dead }}
          </div>
        </li>
      </ul>
    </div>

    <div class="statistical_time">
      <!-- 截止{{ chinaCitys.extData.lastUpdateTime | dateFormat }}全国数据统计 -->
    </div>
    <!-- 这个实际已经进来了，就是在created的时候输出，父组件数据还没进入子组件，所以会空之前 -->
  </div>
</template>
<script>
import api from "../../../path/api";
export default {
  name: "cityShowData",
  props: ["city"],
  data() {
    return {
      chinaCitys: null,
    };
  },

  mounted() {
    api.getChinaCityData().then((res) => {
      let chinaCitys = res.data.data.areaTree[2].children; //中国各地区数据
      console.log("chinaCitys", chinaCitys);
      //   this.chinaCitys = chinaCitys;
      let _chinaCitys = {};
      for (let i = 0; i < chinaCitys.length; i++) {
        // 拿到数组里面的数据   in的话是下标，重复了呀那老师阿朱哪里
        for (var item of chinaCitys) {
          _chinaCitys[item.name] = item;
        }
      }
      //   console.log(_chinaCitys);
      this.chinaCitys = _chinaCitys;
      console.log(this.chinaCitys);
      //   console.log(this.chinaCitys[this.city].today.confirm);
    });
  },

  computed: {
    numberColor() {
      return function (number) {
        // console.log(typeof number);
        if (typeof number != "string") {
          return number;
        }
        // 复制都不好好复制，都复制歪来
        // 这个啥意思呀
        let color;
        // console.log(number.replace(/,/g, ""));
        number = number.replace(/,/g, ""); //把所有,换成空字符就可以用来比较了
        if (number < 10) {
          color = "rgb(6, 228, 91)";
        } else if (number < 100) {
          color = " rgb(260, 226, 47)";
        } else if (number < 1000) {
          color = " rgb(224, 173, 2)";
        } else if (number < 10000) {
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

<style>
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