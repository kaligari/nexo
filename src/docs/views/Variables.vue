<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Variables (known as CSS Custom Properties)</h1>
                </div>
            </div>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Available global variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                            '--root-size',
                            '--size-default',
                            '--color-light',
                            '--color-primary',
                            '--color-primary-variant',
                            '--color-secondary',
                            '--color-secondary-variant',
                            '--color-info',
                            '--radius-default',
                            '--column-padding',
                            '--font-family-primary',
                            '--font-family-secondary'
                        ]" />
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Transition, animation speed variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                            '--speed-slow',
                            '--speed-normal',
                            '--speed-fast'
                        ]" />
                    </div>
                </div>
            </article>
            <article class="a-article">
                <h2 class="a-title a-title--subtitle --textAlign-center">Body variables</h2>
                <div class="l-row">
                    <div class="l-row__column">
                        <css-controller :fields="[
                            '--body-background-color',
                            '--hr-margin',
                            '--hr-background-color'
                        ]" />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
