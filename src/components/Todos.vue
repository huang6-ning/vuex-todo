<template>
	<div>
		<h3>click删除，mousemove改变状态</h3>
		<div class="todos">
			<div class="todo" v-for="todo in todos" v-bind:key="todo.id" :class="{'is-complete': todo.completed}" @click="deleteTodo(todo.id)" @mousemove="switchCompleted(todo)">
				{{todo.title}}
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from "vuex";
	export default {
		name: "Todos",
		computed: mapGetters({
			todos: "getAllTodos"
		}),
		methods: {
			...mapActions(["getAllTodos", "deleteTodo", "updateTodo"]),
			switchCompleted(todo) {
				const updatedTodo = {
					id: todo.id,
					title: todo.title,
					completed: !todo.completed
				};
				// this.$store.dispatch("updateTodo", updatedTodo)
				this.updateTodo(updatedTodo);
			}
		},
		created() {
			this.getAllTodos();
		}
	};
</script>

<style scoped>
	.todos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}

	.todo {
		background: #41b883;
		padding: 10px;
		border: 1px solid #41b883;
		border-radius: 5px;
		position: relative;
		cursor: pointer;
		color: white;
	}

	.is-complete {
		background: #2e5ae9;
	}
</style>
