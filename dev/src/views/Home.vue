<template>
    <div id="home">
        <header id="main-banner">
            <!-- video layer -->
            <div v-if="play" class="video-container" v-bind:class="{skipped: skipped}">
                <video muted autoplay id="main-video">
                    <source src="@/assets/vid1.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
                <div v-on:click="skip" class="btn bottom">Continue</div>
            </div>
            <!-- 2nd layer -->
            <div id="title" v-bind:class="{transition1: transition1}">
                <h1>Intelligent <span>Social Media</span></h1>
                <p>FEATURES:</p>
                <h2>OP<span>NET</span></h2>
                <img src="@/assets/iso.svg" alt="OPNET iso">
                <p class="definition">The next generation platform built for first responders</p>
                <div v-on:click="greet" class="btn">GET STARTED</div>
            </div>
            <!-- 3rd layer -->
            <AnimatedContainer/>
            <!-- Main Content -->
            <div id="main-content" v-if="displayContent">
                <h2>OP<span>NET</span></h2>
                <div id="loading-bar" v-bind:class="{ loading: load }"></div>
                <div id="text-shadow">Ready & Strong</div>
                <div id="services">
                    <div class="service" v-bind:class="{ active: slide == 1, left: slide > 1}">
                        <div class="icon"><img src="@/assets/services/fam.png" alt="service icon"></div>
                        <div class="title">Groups and Communities</div>
                        <div class="description">Shared interests, incident management, circles of excellence, general preparedness</div>
                    </div>
                    <div class="service" v-bind:class="{ active: slide == 2, left: slide > 2}">
                        <div class="icon"><img src="@/assets/services/folder.png" alt="service icon"></div>
                        <div class="title">Secure Document Sharing</div>
                        <div class="description">Handle plans, schemetics, images, procedures, videos, and more</div>
                    </div>
                    <div class="service" v-bind:class="{ active: slide == 3, left: slide > 3}">
                        <div class="icon"><img src="@/assets/services/realtime.png" alt="service icon"></div>
                        <div class="title">Real-Time Collaboration</div>
                        <div class="description">Whether it is for operational readiness, incident response, sharing or group communication</div>
                    </div>
                    <div class="service" v-bind:class="{ active: slide == 4, left: slide > 4}">
                        <div class="icon"><img src="@/assets/services/comms.png" alt="service icon"></div>
                        <div class="title">Chat and Video Chat</div>
                        <div class="description">Through your desktop, pad or mobile, stay connected</div>
                    </div>
                    <div class="service" v-bind:class="{ active: slide == 5, left: slide > 5}">
                        <div class="icon"><img src="@/assets/services/docs.png" alt=""></div>
                        <div class="title">Dedicated Documentation</div>
                        <div class="description">Simplle search and assignable levels of permission-based access</div>
                    </div>
                </div>
                <div id="carousel-index">
                    <button v-on:click="prevSlide"><i class="fas fa-angle-left"></i></button>
                    <div v-on:click="slide = 1" v-bind:class="{ active: slide == 1}"></div>
                    <div v-on:click="slide = 2" v-bind:class="{ active: slide == 2}"></div>
                    <div v-on:click="slide = 3" v-bind:class="{ active: slide == 3}"></div>
                    <div v-on:click="slide = 4" v-bind:class="{ active: slide == 4}"></div>
                    <div v-on:click="slide = 5" v-bind:class="{ active: slide == 5}"></div>
                    <button v-on:click="nextSlide"><i class="fas fa-angle-right"></i></button>
                </div>
                <div id="text">
                    Join us and bring your team to the next level
                </div>
                <div class="actions-container">
                    <router-link class="button secondary-2" to="/contact">Request a Demo</router-link>
                    <router-link class="button primary-2" to="/services">Learn More</router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import AnimatedContainer from "@/components/AnimatedContainer.vue";

