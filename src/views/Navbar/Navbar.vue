<script>
import { RouterLink } from "vue-router";
import { useNavbarStore } from "./store/navbar";
import Links from "./Links.vue";

export default {
	components: {
		RouterLink,
		Links,
	},
	data() {
		return {
			navbar: useNavbarStore(),
		};
	},
	mounted() {
		this.navbar.onMount();
		window.addEventListener("resize", this.navbar.updateWidth);
	},
	beforUnmount() {
		window.removeEventListener("resize", this.navbar.updateWidth);
	},
};
</script>

<template>
	<div
		id="navbar"
		:class="{
			'navbar-full': this.navbar.isMobile,
			'navbar-closed': !this.navbar.open,
		}"
	>
		<div class="buttons">
			<img src="@/assets/logo.svg" id="navbar-logo">

			<div
				id="close-navbar-btn"
				@click="this.navbar.toggle()"
				:class="{ 'close-navbar-btn-show': this.navbar.isMobile }"
			>
				<i class="fas fa-times"></i>
			</div>
		</div>
		<div class="links">
			<Links />
		</div>
	</div>
</template>

<style>
#navbar {
	display: inherit;
	position: fixed;
	width: 300px;
	height: 100vh;
	color: #fff;
	background: #35495e;
	z-index: 1;
}

#rightbar {
	padding-left: 300px;
	color: #35495e;
}

.navbar-closed {
	display: none !important;
}

#navbar .links {
	padding: 20px;
}

#navbar-logo {
	float: left;
	height: 30px;
	margin: 20px;
}

.content {
	padding: 20px;
}

.rightbar-full {
	padding-left: 0px !important;
}

.navbar-full {
	box-shadow: 0px 1px 100px #35495e;
}

#rightbar-toggle-btn {
	padding: 20px;
	cursor: pointer;
}

#close-navbar-btn {
	display: none;
	float: right;
	width: 30px;
	height: 30px;
	margin: 20px;
	color: #fff;
	background: #42b883;
	border-radius: 50%;
	text-align: center;
	line-height: 30px;
	cursor: pointer;
}

.close-navbar-btn-show {
	display: inherit !important;
}

#navbar .buttons,
#navbar .links {
	float: left;
	width: 100%;
}

#navbar nav a {
	float: left;
	width: 100%;
	color: #fff;
	padding: 10px;
	cursor: pointer;
	text-decoration: none;
}
#navbar nav a i {
	margin-right: 10px;
}
#navbar nav a:hover {
	color: #f60 !important;
}

.router-link-exact-active {
	background: #42b883;
}

@media all and (max-width: 1024px) {
}
</style>