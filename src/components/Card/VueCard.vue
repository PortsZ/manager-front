<template>
  <div class="container-fluid mt-5 p-5">
    <div class="card">
      <div class="d-flex justify-content-center">
        <div class="card-header vueCardHeader shadow rounded bg-primary">
          <h2 class="text-white ">{{ cardTitle }}</h2>
          <div class="d-flex justify-content-between">
            <h4 class="text-white ">{{ subTitle }}</h4>
            <slot name="CardButton"></slot>
          </div>
        </div>
      </div>
      <div class="card-body bg-white">
        <slot name="CardBody"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import VueTable from '../Tables/VueTable';

export default {
	name: 'VueCard',
	components: {VueTable},
	props: ['cardTitle', 'subTitle'],

	data: () => {
		return {
			createNewObject: false,
			reloadTable: 0
		};
	},
};
</script>

<style scoped>
.vueCardHeader {
  width: 98%;
  margin-top: -15px;
  margin-bottom: 10px;
  padding: 10px;
}
</style>