<template>
	<div id="app">
		<header-component />
		<b-container class="py-5">
			<b-row align-h="center" align-v="center">
				<search-bar @searchTerm="searchTerm" />
			</b-row>
		</b-container>
		<b-container>
			<b-spinner v-if="loading" type="grow"></b-spinner>
			<p v-if="this.responseMessage !== ''" class="mb-5">
				{{ this.responseMessage }}
			</p>
			<b-row align-h="center" align-v="center">
				<div class="my-5" v-if="Object.keys(searchedPokemon).length > 0">
					<card-component :pokemon="searchedPokemon" />
					<b-button variant="warning" pill @click="searchedPokemon = {}"
						>Mostrar todos</b-button
					>
				</div>
				<cards-container
					v-if="!loading && Object.keys(searchedPokemon).length === 0"
					:pokemons="pokemons"
				/>
			</b-row>
			<b-row>
				<b-col>
					<pagination
						:page="page"
						:totalPages="totalPages"
						@handlePagination="handlePagination"
					/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardsContainer from './components/CardsContainer.vue';
import CardComponent from './components/CardComponent.vue';
import SearchBar from './components/SearchBar.vue';
import Pagination from './components/Pagination.vue';

export default {
	name: 'App',
	components: {
		HeaderComponent,
		CardsContainer,
		CardComponent,
		Pagination,
		SearchBar,
	},
	data() {
		return {
			loading: true,
			pokemons: [],
			page: 0,
			limit: 20,
			totalPages: 0,
			searchedPokemon: {},
			responseMessage: '',
		};
	},
	methods: {
		async getPokemons(limit, offset) {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
			);
			const data = await response.json();
			this.totalPages = Math.ceil(data.count / limit);
			return data;
		},
		async getPokemonData(url) {
			try {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async fetchPokemons() {
			this.loading = true;
			const data = await this.getPokemons(this.limit, this.limit * this.page);
			const promises = data.results.map(
				async (pokemon) => await this.getPokemonData(pokemon.url)
			);
			const results = await Promise.all(promises);
			this.pokemons = results;
			this.loading = false;
		},
		async fetchSinglePokemon(id) {
			this.loading = true;
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			console.log(response);
			if (response.status === 404) {
				this.loading = false;
				this.responseMessage = 'No se encontraron resultados para tu búsqueda';
				setTimeout(() => {
					this.responseMessage = '';
				}, 2000);
				return;
			}
			const data = await response.json();
			this.searchedPokemon = data;
			this.loading = false;
		},
		async handlePagination(nextPage) {
			this.page = nextPage;
			await this.fetchPokemons();
		},
		async searchTerm(value) {
			if (value === '') {
				this.searchedPokemon = {};
			} else {
				this.fetchSinglePokemon(value);
			}
		},
	},
	async created() {
		await this.fetchPokemons();
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&display=swap');

body {
	background-color: $bkBody;
}

#app {
	font-family: 'Inconsolata', monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $white;
	background-color: $bkBody;
	min-height: 100vh;
}
</style>