export default {
  data() {
    return {
        play: false,
        transition1: false,
        displayContent: false,
        skipped: false,
        slide: 1,
        timer: true,
        load: false
    };
  },
  components: {
    AnimatedContainer
  },
  watch: {
      displayContent(){
        this.interval = setInterval(() => this.nextSlide(), 4000);
        this.load = true;
      }
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
  mounted: function() {
    let container = document.getElementById('animated-container');
    container.querySelectorAll('div').forEach(child => {
        child.style.transitionDuration = Math.random() + .5 + 's';
    })
  },
  methods: {
    skip() {
        this.skipped = true;
    },
    greet() {
        let container = document.getElementById('animated-container');
        container.querySelectorAll('div').forEach(child => {
            child.className = 'transition-1';
        });
        this.transition1 = true;
        this.displayContent = true;
    },
    nextSlide() {
        if (this.slide == 5) {
            this.slide = 1;
        }
        else {
            this.slide = this.slide + 1;
        }
        this.resetTimer();
    },
    prevSlide() {
        if (this.slide == 1) {
            this.slide = 5;
        }
        else {
            this.slide = this.slide - 1;
        }
        this.resetTimer();
    },
    resetTimer(){
        clearInterval(this.interval);
        this.interval = setInterval(() => this.nextSlide(), 5000);
        this.restartLoad();
    },
    restartLoad(){
        let bar = document.getElementById("loading-bar");
        bar.classList.remove("loading");
        void bar.offsetWidth;
        bar.classList.add("loading");
    }
  }
};
</script>


<style lang="scss">
// Theme
@import "../stylesheets/theme";
// Fonts
@import "../stylesheets/fonts";

#main-banner {
    // VIDEO LAYER
    .video-container {
        background-color: color(pColor);
        // center container
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        // center video
        display: flex;
        justify-content: center;
        align-content: center;
        //animations
        opacity: 1;
        transform: translateY(0);
        animation: fade-out 3s ease 33s 1 both;
        transition: opacity 2s ease, transform 2s ease;
        will-change: opacity, transform;

        &.skipped {
            animation: none;
            opacity: 0;
            transform: translateY(-100%);
        }

        @keyframes fade-out {
            0% {opacity: 1;}
            99% {opacity: 0; transform: translateY(0)}
            100% {opacity: 0; transform: translateY(-100%);}
        }

        video {
            height: 100%;
            width: 100%;
            object-fit: fill;
        }

        .btn {
            font-family: font(tFont);
            cursor: pointer;
            border: 1px solid color(tColor);
            border-radius: 100px;
            color: color(tColor);
            font-size: 1.5vh;
            background-color: transparentize(color(pColor), .5);
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 1rem;

            &.bottom {
                position: absolute;
                bottom: 1rem;
            }
        }
    }

    // SECOND LAYER
    #title {
        z-index: -2;
        background-image: url('../assets/tree.png');
        background-repeat: no-repeat;
        background-size: 250px;
        background-position-y: bottom;
        background-position-x: center;
        // center container
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        // center content
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 2.5rem;

        &.transition1 {
            animation: fade-up 350ms ease 1 both;

            @keyframes fade-up {
                0% {opacity: 1; transform: translateY(0)}
                100% {opacity: 0; transform: translateY(-25%)}
            }
        }

        h1 {
            font-family: font(sFont);
            text-transform: capitalize;
            letter-spacing: 4px;
            font-size: 7vh;
            padding: 5vh 0;
            text-align: center;
            color: color(tColor);
            position: relative;
        }

        h2 {
            text-transform: uppercase;
            color: color(highlight);
            font-family: font(sFont);
            font-weight: bolder;
            letter-spacing: 4px;
            font-size: 5vh;
            padding: 2vh 0;

            span {
                color: color(tColor);
                font-weight: normal;
            }
        }

        img {
            filter: invert(1);
            height: 10vh;
            margin-bottom: 2vh;
        }

        p {
            color: color(lGray);
            font-size: 12px;
            letter-spacing: 2px;
            text-transform: uppercase;
            line-height: 200%;
            font-style: italic;
            text-align: center;
        }

        .definition {
            padding-bottom: 4vh;
        }

        

        .btn {
            font-family: font(tFont);
            cursor: pointer;
            border: 1px solid color(tColor);
            border-radius: 100px;
            color: color(tColor);
            font-size: 1.5vh;
            background-color: transparentize(color(pColor), .4);
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 1rem;
            animation: breath ease 5s 2s infinite both;

            @keyframes breath {
                0% {transform: scale(1)}
                50% {transform: scale(1.1)}
                100% {transform: scale(1)}
            }
        }
    }

    // THIRD LAYER
    #animated-container {
        // center container
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -3;
        display: flex;
        overflow: hidden;
        background-color: #2e2e2e;

        div {
            height: 100%;
            flex: 1 1 auto;
            background-color: color(pColor);
            transition: transform 100ms ease-out;
        }

        .transition-1 {
            transform: translateY(-100%);
        }
    }
}

