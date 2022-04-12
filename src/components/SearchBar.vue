<template>
	<b-container class="mb-3">
		<b-nav-form @submit.prevent="onSubmit" style="display: inline">
			<div class="d-flex align-items-center justify-content-center">
				<b-form-input
					size="sm"
					placeholder="Seach by name or id"
				></b-form-input>
				<b-button
					size="sm"
					class="p-2"
					type="submit"
					variant="warning"
					style="margin-left: 20px"
					><BIconSearch
				/></b-button>
			</div>
		</b-nav-form>
	</b-container>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue';
export default {
	name: 'SearchBar',
	components: { BIconSearch },
	methods: {
		onSubmit(e) {
			this.$emit('searchTerm', e.target[0].value);
		},
	},
};
</script>

<style>
input[type='text'] {
	min-width: 230px !important;
	border-radius: 0.8rem;
	padding: 0.5rem 1rem;
	height: 2.5rem;
}
@media screen and (max-width: 500px) {
	input {
		width: 150px !important;
	}
}
</style>
