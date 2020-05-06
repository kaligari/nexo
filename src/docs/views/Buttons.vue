<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Buttons</h1>
                </div>
            </div>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Code</h2>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column --textAlign-center">
                        <button class="a-button">
                            Button
                        </button>
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[0] }}</the-prism>
                    </div>
                </div>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column --textAlign-center">
                        <button class="a-button a-button--primary">
                            Button primary
                        </button><br /><br />
                        <button class="a-button a-button--secondary">
                            Button secondary
                        </button>
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[1] }}</the-prism>
                    </div>
                </div>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column --textAlign-center">
                        <a href="#" class="a-button">Anchor</a><br /><br />
                        <input class="a-button" type="submit" value="Submit input"><br /><br />
                        <input class="a-button" type="reset" value="Reset input"><br />
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[2] }}</the-prism>
                    </div>
                </div>
            </article>
            <article class="a-article">
                <div class="l-row">
                    <div class="l-row__column">
                        <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                        <css-controller :fields="[
                            '--a-button-padding',
                            '--a-button-border-radius',
                            '--a-button-border-color',
                            '--a-button-background-color',
                            '--a-button-color',
                            '--a-button-hover-background-color',
                            '--a-button-hover-color',
                            '--a-button-primary-background-color',
                            '--a-button-primary-color',
                            '--a-button-primary-hover-background-color',
                            '--a-button-primary-hover-color',
                            '--a-button-secondary-color',
                            '--a-button-secondary-background-color',
                            '--a-button-secondary-border-color',
                            '--a-button-secondary-hover-color',
                            '--a-button-secondary-hover-background-color',
                            '--a-button-secondary-hover-border-color'
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
                `<button class="a-button">Button</button>`,
                `<button class="a-button a-button--primary">\n    Button primary\n</button>\n\n<button class="a-button a-button--secondary">\n    Button secondary\n</button>`,
                `<a href="#" class="a-button">Anchor</a>\n<input class="a-button" type="submit" value="Submit input">\n<input class="a-button" type="reset" value="Reset input">`
            ]
        }
    }
}
</script>

<style lang="css" scoped>
</style>
