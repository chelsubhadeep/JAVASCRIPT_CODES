<template>
	<div>
		<h1>{{title}}</h1>
		<!--<router-link to="/">Home</router-link>-->
		<!--<n-link to="/">Home</n-link>-->
		<!--<nuxt-link to="/">Home</nuxt-link>-->
		<NuxtLink to ="/">Home</NuxtLink>
	</div>
</template>

<script>
	export default{
		asyncData(){
			return { title: 'About'}
		},
		head(){
			return{
				title: 'About',
				meta:[
					{
						hid: 'description',
						name: 'description', 
						content: 'My Amazing About Page'}
				],
				script: [{ src : '/about.js' }]
			}
		}
	}
</script>

