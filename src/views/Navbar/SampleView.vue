<script>
/*
	Copy to views and add to router
*/
import Navbar from "./Navbar/Navbar.vue";
import LoadComponent from "./Navbar/LoadComponent.vue";

export default {
	components: {
		Navbar,
		LoadComponent,
	},
	data() {
		return {
			// Change page view here start with: "../"
			name: "../Pages/AboutPage.vue",
		};
	},
};
</script>

<template>
	<main>
		<Navbar />
		<LoadComponent :name="name" />
	</main>
</template>