<template>
  <nav class="navbar ">
    <div class="container-fluid">
      <div class="navbar-brand">Page type</div>
      <div class="d-flex align-content-end">
        <a class="nav-item nav-link">
          <font-awesome-icon icon="home"/>
        </a>
        <a class="nav-item
         nav-link">
          <font-awesome-icon icon="bell"/>
        </a>
        <a v-on:click="logOut" class="nav-item nav-link">
          <font-awesome-icon icon="user"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import store from "@/store/index"

export default {
  name: "VueNavBar",
  methods: {
    logOut(){
      store.commit('SET_AUTH', false);
      this.$router.go();
    }
  }
}
</script>

<style scoped>

</style>