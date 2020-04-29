<template>
    <div>
        <section class="l-section">
            <div class="l-container">
                <div class="l-row">
                    <div class="l-row__column">
                        <div
                            style="display:inline-block;padding:1rem"
                            v-for="component in components"
                            v-bind:key="component"
                        >
                            <router-link :to="{ name: component }">{{ component }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <router-view />
    </div>
</template>

<script>
import { routes as components } from './router'
export default {
    data() {
        return {
            components
        }
    }
}
</script>
