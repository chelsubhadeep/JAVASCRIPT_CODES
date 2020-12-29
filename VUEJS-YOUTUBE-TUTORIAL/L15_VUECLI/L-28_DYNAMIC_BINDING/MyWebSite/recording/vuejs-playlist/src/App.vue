<template>
  <div>
    <keep-alive>
      <component v-bind:is = "component"></component>
    </keep-alive>
    <!--<component is = "form-two"></component>-->
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div> 
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default { 
  components: {
    'form-one': formOne,
    'form-two': formTwo,
  },
  data () {
    return{
        component: 'form-two'
    }
   
  },
  methods:{
  
  }
}
</script>

<style>

</style>
