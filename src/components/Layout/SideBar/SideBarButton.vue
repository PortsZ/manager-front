<template>
  <div class="table-hover container-fluid text-center">
    <router-link class=" btn bg-transparent" :to="this.path">
      <font-awesome-icon class="me-3 text-white align-middle" :icon="this.icon"/>
      <span class="text-white align-middle">{{this.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
	name: 'SideBarButton',
	props: {
		icon: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		path: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>

</style>