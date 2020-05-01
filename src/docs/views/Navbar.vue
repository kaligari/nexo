<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <h1 class="a-title">Navbar</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--size-4">Available variables</h2>
                    <div
                        v-for="field, idx in fields"
                        v-bind:key="field"
                    >
                        <label :for="field">{{ field }}</label>
                        <input
                            :id="field"
                            type="text"
                            :value="$store.getters[field]"
                            @input="$store.commit('SET_VALUE', {
                                name: field,
                                value: $event.target.value
                            })"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                'lNavbarHeight',
                'lNavbarItemPadding'
            ]
        }
    },
    created() {
        this.fields.forEach(field => {
            // TODO: Transform field name to css var name
            this.$store.commit('SET_VALUE', {
                name: field,
                value: getComputedStyle(document.documentElement).getPropertyValue('--l-navbar-height')
            })
        })
    }
}
</script>
