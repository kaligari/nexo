<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Modal</h1>
                </div>
            </div>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Code</h2>
                <div class="l-row --alignItems-center">
                    <div class="l-row__column --textAlign-center">
                        <p>
                            <a
                                href="#"
                                @click.prevent="modal = true"
                            >Click</a> to trigger modal.
                        </p>
                    </div>
                    <div class="l-row__column --textAlign-center">
                        <the-prism language="html">{{ code[0] }}</the-prism>
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                            '--l-navbar-height',
                            '--l-navbar__item-padding',
                            '--l-navbar__item-color'
                        ]" />
                    </div>
                </div>
            </article>
        </div>
        <div
            class="a-modal"
            :class="{'a-modal--active':modal}"
        >
            <div class="a-modal__content">
                <button
                    class="a-modal__close"
                    @click="modal = false"
                ></button>
                <h1 class="a-title --textAlign-center">Modal</h1>
                <p class=" --textAlign-center">
                    <a
                        href="#"
                        @click="modal = false"
                    >Click</a> to hide modal.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            modal: false,
            code: [
`<div class="a-modal a-modal--active">
    <div class="a-modal__content">
        <button class="a-modal__close"></button>
        Any content
    </div>
</div>`
            ]
        }
    }
}

</script>