<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-centered">Navbar</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--subtitle --textAlign-centered">Available variables</h2>
                    <css-controller :fields="[
                        '--l-navbar-height',
                        '--l-navbar__item-padding'
                    ]" />
                </div>
            </div>
        </div>
    </section>
</template>
