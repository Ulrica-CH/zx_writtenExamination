<template>
  <div class="">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import { xData, yData } from "@/common/constant";
export default {
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("main"), "dark");
    var option = {
      title: {
        text: "Demo",
      },
      legend: {
        data: ["Demo"],
      },
      tooltip: { show: true },
      xAxis: {
        data: xData,
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: yData,
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped></style>
