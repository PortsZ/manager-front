<template>
  <div class="card">
    <div class="card-header text-center bg-success vueCardHeader">
          <font-awesome-icon class="text-white fa-2x" icon="dollar-sign"></font-awesome-icon>
    </div>
    <div class="card-body bg-white">
      <slot name="CardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'VueDashBoardCard'
};
</script>

<style scoped>
.vueCardHeader {
  padding: 20px;
  width: 120px;
  margin-top: -20px;
  margin-left: 15px;
  margin-bottom: 10px;
}
</style>