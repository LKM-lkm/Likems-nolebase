import { ChtmlFontData, ChtmlCharOptions, ChtmlVariantData, ChtmlDelimiterData, DelimiterMap, CharMapMap } from '@mathjax/src/cjs/output/chtml/FontData.js';
import { StringMap } from '@mathjax/src/cjs/output/common/Wrapper.js';
declare const Base: import("@mathjax/src/cjs/output/common/FontData.js").FontDataClass<ChtmlCharOptions, ChtmlVariantData, ChtmlDelimiterData> & typeof ChtmlFontData;
export declare class MathJaxTermesFont extends Base {
    static NAME: string;
    static OPTIONS: {
        fontURL: string;
        dynamicPrefix: string;
    };
    protected static defaultCssFamilyPrefix: string;
    protected static defaultVariantLetters: StringMap;
    protected static defaultDelimiters: DelimiterMap<ChtmlDelimiterData>;
    protected static defaultChars: CharMapMap<ChtmlCharOptions>;
    protected static defaultStyles: {
        'mjx-container[jax="CHTML"] > mjx-math.GT-N[breakable] > *': {
            'font-family': string;
        };
        '.GT-N': {
            'font-family': string;
        };
        '.GT-B': {
            'font-family': string;
        };
        '.GT-I': {
            'font-family': string;
        };
        '.GT-BI': {
            'font-family': string;
        };
        '.GT-DS': {
            'font-family': string;
        };
        '.GT-F': {
            'font-family': string;
        };
        '.GT-FB': {
            'font-family': string;
        };
        '.GT-S': {
            'font-family': string;
        };
        '.GT-SB': {
            'font-family': string;
        };
        '.GT-SS': {
            'font-family': string;
        };
        '.GT-SSB': {
            'font-family': string;
        };
        '.GT-SSI': {
            'font-family': string;
        };
        '.GT-SSBI': {
            'font-family': string;
        };
        '.GT-M': {
            'font-family': string;
        };
        '.GT-SO': {
            'font-family': string;
        };
        '.GT-LO': {
            'font-family': string;
        };
        '.GT-S3': {
            'font-family': string;
        };
        '.GT-S4': {
            'font-family': string;
        };
        '.GT-S5': {
            'font-family': string;
        };
        '.GT-S6': {
            'font-family': string;
        };
        '.GT-MI': {
            'font-family': string;
        };
        '.GT-C': {
            'font-family': string;
        };
        '.GT-CB': {
            'font-family': string;
        };
        '.GT-OS': {
            'font-family': string;
        };
        '.GT-OB': {
            'font-family': string;
        };
        '.GT-V': {
            'font-family': string;
        };
        '.GT-LT': {
            'font-family': string;
        };
        '.GT-RB': {
            'font-family': string;
        };
        '.GT-EM': {
            'font-family': string;
        };
    };
    protected static defaultFonts: {
        '@font-face /* MJX-GT-ZERO */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-BRK */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-N */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-B */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-I */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-BI */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-DS */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-F */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-FB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-S */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SS */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SSB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SSI */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SSBI */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-M */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-SO */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-LO */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-S3 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-S4 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-S5 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-S6 */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-MI */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-C */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-CB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-OS */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-OB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-V */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-LT */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-RB */': {
            'font-family': string;
            src: string;
        };
        '@font-face /* MJX-GT-EM */': {
            'font-family': string;
            src: string;
        };
    };
    protected static dynamicFiles: import("@mathjax/src/cjs/output/common/FontData.js").DynamicFileList;
    cssFontPrefix: string;
}
export {};
