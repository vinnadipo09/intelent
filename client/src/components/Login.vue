<template>
  <div>
    <v-layout>
      <v-flex text-xs-center xs6 offset-xs3>
        <div class="white elevation-4">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pr-4 pl-4 pt-4 pb-4">
            <v-text-field
              color="blue"
              label="Email"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              color="blue"
              label="Password"
              required
            ></v-text-field>
              <br>
              <div v-if="error" class="error" v-html="error"/>
              <div v-else class="success" v-html="success"/>
              <div class="text-xs-center">
              <v-btn class="mybutton" round outline color="black" dark
              @click="login">
              Login
              </v-btn>
              </div>
              </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      success: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.success = response.data.success
        // console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
  text-decoration: none! important;
}
.success{
  color: green;
}
.mybutton{
  text-transform: none! important;
  font-size: 20px;
}
</style>
