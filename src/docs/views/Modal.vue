<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Modal</h1>
                    <p>
                        <a
                            href="#"
                            @click.prevent="modal = true"
                        >Click</a> to trigger modal.
                    </p>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--subtitle --textAlign-center">Available variables</h2>
                    <css-controller :fields="[
                        '--l-navbar-height',
                        '--l-navbar__item-padding',
                        '--l-navbar__item-color'
                    ]" />
                </div>
            </div>
        </div>
        <div
            class="a-modal"
            :class="{'a-modal--active':modal}"
        >
            <div class="a-modal__content">
                <div
                    class="a-modal__close"
                    @click="modal = false"
                ></div>
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
            modal: true
        }
    }
}

</script>