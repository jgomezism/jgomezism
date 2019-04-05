<template>
    <div id="action-banner">
        <h2>BE A PART OF THE OPERATION</h2>
        <div class="actions-container">
            <router-link id="demobtn" to="/contact">Request a Demo</router-link>
            <router-link id="contactbtn" to="/services">Contact us</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../stylesheets/theme";

#action-banner {
    // background-color: color(pColor);
    background-image: radial-gradient(color(pColor), darken(color(pColor), 10%));

    h2 {
        color: color(lGray);
        font-family: font(sFont);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 18px;
        padding: 4vh;
        text-align: center;
        line-height: 150%;
    }

    .actions-container {
        display: flex;
        justify-content: center;
        padding-bottom: 4vh;

        a {
            font-family: font(tFont);
            cursor: pointer;
            border-radius: 100px;
            font-size: 1.3vh;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 1rem;
            text-decoration: none;
            margin: 0 1rem;
        }

        #demobtn {				
            border: 1px solid color(tColor);
            color: color(tColor);
            background-color: transparentize(color(pColor), .01);
        }

        #contactbtn {
            border: 1px solid color(pColor);
            color: color(pColor);
            background-color: transparentize(color(tColor), .01);
        }
    }
}
</style>
