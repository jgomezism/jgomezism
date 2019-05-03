<template>
    <div id="services">
        <div id="banner">
            <div id="content">
                <h1>OP<span>NET</span></h1>
                <h2>Let us bring your department to a new level</h2>
                <p>
                    Connect to a network crafted specifically for first responders <br>
                    Get all the personal in sync with a clean platform with almost no learning curve <br>
                    With the ability to share data in real time and completly secured. <br>
                    Be preapred, be ready, be <span>OPNET</span>
                </p>
                <router-link class="button secondary-1" to="/contact">Request a Demo</router-link>                
            </div>
            <div id="arrows" v-on:click="scroll">
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
        <div id="services-tree">
            <h1>OP<span>NET</span></h1>
            <div v-vpshow class="row" id="row-1">
                <div class="item">
                    <div class="icon" v-on:click="details(1)"><i class="fas fa-users fa-2x"></i></div>
                    <h2 v-on:click="details(1)">Groups & Communities</h2>
                </div>
                <div class="item">
                    <div class="icon" v-on:click="details(2)"><i class="fas fa-file-alt fa-2x"></i></div>
                    <h2 v-on:click="details(2)">Document Sharing</h2>
                </div>
            </div>
            <div v-vpshow class="row" id="row-2">
                <div class="item">
                    <div class="icon" v-on:click="details(3)"><i class="fas fa-book fa-2x"></i></div>
                    <h2 v-on:click="details(3)">Library</h2>
                </div>
                <div class="item">
                    <div class="icon" v-on:click="details(4)"><i class="fas fa-comments fa-2x"></i></div>
                    <h2 v-on:click="details(4)">Comms</h2>
                </div>
            </div>
            <div v-vpshow class="row" id="row-3">
                <div class="item">
                    <div class="icon" v-on:click="details(5)"><i class="fas fa-stopwatch fa-2x"></i></div>
                    <h2 v-on:click="details(5)">Real-Time Collaboration</h2>
                </div>
            </div>
            <div id="details" v-bind:class="{ active: showDetails }">
                <div class="btn close" v-on:click="showDetails = !showDetails"><div></div><div></div></div>
                <h2 id="service-title"></h2>
                <p id="service-description"></p>
            </div>
        </div>
        <ActionBanner/>
        <div id="features">
            <div v-vpshow class="feature">
                <h3>COMPLIANT</h3>
                <p>We developed OPNET to be compliant with CJIS, FIPS 140-2, ISO 27001. Auditing, accountability, access controls, authentication, encryption, storage and physical access requirements; it's all handled.</p>
                <div></div>
            </div>
            <div v-vpshow class="feature">
                <h3>RELIABLE</h3>
                <p>Each OPNET deployment is unique and segregated, only you can access your data. No hardware or software sharing, each instance is sotred on the AWS GovCloud infrastructure maximizing: availability, physical security and reliability.</p>
                <div></div>
            </div>
            <div v-vpshow class="feature">
                <h3>SECURE</h3>
                <p>At ISM security comes first. We lead a proactive approach to security in storage, credentials, access, transmission and communications. Access to each platform is AES/RSA encrypted and audio/video communication tools are point-to-point encrypted. </p>
                <div></div>
            </div>
        </div>
        <div id="partners">
            <h2>Partners</h2>
            <div v-vpshow class="partner"><img src="@/assets/partners/Shield-340x180.png" alt="Shield"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/EKU-justice-sm.png" alt="EKU"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/EKU-sm.png" alt="EKU"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/OSI-sm.png" alt="OSI"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/ReadyStrong-sm.png" alt="ReadyStrong"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/SDSU-HomSec-Sm.png" alt="SDSU"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/SDSU-sm.png" alt="SDSU"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/UL-Speed-sm.png" alt="UofL Speed"></div>
            <div v-vpshow class="partner"><img src="@/assets/partners/UL_logo_fullcolor.png" alt="UofL"></div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import ActionBanner from "@/components/ActionBanner.vue";
