<template>
    <section class="l-section">
        <div class="l-container">
            <div class="l-row">
                <div class="l-row__column --textAlign-centered">
                    <h1 class="a-title">Variables (known as CSS Custom Properties)</h1>
                </div>
            </div>
            <div class="l-row">
                <div class="l-row__column">
                    <h2 class="a-title a-title--size-4">Available variables</h2>
                    <css-controller :fields="[
                        '--root-size',
                        '--size-default',
                        '--size-1',
                        '--size-2',
                        '--size-3',
                        '--size-4',
                        '--size-5',
                        '--size-6',
                        '--size-7',
                        '--size-8',
                        '--color-light',
                        '--color-primary',
                        '--color-primary-variant',
                        '--color-secondary',
                        '--color-secondary-variant',
                        '--color-info',
                        '--radius-default',
                        '--column-padding',
                        '--weight-bold',
                        '--weight-normal',
                        '--weight-light',
                        '--slow',
                        '--normal',
                        '--fast'
                    ]" />
                </div>
            </div>
        </div>
    </section>
</template>
