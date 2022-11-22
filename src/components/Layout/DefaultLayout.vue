<template>
  <vue-side-bar></vue-side-bar>
  <div id="layout">
    <vue-nav-bar></vue-nav-bar>
    <router-view/>
  </div>
</template>

<script>

import VueNavBar from "@/components/Layout/VueNavBar";
import VueSideBar from "@/components/Layout/SideBar/VueSideBar";

export default {
  name: "DefaultLayout",
  components: {VueSideBar, VueNavBar},
}
</script>

<style scoped>
#layout {
  margin-left: 260px;
}

</style>