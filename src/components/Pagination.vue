<template>
	<b-container class="mb-5 p-1">
		<b-row align-v="center" align-h="center">
			<b-col class="p-0 item" style="max-width: 50px"
				><b-button
					@click="handlePagination(page === 0 ? 0 : page - 1)"
					:disabled="page === 0"
					variant="warning"
					><font-awesome-icon icon="fa-solid fa-chevron-left" /></b-button
			></b-col>
			<b-col class="p-0" style="max-width: 100px"
				>{{ this.page }} / {{ this.totalPages }}</b-col
			>
			<b-col class="p-0 item" style="max-width: 50px"
				><b-button
					@click="handlePagination(page + 1)"
					variant="warning"
					:disabled="page === totalPages"
					><font-awesome-icon icon="fa-solid fa-chevron-right" /></b-button
			></b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'SearchBar',
	props: {
		page: {
			type: Number,
			required: true,
		},
		totalPages: {
			type: Number,
			required: true,
		},
	},
	methods: {
		handlePagination(nextPage) {
			this.$emit('handlePagination', nextPage);
		},
	},
};
</script>
