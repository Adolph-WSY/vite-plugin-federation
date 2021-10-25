<template id="app">
  <h1>Hello App! This is router-host</h1>
  <router-remote-element-plus/>
  <div>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home |</router-link>
      <router-link to="/router-remote-element-plus"> Go to About |</router-link>

    </p>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

</script>
<style scoped>
</style>
