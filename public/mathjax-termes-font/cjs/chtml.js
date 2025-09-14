"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathJaxTermesFont = void 0;
var FontData_js_1 = require("@mathjax/src/cjs/output/chtml/FontData.js");
var common_js_1 = require("./common.js");
var normal_js_1 = require("./chtml/normal.js");
var bold_js_1 = require("./chtml/bold.js");
var italic_js_1 = require("./chtml/italic.js");
var bold_italic_js_1 = require("./chtml/bold-italic.js");
var double_struck_js_1 = require("./chtml/double-struck.js");
var fraktur_js_1 = require("./chtml/fraktur.js");
var fraktur_bold_js_1 = require("./chtml/fraktur-bold.js");
var script_js_1 = require("./chtml/script.js");
var script_bold_js_1 = require("./chtml/script-bold.js");
var sans_serif_js_1 = require("./chtml/sans-serif.js");
var sans_serif_bold_js_1 = require("./chtml/sans-serif-bold.js");
var sans_serif_italic_js_1 = require("./chtml/sans-serif-italic.js");
var sans_serif_bold_italic_js_1 = require("./chtml/sans-serif-bold-italic.js");
var monospace_js_1 = require("./chtml/monospace.js");
var smallop_js_1 = require("./chtml/smallop.js");
var largeop_js_1 = require("./chtml/largeop.js");
var size3_js_1 = require("./chtml/size3.js");
var size4_js_1 = require("./chtml/size4.js");
var size5_js_1 = require("./chtml/size5.js");
var size6_js_1 = require("./chtml/size6.js");
var tex_mathit_js_1 = require("./chtml/tex-mathit.js");
var tex_calligraphic_js_1 = require("./chtml/tex-calligraphic.js");
var tex_calligraphic_bold_js_1 = require("./chtml/tex-calligraphic-bold.js");
var tex_oldstyle_js_1 = require("./chtml/tex-oldstyle.js");
var tex_oldstyle_bold_js_1 = require("./chtml/tex-oldstyle-bold.js");
var tex_variant_js_1 = require("./chtml/tex-variant.js");
var lf_tp_js_1 = require("./chtml/lf-tp.js");
var rt_bt_js_1 = require("./chtml/rt-bt.js");
var ex_md_js_1 = require("./chtml/ex-md.js");
var delimiters_js_1 = require("./chtml/delimiters.js");
var Base = (0, common_js_1.CommonMathJaxTermesFontMixin)(FontData_js_1.ChtmlFontData);
var MathJaxTermesFont = (function (_super) {
    __extends(MathJaxTermesFont, _super);
    function MathJaxTermesFont() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.cssFontPrefix = 'GT';
        return _this;
    }
    MathJaxTermesFont.NAME = 'MathJaxTermes';
    MathJaxTermesFont.OPTIONS = __assign(__assign({}, Base.OPTIONS), { fontURL: '@mathjax/mathjax-termes-font/js/chtml/woff2', dynamicPrefix: '@mathjax/mathjax-termes-font/js/chtml/dynamic' });
    MathJaxTermesFont.defaultCssFamilyPrefix = 'MJX-GT-ZERO';
    MathJaxTermesFont.defaultVariantLetters = {
        'normal': '',
        'bold': 'B',
        'italic': 'I',
        'bold-italic': 'BI',
        'double-struck': 'DS',
        'fraktur': 'F',
        'bold-fraktur': 'FB',
        'script': 'S',
        'bold-script': 'SB',
        'sans-serif': 'SS',
        'bold-sans-serif': 'SSB',
        'sans-serif-italic': 'SSI',
        'sans-serif-bold-italic': 'SSBI',
        'monospace': 'M',
        '-smallop': 'SO',
        '-largeop': 'LO',
        '-size3': 'S3',
        '-size4': 'S4',
        '-size5': 'S5',
        '-size6': 'S6',
        '-tex-mathit': 'MI',
        '-tex-calligraphic': 'C',
        '-tex-bold-calligraphic': 'CB',
        '-tex-oldstyle': 'OS',
        '-tex-bold-oldstyle': 'OB',
        '-tex-variant': 'V',
        '-lf-tp': 'LT',
        '-rt-bt': 'RB',
        '-ex-md': 'EM'
    };
    MathJaxTermesFont.defaultDelimiters = delimiters_js_1.delimiters;
    MathJaxTermesFont.defaultChars = {
        'normal': normal_js_1.normal,
        'bold': bold_js_1.bold,
        'italic': italic_js_1.italic,
        'bold-italic': bold_italic_js_1.boldItalic,
        'double-struck': double_struck_js_1.doubleStruck,
        'fraktur': fraktur_js_1.fraktur,
        'bold-fraktur': fraktur_bold_js_1.frakturBold,
        'script': script_js_1.script,
        'bold-script': script_bold_js_1.scriptBold,
        'sans-serif': sans_serif_js_1.sansSerif,
        'bold-sans-serif': sans_serif_bold_js_1.sansSerifBold,
        'sans-serif-italic': sans_serif_italic_js_1.sansSerifItalic,
        'sans-serif-bold-italic': sans_serif_bold_italic_js_1.sansSerifBoldItalic,
        'monospace': monospace_js_1.monospace,
        '-smallop': smallop_js_1.smallop,
        '-largeop': largeop_js_1.largeop,
        '-size3': size3_js_1.size3,
        '-size4': size4_js_1.size4,
        '-size5': size5_js_1.size5,
        '-size6': size6_js_1.size6,
        '-tex-mathit': tex_mathit_js_1.texMathit,
        '-tex-calligraphic': tex_calligraphic_js_1.texCalligraphic,
        '-tex-bold-calligraphic': tex_calligraphic_bold_js_1.texCalligraphicBold,
        '-tex-oldstyle': tex_oldstyle_js_1.texOldstyle,
        '-tex-bold-oldstyle': tex_oldstyle_bold_js_1.texOldstyleBold,
        '-tex-variant': tex_variant_js_1.texVariant,
        '-lf-tp': lf_tp_js_1.lfTp,
        '-rt-bt': rt_bt_js_1.rtBt,
        '-ex-md': ex_md_js_1.exMd
    };
    MathJaxTermesFont.defaultStyles = __assign(__assign({}, FontData_js_1.ChtmlFontData.defaultStyles), { 'mjx-container[jax="CHTML"] > mjx-math.GT-N[breakable] > *': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-N'
        }, '.GT-N': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-N'
        }, '.GT-B': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-B'
        }, '.GT-I': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-I'
        }, '.GT-BI': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-BI'
        }, '.GT-DS': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-DS'
        }, '.GT-F': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-F'
        }, '.GT-FB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-FB'
        }, '.GT-S': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-S'
        }, '.GT-SB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SB'
        }, '.GT-SS': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SS'
        }, '.GT-SSB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SSB'
        }, '.GT-SSI': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SSI'
        }, '.GT-SSBI': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SSBI'
        }, '.GT-M': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-M'
        }, '.GT-SO': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-SO'
        }, '.GT-LO': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-LO'
        }, '.GT-S3': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-S3'
        }, '.GT-S4': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-S4'
        }, '.GT-S5': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-S5'
        }, '.GT-S6': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-S6'
        }, '.GT-MI': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-MI'
        }, '.GT-C': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-C'
        }, '.GT-CB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-CB'
        }, '.GT-OS': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-OS'
        }, '.GT-OB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-OB'
        }, '.GT-V': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-V'
        }, '.GT-LT': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-LT'
        }, '.GT-RB': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-RB'
        }, '.GT-EM': {
            'font-family': 'MJX-GT-ZERO, MJX-GT-EM'
        } });
    MathJaxTermesFont.defaultFonts = __assign(__assign({}, FontData_js_1.ChtmlFontData.defaultFonts), { '@font-face /* MJX-GT-ZERO */': {
            'font-family': 'MJX-GT-ZERO',
            src: 'url("%%URL%%/mjx-gt-zero.woff2") format("woff2")'
        }, '@font-face /* MJX-BRK */': {
            'font-family': 'MJX-BRK',
            src: 'url("%%URL%%/mjx-gt-brk.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-N */': {
            'font-family': 'MJX-GT-N',
            src: 'url("%%URL%%/mjx-gt-n.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-B */': {
            'font-family': 'MJX-GT-B',
            src: 'url("%%URL%%/mjx-gt-b.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-I */': {
            'font-family': 'MJX-GT-I',
            src: 'url("%%URL%%/mjx-gt-i.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-BI */': {
            'font-family': 'MJX-GT-BI',
            src: 'url("%%URL%%/mjx-gt-bi.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-DS */': {
            'font-family': 'MJX-GT-DS',
            src: 'url("%%URL%%/mjx-gt-ds.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-F */': {
            'font-family': 'MJX-GT-F',
            src: 'url("%%URL%%/mjx-gt-f.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-FB */': {
            'font-family': 'MJX-GT-FB',
            src: 'url("%%URL%%/mjx-gt-fb.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-S */': {
            'font-family': 'MJX-GT-S',
            src: 'url("%%URL%%/mjx-gt-s.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SB */': {
            'font-family': 'MJX-GT-SB',
            src: 'url("%%URL%%/mjx-gt-sb.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SS */': {
            'font-family': 'MJX-GT-SS',
            src: 'url("%%URL%%/mjx-gt-ss.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SSB */': {
            'font-family': 'MJX-GT-SSB',
            src: 'url("%%URL%%/mjx-gt-ssb.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SSI */': {
            'font-family': 'MJX-GT-SSI',
            src: 'url("%%URL%%/mjx-gt-ssi.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SSBI */': {
            'font-family': 'MJX-GT-SSBI',
            src: 'url("%%URL%%/mjx-gt-ssbi.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-M */': {
            'font-family': 'MJX-GT-M',
            src: 'url("%%URL%%/mjx-gt-m.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-SO */': {
            'font-family': 'MJX-GT-SO',
            src: 'url("%%URL%%/mjx-gt-so.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-LO */': {
            'font-family': 'MJX-GT-LO',
            src: 'url("%%URL%%/mjx-gt-lo.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-S3 */': {
            'font-family': 'MJX-GT-S3',
            src: 'url("%%URL%%/mjx-gt-s3.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-S4 */': {
            'font-family': 'MJX-GT-S4',
            src: 'url("%%URL%%/mjx-gt-s4.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-S5 */': {
            'font-family': 'MJX-GT-S5',
            src: 'url("%%URL%%/mjx-gt-s5.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-S6 */': {
            'font-family': 'MJX-GT-S6',
            src: 'url("%%URL%%/mjx-gt-s6.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-MI */': {
            'font-family': 'MJX-GT-MI',
            src: 'url("%%URL%%/mjx-gt-mi.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-C */': {
            'font-family': 'MJX-GT-C',
            src: 'url("%%URL%%/mjx-gt-c.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-CB */': {
            'font-family': 'MJX-GT-CB',
            src: 'url("%%URL%%/mjx-gt-cb.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-OS */': {
            'font-family': 'MJX-GT-OS',
            src: 'url("%%URL%%/mjx-gt-os.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-OB */': {
            'font-family': 'MJX-GT-OB',
            src: 'url("%%URL%%/mjx-gt-ob.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-V */': {
            'font-family': 'MJX-GT-V',
            src: 'url("%%URL%%/mjx-gt-v.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-LT */': {
            'font-family': 'MJX-GT-LT',
            src: 'url("%%URL%%/mjx-gt-lt.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-RB */': {
            'font-family': 'MJX-GT-RB',
            src: 'url("%%URL%%/mjx-gt-rb.woff2") format("woff2")'
        }, '@font-face /* MJX-GT-EM */': {
            'font-family': 'MJX-GT-EM',
            src: 'url("%%URL%%/mjx-gt-em.woff2") format("woff2")'
        } });
    MathJaxTermesFont.dynamicFiles = FontData_js_1.ChtmlFontData.defineDynamicFiles([
        ['latin', {
                'normal': [
                    [0xC0, 0xD6], [0xD8, 0xEF], [0xF1, 0xF6], [0xF8, 0x130], [0x132, 0x137], [0x139, 0x148], [0x14A, 0x165], [0x168, 0x17F], 0x18E, 0x192, 0x1A0, 0x1A1, 0x1AF, 0x1B0, [0x1CD, 0x1D4], [0x1D7, 0x1DD], 0x1E6, 0x1E7, 0x1EA, 0x1EB, 0x1F0, 0x1F4, 0x1F5, [0x1FA, 0x201], 0x204, 0x205, 0x208, 0x209, 0x20C, 0x20D, 0x210, 0x211, 0x214, 0x215, [0x218, 0x21B], [0x1E0C, 0x1E0F], [0x1E24, 0x1E27], 0x1E2A, 0x1E2B, 0x1E2E, 0x1E2F, [0x1E36, 0x1E39], [0x1E42, 0x1E47], [0x1E58, 0x1E5D], 0x1E62, 0x1E63, [0x1E6C, 0x1E6F], [0x1E80, 0x1E85], 0x1E92, 0x1E93, 0x1E97, 0x1E9E, [0x1EA0, 0x1EF9]
                ]
            }],
        ['latin-b', {
                'bold': [
                    [0xC0, 0xD6], [0xD8, 0xEF], [0xF1, 0xF6], [0xF8, 0x130], [0x132, 0x137], [0x139, 0x148], [0x14A, 0x165], [0x168, 0x17F], 0x18E, 0x192, 0x1A0, 0x1A1, 0x1AF, 0x1B0, [0x1CD, 0x1D4], [0x1D7, 0x1DD], 0x1E6, 0x1E7, 0x1EA, 0x1EB, 0x1F0, 0x1F4, 0x1F5, [0x1FA, 0x201], 0x204, 0x205, 0x208, 0x209, 0x20C, 0x20D, 0x210, 0x211, 0x214, 0x215, [0x218, 0x21B], [0x1E0C, 0x1E0F], [0x1E24, 0x1E27], 0x1E2A, 0x1E2B, 0x1E2E, 0x1E2F, [0x1E36, 0x1E39], [0x1E42, 0x1E47], [0x1E58, 0x1E5D], 0x1E62, 0x1E63, [0x1E6C, 0x1E6F], [0x1E80, 0x1E85], 0x1E92, 0x1E93, 0x1E97, [0x1EA0, 0x1EF9]
                ]
            }],
        ['latin-i', {
                'italic': [
                    [0xC0, 0xD6], [0xD8, 0xEF], [0xF1, 0xF6], [0xF8, 0x130], [0x132, 0x137], [0x139, 0x148], [0x14A, 0x165], [0x168, 0x17F], 0x18E, 0x192, 0x1A0, 0x1A1, 0x1AF, 0x1B0, [0x1CD, 0x1D4], [0x1D7, 0x1DD], 0x1E6, 0x1E7, 0x1EA, 0x1EB, 0x1F0, 0x1F4, 0x1F5, [0x1FA, 0x201], 0x204, 0x205, 0x208, 0x209, 0x20C, 0x20D, 0x210, 0x211, 0x214, 0x215, [0x218, 0x21B], [0x1E0C, 0x1E0F], [0x1E24, 0x1E27], 0x1E2A, 0x1E2B, 0x1E2E, 0x1E2F, [0x1E36, 0x1E39], [0x1E42, 0x1E47], [0x1E58, 0x1E5D], 0x1E62, 0x1E63, [0x1E6C, 0x1E6F], [0x1E80, 0x1E85], 0x1E92, 0x1E93, 0x1E97, [0x1EA0, 0x1EF9]
                ]
            }],
        ['latin-bi', {
                'bold-italic': [
                    [0xC0, 0xD6], [0xD8, 0xEF], [0xF1, 0xF6], [0xF8, 0x130], [0x132, 0x137], [0x139, 0x148], [0x14A, 0x165], [0x168, 0x17F], 0x18E, 0x192, 0x1A0, 0x1A1, 0x1AF, 0x1B0, [0x1CD, 0x1D4], [0x1D7, 0x1DD], 0x1E6, 0x1E7, 0x1EA, 0x1EB, 0x1F0, 0x1F4, 0x1F5, [0x1FA, 0x201], 0x204, 0x205, 0x208, 0x209, 0x20C, 0x20D, 0x210, 0x211, 0x214, 0x215, [0x218, 0x21B], [0x1E0C, 0x1E0F], [0x1E24, 0x1E27], 0x1E2A, 0x1E2B, 0x1E2E, 0x1E2F, [0x1E36, 0x1E39], [0x1E42, 0x1E47], [0x1E58, 0x1E5D], 0x1E62, 0x1E63, [0x1E6C, 0x1E6F], [0x1E80, 0x1E85], 0x1E92, 0x1E93, 0x1E97, [0x1EA0, 0x1EF9]
                ]
            }],
        ['double-struck', {
                'normal': [
                    0x2102, 0x210D, 0x2115, 0x2119, 0x211A, 0x211D, 0x2124, [0x213C, 0x2140], [0x2145, 0x2149], 0x1D538, 0x1D539, [0x1D53B, 0x1D53E], [0x1D540, 0x1D544], 0x1D546, [0x1D54A, 0x1D550], [0x1D552, 0x1D56B], [0x1D7D8, 0x1D7E1]
                ],
                'double-struck': [
                    0x131, 0x237
                ]
            }, [0x2140]],
        ['fraktur', {
                'normal': [
                    0x210C, 0x2111, 0x211C, 0x2128, 0x212D, 0x1D504, 0x1D505, [0x1D507, 0x1D50A], [0x1D50D, 0x1D514], [0x1D516, 0x1D51C], [0x1D51E, 0x1D537], [0x1D56C, 0x1D59F]
                ],
                'fraktur': [
                    0x131, 0x237
                ],
                'bold-fraktur': [
                    0x131, 0x237
                ]
            }],
        ['script', {
                'normal': [
                    0x210A, 0x210B, 0x2110, 0x2112, 0x2113, 0x2118, 0x211B, 0x212C, [0x212F, 0x2131], 0x2133, 0x2134, 0x1D49C, 0x1D49E, 0x1D49F, 0x1D4A2, 0x1D4A5, 0x1D4A6, [0x1D4A9, 0x1D4AC], [0x1D4AE, 0x1D4B9], 0x1D4BB, [0x1D4BD, 0x1D4C3], [0x1D4C5, 0x1D503]
                ],
                'script': [
                    0x131, 0x237
                ],
                'bold-script': [
                    0x131, 0x237
                ]
            }],
        ['sans-serif', {
                'normal': [
                    [0x1D5A0, 0x1D66F], [0x1D7E2, 0x1D7F5]
                ],
                'sans-serif': [
                    0x131, 0x237
                ],
                'bold-sans-serif': [
                    0x131, 0x237
                ],
                'sans-serif-italic': [
                    0x131, 0x237
                ],
                'sans-serif-bold-italic': [
                    0x131, 0x237
                ]
            }],
        ['monospace', {
                'normal': [
                    [0x1D670, 0x1D6A3], [0x1D7F6, 0x1D7FF]
                ],
                'monospace': [
                    0x131, 0x237
                ]
            }],
        ['calligraphic', {
                '-tex-calligraphic': [
                    [0x41, 0x5A]
                ],
                '-tex-bold-calligraphic': [
                    [0x41, 0x5A]
                ]
            }],
        ['symbols', {
                'normal': [
                    0xA1, 0xA2, 0xA4, 0xA6, [0xA9, 0xAB], 0xAD, 0xAE, [0xBA, 0xBF], 0xE3F, 0x200C, 0x200D, 0x2017, 0x201A, 0x201E, 0x2022, 0x2030, 0x2031, [0x2039, 0x203B], 0x203D, 0x203F, 0x2040, 0x2045, 0x2046, 0x2052, 0x2054, 0x20A1, 0x20A6, 0x20A9, 0x20AB, 0x20B1, 0x20B2, 0x2103, 0x2109, 0x2116, 0x2117, 0x211E, 0x2120, 0x2122, 0x212E, 0x2300, 0x2305, 0x2306, 0x2422, 0x2423, 0x2E18, 0x3016, 0x3017, [0xFB00, 0xFB04], 0xFEFF
                ],
                '-largeop': [
                    0x2140
                ]
            }, [0x2017]],
        ['symbols-b-i', {
                'bold': [
                    0xA1, 0xA2, 0xA4, 0xA6, [0xA9, 0xAB], 0xAD, 0xAE, [0xBA, 0xBF], 0xE3F, 0x201A, 0x201E, 0x2022, 0x2030, 0x2031, [0x2039, 0x203B], 0x203D, 0x203F, 0x2040, 0x2045, 0x2046, 0x2052, 0x2054, 0x20A1, 0x20A6, 0x20A9, 0x20AB, 0x20B1, 0x2103, 0x2116, 0x2117, 0x211E, 0x2120, 0x2122, 0x212E, 0x2300, 0x2422, 0x2423
                ],
                'italic': [
                    [0xA1, 0xA7], [0xA9, 0xAE], 0xB1, [0xB5, 0xB7], [0xBA, 0xBF], 0xD7, 0xF0, 0xF7, 0xE3F, 0x2020, 0x2021, 0x2030, 0x2031, 0x203D, 0x203F, 0x2040, 0x2052, 0x2054, 0x20A1, 0x20A6, 0x20A9, 0x20AB, 0x20B1, 0x2103, 0x2116, 0x2117, 0x211E, 0x2120, 0x2122, 0x212E, 0x2422, 0x2423, [0xFB00, 0xFB04]
                ],
                'bold-italic': [
                    [0xA1, 0xA7], [0xA9, 0xAE], 0xB1, [0xB5, 0xB7], [0xBA, 0xBF], 0xD7, 0xF0, 0xF7, 0xE3F, 0x2020, 0x2021, 0x2030, 0x2031, 0x203D, 0x203F, 0x2040, 0x2052, 0x2054, 0x20A1, 0x20A6, 0x20A9, 0x20AB, 0x20B1, 0x2103, 0x2116, 0x2117, 0x211E, 0x2120, 0x2122, 0x212E, 0x2422, 0x2423, [0xFB00, 0xFB04]
                ]
            }],
        ['arrows', {
                'normal': [
                    0x219F, 0x21A1, 0x21A5, 0x21A7, 0x21AD, [0x21B0, 0x21B5], [0x21D6, 0x21D9], 0x21DC, 0x21DD, [0x21E6, 0x21E9], 0x21F3, 0x27A1, 0x27F4, 0x27FF, 0x2906, 0x2907, 0x294C, 0x294D, 0x294F, 0x2951, 0x295C, 0x295D, 0x2960, 0x2961, [0x2B04, 0x2B07], 0x2B0C, 0x2B0D, 0x2B31, 0x2B33
                ],
                'bold': [],
                '-largeop': [
                    0x2191, 0x2193, [0x2195, 0x219B], [0x219E, 0x21A3], 0x21A5, 0x21A7, [0x21A9, 0x21AE], [0x21B0, 0x21B3], 0x21B6, 0x21B7, [0x21BC, 0x21CF], 0x21D1, 0x21D3, [0x21D5, 0x21DB], [0x21E6, 0x21E9], 0x21F3, 0x21F5, 0x21F6, [0x2B04, 0x2B07], 0x2B0C, 0x2B0D, 0x2B31
                ],
                '-lf-tp': [
                    [0x21E6, 0x21E9], 0x2907, 0x2B05, 0x2B06
                ],
                '-rt-bt': [
                    [0x21E6, 0x21E9], 0x2906, 0x2B07, 0x2B0C
                ],
                '-ex-md': [
                    0x21E6, 0x21E7, 0x2B05, 0x2B06
                ]
            }, [0x219F, [0x2196, 0x2199], 0x21A1, 0x21A5, 0x21A7, 0x21AD, [0x21B0, 0x21B3], 0x21B6, 0x21B7, [0x21D6, 0x21D9], 0x21DC, 0x21DD, [0x21E6, 0x21E9], 0x21F3, 0x27A1, 0x27FD, 0x27FE, 0x2906, 0x2907, 0x294C, 0x294D, 0x294F, 0x2951, 0x295C, 0x295D, 0x2960, 0x2961, [0x2B04, 0x2B07], 0x2B0C, 0x2B0D, 0x2B31]],
        ['accents', {
                'normal': [
                    0xB8, 0x2BE, 0x2BF, 0x2DB, 0x2DD, 0x309, 0x30B, 0x30F, 0x311, 0x323, 0x326, [0x32C, 0x333], 0x33F, 0x34D, [0x20D3, 0x20D5], 0x20D8, [0x20DD, 0x20DF], [0x20E4, 0x20E6], [0x20E8, 0x20EB], 0x20F0
                ],
                '-smallop': [
                    0x311, [0x32C, 0x330], 0x332, 0x333, 0x33F, 0x34D
                ],
                '-largeop': [
                    0x311, [0x32C, 0x330]
                ],
                '-size3': [
                    0x311, [0x32C, 0x330]
                ],
                '-size4': [
                    0x311, [0x32C, 0x330]
                ],
                '-size5': [
                    0x311, [0x32C, 0x330]
                ],
                '-size6': [
                    0x311, [0x32C, 0x330]
                ],
                '-ex-md': [
                    0x332, 0x333, 0x33F, 0x34D
                ]
            }, [0x311, [0x32C, 0x330], 0x332, 0x333, 0x33F, 0x34D, 0x20E9]],
        ['accents-b-i', {
                'bold': [
                    0xB8, 0x2BE, 0x2BF, 0x2DB, 0x2DD, 0x309, 0x30B, 0x30F, 0x311, 0x323, 0x326, [0x32E, 0x332]
                ],
                'italic': [
                    0xB8, 0x2BE, 0x2BF, 0x2DB, 0x2DD, 0x309, 0x30B, 0x30F, 0x311, 0x323, 0x326, [0x32E, 0x332]
                ],
                'bold-italic': [
                    0xB8, 0x2BE, 0x2BF, 0x2DB, 0x2DD, 0x309, 0x30B, 0x30F, 0x311, 0x323, 0x326, [0x32E, 0x332]
                ]
            }],
        ['shapes', {
                'normal': [
                    0x2500, 0x2502, 0x250C, 0x2510, 0x2514, 0x2518, 0x251C, 0x2524, 0x252C, 0x2534, 0x253C, 0x2581, 0x2588, [0x2591, 0x2593], 0x25AC, 0x25AD, [0x2660, 0x2667], 0x266A, [0x266D, 0x266F], 0x26AD, 0x26AE, 0x2713, 0x2720, 0x27A1, 0x2B1A
                ],
                'bold': [
                    0x266A, 0x26AD, 0x26AE
                ],
                'italic': [
                    0x266A, 0x26AD, 0x26AE
                ],
                'bold-italic': [
                    0x266A, 0x26AD, 0x26AE
                ]
            }],
        ['stretchy', {
                'normal': [
                    0x2320, 0x2321, 0x23B2, 0x23B3
                ],
                'bold': [],
                '-size3': [
                    [0x222B, 0x2233], 0x2A0C, 0x2A11
                ],
                '-size4': [
                    [0x222B, 0x2233], 0x2A0C, 0x2A11
                ],
                '-size5': [
                    [0x222B, 0x2233], 0x2A0C, 0x2A11
                ],
                '-size6': [
                    [0x222B, 0x2233], 0x2A0C, 0x2A11
                ],
                '-lf-tp': [
                    [0x222B, 0x222D], 0x2A0C
                ],
                '-rt-bt': [
                    [0x222B, 0x222D], 0x2A0C
                ],
                '-ex-md': [
                    0x222C, 0x222D, 0x2A0C
                ]
            }, [[0x222B, 0x2233], 0x2A0C, 0x2A11, 0x2140, [0x220F, 0x2211], [0x22A2, 0x22A5], [0x22C0, 0x22C3], [0x2A00, 0x2A06], 0x2A09]],
        ['variants', {
                '-tex-variant': [
                    0x22, 0x27, 0x2A, 0x60, 0x7E, 0xAA, 0xB0, 0xB2, 0xB3, 0xB9, 0xBA, 0x2014, 0x2061, 0x2070, 0x2071, [0x2074, 0x208E]
                ]
            }],
        ['PUA', {
                'normal': [
                    [0xE000, 0xE009], 0xE803, [0xEA04, 0xEA06], 0xEA09, 0xEA0B, 0xEA0D, 0xEA10, 0xEA17, 0xEA1A, 0xEA1C, 0xEA1E, 0xEA1F, 0xEA26, 0xEA2A, 0xEA2C, 0xEA2F, 0xEA35, 0xEA37, 0xEA3A, 0xEA3E, 0xEA42, 0xEA45, 0xEB03, 0xEB04, 0xEB08, [0xEB0F, 0xEB12], 0xEB16, 0xEB19, 0xEB1E, 0xEB1F, 0xEB28, 0xEB29, 0xEB2B, 0xEB31, 0xEB35, 0xEB36, 0xEB3A, 0xEB3B, 0xEB40, 0xEB48, 0xEB49, 0xEB4D, 0xEB61, 0xEB63, 0xEB65, 0xEB6E, 0xEB6F, [0xEC08, 0xEC0E], 0xEC10, 0xEC11, 0xF6BE, 0xF6DE
                ],
                'bold': [
                    [0xE000, 0xE009], 0xE803, [0xEA04, 0xEA06], 0xEA09, 0xEA0B, 0xEA0D, 0xEA10, 0xEA17, 0xEA1A, 0xEA1C, 0xEA1E, 0xEA1F, 0xEA26, 0xEA2A, 0xEA2C, 0xEA2F, 0xEA35, 0xEA37, 0xEA3A, 0xEA3E, 0xEA42, 0xEA45, 0xEB03, 0xEB04, 0xEB08, [0xEB0F, 0xEB12], 0xEB16, 0xEB19, 0xEB1E, 0xEB1F, 0xEB28, 0xEB29, 0xEB2B, 0xEB31, 0xEB35, 0xEB36, 0xEB3A, 0xEB3B, 0xEB40, 0xEB48, 0xEB49, 0xEB4D, 0xEB61, 0xEB63, 0xEB65, 0xEB6E, 0xEB6F, [0xEC08, 0xEC0E], 0xEC10, 0xEC11, 0xF6BE, 0xF6DE
                ],
                'italic': [
                    [0xE000, 0xE009], 0xE803, [0xEA04, 0xEA06], 0xEA09, 0xEA0B, 0xEA0D, 0xEA10, 0xEA17, 0xEA1A, 0xEA1C, 0xEA1E, 0xEA1F, 0xEA26, 0xEA2A, 0xEA2C, 0xEA2F, 0xEA35, 0xEA37, 0xEA3A, 0xEA3E, 0xEA42, 0xEA45, 0xEB03, 0xEB04, 0xEB08, [0xEB0F, 0xEB12], 0xEB16, 0xEB19, 0xEB1E, 0xEB1F, 0xEB28, 0xEB29, 0xEB2B, 0xEB31, 0xEB35, 0xEB36, 0xEB3A, 0xEB3B, 0xEB40, 0xEB48, 0xEB49, 0xEB4D, 0xEB61, 0xEB63, 0xEB65, 0xEB6E, 0xEB6F, [0xEC08, 0xEC0E], 0xEC10, 0xEC11, 0xF6BE, 0xF6DE
                ],
                'bold-italic': [
                    [0xE000, 0xE009], 0xE803, [0xEA04, 0xEA06], 0xEA09, 0xEA0B, 0xEA0D, 0xEA10, 0xEA17, 0xEA1A, 0xEA1C, 0xEA1E, 0xEA1F, 0xEA26, 0xEA2A, 0xEA2C, 0xEA2F, 0xEA35, 0xEA37, 0xEA3A, 0xEA3E, 0xEA42, 0xEA45, 0xEB03, 0xEB04, 0xEB08, [0xEB0F, 0xEB12], 0xEB16, 0xEB19, 0xEB1E, 0xEB1F, 0xEB28, 0xEB29, 0xEB2B, 0xEB31, 0xEB35, 0xEB36, 0xEB3A, 0xEB3B, 0xEB40, 0xEB48, 0xEB49, 0xEB4D, 0xEB61, 0xEB63, 0xEB65, 0xEB6E, 0xEB6F, [0xEC08, 0xEC0E], 0xEC10, 0xEC11, 0xF6BE, 0xF6DE
                ]
            }]
    ]);
    return MathJaxTermesFont;
}(Base));
exports.MathJaxTermesFont = MathJaxTermesFont;
//# sourceMappingURL=chtml.js.map