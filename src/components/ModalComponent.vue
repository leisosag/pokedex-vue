<template>
	<b-container class="modal-container">
		<!-- image -->
		<b-row align-h="center" align-v="center">
			<b-img
				:src="pokemon.sprites.other.home.front_default"
				alt="imágen"
				class="main-img"
				fluid
			></b-img>
		</b-row>
		<!-- name and types -->
		<b-row align-v="baseline" align-h="between" class="pt-4">
			<b-col>
				<p class="text-start mb-0" style="font-size: 24px">
					{{ title }}
				</p>
			</b-col>
			<b-col>
				<div class="grid-container-type">
					<div
						v-for="(type, index) in pokemon.types"
						:key="index"
						class="type-container d-flex justify-content-center align-items-center px-2"
						:style="backgroundColor(type.type.name)"
					>
						{{ type.type.name }}
					</div>
				</div>
			</b-col>
		</b-row>
		<!-- description -->
		<b-row>
			<p class="text-bold mb-2 mt-4 text-center" style="font-size: 16px">
				Description
			</p>
		</b-row>
		<b-row>
			<p class="mt-2 text-center" style="font-size: 14px">
				{{ description }}
			</p>
		</b-row>
		<!-- stats -->
		<b-row>
			<p class="text-bold my-2 text-center" style="font-size: 16px">Stats</p>
		</b-row>
		<div class="grid-container-icons my-3">
			<b-row
				v-for="(stat, index) in pokemon.stats"
				:key="index"
				class="d-flex justify-content-center pb-2"
			>
				<font-awesome-icon
					:icon="iconName(stat.stat.name)"
					style="opacity: 70%"
				/>
				<p
					class="m-0 p-1 text-center"
					style="font-size: 14px; display: inline-block"
				>
					{{ stat.stat.name }}:
					<span class="accent-text px-1" style="font-size: 14px">{{
						stat.base_stat
					}}</span>
				</p>
			</b-row>
		</div>
		<!-- moves -->
		<b-row>
			<p class="text-bold my-2 text-center" style="font-size: 16px">Moves</p>
		</b-row>
		<div class="grid-container-icons my-3">
			<b-row v-for="(move, index) in moves" :key="index">
				<p class="mb-1 text-center" style="font-size: 14px">
					{{ move.move.name }}
				</p>
			</b-row>
		</div>
		<b-row align-h="center" class="pb-4">
			<b-button
				variant="warning"
				pill
				class="mt-3"
				style="max-width: 200px"
				@click="showMore = !showMore"
				>{{ showMore ? 'Acortar' : 'Ampliar' }} lista</b-button
			>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'ModalComponent',
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			showMore: false,
		};
	},
	computed: {
		title() {
			return (
				this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
			);
		},
		moves() {
			if (this.showMore) {
				return this.pokemon.moves;
			} else {
				return this.pokemon.moves.slice(0, 12);
			}
		},
	},
	methods: {
		iconName(name) {
			switch (name) {
				case 'hp':
					return 'fa-solid fa-heart';
				case 'attack':
					return 'fa-solid fa-gun';
				case 'defense':
					return 'fa-solid fa-shield';
				case 'special-attack':
					return 'fa-solid fa-wand-sparkles';
				case 'special-defense':
					return 'fa-solid fa-bars-staggered';
				case 'speed':
					return 'fa-solid fa-bolt';
				default:
					break;
			}
		},
		backgroundColor(type) {
			switch (type) {
				case 'grass':
					return 'background-color: #44c194';
				case 'poison':
					return 'background-color: #8f84d8';
				case 'fire':
					return 'background-color: #f76565';
				case 'flying':
					return 'background-color: #0393d4';
				case 'water':
					return 'background-color: #311ee3';
				case 'bug':
					return 'background-color: #55ce71';
				case 'normal':
					return 'background-color: #a9a3a3';
				case 'electric':
					return 'background-color: #ffe610';
				case 'ground':
					return 'background-color: #795d22';
				case 'dragon':
					return 'background-color: #f0b432';
				case 'fairy':
					return 'background-color: #e16dc4';
				case 'ghost':
					return 'background-color: #9c12b5';
				case 'magic':
					return 'background-color: #49464a';
				case 'fighting':
					return 'background-color: #ce5e32';
				case 'psychic':
					return 'background-color: #d473d5';
				case 'rock':
					return 'background-color: #5a553b';
				case 'steel':
					return 'background-color: #afafaf';
				case 'ice':
					return 'background-color: #85cade';
				case 'dark':
					return 'background-color: #414141';
				default:
					return 'background-color: white';
			}
		},
	},
};
</script>

<style scoped lang="scss">
.modal-container {
	font-family: 'Inconsolata', monospace;
	color: $white;

	.main-img {
		height: 75%;
		width: 75%;
		transform: translateY(-50px);
	}

	.grid-container-type {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
		gap: 0.5rem;

		.type-container {
			border-radius: 20px;
			color: $black;
			max-width: 90px;
		}
	}

	.grid-container-icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
		gap: 0.5rem;

		.accent-text {
			font-size: 10px;
			color: $accent;
			font-weight: bold;
		}
	}
}
</style>
