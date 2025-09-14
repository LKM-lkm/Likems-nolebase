import { FontData } from '@mathjax/src/mjs/output/common/FontData.js';
export function CommonMathJaxTermesFontMixin(Base) {
    var _a;
    return _a = class extends Base {
        },
        _a.defaultVariants = [
            ...FontData.defaultVariants,
            ['-size3', 'normal'],
            ['-size4', 'normal'],
            ['-size5', 'normal'],
            ['-size6', 'normal'],
            ['-tex-calligraphic', 'script'],
            ['-tex-bold-calligraphic', 'bold-script'],
            ['-lf-tp', 'normal'],
            ['-rt-bt', 'normal'],
            ['-ex-md', 'normal']
        ],
        _a.defaultCssFonts = Object.assign(Object.assign({}, FontData.defaultCssFonts), { '-size3': ['serif', false, false], '-size4': ['serif', false, false], '-size5': ['serif', false, false], '-size6': ['serif', false, false], '-lf-tp': ['serif', false, false], '-rt-bt': ['serif', false, false], '-ex-md': ['serif', false, false] }),
        _a.defaultAccentMap = {
            0x005E: '\u02C6',
            0x007E: '\u02DC',
            0x0300: '`',
            0x0301: '\u00B4',
            0x0302: '\u02C6',
            0x0303: '\u02DC',
            0x0304: '\u00AF',
            0x0306: '\u02D8',
            0x0307: '\u02D9',
            0x0308: '\u00A8',
            0x030A: '\u02DA',
            0x030C: '\u02C7',
            0x2192: '\u20D7'
        },
        _a.defaultParams = Object.assign(Object.assign({}, FontData.defaultParams), { surd_height: 0.052, x_height: .441 }),
        _a.defaultSizeVariants = [
            'normal', '-smallop', '-largeop', '-size3', '-size4', '-size5', '-size6'
        ],
        _a.defaultStretchVariants = [
            'normal', '-ex-md', '-lf-tp', '-rt-bt'
        ],
        _a;
}
//# sourceMappingURL=common.js.map