import { NotationItem } from '@/constant/types';

/**
 * ≈ 十六分音
 * ~ 八分音
 * = 四分音
 * _ 半音
 * , 附点音符
 * - 持续单音
 * . 低音
 * 。高音
 */
const notationList: Array<NotationItem> = [
  // {
  //   detail: {
  //     name: '夜空中最亮的星',
  //     author: '逃跑计划',
  //     image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/qian.jpg',
  //   },
  //   speed: 100 / 60,
  //   beat: 1 / 4,
  //   // 需要特别处理 先半音再附点半音
  //   sheetMusic: [
  //     '3_2_3_2_3_5_5-5-5.|1-2-|1-00|1_1_2_3_10|5._1_2_3_10_5._|',
  //     '23---3-0|3_2_',
  //   ].join()
  // },
  {
    detail: {
      name: 'Down by the Salley Gardens',
      author: 'Madden',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/ai.jpg',
    },
    speed: 140 / 60,
    beat: 1 / 4,
    sheetMusic: [
      '1_2_|32_1_23_5_|6-51。_5_|65_3_21_2_|3--1_2_|',
      '32_1_23_5_|6-51。_5_|65_3_2,1_|1--5|1。7_5_61。_6_|',
      '7-53_5_|65_3_5_6_1。_2。_|3。--5|1。7_5_61。_6_|7-53_5_|',
      '65_3_5_6_1。_2。_|1。--1_2_|32_1_23_5_|6-51。_5_|65_3_21_2_|',
      '3--1_2_|32_1_23_5_|6-51。_5_|65_3_2,1_|1---'
    ].join()
  },
  {
    detail: {
      name: '天空の城ラピュタ',
      author: 'Joe Hisaishi',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/tian.jpg',
    },
    speed: 100 / 60,
    beat: 1 / 4,
    sheetMusic: [
      '0006_7_|1。,7_1。3。|7--3_3_|6,5_61。|5--3|4,3_41。',
      '|3-0_1。_1。_1。_|7,4#_47|7-06_7_|1。,7_1。3。|7--3_3_|6,5_61。',
      '|5--2_3_|41。_7_7_1。_1。|2。_2。_3。_1。0|1。_7_6_6_75#|6--1。_2。_|3。,2。_3。5。',
      '|2。--5_5_|1。,7_1。3。|3。---|6_7_1。72。_2。_|1。,5_5-|4。3。2。1。',
      '|3。--3。|6。-5。5。|3。_2。_1。-0_1。_|2。1。_2。_2。5。|3。--3。|6。-5。-',
      '|3。_2。_1。-0_1。_|2。1。_2。_2。7|6-'
    ].join()
  },
  {
    detail: {
      name: '사랑하면 할수록',
      author: '韩成民（한성민）',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/chen.jpg',
    },
    speed: 100 / 60,
    beat: 1 / 4,
    sheetMusic: [
      '3-3|2,1_7.|1-2|3-3_5_|6-6|7,6_5_2_|3--|',
      '003_5_|6-6|5-3_2_|3,4_3_2_|1-6._7._|1-2_3_|2,7._5.|6.--|',
      '000|3-3|2,1_7.|1-2|3-3_5_|6-6|7,6_5_2_|3--|',
      '003_5_|6-6|5-3_2_|3,4_3_2_|1-6._7._|1-2_3_|2,7._5._|6.--|',
      '035|6--|7--|7-2。|1。-6_6_|6-6|5,6_5_2_|43-|',
      '035|6--|7--|5#-7|1。--|1-3|2,7._5._|6.--|000'
    ].join()
  },
  {
    detail: {
      name: '送别',
      author: '李叔同',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/song.jpg',
    },
    speed: 100 / 60,
    beat: 1 / 4,
    sheetMusic: [
      '53_5_1。-|61。5-|51_2_32_1_|2---|',
      '53_5_1。-|61。5-|52_3_4,7._|1---|',
      '61。1。-|76_7_1。-|6_7_1。_6_6_5_3_1_|2---|',
      '53_5_1。,7_|61。5-|52_3_4,7._|1---'
    ].join()
  },
  {
    detail: {
      name: 'Mojito',
      author: '周董',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/mojito.png',
    },
    speed: 110 / 60,
    beat: 1 / 4,
    sheetMusic: [
      '0_3._6._1_|3_2_1_2_1_7._6._7._|1_6._00_3._6._1_|3_2_1_2_1_7._6._7._|',
      '100_6._1#_3_|5_4,0_5._7._2_|4_3,0_4._6._1_|3_2_2_3_2_1_7._6._|',
      '7.-0_3._6._1_|3_2_1_2_1_7._6._7._|1_6._00_3._6._1_|3_2_1_2_1_7._6._7._|',
      '100_6._1#_3_|5_4,0_5._7._2_|4_3,0_4._6._1_|3_2_2_3_2_1_7._1_|',
      '6.-0_1_1_1_|1_7._0_7._2_2_1_7._|1_6.,0_1_1_1_|1_7._0_7._2_2_1_4_|',
      '3-0_6._1#_3_|5_4,0_6_5_4_|4_3,0_4._6._1_|3_2_4_3_2_1_7._1_|',
      '6.00_6._1#_3_|5_4,0_6_5_4_|4_3,0_3._6._1_|3_2_4_3_2_1_7._1_|',
      '6.00_6._1#_3_|5_4,0_6_5_4_|4_3,0_3._6._1_|3_2_4_3_2_1_7._1_|',
      '6.000'
    ].join()
  },
  {
    detail: {
      name: '双门洞/惠化洞',
      author: '请回答1988',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/shuang.jpg',
    },
    speed: 100 / 60,
    beat: 1 / 4,
    // 需要特别处理 先半音再附点半音
    sheetMusic: [
      '3_4_|5,2。,1。|77_71。_7-6_5_6_1。65,3_2_1133_1_2112,|3_5535,|',
      '0_1_2_1_|3_334_5-5_5_5_6_7_1。,7_6,5_3,0_5._5_3_2_1,-0_2_3_4,5_6,5_2,---|',
      '000_1_2_1_|1-0_2_3_4,5_6,5_5,---|',
      '000_34_|5,2。,1。|77_71。_7-6_5_6_1。65-3_2_1133_1_2112|3_5535-|',
      '0_34_|1_133_1_2112|3_5535-0|',
      '3_4_|5,2。,1。|77_71。_7-6_5_6_1。65-3_2_|',
      '1133_1_2112|3_5535,-'
    ].join()
  },
  {
    detail: {
      name: '千本桜',
      author: '黒うさP / 初音ミク',
      image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/qian.jpg',
    },
    speed: 90 / 60,
    beat: 1 / 4,
    // 需要特别处理 先半音再附点半音
    sheetMusic: [
      '5_6_2=1=2=1=5_6_2=1=2=1=|5_6_2=1=2=1=4_3_4≈3~2=1_|5_6_2=1=5_6_2=1=2=1=|5_6_1。_4。_3。=4。=3。=2。=1。_6_|',
      '5_6_2=1=2=1=5_6_2=1=2=1=|5_6_2=1=2=1=4_3_4≈3~2=1_|2_1=2=4_2=4=6_5=6=1。_6。=1。=|4。_3。=4。~3。≈2。_2。_2。2_4_|',
      '5_6_2=1=2=1=5_6_2=1=2=1=|5_6_2=1=2=1=4_3_4≈3~2=1_|5_6_2=1=5_6_2=1=2=1=|5_6_1。_4。_3。=4。=3。=2。=1。_6_|',
      '5_6_2=1=2=1=5_6_2=1=2=1=|5_6_2=1=2=1=4_3_4≈3~2=1_|5=4=6=1。=2。=1。=6=5=2_,4=5_6_|2_22=0_1_20|',
      '2_,2=2_2_1_2_4_4_5_|2_,2=2_1_2_1_6._1_|2_,2=2_1_2_4_4_5_|65_6=5=42|',
      '2_,2=2_2_1_2_4_4_5_|2_,2=2_1_2_1_1_6._|2_,2=2_1_2_4_4_5_|65_6=5=42|',
      '4321|1_1=2=6._5._6.-|6._12_53|4._4=3_1_2-|',
      '4321|1_1=2=6._5._6.6._1_|2_22_45|3--2_4_|',
      '5_5=5=5_6_6,6_|1。_2。_5_4_62_4_|5_5=5=5_6_6,6_|6#_6_5_4_42_4_|',
      '5_5=5=5_6_6,6_|1。_2。_5_4_62_4_|6#654|5_6_4_1_22_4_|',
      '5_4_6_1。_2。0|',
      '4321|1_1=2=6._5._6.-|6._12_53|4._4=3_1_2-|',
      '4321|1_1=2=6._5._6.6._1_|2_22_45|3--2_4_|',
      '5_5=5=5_6_6,6_|1。_2。_5_4_62_4_|5_5=5=5_6_6,6_|6#_6_5_4_42_4_|',
      '5_5=5=5_6_6,6_|1。_2。_5_4_62_4_|6#654|5_6_5_6_63_5_|',
      '6_6=6=6_7_7,7_|2。_3。_6_5_73_5_|6_6=6=6_7_7,7_|1。7_6_5_53_5_|',
      '6_6=6=6_7_7,7_|2。_3。_6_5_73_5_|1。765|6_5_7_2。_3。-'
    ].join()
  },
  // {
  //   detail: {
  //     name: '贝尔加湖畔',
  //     author: '李健',
  //     image: 'https://blog-oss-file.oss-cn-shanghai.aliyuncs.com/blog-fileimages/audioFont/cover/shuang.jpg',
  //   },
  //   speed: 120 / 60,
  //   beat: 1 / 4,
  //   sheetMusic: [
  //     '06_.7_.15|4-00|05._6._7.4|3-00|03_3_65|4-2-|7.6.32|',
  //     '6--0|06._7._15|4-00|05._6._7.4|3-00|03_3_65|42-0_7._|',
  //     '7.1_2,4|3--0|06._7._15|4-00|05._6._7.4|3-00|',
  //     '03_3_65|42-0_7._|7._3_2_-1_7._|6.6._6._6.6|6--0|06._6_55=6=5_|',
  //     '3-00|03_3_65|42-0_1_|7.1_2_-4|3--0|06._6._6.6|6--0',
  //     '07_1。_2。1。|3--0|03_3_65|42-0|56_7_-7|3。---|7---'
  //   ].join()
  // },
]

export default notationList
