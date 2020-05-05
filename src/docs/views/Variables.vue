<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column">
                    <h1 class="a-title --textAlign-center">Variables (known as CSS Custom Properties)</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--subtitle --textAlign-center">Available global variables</h2>
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
                    <h2 class="a-title a-title--subtitle --textAlign-center">Transition, animation speed variables</h2>
                    <css-controller :fields="[
                        '--speed-slow',
                        '--speed-normal',
                        '--speed-fast'
                    ]" />
                    <h2 class="a-title a-title--subtitle --textAlign-center">Body variables</h2>
                    <css-controller :fields="[
                        '--body-background-color',
                        '--hr-margin',
                        '--hr-background-color'
                    ]" />
                </div>
            </div>
        </div>
    </section>
</template>
