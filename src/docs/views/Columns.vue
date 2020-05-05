<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Columns</h1>
                </div>
            </div>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Code</h2>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column">
                        <div class="l-row" style="background-color: gray;">
                            <div class="l-row__column">
                                <p class="a-notification --textAlign-center">auto</p>
                            </div>
                        </div>
                    </div>
                    <div class="l-row__column">
                        <the-prism language="html">{{ code[0] }}</the-prism>
                    </div>
                </div>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column">
                        <div class="l-row" style="background-color: gray;">
                            <div class="l-row__column l-row__column--6">
                                <p class="a-notification --textAlign-center">6</p>
                            </div>
                        </div>
                    </div>
                    <div class="l-row__column">
                        <the-prism language="html">{{ code[1] }}</the-prism>
                    </div>
                </div>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column">
                        <div class="l-row" style="background-color: gray;">
                            <div class="l-row__column l-row__column--6 l-row__column--offset3">
                                <p class="a-notification --textAlign-center">6</p>
                            </div>
                        </div>
                    </div>
                    <div class="l-row__column">
                        <the-prism language="html">{{ code[2] }}</the-prism>
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                            '--column-padding'
                        ]" />
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Example</h2>
                <div
                    class="l-row"
                    v-for="i in 11"
                >
                    <div
                        class="l-row__column --textAlign-center"
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
                    <div class="l-row__column l-row__column--12 --textAlign-center">
                        <p class="a-notification">12</p>
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
                '<div class="l-row">\n    <div class="l-row__column"></div>\n</div>',
                '<div class="l-row">\n    <div class="l-row__column l-row__column--6"></div>\n</div>',
                '<div class="l-row">\n    <div class="l-row__column\n                l-row__column--6\n                l-row__column--offset3\n    "></div>\n</div>'
            ]
        }
    }
}
</script>

<style lang="css" scoped>
</style>
