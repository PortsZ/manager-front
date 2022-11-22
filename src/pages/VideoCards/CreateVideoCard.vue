<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can create " + this.pageName'>
    <template v-slot:CardButton>
      <router-link class="btn btn-secondary" to="/VideoCards"> Back</router-link>
    </template>
    <template v-slot:CardBody>
        <video-card-form v-on:submitForm="CreateVideoCard($event)"></video-card-form>
    </template>
  </vue-card>
</template>

<script>
import VueCard from "@/components/Card/VueCard";
import api from "@/services/MinerManagerApi/VideoCardApi";
import alertMixins from "@/mixins/Alerts/AlertMixins";
import VideoCardForm from "@/pages/VideoCards/forms/VideoCardForm";

export default {
  name: "CreateVideoCards",
  components: {VideoCardForm, VueCard},
  props: ['pageName'],
  methods: {
    CreateVideoCard: async function (dataToSent) {
      try {
        const response = await api.CreateVideoCard(dataToSent);
        await alertMixins.successAlert(this.pageName +' Created');
      } catch (e) {
        await alertMixins.errorAlert();
      }
    },
  }
}
</script>

<style scoped>

</style>