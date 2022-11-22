<template>
  <div class="mt-5 p-5">
    <div class="row">
      <div class="col-3">
        <vue-dash-board-card>
          <template v-slot:CardBody>
            <span>200.000,00</span>
          </template>
        </vue-dash-board-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueDashBoardCard from '@/components/Card/VueDashBoardCard';

export default {
	name: 'DashBoard',
	components: {VueDashBoardCard}
};
</script>

<style scoped>

</style>