import Footer from "@/components/Footer.vue";
import { scroll } from "@/mixins/scroll.js"

export default {
    mixins: [scroll],
    data() {
        return {
            showDetails: false
        };
    },
    components: {
        ActionBanner,
        Footer
    },
    methods: {
        scroll(){
            this.scrollIt("#services-tree");
        },
        details(num) {
            this.showDetails = true;

            if(num == 1) {
                document.getElementById('service-title').innerText = 'Groups & Communities';
                document.getElementById('service-description').innerText = "Shared interests, incident management, circles of excellence, general preparedness. Users can find and join groups, share media and documents, participate in forums. Premium users can create public, private and hidden groups.";
            }
            else if(num == 2) {
                document.getElementById('service-title').innerText = 'Secure Document Sharing';
                document.getElementById('service-description').innerText = "Documents are essential for operational fluidity and continuity. Plans, schematics, images, procedures, videos and more – Our platform handles documents of all types while giving users the ability to share and store documents securely.";
            }
            else if(num == 3) {
                document.getElementById('service-title').innerText = 'Library';
                document.getElementById('service-description').innerText = "A repository of specialized documents and files curated by subject matter experts. Our library serves as a knowledgebase filled with entries by members of the site and experts in their fields. These documents are a simple search away for members and can have different levels of permission-based accesses applied.";
            }
            else if(num == 4) {
                document.getElementById('service-title').innerText = 'Chat and Video Chat';
                document.getElementById('service-description').innerText = "Communicate in real-time with others in your network. From the desktop or our mobile app, stay in touch through standard chat, chat rooms and stunning video chat. Whether it is a simple “hello”, or a location scan for situational awareness, our platform allows you stay connected to your network.";
            }
            else if(num == 5) {
                document.getElementById('service-title').innerText = 'Real-Time Collaboration';
                document.getElementById('service-description').innerText = "Whether it is for operational readiness, incident response, sharing of best practices or group communication, real-time collaboration is critical. Our platform and tools are built with collaboration as our number one priority.";
            }
        }
    }
}
</script>


<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";
#banner{
    height: 100vh;
    background-image: radial-gradient(color(pColor), darken(color(pColor), 10%));
    display: flex;
    flex-flow: column;
    justify-content: center;

    #content {
        align-self: center;
        text-align: center;
        padding: 0 5%;
        animation: fade-in 700ms ease 350ms 1 both;

        @keyframes fade-in {
            0%   {transform: translateY(-10%); opacity: 0;}
            100% {transform: translateY(0); opacity: 1;}
        }

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
            line-height: 150%;
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
            margin: 7vh 1rem;
        }
    }

    #arrows {
        position: absolute;
        bottom: 8vh;
        display: flex;
        flex-flow: column;
        align-self: center;
        cursor: pointer;
        animation: updown 900ms ease 350ms infinite both;

        @keyframes updown {
            0%   {transform: translateY(-50%);}
            50% {transform: translateY(0);}
            100% {transform: translateY(-50%);}
        }

        div {
            display: flex;
        }

        .arrow {
            height: 3px;
            width: 25px;
            background-color: color(lGray);
            margin: 3px 0;

            &.left {
                transform: rotate(35deg) translate(4px);
            }

            &.right {
                transform: rotate(-35deg) translate(-4px);
            }
        }
    }
}

