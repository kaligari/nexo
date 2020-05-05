<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Typography</h1>
                </div>
            </div>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Code</h2>
                <div class="l-row">
                    <div class="l-row__column --textAlign-center">
                        <p class="a-title">Title size</p>
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[0] }}</the-prism>
                    </div>
                </div>
                <div class="l-row">
                    <div class="l-row__column --textAlign-center">
                        <p class="a-title a-title--subtitle">Subtitle</p>
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[1] }}</the-prism>
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                        '--a-title-font-size',
                        '--a-title--subtitle-font-size',
                        '--a-title-margin-bottom',
                        '--a-title-font-family',
                        '--a-title-weight'
                        ]" />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            code: [
                '<p class="a-title">Title size</p>',
                '<p class="a-title a-title--subtitle">Subtitle</p>'
            ]
        }
    }
}
</script>
