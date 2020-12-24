new Vue({
  el: '#vue-app',
  data: {
    name: 'Subhadeep',
    job: 'Software Engineer',
    website: 'https://www.linkedin.com/in/subhadeep-chel-696a03121/',
    websiteTag: '<a href= "https://www.linkedin.com/in/subhadeep-chel-696a03121/">LinkedIn Profile</a>'
  },
  methods: {
    greet: function(time){
       return 'Good ' + time + this.name;
    }
  }
});
