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
                black: {
                    'mate':         '#181818',
                    'mate-claro':   '#2f2f2f',
                },
            },
            spacing: {
                window: 'calc(100% - 2rem)',
                todo:   'calc(100vw)',
                custom: 'calc(100vh - 20rem)',
            },
            borderWidth: {
                '0.5': '0.5px'
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
