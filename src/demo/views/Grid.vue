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
                        <code>
                            l-row__column--{{ i }}
                        </code>
                    </p>
                </div>
                <div class="l-row__column">
                    <p class="a-notification a-notification--info">
                        <code>
                            auto
                        </code>
                    </p>
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
