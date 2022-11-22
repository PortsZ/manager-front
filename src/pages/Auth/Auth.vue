	
	
		<template>
  <div class="row mainContainer">
    <div class="col">
      <div id="login" class="cardBorder w-100">
        <div class="">
          <router-view v-on:submitForm="sing($event)"></router-view>
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="">
        <div class="col card  cardBorderEffect">

          <agile  class="carouselBorder" ref="carousel" :nav-buttons=false :dots=false  autoplay=true>
            <div class="slide">
              <img class="d-block w-100" v-bind:src="this.nft1">
            </div>

            <div class="slide">
              <img class="d-block w-100" v-bind:src="this.nft2">
            </div>

            <div class="slide">
              <img class="d-block w-100" v-bind:src="this.nft3">
            </div>

            
          </agile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import auth from "@/services/Cryptech/Auth";
import store from "@/store";
import { VueAgile } from "vue-agile";

export default {
  name: "Auth",
  data() {
    return {
      nft1: "https://lh3.googleusercontent.com/q-calRiUgRB7TdAVG7H19vI1EINt28RZfc1fKvL6GR2ghN8PiPq1ButNLlKoglXAMI9_tnuBm3A-vnbu1nWKL2HARd2qQPZqkuq8fg=s0",
      nft2: "https://lh3.googleusercontent.com/MuU0IE7oKwSrqzetz0OhHyjdkUVdSXOd1IA_fB59wrv6GBFE6FRJ5zylJlLuS7FvMXcxnUZRo264pmA36lDtB-9AHGJ3iLb2LixFxg=s0",
      nft3: "https://lh3.googleusercontent.com/xTDA-TJfKkCWJsIcr6LVorTsPhO7tIIEZIvAuuuxNPZHzXOh5AlEKbD0M4iulfmTcUFEV0x_BS3u-lD_itU8q9OkJQI66a6G00168Q=s0",
    };
  },
  components: {
    agile: VueAgile,
  },
  created: function () {
    document.body.classList.remove("default");
    document.body.classList.add("login");
  },
  updated: function () {
    document.body.classList.remove("default");
    document.body.classList.add("login");
  },
  methods: {
    async sing(credentials) {
      if (credentials.type === "singIn") {
        try {
          await auth.SingIn({
            username: credentials.username,
            password: credentials.password,
          });
          store.commit("SET_AUTH", true);
          await this.$router.push("/");
        } catch (e) {
          console.log(e);
        }
      } else if (credentials.type === "singUp") {
        try {
          await auth.SingUp({
            username: credentials.username,
            password: credentials.password,
          });
          await this.$router.push("/Auth");
        } catch (e) {
          console.log(e);
        }
      }
    },
  },

  window: CSS.registerProperty({
  name: '--rotate',
  syntax: '<angle>',
  inherits: false,
  initialValue: '132deg',
}),
};
</script>

<style scoped>
#login {
  /* margin-top: 25vh; */
}

.mainContainer {
  padding: 10px;
  width: 100%;
  margin-left: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}



.carouselBorder {
  
  /* padding: 20px; */
  border-radius: 5px;

}


.cardBorderEffect {
/* #191c29 */
  margin: 100px;
  padding: 15px;
  border-radius: 10px;
  background: #353535;
  cursor: pointer;

}



.cardBorderEffect::before {
  content: "";
  width: 104%;
  height: 104%;
  border-radius: 15px;
  background-image: linear-gradient(
    var(--rotate)
    , #FF9000, #F4F395 100%);
    position: absolute;
    z-index: -1;
    top: -2%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }

}

</style>