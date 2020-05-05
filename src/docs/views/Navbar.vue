<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Navbar</h1>
                </div>
            </div>
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
    </section>
</template>
