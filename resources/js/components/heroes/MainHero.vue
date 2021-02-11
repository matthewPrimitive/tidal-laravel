<template>

<div class="hero">
    <div class="hero__content">
        <h1 class="text-darkBlueGrey">Hi, I'm Matthew.</h1>
        <p class="text-darkBlueGrey">I am a web developer.</p>
    </div>
</div>

</template>

<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
    .hero {
        height: 100vh;
        background-size: cover;

        &__content {
            & h1 {
                font-size: 48px;
            }
        }
    }
</style>
