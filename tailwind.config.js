module.exports = {
    content: ["./src/**/*.{vue,js,html}"],
    theme: {
        extend: {
            colors: {
                // green: {
                //   book: '#8ab350',
                //   button: '#81b84e',
                //   circle: '#e4f5da',
                //   ok: '#20e0e0',
                // },
            },
            spacing: {
                window: 'calc(100% - 2rem)'
            },
            borderRadius: {
                full: '50%',
            },
            screens: {
                'print': {'raw': 'print'},
            },
        },
    },
    variants: {
        fill: ['hover', 'focus'],
        extend: {
            borderWidth:        ['hover',   'focus' ],
            margin:             ['hover',   'focus' ],
            opacity:            ['disabled'         ],
            display:            ['group-hover'      ],
            translate:          ['active'           ],
            backgroundColor:    ['checked'          ],
        },
    },
    plugins: [],
}

module.exports.theme.extend.fill        = module.exports.theme.extend.colors
module.exports.theme.extend.minWidth    = module.exports.theme.extend.spacing
module.exports.theme.extend.maxWidth    = module.exports.theme.extend.spacing
module.exports.theme.extend.minHeight   = module.exports.theme.extend.spacing
module.exports.theme.extend.maxHeight   = module.exports.theme.extend.spacing
