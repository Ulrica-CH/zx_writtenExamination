<template>
  <div class="contentWrap">
    <titlel />
    <login />
  </div>
</template>

<script>
import Titlel from "./c-cpns/Title.vue";
import Login from "./c-cpns/Login.vue";
export default {
  name: "Home",
  components: { Login, Titlel },
};
</script>

<style scoped lang="less">
.contentWrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: black;
}
</style>
