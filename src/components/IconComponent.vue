<template>
	<div id="icon" v-b-tooltip.hover :title="type">
		<div
			class="icon-container d-flex justify-content-center align-items-center"
			:style="this.background"
		>
			<font-awesome-icon :icon="iconName()" style="opacity: 70%" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'IconContainer',
	props: {
		type: {
			type: String,
			required: true,
		},
		text: {
			type: Boolean,
			required: false,
		},
	},
	data() {
		return {
			background: '',
		};
	},
	methods: {
		iconName() {
			switch (this.type) {
				case 'grass':
					this.background = 'background-color: #44c194';
					return 'fa-solid fa-leaf';
				case 'poison':
					this.background = 'background-color: #8f84d8';
					return 'fa-solid fa-skull';
				case 'fire':
					this.background = 'background-color: #f76565';
					return 'fa-solid fa-fire';
				case 'flying':
					this.background = 'background-color: #0393d4';
					return 'fa-solid fa-plane';
				case 'water':
					this.background = 'background-color: #311ee3';
					return 'fa-solid fa-droplet';
				case 'bug':
					this.background = 'background-color: #55ce71';
					return 'fa-solid fa-bug';
				case 'normal':
					this.background = 'background-color: #a9a3a3';
					return 'fa-solid fa-feather';
				case 'electric':
					this.background = 'background-color: #ffe610';
					return 'fa-solid fa-bolt-lightning';
				case 'ground':
					this.background = 'background-color: #795d22';
					return 'fa-solid fa-mound';
				case 'dragon':
					this.background = 'background-color: #f0b432';
					return 'fa-solid fa-dragon';
				case 'fairy':
					this.background = 'background-color: #e16dc4';
					return 'fa-solid fa-star';
				case 'ghost':
					this.background = 'background-color: #9c12b5';
					return 'fa-solid fa-ghost';
				case 'magic':
					this.background = 'background-color: #49464a';
					return 'fa-solid fa-wand-magic-sparkles';
				case 'fighting':
					this.background = 'background-color: #ce5e32';
					return 'fa-solid fa-hand-back-fist';
				case 'psychic':
					this.background = 'background-color: #d473d5';
					return 'fa-solid fa-brain';
				case 'rock':
					this.background = 'background-color: #5a553b';
					return 'fa-solid fa-hill-rockslide';
				case 'steel':
					this.background = 'background-color: #afafaf';
					return 'fa-solid fa-wrench';
				case 'ice':
					this.background = 'background-color: #85cade';
					return 'fa-solid fa-icicles';
				case 'dark':
					this.background = 'background-color: #414141';
					return 'fa-solid fa-moon';
				default:
					this.background = 'background-color: white';
					return 'fa-solid fa-circle';
			}
		},
	},
};
</script>

<style scoped lang="scss">
.icon-container {
	width: 27px;
	height: 27px;
	border-radius: 50%;
	color: $black;
}
</style>
