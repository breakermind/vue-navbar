<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "./store/navbar.js";

export default {
	name: "LoadComponent",
	props: {
		name: { type: String, required: true, default: "./pages/HomePage.vue" },
	},
	components: {},
	data() {
		return {
			navbar: useNavbarStore(),
		};
	},
	computed: {
		loadComponent() {
			return defineAsyncComponent(() => import(this.name));
		},
	},
};
</script>

<template>
	<div
		id="rightbar"
		:class="{ 'rightbar-full': !this.navbar.open || this.navbar.isMobile }"
	>
		<div id="rightbar-toggle-btn" @click="this.navbar.toggle()">
			<i class="fas fa-bars"></i>
		</div>

		<keep-alive>
			<component :is="loadComponent"></component>
		</keep-alive>
	</div>
</template>