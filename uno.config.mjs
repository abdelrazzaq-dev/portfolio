import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetMini,
} from 'unocss'

export default defineConfig({
    presets: [
        presetMini(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/',
        }),
    ]
})
