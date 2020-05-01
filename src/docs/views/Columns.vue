<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <h1 class="a-title">Columns</h1>
                </div>
            </div>
            <div
                class="l-row"
                v-for="i in 11"
            >
                <div
                    class="l-row__column --textAlign-centered"
                    :class="`l-row__column--${i}`"
                >
                    <p class="a-notification">
                        {{ i }}
                    </p>
                </div>
                <div class="l-row__column">
                    <p class="a-notification a-notification--secondary --paddingLeft-0 --paddingRight-0">&nbsp;</p>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column l-row__column--12 --textAlign-centered">
                    <p class="a-notification">12</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