#home {

    #main-content{
        display: flex;
        flex-flow: column;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        animation: fade-in 300ms ease 1s both;

        @keyframes fade-in {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }

        h2 {
            position: absolute;
            top: 12vh;
            align-self: center;
            text-align: center;
            color: color(pColor);
            font-family: font(tFont);
            font-weight: bolder;
            letter-spacing: 4px;
            font-size: 7vh;
            margin: 5vh 0;

            span {
                color: color(tColor);
                font-weight: normal;
            }
        }

        #loading-bar {
            position: absolute;
            top: 27vh;
            align-self: center;
            border: .5px solid color(tColor);
            border-radius: 100px;
            width: 50vw;
            height: 5px;

            &.loading {
                &::after {
                    content: '';
                    background-color: color(tColor); 
                    position: absolute;
                    top:0;
                    bottom: 0;
                    left: 0;
                    animation: load 5000ms linear infinite both;
    
                    @keyframes load {
                        0% {width: 0}
                        100% {width: 100%}
                    }
                }
            }

        }

        #text-shadow {
            position: absolute;
            top: 12vh;
            align-self: center;
            text-align: center;
            font-family: font(pFont);
            font-weight: 800;
            text-transform: uppercase;
            font-size: 9vh;
            color: transparentize($color: color(tColor), $amount: .85);
            z-index: -1;
        }

        #services {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -2;
            overflow-x: hidden;

            @for $i from 1 through 5 {
                .service {
                    &:nth-child(#{$i}) {
                        background-color: color($i);
					}
				}
			}

            .service {
                display: flex;
                flex-flow: column;
                text-align: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                position: absolute;
                overflow-x: hidden;
                transform: translateX(100%);
                will-change: transform;
                transition: transform 550ms ease;

                &.left {
                    transform: translateX(-100%);
                    will-change: transform;
                    transition: transform 550ms ease;
                }

                &.active {
                    transform: translateX(0);
                }

                div {
                    align-self: center;
                }

                .icon {
                    margin-bottom: 3vh;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 18vh;
                        align-self: center;
                        display: flex;
                        justify-content: center;

                        &::before {
                            align-self: center;
                        }
                    }
                }
                .title {
                    text-transform: uppercase;
                    font-size: 3vh;
                    letter-spacing: 3px;
                    color: color(pColor);
                    text-align: center;
                    padding: 0 5vw;
                    margin-bottom: 2vh;
                }
                .description {
                    text-transform: uppercase;
                    font-size: 1.3vh;
                    letter-spacing: 2.5px;
                    color: color(lGray);
                    text-align: center;
                    line-height: 200%;
                    padding: 0 10vw;
                }
            }

        }

        #carousel-index {
            display: flex;
            position: absolute;
            bottom: 25vh;
            align-self: center;

            button {
                align-self: center;
                height: 30px;
                width: 30px;
                margin: 0 4vw;
                border: none;
                border-radius: 100px;
                background-color: color(tColor);
                cursor: pointer;

                &:hover {
                    background-color: color(lGray);
                }

                &:focus {
                    outline: none;
                }

                i {
                    color: color(pColor);
                }
            }

            div {
                align-self: center;
                margin: 0 2vw;
                height: 10px;
                width: 10px;
                border: 1px solid color(lGray);
                border-radius: 100px;
                cursor: pointer;
                position: relative;

                &::after {
                    content: '';
                    background-color: color(lGray);
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 100px;
                    transform: scale(0);
                    will-change: transform;
                    transition: transform 350ms ease;
                }

                &.active {
                    &::after {
                        transform: scale(1);
                    }
                }
            }
        }

        #text {
            position: absolute;
            bottom: 12vh;
            align-self: center;
            padding: 5vh;
            text-transform: uppercase;
            font-size: 1vh;
            letter-spacing: 3px;
            color: color(lGray);
            text-align: center;
        }

        .actions-container {
            position: absolute;
            bottom: 7vh;
            align-self: center;
            display: flex;
            justify-content: center;

            a {
                margin: 0 1rem;
            }
        }
    }
} 
</style>

