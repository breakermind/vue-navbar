<script>
import Navbar from "./Navbar/Navbar.vue";
import LoadComponent from "./Navbar/LoadComponent.vue";

export default {
	components: {
		Navbar,
		LoadComponent,
	},
	data() {
		return {
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
