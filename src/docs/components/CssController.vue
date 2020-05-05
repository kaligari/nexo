<template>
    <div>
        <div
            class="l-row"
            v-for="field, idx in fields"
            v-bind:key="field"
        >
            <div class="l-row__column --paddingBottom-0 --textAlign-right">
                <label :for="field">{{ field }}</label>
            </div>
            <div class="l-row__column --paddingBottom-0">
                <div class="a-control">
                    <input
                        class="a-control__input"
                        :id="field"
                        type="text"
                        :value="$store.getters.cssVariables[field]"
                        @input="$store.commit('SET_VALUE', {
                            name: field,
                            value: $event.target.value
                        })"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fields: {
            type: Array,
            required: true
        }
    },
    created() {
        this.fields.forEach(field => {
            this.$store.commit('SET_VALUE', {
                name: field,
                value: getComputedStyle(document.documentElement).getPropertyValue(field).trim()
            })
        })
    }
}
</script>