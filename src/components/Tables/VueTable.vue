<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th  v-for="(title, index) in tableStructure"  :class="columnFormat(index)" scope="col">{{ title.label }}</th>
      <th scope="col">
        <div class="text-end">Actions</div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-if='tableData' v-for="content in tableData">
      <td v-for="(value,index) in tableStructure" :class="columnFormat(index)">{{ content[value.info] }}</td>
      <td>
        <div class="text-end">
          <router-link class="me-2" :to="{ name: editRoute, params: { id: content.id }}">
            <font-awesome-icon class="text-success" icon="edit"/>
          </router-link>
          <a @click="showAlert(content.id)" class="clickable me-2">
            <font-awesome-icon class="text-danger" icon="trash-alt"/>
          </a>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

export default {
	name: 'VueTable',
	props: ['tableData', 'tableStructure', 'editRoute'],

	methods: {
		columnFormat(index) {
			let formats = ['text-left', 'text-center'];
			switch (index) {
			case 0:
				return formats[0];
			default:
				return formats[1];
			}
		},
		async showAlert(id) {
			const CustomAlertBoostrap = this.$swal.mixin({
				customClass: {
					confirmButton: 'me-4 btn btn-danger',
					cancelButton: 'btn btn-primary'
				},
				buttonsStyling: false
			});
			await CustomAlertBoostrap.fire({
				title: 'Are you sure?',
				text: 'You won\'t be able to revert this!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.isConfirmed) {
					this.$emit('deleteObject', id);
				}
			});
		},
	}
};
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>