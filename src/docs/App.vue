<template>
    <div :style="VuexStyles" >
        <nav
            class="l-navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="l-navbar__brand">
                <router-link :to="{ name: 'home' }">
                    Nexo CSS
                </router-link>
            </div>
            <div class="l-navbar__menu">
                <div class="l-navbar__start">
                    <div class="l-navbar__item l-navbar__item--hasDropdown">
                        <a
                            href="#"
                            class="l-navbar__link"
                        >
                            Layout
                        </a>
                        <div class="l-navbar__dropdown">
                            <router-link
                                class="l-navbar__item l-navbar__item--dropdown"
                                :to="{ name: 'columns' }"
                            >
                                Columns
                            </router-link>
                            <router-link
                                class="l-navbar__item l-navbar__item--dropdown"
                                :to="{ name: 'typography' }"
                            >
                                Typography
                            </router-link>
                            <router-link
                                class="l-navbar__item l-navbar__item--dropdown"
                                :to="{ name: 'navbar' }"
                            >
                                Navbar
                            </router-link>
                        </div>
                    </div>
                    <div class="l-navbar__item l-navbar__item--hasDropdown">
                        <a
                            href="#"
                            class="l-navbar__link"
                        >
                            Components
                        </a>
                        <div class="l-navbar__dropdown">
                            <router-link
                                class="l-navbar__item l-navbar__item--dropdown"
                                :to="{ name: 'buttons' }"
                            >
                                Buttons
                            </router-link>
                            <router-link
                                class="l-navbar__item l-navbar__item--dropdown"
                                :to="{ name: 'notifications' }"
                            >
                                Notifications
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="l-navbar__end">
                    <a
                        href="https://github.com/kaligari/nexo"
                        target="_blank"
                        class="a-button"
                    >
                        Nexo CSS on GitHub
                    </a>

                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    computed: {
        VuexStyles() {
            return this.$store.getters.cssVariables
        }
    }
}
</script>

<style lang="sass">
.l-navbar__brand
    font-family: Michroma, sans-serif
    font-size: 20px
    a
        color: #17252a
        text-decoration: none

</style>