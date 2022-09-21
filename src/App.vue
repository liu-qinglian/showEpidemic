<template>
  <div id="app">
    <!-- 显示内容 -->
    <img src="./assets/bj.png" alt="" class="bjpng" />
    <router-view />
    <!-- 导航栏 -->
    <div class="nav_router">
      <nav>
        <router-link class="link" to="/">国内疫情</router-link>
        <router-link class="link" to="/aboutWorld">国外疫情</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.bjpng {
  width: 100%;
  height: 50%;
  border-radius: 0.3rem;
}
.nav_router {
  position: fixed;
  width: 100%;
  height: 1.4rem;
  bottom: 0;
  left: 0;
  background: rgb(124, 207, 175);
}
nav {
  display: flex;
  width: 100%;
  text-align: center;
  line-height: 1.4rem;
}
.link {
  flex: 1;
  font-size: 0.6rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>
