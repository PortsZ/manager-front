<template>
  <form @submit.prevent>
    <div class="form-group mt-2">
      <label> Video Card name </label>
      <Multiselect
          v-model="videoCardName"
          :options="videoCardNames"
          placeholder="Choose a Video Card name"
      />
      <label class="mt-2"> Manufacturer </label>
      <Multiselect
          v-model="manufacturer"
          :options="manufacturers"
          placeholder="Choose the Manufacturer"
      />
      <label class="mt-2"> Algorithm </label>
      <Multiselect
          ref="multiselect"
          v-model="algorithms"
          :options="allAlgorithms"
          mode="multiple"
          placeholder="Choose the algorithms"
      />
      <div v-for="alg in algorithms" class="row">
        <div class="col-4">
          <label class="mt-2"> {{ alg.name }} </label>
          <input v-model="alg.power" type="number" class="form-control" placeholder="Insert the power consumption">
        </div>
      </div>
    </div>
  </form>
  <button v-on:click="SubmitForm" class="btn btn-primary mt-3">Create</button>
</template>

<script>
import {onMounted, reactive, ref, toRefs} from 'vue';
import Multiselect from '@vueform/multiselect';
import videoCardApi from '@/services/MinerManagerApi/VideoCardApi';
import algorithmToMineApi from '@/services/MinerManagerApi/AlgorithmsToMine';
import {useRoute} from 'vue-router';

export default {
	name: 'VideoCardForm',
	components: {Multiselect},
	emits: ['submitForm'],
	setup() {

		const route = useRoute();

		// get id from route
		const {id} = route.params;

		// ref to the multiselect component
		const multiselect = ref(null);


		const data = reactive({
			'videoCardName': '',
			'videoCardNames': ['RTX 3070 TI', 'RTX 2060'],
			'manufacturer': '',
			'manufacturers': ['Nvidia', 'Amd', 'Intel'],
			'algorithms': [],
			'allAlgorithms': [],
			'formData': [],
		});

		onMounted(async () => {

			// if route has id is a edit form
			if (id) {

				// call the api to get all video cards
				const response = await videoCardApi.GetVideoCard(id);

				let editData = response.data.data;
				data.videoCardName = editData.name;
				data.manufacturer = editData.manufacturer;

				// call an api to get all algorithms to mine that exist
				const response2 = await algorithmToMineApi.AllAlgorithmsToMine();

				// save all algorithms as a selection option for the multiselect
				data.allAlgorithms = response2.data.data.map(function (val) {
					return {value: {name: val.name, power: ''}, label: val.name};
				});

				// set the algorithms that already exist as choose option
				for (let i = 0; i < editData.algorithms.length; i++) {
					for (let j = 0; j < data.allAlgorithms.length; j++) {
						if (editData.algorithms[i].name === data.allAlgorithms[j].value.name) {
							data.allAlgorithms[j].value.power = editData.algorithms[i].power;
							multiselect._value.select(data.allAlgorithms[j]);
							break;
						}
					}
				}

			} else {

				const response2 = await algorithmToMineApi.AllAlgorithmsToMine();

				data.allAlgorithms = response2.data.data.map(function (val) {
					return {value: {name: val.name, power: ''}, label: val.name};
				});

			}

		});

		return {...toRefs(data), multiselect};
	},
	methods: {
		SubmitForm() {
			// send back the data from form already formatted to send
			this.$emit('submitForm', {
				name: this.videoCardName,
				manufacturer: this.manufacturer,
				algorithms: this.algorithms
			});
		},
	}
};
</script>

<style scoped>

</style>