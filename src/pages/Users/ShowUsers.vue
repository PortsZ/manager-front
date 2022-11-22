<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can view " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/VideoCards/create"> New</router-link>
    </template>
    <template v-slot:CardBody>
      <vue-table :table-data="this.tableData"
                 :table-structure="this.tableStructure"
                 edit-route="EditVideoCard"
                 v-on:deleteObject="deleteObject($event)"></vue-table>
    </template>
  </vue-card>
</template>

<script>
import VueCard from '@/components/Card/VueCard';
import VueTable from '@/components/Tables/VueTable';
import {onMounted, reactive, toRefs} from 'vue';
import alertMixins from '@/mixins/Alerts/AlertMixins';
import api from '@/services/MinerManager/User';

export default {
	name: 'ShowUsers',
	props: ['pageName'],
	components: {
		VueTable,
		VueCard
	},
	setup() {
		const data = reactive({
			'tableData': null,
			'tableStructure': [
				{label: 'Username', info: 'username'},
			]
		});

		onMounted(async () => {
			const response = await api.AllUsers();
			// let date = response.data[0]['created_at'];
			// console.log(date.toLocaleString());
			data.tableData = response.data;
		});

		return {...toRefs(data)};
	},
	methods: {
		async deleteObject(id) {
			try {
				// await api.DeleteEnergyPrice(id);
				// await this.updateTableData();
				// await alertMixins.successAlert(this.pageName + ' Deleted');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		},

		async updateTableData() {
			// const response = await api.AllEnergyPrices();
			// this.tableData = response.data;
		}
	}
};
</script>

<style scoped>

</style>