<template>
  <vue-card :cardTitle="this.pageName" :sub-title='"Here you can view " + this.pageName'>
    <template v-slot:CardBody>
<!--      <label> Company name </label>-->
<!--      <input type="text" class="form-control"-->
<!--             placeholder="Enter a company name">-->
    </template>
  </vue-card>
</template>

<script>
import VueCard from "@/components/Card/VueCard";
import VueTable from "@/components/Tables/VueTable";
import EnergyCostForm from "@/pages/EnergyCosts/forms/EnergyCostForm";

export default {
  name: "EnergyCosts",
  components: {VueCard, VueTable},
  props: ['pageName'],

}
</script>

<style scoped>

</style>