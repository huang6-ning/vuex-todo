import todos from './modules/todos.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store ({
	modules: {
		todos
	}
})

export default store;