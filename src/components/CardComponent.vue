<template>
	<b-col xs="12" sm="6" md="4" lg="3">
		<div class="d-flex justify-content-center align-items-center">
			<b-card
				:img-src="pokemon.sprites.other.home.front_default"
				img-alt="Image"
				tag="article"
				class="card"
				img-top
			>
				<b-card-text>
					<b-row align-h="between" align-v="baseline">
						<b-col>
							<p class="text-start mb-0" style="min-width: 100px">
								{{ title }}
							</p>
						</b-col>
						<b-col>
							<b-row align-h="end">
								<b-col
									v-for="(type, index) in pokemon.types"
									:key="index"
									class="p-0"
									style="max-width: 42px"
								>
									<IconComponent :type="type.type.name" />
								</b-col>
							</b-row>
						</b-col>
					</b-row>
				</b-card-text>
				<b-card-text>
					<b-row>
						<b-col>
							<p class="mb-1" style="font-size: 12px">Height</p>
							<p class="accent-text">{{ pokemon.height }}</p>
						</b-col>
						<b-col>
							<p class="mb-1" style="font-size: 12px">Weight</p>
							<p class="accent-text">{{ pokemon.weight }}</p>
						</b-col>
					</b-row>
				</b-card-text>
				<b-button
					@click="showModal"
					variant="warning"
					class="button py-2 px-4"
					pill
					>Ver más</b-button
				>
			</b-card>
		</div>
		<b-modal
			ref="modal"
			title=""
			hide-footer
			:header-bg-variant="headerBgVariant"
			:body-bg-variant="bodyBgVariant"
		>
			<modal-component :pokemon="pokemon" :description="description" />
		</b-modal>
	</b-col>
</template>

<script>
import ModalComponent from './ModalComponent.vue';
import IconComponent from './IconComponent.vue';

export default {
	name: 'CardComponent',
	components: { ModalComponent, IconComponent },
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			description: '',
			variants: ['dark'],
			headerBgVariant: 'dark',
			bodyBgVariant: 'dark',
		};
	},
	computed: {
		title() {
			return (
				this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
			);
		},
	},
	methods: {
		async displayDetails() {
			const response = await fetch(
				`https://pokeapi.co/api/v2/characteristic/${this.pokemon.id}`
			);
			const data = await response.json();
			const description = data.descriptions.filter(
				(item) => item.language.name === 'es'
			);
			this.description = description[0].description;
		},
		showModal() {
			this.$refs['modal'].show();
			this.displayDetails();
		},
	},
};
</script>

<style scoped lang="scss">
.card {
	background-color: $bkCard;
	border-radius: 1rem;
	margin-bottom: 120px;
	height: 230px;
	width: 200px;
}
.card-img,
.card-img-top {
	transform: translateY(-100px);
}
.card-body {
	transform: translateY(-100px);
}
h4.card-title {
	font-size: 16px;
}
.accent-text {
	font-size: 12px;
	color: $accent;
	font-weight: bold;
}
.button {
	font-weight: bold;
	font-size: 12px;
	transform: translateY(-22px);
}
</style>
