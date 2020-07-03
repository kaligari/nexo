<template>
    <div>
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
                    <router-link
                        class="l-navbar__item"
                        :to="{ name: 'variables' }"
                    >
                        Variables
                    </router-link>
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
                                :to="{ name: 'modal' }"
                            >
                                Modal
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="l-navbar__end">
                    <a
                        href="https://github.com/kaligari/nexo-css"
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
    watch: {
        VuexStyles: {
            deep: true,
            handler() {
                this.VuexStyles.forEach(item => {
                    if(item.root){
                        document.documentElement.style.setProperty(item.name, item.value)
                    } else {
                        document.body.style.setProperty(item.name, item.value)
                    }
                })
            }
        }
    },
    computed: {
        VuexStyles() {
            return this.$store.getters.cssVariables
        }
    }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Jost:300|Raleway:400,600&display=swap')

body
    --body-background-color: #FFDDA1
    --font-family-primary: 'Raleway', sans-serif
    --font-family-secondary: 'Jost', serif

.l-navbar__brand
    font-family: Michroma, sans-serif
    font-size: 1.25rem
    a
        color: #17252a
        text-decoration: none

.a-article
    background: #D58936
    margin-bottom: 1rem
    border-radius: 8px
    padding: 1rem

</style>