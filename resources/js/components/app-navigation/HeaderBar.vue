<template>
    <div class="header">
        <h1>Tidal</h1>
        <div class="header__buttons">
            <button @click="sendToLogin()">Log In</button>
            <button @click="sendToSignUp()">Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        sendToLogin() {
            window.location.href = "/login"
        },
        sendToSignUp() {
            window.location.href = "/sign-up"
        }
    }
};
</script>

<style lang="scss" scoped>
$mainColor: #3FE0D0;
.header {
    padding: 12px;
    display: flex;
    box-shadow: 0px 3px rgb(150, 150, 150, 14%);
    position: fixed;
    width: 100%;
    background: white;
    h1 {
        color: $mainColor;
        margin-right: 20px;
        font-size: 32px;
    }

    &__buttons {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & button {
            width: 49%;
            border-radius: 20px;
            font-family: 'Inter', sans-serif;
            padding-top: 4px;
            padding-bottom: 4px;
            font-size: 14px;
            &:focus {
                outline: none;
            }
            &:nth-child(1) {
                border: 1px solid $mainColor;
                color: $mainColor;
            }
            &:nth-child(2) {
                border: 1px solid $mainColor;
                color: white;
                background-color: $mainColor;
            }
        }
    }
}
</style>
