<template>
    <div id="cases">
        <div id="wrapper">
            <div id="catch">
                <h2>We understand the challenges and provide the solutions</h2>
                <p>We've been there</p>
                <p>We not only came up with the solutions</p>
                <p>We have tested them</p>
                <p> and they work</p>
            </div>
            <div id="cases-list">
                <h2>LE Missions</h2>
                <ul id="le">
                    <li class="button secondary-1" v-on:click="cases(1)">Daily Operations</li>
                    <li class="button secondary-1">Information & Special Operations</li>
                    <li class="button secondary-1">Inter-Agency & Task Force Operations</li>
                    <li class="button secondary-1">Support & Collaboration</li>
                </ul>
                <h2>Other Cases</h2>
                <ul id="other">
                    <li class="button secondary-1">DHS: Real Time Data Sharing</li>
                    <li class="button secondary-1">Cyber Border</li>
                    <li class="button secondary-1">Franchises</li>
                </ul>
            </div>
        </div>
        <div id="case" v-bind:class="{ active: showCase }">
            <div class="container">
                <div class="btn close" v-on:click="showCase = !showCase"><div></div><div></div></div>
                <h2 id="case-title"></h2>
                <h3>Challenge</h3>
                <p id="case-challenge"></p>
                <p id="case-input"></p>
                <h3>Solution</h3>
                <p id="case-solution"></p>
                <p id="case-content"></p>
                <h3>Mission Goals and Objectives</h3>
                <ul id="case-mission"></ul>
                <h3 id="case-plan-title"></h3>
                <ul id="case-plan"></ul>
                <ul id="logos">
                    <li><a href="https://aws.amazon.com/govcloud-us/" target="_blank"><img src="@/assets/tech/AWS-01-150x150.png" alt="aws logo"></a></li>
                    <li><a href="https://www.fbi.gov/services/cjis" target="_blank"><img src="@/assets/tech/CJIS-01-150x150.png" alt="cjis logo"></a></li>
                    <li><a href="https://www.nist.gov/topics/information-technology" target="_blank"><img src="@/assets/tech/nist-01-01-150x150.png" alt="nist logo"></a></li>
                    <li><a href="https://csrc.nist.gov/projects/cryptographic-module-validation-program/standards" target="_blank"><img src="@/assets/tech//fips-01-150x150.png" alt="fips logo"></a></li>
                </ul>
            </div>
        </div>
        <ActionBanner/>
        <p id="reafirmation">From video walls, to geo-location, to at-a-glance credentials, to real-time data feeds, to custom member searches, to multiple levels of privacy, our platform provides the next evolution in social media through operational readiness. This is Intelligent Social Media, This is OPNET</p>
        <Footer/>
    </div>
</template>

<script>
import ActionBanner from "@/components/ActionBanner.vue";
import Footer from "@/components/Footer.vue";

export default {
    data() {
        return {
            showCase: false
        };
    },
    components: {
        ActionBanner,
        Footer
    },
    methods: {
        cases(num) {
            this.showCase = true;

            if(num == 1) {
                document.getElementById('case-title').innerText = 'Daily Operations';
                document.getElementById('case-challenge').innerText = 'Managing Intelligence/ ILP / Investigations/ Tactical Operations';
                document.getElementById('case-solution').innerText = 'A Secure, Scalable Cyber Platform that eliminates the learning curve for most officers and personnel creates a more effective and efficient work force. Most people are familiar and competent on some level of social media platform. Because of this social-cultural dynamic, ISM has very little learning curve and will be in use and effective almost immediately.​';
                document.getElementById('case-input').innerText = 'Opnet allows all officers and personnel to maintain total situational awareness 24/7. Agencies are realizing that the time saved by empowering officers before they ever have to stand for briefings, roll-call or other information events, actually saves money, time and even allows the platform to pay for itself!​';
                document.getElementById('case-content').innerText = `- Real-Time Collaboration, information sharing and operations support - all in one application. EOC, TOC, NIMS/ICS, Command, Planning, Intelligence, Investigations, Patrol... Visualize and make real-time roll-call and briefings, saving time, money and enhancing focus, efficiency and budget support.
                                                                    - Federal Level Security and Real-Time monitoring in support of cyber-security that meet and exceed industry standards. Includes GovCloud operations.
                                                                    - Data and information tempo acceleration means cost saving, increased operational efficiency and effectiveness.
                                                                    ​`;
                document.getElementById('case-mission').innerHTML = `
                                                                    <li>Multiple Executive Orders</li>
                                                                    <li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li>
                                                                    <li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li>
                                                                    <li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>
                                                                    `;
                document.getElementById('case-plan-title').innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById('case-plan').innerHTML =  `
                                                                    <li><strong>Mission 1.</strong> Prevent Terrorism and Enhance Security (Direct and Indirect): Goals 1.1, 1.2, 1.3</li>
                                                                    <li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li>
                                                                    <li><strong>Mission 5.</strong> Strengthen National Preparedness and Resilience: Goals 5.1, 5.2, 5.3, 5.4</li>
                                                                    `;                                           
            }
        }
    }
}
</script>


