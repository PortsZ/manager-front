<template>
  <div class="sidenav bg-primary">
    <div class="text-center text-white">
      <h2 class="m-1">APP</h2>
      <hr class=" bg-white">
    </div>
    <side-bar-button path="/" text="dashboard" icon="home"></side-bar-button>
    <side-bar-button path="/Entries" text="Entries" icon="dollar-sign"></side-bar-button>
<!--    <side-bar-button path="/EnergyCosts" text="Energy Costs" icon="dollar-sign"></side-bar-button>-->
<!--    <side-bar-button path="/EnergyPrices" text="Energy Prices" icon="bolt"></side-bar-button>-->
<!--    <side-bar-button path="/VideoCards" text="Video Cards" icon="cog"></side-bar-button>-->
<!--    <side-bar-button text="Users" path="/Users" icon="user"></side-bar-button>-->
  </div>
</template>

<script>
import SideBarButton from './SideBarButton.vue';
export default {
	name: 'VueSideBar',
	components: {
		SideBarButton
	}
};
</script>

<style scoped>
.sidenav {
  width: 260px;
  height: 100%;
  position: fixed;
  z-index: 1;
  box-shadow: 0 0 10px black;
  background: url('../../../assets/images/sidebar_4.jpg');
  background-size: cover;
  backdrop-filter: brightness(0.2);
}
</style>