<template>
    <div id="home">
        <header id="main-banner">
            <!-- 1st layer -->
            <div class="video-container" v-bind:class="{skipped: skipped}">
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
                <p class="definition">The next generation platform built for first responders</p>
                <div v-on:click="greet" class="btn">GET STARTED</div>
            </div>
            <!-- 3rd layer -->
            <AnimatedContainer/>
            <!-- Main Content -->
            <div id="main-content" v-if="displayContent">
                <h2>OP<span>NET</span></h2>
                <div id="services">
                    <div class="service">
                        <div class="icon"><i class="fas fa-users fa-2x"></i></div>
                        <div class="title">Groups and Communities</div>
                        <div class="description">Shared interests, incident management, circles of excellence, general preparedness</div>
                    </div>
                    <div class="service">
                        <div class="icon"><i class="fas fa-file-alt fa-2x"></i></div>
                        <div class="title">Secure Document Sharing</div>
                        <div class="description">Handle plans, schemetics, images, procedures, videos, and more</div>
                    </div>
                    <div class="service">
                        <div class="icon"><i class="fas fa-stopwatch fa-2x"></i></div>
                        <div class="title">Real-Time Collaboration</div>
                        <div class="description">Whether it is for operational readiness, incident response, sharing or group communication</div>
                    </div>
                    <div class="service">
                        <div class="icon"><i class="fas fa-comments fa-2x"></i></div>
                        <div class="title">Chat and Video Chat</div>
                        <div class="description">Through your desktop, pad or mobile, stay connected</div>
                    </div>
                    <div class="service">
                        <div class="icon"><i class="fas fa-book fa-2x"></i></div>
                        <div class="title">Dedicated Documentation</div>
                        <div class="description">Simplle search and assignable levels of permission-based access</div>
                    </div>
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
      transition1: false,
      displayContent: false,
      skipped: false
    };
  },
  components: {
      AnimatedContainer
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
    // FIRST LAYER
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
        animation: fade-in 800ms ease 1s both;

        @keyframes fade-in {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }

        h2 {
            text-align: center;
            color: color(pColor);
            font-family: font(sFont);
            font-weight: bolder;
            letter-spacing: 4px;
            font-size: 7vh;
            margin: 5vh 0;

            span {
                color: color(dGray);
                font-weight: normal;
            }
        }

        #services {
            display: flex;
            height: max-content;
            overflow-x: auto;
            overflow-y: hidden;
            margin: 3vh 5vw 1vh 5vw;
            padding: 0 5vw 5vh 5vw;

            .service {
                display: flex;
                flex-flow: column;
                text-align: center;
                margin: 0 7%;
                min-width: 85%;

                @include large {
                    min-width: 20%;
                }

                .icon {
                    margin-bottom: 3vh;
                    display: flex;
                    justify-content: center;

                    i {
                        height: 60px;
                        width: 60px;
                        border-radius: 100px;
                        border: 4px solid color(sColor);
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
                    margin-bottom: 2vh;
                }
                .description {
                    text-transform: uppercase;
                    font-size: 1.3vh;
                    letter-spacing: 2.5px;
                    color: color(sColor);
                    text-align: center;
                    line-height: 200%;
                }
            }

        }

        #text {
            margin: 5vh;
            text-transform: uppercase;
            font-size: 1vh;
            letter-spacing: 3px;
            color: color(dGray);
            text-align: center;
        }

        .actions-container {
            display: flex;
            justify-content: center;

            a {
                margin: 0 1rem;
            }
        }
    }
} 
</style>

