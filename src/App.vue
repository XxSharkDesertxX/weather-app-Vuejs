<template>
  <div id="app">
        <div class="container_input">
            <div class="box_input">
                <h3>Latitude</h3>
               <input type="text" placeholder="Latitude" contenteditable="true" v-model="la">
            </div>
            <div class="box_input">
              <h3>Longitude</h3>
               <input type="text" placeholder="Longitude" contenteditable="true" v-model="lo" @keydown.enter="fetchapi">
            </div>
            <button @click="fetchapi" @dblclick="istrue = false">
                Show
            </button>
        </div>

        <div class="detaiales"  v-if="istrue">
              <div class="title">
                  <h1>{{city}} - {{country}}</h1> 
                  <h3>{{dateBulider()}}</h3>
              </div>
              <div class="data_weather">
                  <h3> {{Math.floor(temp) -273}} C</h3>
                  <p>{{status}}</p>
              </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      api_key: '7768fe50be029fafd5f68d0fac6cabf5',
      api_main : 'https://api.openweathermap.org/data/2.5/weather?lat=',

      la:'36.28210583357307',
      lo:'59.581527560949326',

      weather : '',
      temp:'',
      country:'',
      city : '',
      status:'',
      istrue:false,
    
    }
  },
  methods: {
    fetchapi(){
      let api = `${this.api_main}${this.la}&lon=${this.lo}&appid=${this.api_key}`;

      // fetch api
          //  fetch(api).then(res =>{
          //    return res.json()
          //  }).then(response =>{
          //    console.log(response);
          //    this.weather = response;
          //    this.temp = this.weather.main.temp;
          //    this.country = this.weather.sys.country;
          //    this.status = this.weather.weather[0].main;
          //    this.istrue=true;
          //  });

      // axios api
      axios.get(api).then(res=>{
        console.log(res);
        let data = res.data;
        this.temp = data.main.temp;
        this.city = data.name;
        this.country =data.sys.country;
        this.status =data.weather[0].main;
        this.istrue=true;
      })  

        },

        dateBulider(){
            let date = new Date();
            let days = ["Sunday", "Monday", "TuseDay","Wednesday", "Friday","Saturday"];
            let months = ["January ","February", "March ", "April", "May", "June", "July","August", "September" , "October", "November", "December"];

            let day = days[date.getDay()];
            let month = months[date.getMonth()];
            let year = date.getFullYear();

            return`
              ${day} - ${month}  - ${year}
            `
        }
    },

}
</script>

<style>
html{
  margin: 0; padding: 0;
  height: 100vh;
  background-image: url("./assets/img1.jpg");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.bg{
  background-image: url("./assets/img2.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container_input{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
button{
  border: none; outline: none;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}
.box_input{
  width: 30rem;
  background-color: rgba(116, 116, 116, 0.4);
  display: flex;
  justify-content: space-around;
  transition: all .6s;
}
.box_input:hover{
  background-color: rgba(247, 247, 247,.7);
  
}
.box_input h3{
  font-weight: bold;
}
.box_input input{
  width: 60%;
  border: none;
  outline: none;
  background: transparent;
  font-weight: noram;
  font-size: .9rem;
}
.detaiales{
  width: 99%; height: 40%;
  margin: 0;
  background:rgba(230, 230, 230,.4);
  position: absolute;
  top: 50%;
  margin: 0 auto;
  display: flex; justify-content: space-around;
  flex-direction: column;
}
</style>
