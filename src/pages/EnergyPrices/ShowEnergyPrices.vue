<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can view " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/EnergyPrices/create"> New</router-link>
    </template>
    <template v-slot:CardBody>
      <vue-table :table-data="this.tableData"
                 :table-structure="this.tableStructure"
                 edit-route="EditEnergyCost"
                 v-on:deleteObject="deleteObject($event)"></vue-table>
    </template>
  </vue-card>
</template>

<script>
import VueCard from '@/components/Card/VueCard';
import VueTable from '@/components/Tables/VueTable';
import {onMounted, reactive, toRefs} from 'vue';
import api from '@/services/MinerManager/EnergyPrice.js';
import alertMixins from '@/mixins/Alerts/AlertMixins';


export default {
	name: 'ShowEnergyPrices',
	components: {VueCard, VueTable},
	props: ['pageName'],

	setup() {
		const data = reactive({
			'tableData': null,
			'tableStructure': [
				{label: 'Name', info: 'companyName'},
				{label: 'Grupo', info: 'group'},
				{label: 'Mes', info: 'month'},
				{label: 'valueKWH', info: 'valueKWH'},
				{label: 'Bandeira', info: 'flagType'},
				{label: 'BandeiraKWH', info: 'valueKWHFlag'},
			]
		});

		onMounted(async () => {
			const response = await api.AllEnergyPrices();
			data.tableData = response.data;
		});

		return {...toRefs(data)};
	},

	methods: {
		async deleteObject(id) {
			try {
				await api.DeleteEnergyPrice(id);
				await this.updateTableData();
				await alertMixins.successAlert(this.pageName + ' Deleted');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		},

		async updateTableData() {
			const response = await api.AllEnergyPrices();
			this.tableData = response.data;
		}
	}

};
</script>

<style scoped>

</style>