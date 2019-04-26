<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav id="navbar">
      <router-link to="/" id="home-logo">
        <img src="@/assets/logo-white.png" alt="iso" v-on:click="displayMenu = false">
      </router-link>
      <div id="menuicon" v-bind:class="{ active: displayMenu }" v-on:click="displayMenu = !displayMenu">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>
    </nav>

    <!-- Menu -->
    <nav id="menu" v-if="displayMenu" v-on:click="displayMenu = !displayMenu">
			<div class="links-container">
				<ul class="links">
					<li><router-link to="/services">Services</router-link><p>Our Value</p></li>
					<li><router-link to="/cases">Use Cases</router-link><p>Our Mission</p></li>
					<li><router-link to="/docs">Documents</router-link><p>Our Research</p></li>
					<li><router-link to="/us">Evolution</router-link><p>Our History</p></li>
					<li><router-link to="/contact">Contact</router-link><p>Our Team</p></li>
				</ul>
			</div>
			<div class="actions-container">
				<ul class="actions">
					<li><router-link class="button primary-1" to="/contact">Request a Demo</router-link></li>
					<!-- <li><router-link class="button secondary-1" to="/contact">Contact Us</router-link></li> -->
				</ul>
			</div>
    </nav>

		<!-- View -->
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: false
    };
  },
  computed: {
  }
};
</script>

<style lang="scss">
// Reset CSS
@import "./stylesheets/reset";
// Theme
@import "./stylesheets/theme";
// Fonts
@import "./stylesheets/fonts";

#app {
	font-family: font(pFont);
}

#navbar {
	position: fixed;
	width: 100%;
	top: 0;
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	z-index: 2;
	height: 12vh;

	#home-logo {
		margin: 0 1.5rem;
		align-self: center;

		img {
			height: 3.5rem;
		}
	}	

	#menuicon {
		display: flex;
		flex-flow: column;
		width: 2rem;
		align-self: center;
		padding: 1.2rem .65rem;
		margin: 0 1.5rem;
		border-radius: 100px;
		background-color: color(tColor);
		cursor: pointer;
		position: relative;

		&::before {
			background-color: transparent;
			border: 5px solid color(tColor);
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 100px;
			animation: pulse 900ms ease-out infinite forwards;

			@keyframes pulse {
				0%   {transform: scale(0); opacity: 0;}
				50% {transform: scale(.83); opacity: .5;}
				100% {transform: scale(1.7); opacity: 0;}
			}
		}

		.bar {
			height: 1px;
			margin: 2px;
			background-color: color(pColor);
			transition: all 350ms;
			z-index: 1;
		}

		&.active {
			.bar{
				transform: rotate(360deg);
			}
			#bar1 {
				transform: rotate(225deg) translateX(-4px) translateY(-4px);
			}
			#bar2 {
				opacity: 0;
			}
			#bar3 {
				transform: rotate(-225deg) translateX(-3px) translateY(3px);
			}
		}
	}	
}

#menu {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-flow: column;
	text-align: center;
	justify-content: center;
	overflow: hidden;
	z-index: 1;

	div {
		display: flex;
		justify-content: center;

		ul {
			align-self: center;
			li {
				margin: 4vh 0;
				animation: fade-in 500ms ease 350ms 1 both;

				@keyframes fade-in {
					0%   {transform: translateY(200%); opacity: 0;}
					100% {transform: translateY(0); opacity: 1;}
				}
			}
			@for $i from 1 through 6 {
				li {
					&:nth-child(#{$i}) {						
						// Delay the animation. Delay increases as items loop.
						animation-delay: $i * (200ms);
					}
				}
			}
		}
	}

	.links-container {
		height: 100%;
		animation: slide-left 300ms ease 1 both;
		background-color: transparentize(color(pColor), .025);

		@keyframes slide-left {
			0%   {transform: translateX(100%)}
			100% {transform: translateX(0)}
		}

		a {			
			color: color(tColor);
			text-decoration: none;
			font-family: font(pFont);
			font-weight: 800;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-size: 3.5vh;

			&.router-link-exact-active.router-link-active {
				color: color(highlight);
			}

			&:hover {
				color: color(lGray);
			}
		}

		p {
			color: color(mGray);
			margin-top: 5px;
		}
	}	

	.actions-container {
		position: absolute;
		bottom: 0;
		height: 20%;
		width: 100%;
		// clip-path: polygon(50% 0%, 100% 80%, 100% 100%, 0 100%, 0 80%);
		// background-color: opacify(color(pColor), .5);
		// animation: slide-up 300ms ease 1 both;

		@keyframes slide-up {
			0%   {transform: translateY(100%)}
			100% {transform: translateY(0)}
		}

		.actions {
			align-self: flex-end;
			
			li {
				margin: 6vh 0;
			}
		}
	}
}

.button {
	font-family: font(tFont);
	cursor: pointer;
	border-radius: 100px;
	font-size: 1.4vh;
	letter-spacing: 3px;
	text-transform: uppercase;
	padding: 1rem;
	text-decoration: none;
	transition: all 550ms ease;
    will-change: background-color, color;

	&.primary-1 {
		border: 1px solid color(tColor);
		background-color: transparent;
		color: color(tColor);

		&:hover {
			background-color: color(highlight);
			color: color(pColor);
		}
	}

	&.primary-2 {
		border: 1px solid color(pColor);
		background-color: transparent;
		color: color(pColor);

		&:hover {
			background-color: color(highlight);
			color: color(pColor);
		}
	}

	&.secondary-1 {
		background-color: color(tColor);
		color: color(pColor);

		&:hover {
			background-color: color(dGray);
			color: color(tColor);
		}
	}

	&.secondary-2 {
		background-color: color(pColor);
		color: color(tColor);

		&:hover {
			background-color: color(dGray);
			color: color(tColor);
		}
	}
}

//ONSCROLL TRANSITIONS
/* v-vpshow classes */
.before-enter {
  opacity: 0;
}

.enter {
  transition: opacity 2s ease;  
}
/* ---------------- */

//SCROLLBAR
/* width */
::-webkit-scrollbar {
	width: 5px;
	height: 5px;
}
/* Track */
::-webkit-scrollbar-track {
	border-radius: 100px;
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
	border-radius: 100px;
  background: #ccc;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>