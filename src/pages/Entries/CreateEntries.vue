<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can create " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/Entries"> Back</router-link>
    </template>
    <template v-slot:CardBody>
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
        <button v-on:click="CreateEntry" class="btn btn-primary mt-3">Create</button>
      </form>
    </template>
  </vue-card>

</template>

<script>
import VueCard from '@/components/Card/VueCard';
import api from '@/services/Cryptech/Entries';
import alertMixins from '@/mixins/Alerts/AlertMixins';

export default {
	name: 'CreateEnergyPrice',
	components: {VueCard},
	props: ['pageName'],
	data() {
		return {
			dataToSent: {
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
		};
	},
	methods: {
		CreateEntry: async function () {
			try {
				const dataFiltered = Object.fromEntries(Object.entries(this.dataToSent).filter(([_, v]) => v != null));
				await api.CreateEntry(dataFiltered);
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