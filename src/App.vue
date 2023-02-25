<template>
  <div>
    <home />
    <tree />
    <echarts />
  </div>
</template>

<script>
import Home from "@/views/Home";
import Tree from "@/components/Tree";
import Echarts from "@/components/Echarts";
export default {
  components: { Home, Tree, Echarts },
};
</script>

<style scoped lang="less"></style>
