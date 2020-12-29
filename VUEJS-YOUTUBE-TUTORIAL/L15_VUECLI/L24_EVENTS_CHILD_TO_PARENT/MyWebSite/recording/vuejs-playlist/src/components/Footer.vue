<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
export default { 
  import { bus } from '../main';
  props: {
    title:{
      type:String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2020'
    }
  }
}
</script>

<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }

</style>
