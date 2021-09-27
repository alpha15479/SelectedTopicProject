<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-auto">
       <v-img
      height="250"
      src="https://picsum.photos/500/300"
    ></v-img>
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle" />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            :color="showPassword ? 'error': 'success'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            label="Password"/>
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn color="success" v-on:click="covid19Report">ลงทะเบียน</v-btn>
        <v-spacer/>
        <v-btn color="info">เข้าใช้งาน</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="total_death">
      <v-card-title><h1>{{ new_case }}</h1></v-card-title>
      <v-card-text>
        <ul>
          <li>ยอดผู้ป่วยสะสม {{ total_case }}</li>
          <li>ยอดผู้เสียชีวิต {{ total_death }}</li>
          <li>ยอดผู้หายดี {{ total_recovered }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',

  data: () => ({
    showPassword: false,
    new_case: 0,
    total_case: 0,
    total_death: 0,
    total_recovered: 0,
  }),

  methods: {
    async covid19Report() {
      const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
      const r = await axios.get(url)
      console.log(r)
      const result = r.data[0]
      this.new_case  = result.new_case
      this.total_case  = result.total_case
      this.total_death  = result.total_death
      this.total_recovered  = result.total_recovered
    },
    b() {
      console.log("yeah yeah")
    }
  }
};
</script>
