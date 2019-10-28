<template>
	<div>
		<input type="text" v-model="limit" @blur="filterTodo" placeholder="input a number to filter">
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		name: 'FilterTodo',
		data() {
			return {
				limit: ''
			}
		},
		methods: {
			...mapActions(['filterTodos']),
			filterTodo(){
				this.filterTodos(this.limit)
				this.limit=''	
			}
		}
	}
</script>

<style>
	input {
		border-radius:20px;
		padding:5px;
		font-size:20px;
		margin: 10px;
		border: 1px solid #41b883;
	}
</style>
