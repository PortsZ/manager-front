<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can edit " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/VideoCards"> Back</router-link>
    </template>
    <template v-if="this.dataToSent" v-slot:CardBody>
        <video-card-form v-on:submitForm="editVideoCard($event)"></video-card-form>
    </template>
  </vue-card>
</template>

<script>
import VueCard from "@/components/Card/VueCard";
import {onMounted, reactive, toRefs} from "vue";
import api from "@/services/MinerManagerApi/VideoCardApi";
import {useRoute} from 'vue-router'
import alertMixins from "@/mixins/Alerts/AlertMixins";
import VideoCardForm from "@/pages/VideoCards/forms/VideoCardForm";

export default {
  name: "EditVideoCard",
  components: {VueCard, VideoCardForm},
  props: ['pageName'],
  setup() {

    const route = useRoute()

    const {id} = route.params

    const data = reactive({
      "id": null,
      "editData": null,
      "dataToSent": {
        videoCardName: null,
        algorithm: null,
        power: null,
      },
    })

    onMounted(async () => {
      const response = await api.GetVideoCard(id);
      data.editData = response.data.data
      for (const propertyEdit in data.editData) {
        for (const propertyData in data.dataToSent) {
          if (propertyEdit === propertyData) {
            data.dataToSent[propertyData] = data.editData[propertyEdit]
          }
        }
      }
      data.id = data.editData._id;
    })

    return {...toRefs(data)}
  },
  methods: {
    async editVideoCard(formData){
      try {
        const response = await api.UpdateVideoCard(this.id, formData);
        await alertMixins.successAlert(this.pageName + ' Edited');
      } catch (e) {
        await alertMixins.errorAlert();
      }
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css">

</style>