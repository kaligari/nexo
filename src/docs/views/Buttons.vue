<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-centered">Buttons</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--subtitle --textAlign-centered">Available variables</h2>
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
                        '--a-button-primary-hover-color'
                    ]" />
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <button class="a-button">
                        Button
                    </button>
                    <button class="a-button a-button--primary">
                        Button primary
                    </button>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <a href="#" class="a-button">Anchor</a>
                    <button class="a-button">Button</button>
                    <input class="a-button" type="submit" value="Submit input">
                    <input class="a-button" type="reset" value="Reset input">
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