#services-tree {
    min-height: 80vh;
    background-image: radial-gradient(color(tColor), color(lGray)), url('../assets/tree2.png');
    background-blend-mode: difference;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;

    @include medium {
        background-size: contain;
    }

    h1 {
        text-transform: uppercase;
        color: color(pColor);
        font-family: font(sFont);
        font-weight: bolder;
        letter-spacing: 4px;
        font-size: 32px;
        padding: 5vh 0;

        span {
            color: color(dGray);
            font-weight: normal;
        }
    }

    .row {
        display: flex;
        justify-content: center;
        width: 100%;

        .item {
            display: flex;
            flex-flow: column;
            margin: 3vh 1vw;
            width: 50%;

            @include large {
                width: auto;
            }
        }

        &#row-1 .item {@include large {margin: 0 30vw;}}
        &#row-2 .item {@include large {margin: 0 15vw;}}
        &#row-3 .item {@include large {margin: 0;}}

        .icon {
            margin-bottom: 3vh;
            display: flex;
            justify-content: center;
            cursor: pointer;

            i {
                height: 60px;
                width: 60px;
                border-radius: 100px;
                border: 4px solid color(sColor);
                align-self: center;
                display: flex;
                justify-content: center;
                position: relative;
                
                &::before {
                    align-self: center;
                }

                &::after {
                    background-color: transparent;
                    border: 5px solid color(dGray);
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    border-radius: 100px;
                    animation: pulse 800ms ease-out infinite forwards;

                    @keyframes pulse {
                        0%   {transform: scale(1); opacity: 0;}
                        50% {opacity: .2;}
                        100% {transform: scale(1.8); opacity: 0;}
                    }
                }
            }
        }

        h2 {
            text-transform: uppercase;
            font-size: 2vh;
            letter-spacing: 3px;
            color: color(pColor);
            text-align: center;
            margin-bottom: 2vh;
            padding: 0 5%;
            cursor: pointer;
        }
    }

    #details {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #babcc0;
        display: flex;
        flex-flow: column;
        text-align: center;
        justify-content: center;
        transform: rotateY(90deg);
        //opacity: 0;
        transition: all ease 650ms;
        will-change: transform;
        background-image: radial-gradient(color(tColor), color(lGray)), url('../assets/circuits3.png');
        background-blend-mode: hard-light;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        h2, p, div {
            opacity: 0;
            transition: opacity ease 550ms 650ms;
            will-change: opacity;
        }

        h2, p {
            align-self: center;
        }

        &.active {
            transform: rotateY(0);
           //opacity: 1;            

            h2, p, div {
                opacity: 1;
            }
        }

        .btn.close {
            position: absolute;
            align-self: center;
            bottom: 5vh;
            cursor: pointer;
            height: 20px;
            width: 20px;
            padding: 10px;
            border-radius: 100px;
            border: 1px solid color(sColor);
            display: flex;
            flex-flow: column;
            justify-content: center;

            div {
                background-color: color(sColor);
                height: 1px;
            }

            div:nth-child(1) {
                transform: rotate(45deg) translateX(1px);
            }

            div:nth-child(2) {
                transform: rotate(-45deg);
            }
        }

        h2 {
            margin: 0 10vw;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 4vh;
            padding-bottom: 4vh;
            color: color(pColor);
        }

        p {
            margin: 0 10vw;
            line-height: 200%;
            font-size: 16px;
        }
    }
}

#features {
    display: flex;
    flex-wrap: wrap;
    padding: 5vw;

    @include medium { padding: 10vh 5vw; }

    .feature {
        display: flex;
        flex-flow: column;
        justify-content: center;
        width: 100%;
        align-self: baseline;

        @include medium { width: 33% }

        h3 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 2vh;
            color: color(pColor);
            padding: 4vh 0;
        }

        p {
            color: color(dGray);
            font-size: 10px;
            letter-spacing: 2px;
            text-transform: uppercase;
            line-height: 200%;
            padding: 0 5vw;
            text-align: center;
        }
    }
}

#partners {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4vh;
    justify-content: center;

    h2 {
        background-color: color(lGray);
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 3vh;
        color: color(pColor);
        padding: 4vh 0;
    }

    .partner {
        height: 160px;
        width: 160px;
        padding: 20px;
        display: flex;
        background-color: #FFF;

        img {
            align-self: center;
            width: 100%;
        }
    }
}
</style>