<style lang="scss" scoped>
// Theme
@import "../stylesheets/theme";
#wrapper {
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(color(pColor), transparentize(color(pColor), .3));
    min-height: 84vh;
    position: relative;

    @include medium {
        min-height: 88vh;
    }
}

#catch {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    animation: fade-in 700ms ease 350ms 1 both;
    width: 100%;

    @keyframes fade-in {
        0%   {transform: translateY(-10%); opacity: 0;}
        100% {transform: translateY(0); opacity: 1;}
    }

    @include medium { 
        width: 65%; 
    }

    h2 {
        text-transform: uppercase;
        color: color(tColor);
        font-family: font(sFont);
        letter-spacing: 2px;
        font-size: 20px;
        padding: 4% 7%;
        line-height: 150%;
    }

    p {
        color: color(lGray);
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 200%;
        padding: 0 4%;
    }
}

#cases-list {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    animation: fade-in 700ms ease 350ms 1 both;
    width: 100%;
    padding-bottom: 8vh;

    @keyframes fade-in {
        0%   {transform: translateY(-10%); opacity: 0;}
        100% {transform: translateY(0); opacity: 1;}
    }

    @include medium { 
        width: 25%;
        padding-bottom: 0;
    }

    h2 {
        text-transform: uppercase;
        color: color(lGray);
        font-family: font(sFont);
        letter-spacing: 2px;
        font-size: 16px;
        padding: 4% 7%;
        line-height: 150%;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    li {
        margin: 1vh 0;
    }
}

#case {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: transparentize(color(dGray), .3);
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 350ms ease;
    will-change: opacity;
    transform: scale(0);

    &.active {
        opacity: 1;
        transform: scale(1);

        .container {
            transform: rotateX(0);

            div, h2, h3, p ,ul {
                opacity: 1;
            }
        }
    }

    .container {
        align-self: center;
        position: relative;
        background-color: color(tColor);
        width: 80vw;
        margin: 20vh 0 5vh 0;
        border-radius: 20px;
        padding: 5%;
        transform: rotateX(90deg);
        transform-origin: top;
        transition: transform 850ms 300ms ease;
        will-change: transform;

        .btn.close {
            z-index: 1;
            position: absolute;
            right: 4vw;
            top: 2vh;
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

        div, h2, h3, p ,ul {
            opacity: 0;
            transition: opacity 400ms 750ms ease-in;
            will-change: opacity;
        }

        h2, h3 {
            text-transform: uppercase;
            font-size: 16px;
            letter-spacing: 3px;
            color: color(pColor);
            text-align: center;
            margin-bottom: 2vh;
            padding: 0 5%;
            cursor: pointer;
        }

        p {
            color: color(dGray);
            font-size: 10px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            line-height: 200%;
            font-weight: bold;
        }
    }

    #case-title {
        font-size: 18px;
        margin-bottom: 4vh;
    }
    #case-challenge {
        margin-bottom: 2vh;
    }
    #case-solution {
        margin-bottom: 2vh;
        color: #000;
    }
    #case-input {
        background-color: color(action);
        border-radius: 20px;
        padding: 5%;
        margin-bottom: 2vh;
        color: color(tColor);
        font-weight: normal;
    }
    #case-content {
        color: color(action);
    }
    #case-mission, #case-plan {
        list-style: inside;
        padding: 0 10%;
        padding-bottom: 2vh;
        color: color(dGray);
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: justify;
        line-height: 200%;
        font-weight: bold;

        strong {
            color: #000;
        }
    }
    #logos {
        display: flex;
        list-style: none;
        justify-content: center;

        img {
            width: 70px;
            padding: 10px;
        }
    }
}

#reafirmation {
    color: color(dGray);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    line-height: 200%;
    padding: 5vh 8%;
}
</style>
