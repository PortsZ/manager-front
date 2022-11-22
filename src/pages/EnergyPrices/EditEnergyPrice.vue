<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can edit " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/EnergyPrices"> Back</router-link>
    </template>
    <template v-if="this.dataToSent" v-slot:CardBody>
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
        <button v-on:click="update" class="btn btn-primary mt-3">Update</button>
      </form>
    </template>
  </vue-card>
</template>

<script>
import VueCard from '@/components/Card/VueCard';
import {onMounted, reactive, toRefs} from 'vue';
import api from '@/services/Cryptech/Entries';
import {useRoute} from 'vue-router';
import alertMixins from '@/mixins/Alerts/AlertMixins';

export default {
	name: 'EditEnergyPrice',
	components: {VueCard},
	props: ['pageName'],
	setup() {

		const route = useRoute();

		const {id} = route.params;

		const data = reactive({
			'id': null,
			'editData': null,
			'dataToSent': {
				companyName: null,
				group: null,
				month: null,
				valueKWH: null,
				flagType: null,
				valueKWHFlag: null,
			},
		});

		onMounted(async () => {
			data.id = id;
			const response = await api.GetEnergyPrice(id);
			data.editData = response.data;
			for (const propertyEdit in data.editData) {
				for (const propertyData in data.dataToSent) {
					if (propertyEdit === propertyData) {
						data.dataToSent[propertyData] = data.editData[propertyEdit];
					}
				}
			}
		});

		return {...toRefs(data)};
	},
	methods: {
		async update() {
			try {
				await api.UpdateEntry(this.id, this.dataToSent);
				await alertMixins.successAlert(this.pageName + ' Edited');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		}
	}
};
</script>

<style scoped>

</style>