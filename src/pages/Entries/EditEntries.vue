<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can edit " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/Entries"> Back</router-link>
    </template>
    <template v-if="this.dataToSent" v-slot:CardBody>
      <form @submit.prevent>
        <div class="form-group mt-2">
          <div class="mb-2">
            <label> Name </label>
            <input v-model="this.dataToSent.name" type="text" class="form-control" placeholder="Enter a entry name">
          </div>
          <div class="mb-2">
            <label> Token genesis event platform</label>
            <input v-model="this.dataToSent.tge_platform" type="text" class="form-control"
                   placeholder="Enter a genesis event platform">
          </div>
          <div class="mb-2">
            <label> Listing platform</label>
            <input v-model="this.dataToSent.listing_platform" type="text" class="form-control"
                   placeholder="Enter a listing platform">
          </div>
          <div class="mb-2">
            <label> Information </label>
            <input v-model="this.dataToSent.info" type="text" class="form-control"
                   placeholder="Enter a information">
          </div>
          <div class="mb-2">
            <label> Our price </label>
            <input v-model="this.dataToSent.our_price" type="text" class="form-control"
                   placeholder="Enter a our price">
          </div>
          <div class="mb-2">
            <label> Sell price </label>
            <input v-model="this.dataToSent.sell_price" type="text" class="form-control"
                   placeholder="Enter a listing platform">
          </div>
          <div class="mb-2">
            <label> Listing date</label>
            <input v-model="this.dataToSent.listing_date" type="text" class="form-control"
                   placeholder="Enter a listing date">
          </div>
          <div class="mb-2">
            <label> Spent on IDO</label>
            <input v-model="this.dataToSent.spent_on_ido" type="text" class="form-control"
                   placeholder="Enter a spent on IDO">
          </div>
          <div class="mb-2">
            <label> Revenue</label>
            <input v-model="this.dataToSent.revenue" type="text" class="form-control"
                   placeholder="Enter a revenue">
          </div>
          <div class="mb-2">
            <label> In wallet</label>
            <input v-model="this.dataToSent.in_wallet" type="text" class="form-control"
                   placeholder="Enter a in wallet">
          </div>
          <div class="mb-2">
            <label> Quantity sold </label>
            <input v-model="this.dataToSent.qty_sell" type="text" class="form-control"
                   placeholder="Enter a quantity sold">
          </div>
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
// import alertMixins from '@/mixins/Alerts/AlertMixins';

export default {
	name: 'EditEntries',
	components: {VueCard},
	props: ['pageName'],
	setup() {

		const route = useRoute();

		const {id} = route.params;

		const data = reactive({
			'id': null,
			'editData': null,
			'dataToSent': {
				name: null,
				tge_platform: null,
				listing_platform: null,
				info: null,
				our_price: null,
				sell_price: null,
				listing_date: null,
				spent_on_ido: null,
				revenue: null,
				in_wallet: null,
				qty_sell: null,
			},
		});

		onMounted(async () => {
			data.id = id;
			const response = await api.GetEntry(id);
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
	// methods: {
	// 	async update() {
	// 		try {
	// 			await api.UpdateEnergyPrice(this.id, this.dataToSent);
	// 			await alertMixins.successAlert(this.pageName + ' Edited');
	// 		} catch (e) {
	// 			await alertMixins.errorAlert();
	// 		}
	// 	}
	// }
};
</script>

<style scoped>

</style>