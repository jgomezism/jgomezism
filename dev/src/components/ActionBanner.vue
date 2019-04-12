<template>
    <div id="action-banner">
        <h2>BE A PART OF THE OPERATION</h2>
        <div class="actions-container">
            <router-link class="button primary-1" to="/contact">Request a Demo</router-link>
            <router-link class="button secondary-1" to="/services">Contact us</router-link>
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
            margin: 0 1rem;
        }
    }
}
</style>
