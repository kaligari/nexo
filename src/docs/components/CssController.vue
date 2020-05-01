<template>
    <div>
        <div
            v-for="field, idx in fields"
            v-bind:key="field"
        >
            <label :for="field">{{ field }}</label>
            <input
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