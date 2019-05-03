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
                <h2>Law Enforcement Missions</h2>
                <!-- MAKE IT SCROLL TO THE TOP OF THE SCREEN WHEN CLICKED! -->
                <ul id="le">
                    <li class="button secondary-1" v-on:click="cases(1)">Daily Operations</li>
                    <li class="button secondary-1" v-on:click="cases(2)">Information & Special Operations</li>
                    <li class="button secondary-1" v-on:click="cases(3)">Inter-Agency & Task Force Operations</li>
                    <li class="button secondary-1" v-on:click="cases(4)">Support & Collaboration</li>
                </ul>
                <h2>Other Cases</h2>
                <ul id="other">
                    <li class="button secondary-1" v-on:click="cases(5)">DHS: Real Time Data Sharing</li>
                    <li class="button secondary-1" v-on:click="cases(6)">Cyber Border</li>
                    <li class="button secondary-1" v-on:click="cases(7)">Franchises</li>
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
import { scroll } from "@/mixins/scroll.js"

export default {
    mixins: [scroll],
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
            this.scrollIt("#case");

            if(num == 1) {
                document.getElementById("case-title").innerText = "Daily Operations";
                document.getElementById("case-challenge").innerText = "Managing Intelligence, ILP, Investigations, and Tactical Operations";
                document.getElementById("case-solution").innerText = "A Secure, Scalable Cyber Platform that eliminates the learning curve for most officers and personnel creates a more effective and efficient work force. Most people are familiar and competent on some level of social media platform. Because of this social-cultural dynamic, Opnet has very little learning curve and will be in use and effective almost immediately.​";
                document.getElementById("case-input").innerText = "Opnet allows all officers and personnel to maintain total situational awareness 24/7. Agencies are realizing that the time saved by empowering officers before they ever have to stand for briefings, roll-call or other information events, actually saves money, time and even allows the platform to pay for itself!​";
                document.getElementById("case-content").innerText = "- Real-Time Collaboration, information sharing and operations support - all in one application. EOC, TOC, NIMS/ICS, Command, Planning, Intelligence, Investigations, Patrol... Visualize and make real-time roll-call and briefings, saving time, money and enhancing focus, efficiency and budget support.- Federal Level Security and Real-Time monitoring in support of cyber-security that meet and exceed industry standards. Includes GovCloud operations.- Data and information tempo acceleration means cost saving, increased operational efficiency and effectiveness.";
                document.getElementById("case-mission").innerHTML = "<li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>";
                document.getElementById("case-plan-title").innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById("case-plan").innerHTML = "<li><strong>Mission 1.</strong> Prevent Terrorism and Enhance Security (Direct and Indirect): Goals 1.1, 1.2, 1.3</li><li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li><li><strong>Mission 5.</strong> Strengthen National Preparedness and Resilience: Goals 5.1, 5.2, 5.3, 5.4</li>";
            }
            if(num == 2) {
                document.getElementById("case-title").innerText = "Information & Special Operations";
                document.getElementById("case-challenge").innerText = "Managing Intelligence/ ILP / Investigations/ Tactical Operations";
                document.getElementById("case-solution").innerText = "A Secure, Scalable Cyber Platform that eliminates the learning curve for most officers and personnel creates a more effective and efficient work force. Most people are familiar and competent on some level of social media platform. Because of this social-cultural dynamic, Opnet has very little learning curve and will be in use and effective almost immediately.​";
                document.getElementById("case-input").innerText = "Real-time information can be one of the most challenging difficulties in investigations, tactical operations and even in tactical intelligence. Current systems allow for sharing of information, but do not offer all of the tools and capabilities needed in one, secure platform, with a mobile app package designed to take load off of radio, link personnel and assets in the field to command or operations, and especially provide info-share in real-time.";
                document.getElementById("case-content").innerText = "- Real-Time Collaboration, information sharing and operations support - all in one application. EOC, TOC, NIMS/ICS, Command, Planning, Intelligence, Investigations, Patrol... Visualize and make real-time roll-call and briefings, saving time, money and enhancing focus, efficiency and budget support.- Federal Level Security and Real-Time monitoring in support of cyber-security that meet and exceed industry standards. Includes GovCloud operations.- Data and information tempo acceleration means cost saving, increased operational efficiency and effectiveness.";
                document.getElementById("case-mission").innerHTML = "<li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li> ";
                document.getElementById("case-plan-title").innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById("case-plan").innerHTML = "<li><strong>Mission 1.</strong> Prevent Terrorism and Enhance Security (Direct and Indirect): Goals 1.1, 1.2, 1.3</li><li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li><li><strong>Mission 5.</strong> Strengthen National Preparedness and Resilience: Goals 5.1, 5.2, 5.3, 5.4</li> ";
            }
            if(num == 3) {
                document.getElementById("case-title").innerText = "Inter-Agency & Task Force Operations";
                document.getElementById("case-challenge").innerText = "Inter-Agency and Task Force Operations and Collaboration";
                document.getElementById("case-solution").innerText = "Secure Cloud-based multi-media collaboration and information sharing is essential to successful task-force operations. Multi-Agency collaboration can now, for the first time in American Law Enforcement history excel and run in real-time with ISM. Eliminate all of the communications barriers, never be behind or have to wonder. Real-time, timely information exchange and operations.";
                document.getElementById("case-input").innerText = "Real-time information can be one of the most challenging difficulties in investigations, tactical operations and even in tactical intelligence. Current systems allow for sharing of information, but do not offer all of the tools and capabilities needed in one, secure platform, with a mobile app package designed to take load off of radio, link personnel and assets in the field to command or operations, and especially provide info-share in real-time.";
                document.getElementById("case-content").innerText = "Opnet is a secure cloud-based platform that was designed with multi-tiered, multi-level operations in mind. You can’t go wrong with ISM for managing";
                document.getElementById("case-mission").innerHTML = "<li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>";
                document.getElementById("case-plan-title").innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById("case-plan").innerHTML = "<li><strong>Mission 1.</strong> Prevent Terrorism and Enhance Security (Direct and Indirect): Goals 1.1, 1.2, 1.3</li><li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li><li><strong>Mission 5.</strong> Strengthen National Preparedness and Resilience: Goals 5.1, 5.2, 5.3, 5.4</li>";
            }
            if(num == 4) {
                document.getElementById("case-title").innerText = "Exercise Support and Collaboration";
                document.getElementById("case-challenge").innerText = "Collaboration for Exercise Support and Training";
                document.getElementById("case-solution").innerText = "Secure Cloud-based multi-media collaboration provided by Intelligent Social Media can change everything. Real-time collaboration, information sharing, multi-media tools, such as video conference, broadcast, media sharing, document storage and sharing, tactical mapping (on-the-fly) and much more are only a click away.";
                document.getElementById("case-input").innerText = "Any first responder who has been involved with the federal incident command system (ICS / NIMS) know how difficult it can be to coordinate and manage multiple agencies, assets and personnel – especially when the situation is dynamic or fluid. Keeping track of emerging scenarios, changing dynamics and people on the move can be frustrating and has resulted in many lessons learned over the years, especially since 9-11 and Hurricane Katrina.";
                document.getElementById("case-content").innerText = "Opnet has been used during Ardent Sentry exercises, by NORTHCOM, the San Diego State Viz Center, multiple agencies and even exercises involving the U.S. and Mexico – in Real Time. If you want to bridge the gap of geospatial, time zone and even cultural barriers, ISM is the solution you are looking for, and it can be employed immediately with a Near-0-Learning-Curve.";
                document.getElementById("case-mission").innerHTML = "<li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>";
                document.getElementById("case-plan-title").innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById("case-plan").innerHTML = "<li><strong>Mission 1.</strong> Prevent Terrorism and Enhance Security (Direct and Indirect): Goals 1.1, 1.2, 1.3</li><li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li><li><strong>Mission 5.</strong> Strengthen National Preparedness and Resilience: Goals 5.1, 5.2, 5.3, 5.4</li>";
            }
            if(num == 5) {
                document.getElementById("case-title").innerText = "Real-Time Information Sharing";
                document.getElementById("case-challenge").innerText = "DHS Mission Areas. Real-Time Information Sharing";
                document.getElementById("case-solution").innerText = "Secure Cloud-based multi-media collaboration provided by Intelligent Social Media can change everything. Real-time collaboration, information sharing, multi-media tools, such as video conference, broadcast, media sharing, document storage and sharing, tactical mapping (on-the-fly) and much more are only a click away.";
                document.getElementById("case-input").innerText = "The National Response Frameworks cover PREVENTION, PROTECTION, MITIGATION, RESPONSE, and RECOVERY. The problem is no one platform exists to assist and facilitate the success of all FIVE Frameworks – That is, until now! You don’t have to imagine any longer the possibilities of having your personnel, information resources, real-time sharing and collaboration in one place. Your spectrum of devices, mobile, desk, tactical and others can now work in coordination with REAL-TIME information collaboration and media (images, video, voice).​​";
                document.getElementById("case-content").innerText = "Opnet has been used during Ardent Sentry 15 and other exercises, by NORTHCOM, San Diego State University (Homeland Security Programs), multiple agencies and even exercises involving the U.S. and Mexico – in Real Time. It works! A social network experience requires minimal training and immediate up-time. The culture of the platform allows multiple operations and focal points to be addressed in real-time and at the same time! Good guys win!";
                document.getElementById("case-mission").innerHTML = "<li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>";
                document.getElementById("case-plan-title").innerText = "Some of the Federal Standards ISM supports are clearly communicated in:​";
                document.getElementById("case-plan").innerHTML = "<li>National Incident Management System / Incident Command System​</li><li>National Emergency Communications Plan & SAFECOM​</li><li>2014-2018 Homeland Security Strategic Plan​</li><li>9/11 Commission Report / FirstNet​</li><li>DHS S&T International Forum to Advance First Responders</li><li>Homeland Security, Mobile Application Adoption Best Practices​</li>";
            }
            if(num == 6) {
                document.getElementById("case-title").innerText = "Cyber-Border";
                document.getElementById("case-challenge").innerText = "Real-Time Secure U.S. Information Sharing";
                document.getElementById("case-solution").innerText = "A Secure, Scalable Cyber Platform that eliminates the learning curve for most officers and personnel creates a more effective and efficient work force. Most people are familiar and competent on some level of social media platform. Because of this social-cultural dynamic, Opnet has very little learning curve and will be in use and effective almost immediately.​";
                document.getElementById("case-input").innerText = "The U.S.-Mexico Border touches four U.S. States – California, Arizona, New Mexico and Texas. There are more that 2500 individual law enforcement agencies across these states representing Federal, State and Local entities and personnel. No system currently exists to provide 100% real-time collaboration and information asset sharing for these combined agencies. Intelligent Social Media can provide an immediate solution to this problem, enhancing the pre-Wall / Border Security projects initiated by the White House.​​";
                document.getElementById("case-content").innerText = "Social media has been around for many years. Government and security operations have bought into the misinformation that global systems like Facebook, Twitter, LinkedIn and hundred of others are the standard for networking, communications and collaboration. While the tool-types and methods are useful, it is now possible for governments and private entities to benefit from the same technologies used by dark networks, rogue states, and off-the-grid-regimes. ISM has shifted the paradigm for the “good guys,” and now the future of law enforcement and security can begin to “catch up” to the operational tempo of the “adversary,” whomever – or wherever, that may be… Increased arrests, deeper, more accurate awareness and knowledge, will enhance law enforcement effectiveness and also have the added benefit of positive financial implications. The ISM platform literally pays for itself.​";
                document.getElementById("case-mission").innerHTML = "<li>Link (9) CBP / JTF-W Sectors with Federal, State, Local, Tribal and International Agencies.</li><li>Multiple Executive Orders</li><li>Strongly addresses three of four capability gaps as defined by IFAFRI (The International Forum to Advance First Responder Innovation – DHS S&T)</li><li>Signifcant force multiplier and support for National Incident Managment System (NIMS)</li><li>Enables Incident Command System (ICS) in support of mutual aid, resource management and operations</li>";
                document.getElementById("case-plan-title").innerText = "Homeland Security Fiscal Years 2014-2018 Strategic Plan";
                document.getElementById("case-plan").innerHTML = "<li><strong>Mission 2.</strong> Secure and Manage our Borders: Goals 2.1, 2.3</li><li><strong>Mission 3.</strong> Enforce and Administer Our Immigration Laws</li><li><strong>Mission 4.</strong> Safeguard and Secure Cyberspace: Goals 4.1, 4.2, 4.3, 4.4</li>";
            }
            if(num == 7) {
                document.getElementById("case-title").innerText = "Franchises";
                document.getElementById("case-challenge").innerText = "Managing Mission-Critical Information for Business Continuity";
                document.getElementById("case-solution").innerText = "A Secure, Scalable Cyber Platform that eliminates the learning curve for most officers and personnel creates a more effective and efficient work force. Most people are familiar and competent on some level of social media platform. Because of this social-cultural dynamic, Opnet has very little learning curve and will be in use and effective almost immediately.​";
                document.getElementById("case-input").innerText = "Intelligent Social Media allows owners, managers and employees total situational awareness 24/7. Business continuity and optimized efficiency through real-time data could mean the difference between success and failure, profit and loss.​";
                document.getElementById("case-content").innerText = "- Real-Time Collaboration, information sharing and operations support - all in one application. EOC, TOC, NIMS/ICS, Command, Planning, Intelligence, Investigations, Patrol... Visualize and make real-time roll-call and briefings, saving time, money and enhancing focus, efficiency and budget support.- Federal Level Security and Real-Time monitoring in support of cyber-security that meet and exceed industry standards. Includes GovCloud operations.- Data and information tempo acceleration means cost saving, increased operational efficiency and effectiveness.";
                document.getElementById("case-mission").innerHTML = "<li>Business Continuity</li><li>Policy Compliance Across Locations</li><li>Unified Messaging and Public Relations Alignment</li><li>Supply Chain Visibility for Improved Efficiencies and Opportunity Identification</li>";
                document.getElementById("case-plan-title").innerText = "";
                document.getElementById("case-plan").innerHTML = "";
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
    height: 100%;
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
    height: 100vh;

    @keyframes fade-in {
        0%   {transform: translateY(-10%); opacity: 0;}
        100% {transform: translateY(0); opacity: 1;}
    }

    @include medium { 
        width: 65%;
        height: auto;
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
        width: 85vw;
        margin: 15vh 0 5vh 0;
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
            color: color(pColor);
            text-align: center;
            margin-bottom: 2vh;
            padding: 0 5%;
            cursor: pointer;
        }

        h2 {
            letter-spacing: 3px;
            padding: 0 15%;
        }

        h3 {
            letter-spacing: 2px;
        }

        p {
            color: color(dGray);
            font-size: 12px;
            letter-spacing: 1px;
            text-align: center;
            line-height: 200%;
        }
    }

    #case-title {
        font-size: 18px;
        font-weight: 800;
        margin: 4vh;
    }
    #case-challenge {
        margin-bottom: 4vh;
    }
    #case-solution {
        margin-bottom: 4vh;
        color: #000;
    }
    #case-input {
        background-color: color(action);
        border-radius: 20px;
        padding: 5%;
        margin-bottom: 4vh;
        color: color(tColor);
        font-weight: normal;
    }
    #case-content {
        color: color(action);
        margin-bottom: 4vh;
    }
    #case-mission, #case-plan {
        list-style: inside;
        padding: 0 10%;
        padding-bottom: 4vh;
        color: color(dGray);
        font-size: 10px;
        letter-spacing: 1px;
        text-align: start;
        line-height: 200%;

        strong {
            color: #000;
        }
    }
    #logos {
        display: flex;
        list-style: none;
        justify-content: center;

        a {
            display: flex;
        }

        img {
            width: 60px;
            height: 60px;
            margin: 10px;
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
