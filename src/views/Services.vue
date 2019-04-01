<template>
    <div id="services">
        <div id="banner">
            <div>
                <h1>OP<span>NET</span></h1>
                <h2>Let us bring your department to a new level</h2>
                <p>
                    Connect to a network crafted specifically for first responders <br>
                    Get all the personal in sync with a clean platform with almost no learning curve <br>
                    With the ability to share data in real time and completly secured <br>
                    Be preapred, be ready, be <span>OPNET</span>
                </p>
                <router-link id="demobtn" to="/contact">Request a Demo</router-link>
                <div id="arrows">
                    <div id="arrow-1">
                        <div class="arrow left"></div>
                        <div class="arrow right"></div>
                    </div>
                    <div id="arrow-2">
                        <div class="arrow left"></div>
                        <div class="arrow right"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="services"></div>
        <ActionBanner/>
        <div id="features"></div>
        <div id="partners"></div>
        <Footer/>
    </div>
</template>

<script>
import ActionBanner from "@/components/ActionBanner.vue";
import Footer from "@/components/Footer.vue";

export default {
    data() {
    return {
      
    };
  },
  components: {
    ActionBanner,
    Footer
  }
}
</script>


<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";
#banner{
    height: 84vh;
    background-image: radial-gradient(color(pColor), darken(color(pColor), 10%));
    display: flex;
    flex-flow: column;
    justify-content: center;

    @include large {
        height: 88vh;
    }

    div {
        align-self: center;
        text-align: center;

        h1 {
            text-transform: uppercase;
            color: color(highlight);
            font-family: font(sFont);
            font-weight: bolder;
            letter-spacing: 4px;
            font-size: 12px;

            span {
                color: color(tColor);
                font-weight: normal;
            }
        }

        h2 {
            text-transform: uppercase;
            color: color(tColor);
            font-family: font(sFont);
            letter-spacing: 2px;
            font-size: 24px;
            padding: 4% 0;
        }

        p {
            color: color(lGray);
            font-size: 10px;
            letter-spacing: 2px;
            text-transform: uppercase;
            line-height: 200%;
        }

        a {
            display: inline-flex;
            font-family: font(tFont);
            cursor: pointer;
            border-radius: 100px;
            font-size: 1.3vh;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 1rem;
            text-decoration: none;
            margin: 4% 1rem;
            color: color(pColor);
            background-color: transparentize(color(tColor), .01);
        }
    }

    #arrows {
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: 5%;
        display: flex;
        flex-flow: column;

        div {
            display: flex;
        }

        .arrow {
            height: 3px;
            width: 25px;
            background-color: color(lGray);
            margin: 3px 0;

            &.left {
                transform: rotate(35deg) translate(3px);
            }

            &.right {
                transform: rotate(-35deg) translate(-3px);
            }
        }
    }
}

#services {
    height: 100vh;
    background-color: color(tColor);
}
</style>

