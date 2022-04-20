<template>
  <nav>
    <div class="profile">
        <router-link to="/profile">
        <i class="fa-solid fa-user-circle"></i>
        <p class="mt-3">john@doe.com</p>
        </router-link>
    </div>
    <div class="navigation mt-3">
        <router-link :to="{ name: 'Inbox' }">Inbox</router-link>
        <router-link :to="{ name: 'Send' }">Send</router-link>
        <router-link :to="{ name: 'Trash' }">Trash</router-link>
        <router-link :to="{ name: 'Spam' }">Spam</router-link>
    </div>
    </nav>
    <router-view />
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
 .profile {
        width: 25%;
        height: 170px;
        position: fixed;
        text-align: initial;
        left: 0;
        top: 0;
        background: #d6d6d6;
        border-bottom: 0.5px solid rgba($color: #000000, $alpha: .2);
        // border-right: 0.5px solid rgba($color: #000000, $alpha: .2);
        a{
            position: absolute;
            top: 20px;
            left: 20px;
            color: #000;
            text-decoration: none;
            &:hover{
                color: #000;
            }
            i{
                font-size: 4rem;
            }
        }
    }
    nav {
        .navigation{
            position: fixed;
            left: 80px;
            top: 170px;
            display: grid;
        }
        height: 100%;
        width: 25%;
        padding: 30px 0;
        display: grid;
        position: fixed;
        border-right: 1px solid rgba($color: #000000, $alpha: .2);
        // top: 150px;
        a {
            font-weight: bold;
            color: #000000;
            line-height: 45px;
            text-decoration: none;
            font-weight: 500;
            &:hover {
                color: #636363;
            }
            &.router-link-exact-active {
                color: #636363;
            }
        }
    }
</style>