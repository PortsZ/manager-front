<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can create " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/EnergyPrices"> Back</router-link>
    </template>
    <template v-slot:CardBody>
      <form @submit.prevent>
        <div class="form-group mt-2">
          <label> Company name </label>
          <input v-model="this.dataToSent.companyName" type="text" class="form-control" placeholder="Enter a company name">
          <label class="mt-2"> Group </label>
          <input v-model="this.dataToSent.group" type="text" class="form-control" placeholder="Enter a group">
          <label class="mt-2"> Month </label>
          <input v-model="this.dataToSent.month" type="text" class="form-control" placeholder="Enter a company name">
          <label class="mt-2"> KHW </label>
          <input v-model="this.dataToSent.valueKWH" type="text" class="form-control" placeholder="Enter a value KHW">
          <label class="mt-2"> Flag Type </label>
          <input v-model="this.dataToSent.flagType" type="text" class="form-control" placeholder="Enter a flag type">
          <label class="mt-2"> Value KHW Flag </label>
          <input v-model="this.dataToSent.valueKWHFlag" type="text" class="form-control" placeholder="Enter a value KHW Flag">
        </div>
        <button v-on:click="CreateEnergyPrice" class="btn btn-primary mt-3">Create</button>
      </form>
    </template>
  </vue-card>

</template>

<script>
import VueCard from '@/components/Card/VueCard';
import api from '@/services/MinerManager/EnergyPrice';
import alertMixins from '@/mixins/Alerts/AlertMixins';

export default {
	name: 'CreateEnergyPrice',
	components: {VueCard},
	props: ['pageName'],
	data() {
		return {
			dataToSent: {
				companyName: null,
				group: null,
				month: null,
				valueKWH: null,
				flagType: null,
				valueKWHFlag: null,
			},
		};
	},
	methods: {
		CreateEnergyPrice: async function () {
			try {
				await api.CreateEnergyPrice(this.dataToSent);
				await alertMixins.successAlert(this.pageName + ' Created');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		}
	}
};
</script>

<style scoped>

</style>