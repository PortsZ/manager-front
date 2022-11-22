<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can show " + this.pageName'>
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
import api from '@/services/MinerManagerApi/VideoCardApi';
import alertMixins from '@/mixins/Alerts/AlertMixins';

export default {
	name: 'ShowVideoCards',
	components: {VueCard, VueTable},
	props: ['pageName'],

	setup() {

		const data = reactive({
			'tableData': null,
			'tableStructure': [
				{label: 'Name', info: 'name'},
				{label: 'Algoritmos', info: 'algorithms'},
			]
		});

		onMounted(async () => {
			const response = await api.AllVideoCards();
			data.tableData = response.data.data;
			for (const pos in data.tableData) {
				data.tableData[pos].algorithms = data.tableData[pos].algorithms.map(val => val.name);
			}
		});

		return {...toRefs(data)};
	},

	methods: {
		async deleteObject(id) {
			try {
				const response = await api.DeleteVideoCard(id);
				await this.updateTableData();
				await alertMixins.successAlert( this.pageName + ' Deleted');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		},

		async updateTableData() {
			const response = await api.AllVideoCards();
			let resData = response.data.data;
			for (const pos in resData) {
				resData[pos].algorithms = resData[pos].algorithms.map(val => val.name);
			}
			this.tableData = resData;
		}
	}

};
</script>

<style scoped>

</style>