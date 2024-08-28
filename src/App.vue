
<template>
  <h1>Food</h1>
  <p>ssFood items are generated with v-for from the 'foods' array.</p>
  <div id="wrapper">
    <food-item
      v-for="(x, index) in foods"
      :key="index"   
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"/>
      <hello-world/>
  </div> 

  <div>
    <p>{{ "Moose count: " + count }}</p>
    <button @click="count++">Count</button>
  </div>

  <div id="lightDiv">
    <div v-show="lightOn"></div>
    <img src="https://www.w3schools.com/vue/img_lightBulb.svg">
  </div>
  <button @click=" lightOn =! lightOn ">Switch light</button>

  <div>
    <p v-if="typewriterCount>3">
      In stock
    </p>
    <p v-else-if="typewriterCount>0">
      Very few left!
    </p>
    <p v-else>
      Not in stock
    </p>
  </div>

  <div id="pizzImg">
    <div v-if="text.includes('pizza')">
    <p>The text includes the word 'pizza'</p>
    <img src="https://www.w3schools.com/vue/img_pizza.svg">
  </div>
  <p v-else>The word 'pizza' is not found in the text</p>
  </div>
  <div id="vshow" v-show="showDiv">This div tag can be hidden</div>

  <p v-for="(x, index) in manyFoods" :key="index"   >
    {{ index }}: "{{ x.name }}", url: "{{ x.url }}" <br>
  </p>

  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals </router-link>
  <router-link to="/food">Food</router-link><br>
  <div>
    <router-view></router-view>
  </div>

  <div @click="this.activeComp = 'food-item'" class="divBtn">About</div>
  <div @click="this.activeComp = 'animal-collection'" class="divBtn">Kinds</div>
  <div id="divComp">
    <component :is="activeComp"></component>
  </div>


  <h1>Form</h1>
  <form @submit.prevent="registerAnswer">
    <label>
      <p>What do you think about our product?</p> 
      <textarea v-model="formData.txtInp" placeholder="Write something.." rows="4" cols="35"></textarea>
    </label><br>
    <label>Choose a color: 
      <input v-model="formData.colorInp" type="color">
    </label><br>
    <label for="cars">Choose one or more cars:</label><br>
    <select  v-model="formData.carsSelected" id="cars" multiple>
      <option>Volvo</option>
      <option>Saab</option>
      <option>Opel</option>
      <option>Audi</option>
      <option>Kia</option>
    </select><br>
    <label for="cars">Choose a car:</label>
    <select  v-model="formData.carSelected" id="cars">
      <option disabled value="">Please select one</option>
      <option>Volvo</option>
      <option>Saab</option>
      <option>Opel</option>
      <option>Audi</option>
    </select>
    <br>
    <p>What kinds of food do you like?</p>
      <label>
        <input type="checkbox" v-model="formData.likeFoods" value="Pizza"> Pizza
      </label>
      <label>
        <input type="checkbox" v-model="formData.likeFoods" value="Rice"> Rice
      </label>
      <label>
        <input type="checkbox" v-model="formData.likeFoods" value="Fish"> Fish
      </label>
      <label>
        <input type="checkbox" v-model="formData.likeFoods" value="Salad"> Salad
      </label>
      <br>
      <label>Choose a file:
        <input @change="updateVal" type="file">
      </label>
      <br>
      <label>How tall are you?<br>
        <input v-model="formData.heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
      </label><br>
      <label>Password
        <input v-model="formData.setPass" type="password"> {{ setPass }}
      </label>
      <br><br><br>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>

  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer" v-if="submitted">{{ formData }}</p>
  </div><br>
  <div>
    <button @click="fetchData">Fetch Data from HTTP request</button>
    <p v-if="data">{{ data }}</p>
  </div>
  
</template>

<script>
export default {
  data() { 
    return {
      foods: [
        { name: 'Apples', 
          desc: 'Apples are a type of fruit that grow on trees.', 
          favorite: true },
        { name: 'Pizza', 
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', 
          favorite: false },
        { name: 'Rice', 
          desc: 'Rice is a type of grain that people like to eat.', 
          favorite: false },
        { name: 'Fish', 
          desc: 'Fish is an animal that lives in water.', 
          favorite: true },
        { name: 'Cake', 
          desc: 'Cake is something sweet that tastes good.', 
          favorite: false },
        {name: 'test',
          desc: 'This is test',
          favorite: false
        }
      ],
      data: null,
      count: 0,
      lightOn: false,
      typewriterCount: 4,
      text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.',
      showDiv: true,
      manyFoods: [
        {name: 'Burrito', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'}
      ],
      activeComp: 'food-kinds',
      junkfoods: [
        { name: 'Pizza', imgUrl: 'img_pizza.svg' },
        { name: 'Apple', imgUrl: 'img_apple.svg' },
        { name: 'Cake', imgUrl: 'img_cake.svg' },
        { name: 'Fish', imgUrl: 'img_fish.svg' },
        { name: 'Rice', imgUrl: 'img_rice.svg' }
      ],
        justForAddress:[
          {city: "pune" },
          {city: "mumbai" },
          {city: "nashik" },
          {city: "goa" },
          {city: "dhule" }
          
        ],
      provide() {
        return {
          junkfoods: this.junkfoods
        }
      },

      formData: {
        txtInp: '',
        colorInp: '',
        carsSelected: [],
        carSelected: '',
        likeFoods: [],
        file: null,
        heightInp: '',
        setPass:''
      },
      submitted: false,
      visited: false
      
    };
  },
  methods: {
  
    async fetchData() {
      const response = await fetch("https://reqres.in/api/users?page=2");
      this.data = await response.text();
    },
    registerAnswer() {
      this.submitted = true;
      console.log(this.formData);
    },
    updateVal(e) {
      this.fileInp = e.target.value;
    }
  }
}
</script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed rgb(244, 194, 194) 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #lightDiv {
    position: relative;
    width: 150px;
    height: 150px;
  }
  #lightDiv > img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #lightDiv > div {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: yellow;
  }
  
  #pizzImg{
    border: dashed black 1px;
    width: 130px;
    padding: 0 20px 20px 20px;
    font-weight: bold;
    background-color: lightgreen;
    height: 170px;
  }
  #pizzImg img {
    width: 100px;
    height: 100px;
  }

  #vshow {
    padding: 20px;
    background-color: lightgreen;
    font-weight: bold;
  }

  .divBtn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: white;
    border: solid 2px #04AA6D;
    border-radius: 10px;
    font-family: Verdana,sans-serif;
    color: black;
    padding: 10px;
    margin: 10px;
  }
</style>
