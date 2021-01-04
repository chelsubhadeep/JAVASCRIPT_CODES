<template>
	<div>
		<h1>{{title}}</h1>
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
					{name: 'description', content: 'My Amazing About Page'}
				],
				script: [{ src : '/about.js' }]
			}
		}
	}
</script>

