<template>
  <div class="row justify-content-center">

    <div class="col-7 card cardBorder">

      <div class="header">
        <h4 class="headerText">Welcome Back</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent >
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input v-model="username" class="form-control" :class="{'is-invalid': v$.username.$error, 'is-valid':v$.username.$error}">
            <div class="invalid-feedback">
              <span v-if="v$.username.$error" >{{ v$.username.$errors[0].$message }}</span>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" class="form-control"  type="password" :class="{'is-invalid': v$.password.$error, 'is-valid':v$.password.$error}">
            <div class="invalid-feedback">
              <span v-if="v$.password.$error" >{{ v$.password.$errors[0].$message }}</span>
            </div>
            <button class="asText link-primary">Forgot password?</button>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button v-on:click="SubmitForm" class="signInBtn">Sing In</button>
        </form>
        <div class="mt-3">
          <div class="text-center">
            <label class="pe-2">Not a member?</label>
            <router-link to="/Auth/SingUp">
              <button class="asText link-primary">Signup now</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    

  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
	name: 'SingIn',
	setup () {
		return { v$: useVuelidate() };
	},
	data: () => {
		return {
			username: '',
			password: '',
		};
	},
	validations () {
		return {
			username: { required },
			password: { required }
		};
	},
	methods: {
		SubmitForm() {
			this.v$.$validate();
			if (!this.v$.$error) {
				this.$emit('submitForm',{
					type: 'singIn',
					username: this.username,
					password: this.password,
				});
			} else {
        
			}
		},
	},
};
</script>



<style scoped>
.asText {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
}

.page {
  width: 100%;
  display: flex;
}

.cardBorder {
  
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
}


.signInBtn {
    margin: auto;
    padding: 0;
    border: none;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    background: rgb(238, 174, 202);
    background: linear-gradient(30deg, #FF0081 0%, #00FFFF 100%);
    color: rgb(255, 255, 255);
    font-weight: 600;

    box-shadow: inset 0 0 35px 0px rgba(0, 0, 0, 0.25),
        inset 0 2px 1px 1px rgba(255, 255, 255, 0),
        1px 1px 15px 2px rgba(154, 137, 164, 0.5);

    text-shadow: 1px -1px 3px rgba(143, 162, 199, 1),
        -1px 1px 3px rgba(192, 151, 178, 1);
    outline: none;

    -webkit-transition: box-shadow 0.4s, text-shadow 0.5s;
    -moz-transition: box-shadow 0.4s, text-shadow 0.5s;
    transition: box-shadow 0.4s, text-shadow 0.5s;

}
.signInBtn:hover {
        cursor: pointer;

        box-shadow: inset 0 0 35px 0px rgba(0, 0, 0, 0.15),
            inset 0 2px 1px 1px rgba(255, 255, 255, 0),
            1px 1px 15px 2px rgba(154, 137, 164, 0.1);

        text-shadow: 3px -3px 5px rgba(143, 162, 199, 1),
            -3px 3px 5px rgba(192, 151, 178, 1);

        -webkit-transition: box-shadow 0.4s, text-shadow 0.5s;
        -moz-transition: box-shadow 0.4s, text-shadow 0.5s;
        transition: box-shadow 0.4s, text-shadow 0.5s;
    }

.signInBtn:active {
    background: linear-gradient(
        30deg,
        rgba(210, 178, 212, 1) 0%,
        rgba(177, 183, 223, 1) 100%
    );
    color: rgb(156, 118, 245);

    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.15),
        1px 1px 15px 2px rgba(154, 137, 164, 0.1);

    text-shadow: 1px -1px 1px rgba(143, 162, 199, 0.75),
        -1px 1px 1px rgba(192, 151, 178, 0.75);

    -webkit-transition: background 0.3s color 0.2s,
        text-shadow 0.3s box-shadow 0.3s;
    -moz-transition: background 0.3s color 0.2s,
        text-shadow 0.3s box-shadow 0.3s;
    transition: background 0.3s color 0.2s, text-shadow 0.3s box-shadow 0.3s;
}


.header {

  width: 100%;
  background: rgb(238, 174, 202);
  background: linear-gradient(30deg, #FF0081 0%, #00FFFF 100%);
  color: rgb(255, 255, 255);
  font-weight: 600;
  border-radius: 10px;
}

.headerText {
  color: rgb(255, 255, 255);
  text-shadow: 1px -1px 3px rgba(143, 162, 199, 1),
        -1px 1px 3px rgba(192, 151, 178, 1);
    outline: none;
  text-align: center;
  margin: 10px;
}

</style>