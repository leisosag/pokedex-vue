<template>
	<b-container class="pt-5">
		<b-row align-v="center" align-h="center">
			<card-component
				v-for="(pokemon, index) in pokemons"
				:key="index"
				:pokemon="pokemon"
			/>
		</b-row>
	</b-container>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
	name: 'CardsContainer',
	components: { CardComponent },
	props: {
		pokemons: {
			type: Array,
			required: true,
		},
	},
};
</script>
