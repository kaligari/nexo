<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <h1 class="a-title">Navbar</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--size-4">Available variables</h2>
                    <css-controller :fields="[
                        '--l-navbar-height',
                        '--l-navbar__item-padding'
                    ]" />
                </div>
            </div>
        </div>
    </section>
</template>
