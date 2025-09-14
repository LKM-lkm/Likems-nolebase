import { V, H } from '@mathjax/src/mjs/output/common/Direction.js';
export const delimiters = {
    0x28: {
        dir: V,
        sizes: [.817, .977, 1.169, 1.399, 1.675, 2.007, 2.405],
        stretch: [0x239B, 0x239C, 0x239D],
        HDW: [.658, .158, .624]
    },
    0x29: {
        dir: V,
        sizes: [.817, .977, 1.169, 1.399, 1.675, 2.007, 2.405],
        stretch: [0x239E, 0x239F, 0x23A0],
        HDW: [.658, .158, .624]
    },
    0x2D: {
        c: 0x2212,
        dir: H,
        stretch: [0, 0x2212],
        HDW: [0.5, 0, .66],
        ext: 0.16,
        hd: [.5, 0]
    },
    0x2F: {
        dir: V,
        sizes: [.801, 1.049, 1.373, 1.799, 2.357, 3.087, 4.045]
    },
    0x3D: {
        dir: H,
        stretch: [0, 0x3D],
        HDW: [0.372, -0.128, .66],
        ext: 0.16,
        hd: [.372, -.128]
    },
    0x5B: {
        dir: V,
        sizes: [.837, .999, 1.191, 1.423, 1.699, 2.033, 2.433],
        stretch: [0x23A1, 0x23A2, 0x23A3],
        HDW: [.668, .168, .491]
    },
    0x5C: {
        dir: V,
        sizes: [.801, 1.049, 1.373, 1.799, 2.357, 3.087, 4.045]
    },
    0x5D: {
        dir: V,
        sizes: [.837, .999, 1.191, 1.423, 1.699, 2.033, 2.433],
        stretch: [0x23A4, 0x23A5, 0x23A6],
        HDW: [.668, .168, .491]
    },
    0x5E: {
        c: 0x302,
        dir: H,
        sizes: [.342, .608, .727, .87, 1.041, 1.249, 1.496]
    },
    0x5F: {
        c: 0x2013,
        dir: H,
        sizes: [.5],
        stretch: [0, 0x2013],
        HDW: [0.25, -0.201, .5],
        hd: [.25, -.201]
    },
    0x7B: {
        dir: V,
        sizes: [.821, .981, 1.173, 1.403, 1.679, 2.011, 2.409],
        stretch: [0x23A7, 0x7B, 0x23A9, 0x23A8],
        stretchv: [0, 1, 0, 0],
        HDW: [.66, .16, .547]
    },
    0x7C: {
        dir: V,
        sizes: [.801, .961, 1.153, 1.383, 1.659, 1.991, 2.389],
        schar: [0x7C, 0x2223],
        stretch: [0, 0x2223],
        HDW: [.65, .15, .204]
    },
    0x7D: {
        dir: V,
        sizes: [.821, .981, 1.173, 1.403, 1.679, 2.011, 2.409],
        stretch: [0x23AB, 0x7B, 0x23AD, 0x23AC],
        stretchv: [0, 1, 0, 0],
        HDW: [.66, .16, .547]
    },
    0x7E: {
        c: 0x303,
        dir: H,
        sizes: [.334, .601, .72, .863, 1.037, 1.241, 1.491]
    },
    0xAF: {
        c: 0x305,
        dir: H,
        sizes: [.333, .5],
        stretch: [0, 0x305],
        stretchv: [0, 1],
        HDW: [0.632, -0.588, 0],
        hd: [.632, -.588]
    },
    0x2C6: {
        c: 0x302,
        dir: H,
        sizes: [.342, .608, .727, .87, 1.041, 1.249, 1.496]
    },
    0x2C7: {
        c: 0x30C,
        dir: H,
        sizes: [.342, .608, .727, .87, 1.041, 1.249, 1.496]
    },
    0x2C9: {
        c: 0x305,
        dir: H,
        sizes: [.333, .5],
        stretch: [0, 0x305],
        stretchv: [0, 1],
        HDW: [0.632, -0.588, 0],
        hd: [.632, -.588]
    },
    0x2D8: {
        c: 0x306,
        dir: H,
        sizes: [.35, .62, .74, .885, 1.058, 1.266, 1.515]
    },
    0x2DC: {
        c: 0x303,
        dir: H,
        sizes: [.334, .601, .72, .863, 1.037, 1.241, 1.491]
    },
    0x302: {
        dir: H,
        sizes: [.342, .608, .727, .87, 1.041, 1.249, 1.496]
    },
    0x303: {
        dir: H,
        sizes: [.334, .601, .72, .863, 1.037, 1.241, 1.491]
    },
    0x305: {
        dir: H,
        sizes: [.333, .5],
        stretch: [0, 0x305],
        stretchv: [0, 1],
        HDW: [0.632, -0.588, 0],
        hd: [.632, -.588]
    },
    0x306: {
        dir: H,
        sizes: [.35, .62, .74, .885, 1.058, 1.266, 1.515]
    },
    0x30C: {
        dir: H,
        sizes: [.342, .608, .727, .87, 1.041, 1.249, 1.496]
    },
    0x2013: {
        dir: H,
        sizes: [.5],
        stretch: [0, 0x2013],
        HDW: [0.25, -0.201, .5],
        hd: [.25, -.201]
    },
    0x2014: {
        dir: H,
        sizes: [1],
        stretch: [0, 0x2014],
        HDW: [0.25, -0.201, 1],
        hd: [.25, -.201]
    },
    0x2015: {
        dir: H,
        stretch: [0, 0x2015],
        HDW: [0.276, -0.224, 1.16],
        ext: 0.16,
        hd: [.276, -.224]
    },
    0x2016: {
        dir: V,
        sizes: [.801, .961, 1.153, 1.383, 1.659, 1.991, 2.389],
        schar: [0x2016, 0x2225],
        stretch: [0, 0x2016],
        HDW: [.65, .15, .348]
    },
    0x203E: {
        c: 0xAF,
        dir: H,
        sizes: [.333, .5],
        stretch: [0, 0x305],
        stretchv: [0, 1],
        HDW: [0.632, -0.588, 0],
        hd: [.632, -.588]
    },
    0x2044: {
        dir: V,
        sizes: [.801, 1.049, 1.373, 1.799, 2.357, 3.087, 4.045]
    },
    0x20D0: {
        dir: H,
        sizes: [.312, .598],
        stretch: [0x20D0, 0x20D0],
        stretchv: [2, 1],
        HDW: [0.71, -0.6, 0],
        hd: [.644, -.6]
    },
    0x20D1: {
        dir: H,
        sizes: [.312, .598],
        stretch: [0, 0x20D0, 0x20D1],
        stretchv: [0, 1, 3],
        HDW: [0.71, -0.6, 0],
        hd: [.644, -.6]
    },
    0x20D6: {
        dir: H,
        sizes: [.322, .607],
        stretch: [0x20D6, 0x20D0],
        stretchv: [2, 1],
        HDW: [0.71, -0.534, 0],
        hd: [.644, -.6]
    },
    0x20D7: {
        dir: H,
        sizes: [.322, .607],
        stretch: [0, 0x20D0, 0x20D7],
        stretchv: [0, 1, 3],
        HDW: [0.71, -0.534, 0],
        hd: [.644, -.6]
    },
    0x20E1: {
        dir: H,
        sizes: [.396, .68],
        stretch: [0x20D6, 0x20D0, 0x20D7],
        stretchv: [2, 1, 3],
        HDW: [0.71, -0.534, 0],
        hd: [.644, -.6]
    },
    0x20EC: {
        dir: H,
        sizes: [.312, .598],
        stretch: [0, 0x34D, 0x20EC],
        stretchv: [0, 1, 3],
        HDW: [-0.15, 0.26, 0],
        hd: [-.15, .194]
    },
    0x20ED: {
        dir: H,
        sizes: [.312, .598],
        stretch: [0x20ED, 0x34D],
        stretchv: [2, 1],
        HDW: [-0.15, 0.26, 0],
        hd: [-.15, .194]
    },
    0x20EE: {
        dir: H,
        sizes: [.322, .607],
        stretch: [0x20EE, 0x34D],
        stretchv: [2, 1],
        HDW: [-0.084, 0.26, 0],
        hd: [-.15, .194]
    },
    0x20EF: {
        dir: H,
        sizes: [.322, .607],
        stretch: [0, 0x34D, 0x20EF],
        stretchv: [0, 1, 3],
        HDW: [-0.084, 0.26, 0],
        hd: [-.15, .194]
    },
    0x2190: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x2190, 0x27F5],
        stretch: [0x2190, 0x2190],
        stretchv: [2, 1],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x2191: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0x2191, 0x2191],
        stretchv: [2, 1],
        HDW: [.6, .09, .52]
    },
    0x2192: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x2192, 0x27F6],
        stretch: [0, 0x2190, 0x2192],
        stretchv: [0, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x2193: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0, 0x2191, 0x2193],
        stretchv: [0, 1, 3],
        HDW: [.59, .1, .52]
    },
    0x2194: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 0],
        schar: [0x2194, 0x27F7],
        stretch: [0x2190, 0x2190, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, 1.04],
        hd: [.276, -.224]
    },
    0x2195: {
        dir: V,
        sizes: [.881, 1.201],
        variants: [0, 2],
        stretch: [0x2191, 0x2191, 0x2193],
        stretchv: [2, 1, 3],
        HDW: [.69, .19, .52]
    },
    0x219A: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0x219A, 0x2190, 0, 0x219A],
        stretchv: [2, 1, 0, 1],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x219B: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0, 0x2190, 0x219B, 0x219A],
        stretchv: [0, 1, 3, 1],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x219E: {
        dir: H,
        sizes: [1.03, 1.35],
        variants: [0, 2],
        stretch: [0x219E, 0x2190],
        stretchv: [2, 1],
        HDW: [0.43, -0.07, 1.03],
        hd: [.276, -.224]
    },
    0x21A0: {
        dir: H,
        sizes: [1.03, 1.35],
        variants: [0, 2],
        stretch: [0, 0x2190, 0x21A0],
        stretchv: [0, 1, 3],
        HDW: [0.43, -0.07, 1.03],
        hd: [.276, -.224]
    },
    0x21A2: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 2],
        stretch: [0x2190, 0x2190, 0x21A2],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, 1.04],
        hd: [.276, -.224]
    },
    0x21A3: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 2],
        stretch: [0x21A3, 0x2190, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, 1.04],
        hd: [.276, -.224]
    },
    0x21A4: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21A4, 0x27FB],
        stretch: [0x2190, 0x2190, 0x21A4],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x21A6: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21A6, 0x27FC],
        stretch: [0x21A6, 0x2190, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x21A9: {
        dir: H,
        sizes: [.876, 1.196],
        variants: [0, 2],
        stretch: [0x2190, 0x21A9, 0x21A9],
        stretchv: [2, 1, 3],
        HDW: [0.508, -0.07, .876],
        hd: [.276, -.224]
    },
    0x21AA: {
        dir: H,
        sizes: [.876, 1.196],
        variants: [0, 2],
        stretch: [0x21AA, 0x21A9, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.508, -0.07, .876],
        hd: [.276, -.224]
    },
    0x21AB: {
        dir: H,
        sizes: [.876, 1.196],
        variants: [0, 2],
        stretch: [0x2190, 0x21A9, 0x21AB],
        stretchv: [2, 1, 3],
        HDW: [0.508, -0.018, .876],
        hd: [.276, -.224]
    },
    0x21AC: {
        dir: H,
        sizes: [.876, 1.196],
        variants: [0, 2],
        stretch: [0x21AC, 0x21A9, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.508, -0.018, .876],
        hd: [.276, -.224]
    },
    0x21AE: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 2],
        stretch: [0x219A, 0x2190, 0x219B, 0x219A],
        stretchv: [2, 1, 3, 1],
        HDW: [0.43, -0.07, 1.04],
        hd: [.276, -.224]
    },
    0x21BC: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0x21BC, 0x21BC],
        stretchv: [2, 1],
        HDW: [0.43, -0.224, .84],
        hd: [.276, -.224]
    },
    0x21BD: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0x21BD, 0x21BC],
        stretchv: [2, 1],
        HDW: [0.276, -0.07, .84],
        hd: [.276, -.224]
    },
    0x21BE: {
        dir: V,
        sizes: [.681, 1.001],
        variants: [0, 2],
        stretch: [0x21BE, 0x21BE],
        stretchv: [2, 1],
        HDW: [.59, .09, .366]
    },
    0x21BF: {
        dir: V,
        sizes: [.681, 1.001],
        variants: [0, 2],
        stretch: [0x21BF, 0x21BF],
        stretchv: [2, 1],
        HDW: [.59, .09, .366]
    },
    0x21C0: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0, 0x21BC, 0x21C0],
        stretchv: [0, 1, 3],
        HDW: [0.43, -0.224, .84],
        hd: [.276, -.224]
    },
    0x21C1: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0, 0x21BC, 0x21C1],
        stretchv: [0, 1, 3],
        HDW: [0.276, -0.07, .84],
        hd: [.276, -.224]
    },
    0x21C2: {
        dir: V,
        sizes: [.681, 1.001],
        variants: [0, 2],
        stretch: [0, 0x21BE, 0x21C2],
        stretchv: [0, 1, 3],
        HDW: [.59, .09, .366]
    },
    0x21C3: {
        dir: V,
        sizes: [.681, 1.001],
        variants: [0, 2],
        stretch: [0, 0x21BF, 0x21C3],
        stretchv: [0, 1, 3],
        HDW: [.59, .09, .366]
    },
    0x21C4: {
        dir: H,
        sizes: [.86, 1.18],
        variants: [0, 2],
        stretch: [0x21C4, 0x21C4, 0x21C4],
        stretchv: [2, 1, 3],
        HDW: [0.63, 0.13, .86],
        hd: [.476, -.024]
    },
    0x21C5: {
        dir: V,
        sizes: [.701, 1.021],
        variants: [0, 2],
        stretch: [0x21C5, 0x21C5, 0x21C5],
        stretchv: [2, 1, 3],
        HDW: [.6, .1, .92]
    },
    0x21C6: {
        dir: H,
        sizes: [.86, 1.18],
        variants: [0, 2],
        stretch: [0x21C6, 0x21C4, 0x21C6],
        stretchv: [2, 1, 3],
        HDW: [0.63, 0.13, .86],
        hd: [.476, -.024]
    },
    0x21C7: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0x21C7, 0x21C4],
        stretchv: [2, 1],
        HDW: [0.63, 0.13, .85],
        hd: [.476, -.024]
    },
    0x21C8: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0x21C8, 0x21C5],
        stretchv: [2, 1],
        HDW: [.6, .09, .92]
    },
    0x21C9: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0, 0x21C4, 0x21C9],
        stretchv: [0, 1, 3],
        HDW: [0.63, 0.13, .85],
        hd: [.476, -.024]
    },
    0x21CA: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0, 0x21C5, 0x21CA],
        stretchv: [0, 1, 3],
        HDW: [.59, .1, .92]
    },
    0x21CB: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0x21CB, 0x21CB, 0x21CB],
        stretchv: [2, 1, 3],
        HDW: [0.526, 0.026, .84],
        hd: [.372, -.128]
    },
    0x21CC: {
        dir: H,
        sizes: [.84, 1.16],
        variants: [0, 2],
        stretch: [0x21CC, 0x21CB, 0x21CC],
        stretchv: [2, 1, 3],
        HDW: [0.526, 0.026, .84],
        hd: [.372, -.128]
    },
    0x21CD: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0x21CD, 0x21CE, 0, 0x21CD],
        stretchv: [2, 1, 0, 1],
        HDW: [0.5, 0, .85],
        hd: [.352, -.148]
    },
    0x21CE: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 2],
        stretch: [0x21D0, 0x21CE, 0x21D2, 0x21CD],
        stretchv: [2, 1, 3, 1],
        HDW: [0.5, 0, 1.04],
        hd: [.352, -.148]
    },
    0x21CF: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0, 0x21CE, 0x21D2, 0x21CD],
        stretchv: [0, 1, 3, 1],
        HDW: [0.5, 0, .85],
        hd: [.352, -.148]
    },
    0x21D0: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21D0, 0x27F8],
        stretch: [0x21D0, 0x21D0],
        stretchv: [2, 1],
        HDW: [0.47, -0.03, .85],
        hd: [.352, -.148]
    },
    0x21D1: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0x21D1, 0x21D1],
        stretchv: [2, 1],
        HDW: [.6, .09, .6]
    },
    0x21D2: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21D2, 0x27F9],
        stretch: [0, 0x21D0, 0x21D2],
        stretchv: [0, 1, 3],
        HDW: [0.47, -0.03, .85],
        hd: [.352, -.148]
    },
    0x21D3: {
        dir: V,
        sizes: [.691, 1.011],
        variants: [0, 2],
        stretch: [0, 0x21D1, 0x21D3],
        stretchv: [0, 1, 3],
        HDW: [.59, .1, .6]
    },
    0x21D4: {
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 0],
        schar: [0x21D4, 0x27FA],
        stretch: [0x21D0, 0x21D0, 0x21D2],
        stretchv: [2, 1, 3],
        HDW: [0.47, -0.03, 1.04],
        hd: [.352, -.148]
    },
    0x21D5: {
        dir: V,
        sizes: [.881, 1.201],
        variants: [0, 2],
        stretch: [0x21D1, 0x21D1, 0x21D3],
        stretchv: [2, 1, 3],
        HDW: [.69, .19, .6]
    },
    0x21DA: {
        dir: H,
        sizes: [1.03, 1.35],
        variants: [0, 2],
        stretch: [0x21DA, 0x21DA],
        stretchv: [2, 1],
        HDW: [0.572, 0.072, 1.03],
        hd: [.428, -.072]
    },
    0x21DB: {
        dir: H,
        sizes: [1.03, 1.35],
        variants: [0, 2],
        stretch: [0, 0x21DA, 0x21DB],
        stretchv: [0, 1, 3],
        HDW: [0.572, 0.072, 1.03],
        hd: [.428, -.072]
    },
    0x21F5: {
        dir: V,
        sizes: [.701, 1.021],
        variants: [0, 2],
        stretch: [0x21F5, 0x21C5, 0x21F5],
        stretchv: [2, 1, 3],
        HDW: [.6, .1, .92]
    },
    0x21F6: {
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 2],
        stretch: [0, 0x21F6, 0x21F6],
        stretchv: [0, 1, 3],
        HDW: [0.83, 0.33, .85],
        hd: [.676, .176]
    },
    0x2212: {
        dir: H,
        stretch: [0, 0x2212],
        HDW: [0.5, 0, .66],
        ext: 0.16,
        hd: [.5, 0]
    },
    0x2215: {
        c: 0x2F,
        dir: V,
        sizes: [.801, 1.049, 1.373, 1.799, 2.357, 3.087, 4.045]
    },
    0x221A: {
        dir: V,
        sizes: [.707, 1.091, 1.475, 1.859, 2.243, 2.627, 3.011],
        stretch: [0x221A, 0x221A, 0x23B7],
        stretchv: [2, 1, 0],
        HDW: [.616, .09, .674],
        fullExt: [0.77, 1.327]
    },
    0x2223: {
        dir: V,
        sizes: [.801, .961, 1.153, 1.383, 1.659, 1.991, 2.389],
        stretch: [0, 0x2223],
        HDW: [.65, .15, .204]
    },
    0x2225: {
        dir: V,
        sizes: [.801, .961, 1.153, 1.383, 1.659, 1.991, 2.389],
        stretch: [0, 0x2225],
        HDW: [.65, .15, .348]
    },
    0x2261: {
        dir: H,
        stretch: [0, 0x2261],
        HDW: [0.468, -0.032, .66],
        ext: 0.16,
        hd: [.468, -.032]
    },
    0x2263: {
        dir: H,
        stretch: [0, 0x2263],
        HDW: [0.564, 0.064, .66],
        ext: 0.16,
        hd: [.564, .064]
    },
    0x2308: {
        dir: V,
        sizes: [.819, .98, 1.172, 1.403, 1.679, 2.012, 2.411],
        stretch: [0x23A1, 0x23A2],
        HDW: [.668, .15, .491]
    },
    0x2309: {
        dir: V,
        sizes: [.819, .98, 1.172, 1.403, 1.679, 2.012, 2.411],
        stretch: [0x23A4, 0x23A5],
        HDW: [.668, .15, .491]
    },
    0x230A: {
        dir: V,
        sizes: [.819, .98, 1.172, 1.403, 1.679, 2.012, 2.411],
        stretch: [0, 0x23A2, 0x23A3],
        HDW: [.65, .168, .491]
    },
    0x230B: {
        dir: V,
        sizes: [.819, .98, 1.172, 1.403, 1.679, 2.012, 2.411],
        stretch: [0, 0x23A5, 0x23A6],
        HDW: [.65, .168, .491]
    },
    0x2312: {
        c: 0x23DC,
        dir: H,
        sizes: [.514, 1.014, 1.514, 2.014, 2.514, 3.014, 3.514],
        stretch: [0x23DC, 0x23DC, 0x23DC],
        stretchv: [2, 1, 3],
        HDW: [0.758, -0.541, .514],
        hd: [.758, -.674]
    },
    0x2322: {
        c: 0x23DC,
        dir: H,
        sizes: [.514, 1.014, 1.514, 2.014, 2.514, 3.014, 3.514],
        stretch: [0x23DC, 0x23DC, 0x23DC],
        stretchv: [2, 1, 3],
        HDW: [0.758, -0.541, .514],
        hd: [.758, -.674]
    },
    0x2323: {
        c: 0x23DD,
        dir: H,
        sizes: [.514, 1.014, 1.514, 2.014, 2.514, 3.014, 3.514],
        stretch: [0x23DD, 0x23DD, 0x23DD],
        stretchv: [2, 1, 3],
        HDW: [-0.091, 0.308, .514],
        hd: [-.224, .308]
    },
    0x2329: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049],
        schar: [0x2329, 0x27E8]
    },
    0x232A: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049],
        schar: [0x232A, 0x27E9]
    },
    0x23AA: {
        dir: V,
        sizes: [.596],
        stretch: [0, 0x23AA, 0],
        HDW: [.596, 0, .547]
    },
    0x23AF: {
        c: 0x2013,
        dir: H,
        sizes: [.5],
        stretch: [0, 0x2013],
        HDW: [0.25, -0.201, .5],
        hd: [.25, -.201]
    },
    0x23B0: {
        dir: V,
        sizes: [1.194],
        stretch: [0x23A7, 0x23AA, 0x23AD],
        HDW: [.694, .5, .547]
    },
    0x23B1: {
        dir: V,
        sizes: [1.194],
        stretch: [0x23AB, 0x23AA, 0x23A9],
        HDW: [.694, .5, .547]
    },
    0x23B4: {
        dir: H,
        sizes: [.375, .75, 1.125, 1.5, 1.875, 2.25, 2.625],
        stretch: [0x23B4, 0x23B4, 0x23B4],
        stretchv: [2, 1, 3],
        HDW: [0.758, -0.548, .375],
        hd: [.758, -.674]
    },
    0x23B5: {
        dir: H,
        sizes: [.375, .75, 1.125, 1.5, 1.875, 2.25, 2.625],
        stretch: [0x23B5, 0x23B5, 0x23B5],
        stretchv: [2, 1, 3],
        HDW: [-0.098, 0.308, .375],
        hd: [-.224, .308]
    },
    0x23D0: {
        dir: V,
        sizes: [.527],
        stretch: [0, 0x2223],
        HDW: [.527, 0, .204]
    },
    0x23DC: {
        dir: H,
        sizes: [.514, 1.014, 1.514, 2.014, 2.514, 3.014, 3.514],
        stretch: [0x23DC, 0x23DC, 0x23DC],
        stretchv: [2, 1, 3],
        HDW: [0.758, -0.541, .514],
        hd: [.758, -.674]
    },
    0x23DD: {
        dir: H,
        sizes: [.514, 1.014, 1.514, 2.014, 2.514, 3.014, 3.514],
        stretch: [0x23DD, 0x23DD, 0x23DD],
        stretchv: [2, 1, 3],
        HDW: [-0.091, 0.308, .514],
        hd: [-.224, .308]
    },
    0x23DE: {
        dir: H,
        sizes: [.52, 1.019, 1.519, 2.019, 2.519, 3.019, 3.519],
        stretch: [0x23DE, 0xAF, 0x23DE, 0x23DE],
        stretchv: [2, 1, 3, 1],
        HDW: [0.792, -0.525, .52],
        hd: [.702, -.618]
    },
    0x23DF: {
        dir: H,
        sizes: [.52, 1.019, 1.519, 2.019, 2.519, 3.019, 3.519],
        stretch: [0x23DF, 0x5F, 0x23DF, 0x23DF],
        stretchv: [2, 1, 3, 1],
        HDW: [-0.075, 0.341, .52],
        hd: [-.168, .252]
    },
    0x23E0: {
        dir: H,
        sizes: [.562, 1.066, 1.568, 2.072, 2.576, 3.08, 3.584],
        stretch: [0x23E0, 0x23E0, 0x23E0],
        stretchv: [2, 1, 3],
        HDW: [0.748, -0.538, .562],
        hd: [.748, -.664]
    },
    0x23E1: {
        dir: H,
        sizes: [.562, 1.066, 1.568, 2.072, 2.576, 3.08, 3.584],
        stretch: [0x23E1, 0x23E1, 0x23E1],
        stretchv: [2, 1, 3],
        HDW: [-0.088, 0.298, .562],
        hd: [-.214, .298]
    },
    0x2500: {
        c: 0x2013,
        dir: H,
        sizes: [.5],
        stretch: [0, 0x2013],
        HDW: [0.25, -0.201, .5],
        hd: [.25, -.201]
    },
    0x2758: {
        c: 0x2223,
        dir: V,
        sizes: [.801, .961, 1.153, 1.383, 1.659, 1.991, 2.389],
        stretch: [0, 0x2223],
        HDW: [.65, .15, .204]
    },
    0x27E6: {
        dir: V,
        sizes: [.837, .999, 1.191, 1.423, 1.699, 2.033, 2.433],
        stretch: [0x27E6, 0x27E6, 0x27E6],
        stretchv: [2, 1, 3],
        HDW: [.668, .168, .495]
    },
    0x27E7: {
        dir: V,
        sizes: [.837, .999, 1.191, 1.423, 1.699, 2.033, 2.433],
        stretch: [0x27E7, 0x27E7, 0x27E7],
        stretchv: [2, 1, 3],
        HDW: [.668, .168, .495]
    },
    0x27E8: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0x27E9: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0x27EA: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0x27EB: {
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0x27EE: {
        dir: V,
        sizes: [.815, .975, 1.167, 1.397, 1.673, 2.005, 2.403],
        stretch: [0x27EE, 0x27EE, 0x27EE],
        stretchv: [2, 1, 3],
        HDW: [.657, .157, .418]
    },
    0x27EF: {
        dir: V,
        sizes: [.815, .975, 1.167, 1.397, 1.673, 2.005, 2.403],
        stretch: [0x27EF, 0x27EF, 0x27EF],
        stretchv: [2, 1, 3],
        HDW: [.657, .157, .418]
    },
    0x27F5: {
        c: 0x2190,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x2190, 0x27F5],
        stretch: [0x2190, 0x2190],
        stretchv: [2, 1],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x27F6: {
        c: 0x2192,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x2192, 0x27F6],
        stretch: [0, 0x2190, 0x2192],
        stretchv: [0, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x27F7: {
        c: 0x2194,
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 0],
        schar: [0x2194, 0x27F7],
        stretch: [0x2190, 0x2190, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, 1.04],
        hd: [.276, -.224]
    },
    0x27F8: {
        c: 0x21D0,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21D0, 0x27F8],
        stretch: [0x21D0, 0x21D0],
        stretchv: [2, 1],
        HDW: [0.47, -0.03, .85],
        hd: [.352, -.148]
    },
    0x27F9: {
        c: 0x21D2,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21D2, 0x27F9],
        stretch: [0, 0x21D0, 0x21D2],
        stretchv: [0, 1, 3],
        HDW: [0.47, -0.03, .85],
        hd: [.352, -.148]
    },
    0x27FA: {
        c: 0x21D4,
        dir: H,
        sizes: [1.04, 1.36],
        variants: [0, 0],
        schar: [0x21D4, 0x27FA],
        stretch: [0x21D0, 0x21D0, 0x21D2],
        stretchv: [2, 1, 3],
        HDW: [0.47, -0.03, 1.04],
        hd: [.352, -.148]
    },
    0x27FB: {
        c: 0x21A4,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21A4, 0x27FB],
        stretch: [0x2190, 0x2190, 0x21A4],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x27FC: {
        c: 0x21A6,
        dir: H,
        sizes: [.85, 1.17],
        variants: [0, 0],
        schar: [0x21A6, 0x27FC],
        stretch: [0x21A6, 0x2190, 0x2192],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .85],
        hd: [.276, -.224]
    },
    0x294A: {
        dir: H,
        sizes: [.75],
        stretch: [0x21BC, 0x2190, 0x21C1],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .75],
        hd: [.276, -.224]
    },
    0x294B: {
        dir: H,
        sizes: [.75],
        stretch: [0x21BD, 0x2190, 0x21C0],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .75],
        hd: [.276, -.224]
    },
    0x294E: {
        dir: H,
        sizes: [.75],
        stretch: [0x21BC, 0x2190, 0x21C0],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.224, .75],
        hd: [.276, -.224]
    },
    0x2950: {
        dir: H,
        sizes: [.75],
        stretch: [0x21BD, 0x2190, 0x21C1],
        stretchv: [2, 1, 3],
        HDW: [0.276, -0.07, .75],
        hd: [.276, -.224]
    },
    0x295A: {
        dir: H,
        sizes: [.754],
        stretch: [0x21BC, 0x2190, 0x21A4],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .754],
        hd: [.276, -.224]
    },
    0x295B: {
        dir: H,
        sizes: [.754],
        stretch: [0x21A6, 0x2190, 0x21C0],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .754],
        hd: [.276, -.224]
    },
    0x295E: {
        dir: H,
        sizes: [.754],
        stretch: [0x21BD, 0x2190, 0x21A4],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .754],
        hd: [.276, -.224]
    },
    0x295F: {
        dir: H,
        sizes: [.754],
        stretch: [0x21A6, 0x2190, 0x21C1],
        stretchv: [2, 1, 3],
        HDW: [0.43, -0.07, .754],
        hd: [.276, -.224]
    },
    0x3008: {
        c: 0x27E8,
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0x3009: {
        c: 0x27E9,
        dir: V,
        sizes: [.813, 1.061, 1.383, 1.807, 2.365, 3.093, 4.049]
    },
    0xFE37: {
        c: 0x23DE,
        dir: H,
        sizes: [.52, 1.019, 1.519, 2.019, 2.519, 3.019, 3.519],
        stretch: [0x23DE, 0xAF, 0x23DE, 0x23DE],
        stretchv: [2, 1, 3, 1],
        HDW: [0.792, -0.525, .52],
        hd: [.702, -.618]
    },
    0xFE38: {
        c: 0x23DF,
        dir: H,
        sizes: [.52, 1.019, 1.519, 2.019, 2.519, 3.019, 3.519],
        stretch: [0x23DF, 0x5F, 0x23DF, 0x23DF],
        stretchv: [2, 1, 3, 1],
        HDW: [-0.075, 0.341, .52],
        hd: [-.168, .252]
    }
};
//# sourceMappingURL=delimiters.js.map