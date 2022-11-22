<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can view " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/Entries/create"> New</router-link>
    </template>
    <template v-slot:CardBody>
      <vue-table :table-data="this.tableData"
                 :table-structure="this.tableStructure"
                 edit-route="EditEntries"
                 v-on:deleteObject="deleteObject($event)"></vue-table>
    </template>
  </vue-card>
</template>

<script>
import VueCard from '@/components/Card/VueCard';
import VueTable from '@/components/Tables/VueTable';
import {onMounted, reactive, toRefs} from 'vue';
import api from '@/services/Cryptech/Entries';
import alertMixins from '@/mixins/Alerts/AlertMixins';


export default {
	name: 'ShowEntries',
	components: {VueCard, VueTable},
	props: ['pageName'],

	setup() {
		const data = reactive({
			'tableData': null,
			'tableStructure': [
				{label: 'Roi', info: 'sold_roi'},
				{label: 'Name', info: 'name'},
				{label: 'TGE platform', info: 'tge_platform'},
				{label: 'LTS platform', info: 'listing_platform'},
				{label: 'QTY bought', info: 'qty_bought'},
			]
		});

		onMounted(async () => {
			const response = await api.AllEntries();
			response.data.map((obj)=>{
				obj.sold_roi = Number(obj.sold_roi).toFixed(2);
			});
			data.tableData = response.data;
		});

		return {...toRefs(data)};
	},

	methods: {
		async deleteObject(id) {
			try {
				await api.DeleteEntry(id);
				await this.updateTableData();
				await alertMixins.successAlert(this.pageName + ' Deleted');
			} catch (e) {
				await alertMixins.errorAlert();
			}
		},

		async updateTableData() {
			const response = await api.AllEntries();
			response.data.map((obj)=>{
				obj.sold_roi = Number(obj.sold_roi).toFixed(2);
			});
			this.tableData = response.data;
		}
	}

};
</script>

<style scoped>

</style>