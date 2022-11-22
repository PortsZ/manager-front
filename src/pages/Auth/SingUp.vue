<template>
  <div class="card">
    <div class="card-header bg-primary">
      <h4 class="text-white">Join Us</h4>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input v-model="username" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm password</label>
          <input v-model="confirmPassword" type="password" class="form-control">
        </div>
        <button v-on:click="SubmitForm" class="btn btn-primary">SingIn</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
	name: 'SingUp',
	data: ()=>{
		return {
			username: '',
			password: '',
			confirmPassword: ''
		};
	},
	methods: {
		SubmitForm() {
			this.$emit('submitForm', {
				type: 'singUp',
				username: this.username,
				password: this.password,
			});
		},
	}
};
</script>

<style scoped>
.asText {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
}
</style>