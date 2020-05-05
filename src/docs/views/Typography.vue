<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Typography</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                    <css-controller :fields="[
                        '--a-title-font-size',
                        '--a-title--subtitle-font-size',
                        '--a-title-margin-bottom',
                        '--a-title-font-family',
                        '--a-title-weight'
                    ]" />
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column --textAlign-center">
                    <p class="a-title">Title size</p>
                    <p class="a-title a-title--subtitle">Subtitle</p>
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
