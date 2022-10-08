export type ClubData = {
  name: string;
  emblemUrl: string;
  prefecture: string;
  stadium: string;
  capacity: number;
};

const EMBLEM_BASE_URL =
  "https://aboutj.jleague.jp/corporate/wp-content/themes/j_corp/assets/images/club/emb";

// https://aboutj.jleague.jp/corporate/aboutj/club_detail/
export const ALL_CLUB_DATA_LIST: ClubData[] = [
  {
    name: "北海道コンサドーレ札幌",
    emblemUrl: `${EMBLEM_BASE_URL}/sapporo.svg`,
    prefecture: "北海道",
    stadium: "札幌ドーム",
    capacity: 38794,
  },
  {
    name: "鹿島アントラーズ",
    emblemUrl: `${EMBLEM_BASE_URL}/kashima.svg`,
    prefecture: "茨城県",
    stadium: "県立カシマサッカースタジアム",
    capacity: 38669,
  },
  {
    name: "浦和レッズ",
    emblemUrl: `${EMBLEM_BASE_URL}/urawa.svg`,
    prefecture: "埼玉県",
    stadium: "埼玉スタジアム２００２",
    capacity: 62010,
  },
  {
    name: "柏レイソル",
    emblemUrl: `${EMBLEM_BASE_URL}/kashiwa.svg`,
    prefecture: "千葉県",
    stadium: "三協フロンテア柏スタジアム",
    capacity: 15109,
  },
  {
    name: "ＦＣ東京",
    emblemUrl: `${EMBLEM_BASE_URL}/fc_tokyo.svg`,
    prefecture: "東京都",
    stadium: "味の素スタジアム",
    capacity: 49970,
  },
  {
    name: "川崎フロンターレ",
    emblemUrl: `${EMBLEM_BASE_URL}/kawasaki.svg`,
    prefecture: "神奈川県",
    stadium: "等々力陸上競技場",
    capacity: 26827,
  },
  {
    name: "横浜Ｆ・マリノス",
    emblemUrl: `${EMBLEM_BASE_URL}/yokohama_fm.svg`,
    prefecture: "神奈川県",
    stadium: "日産スタジアム",
    capacity: 72081,
  },
  {
    name: "湘南ベルマーレ",
    emblemUrl: `${EMBLEM_BASE_URL}/shounan.svg`,
    prefecture: "神奈川県",
    stadium: "レモンガススタジアム平塚",
    capacity: 15380,
  },
  {
    name: "清水エスパルス",
    emblemUrl: `${EMBLEM_BASE_URL}/shimizu.svg`,
    prefecture: "静岡県",
    stadium: "ＩＡＩスタジアム日本平",
    capacity: 20248,
  },
  {
    name: "ジュビロ磐田",
    emblemUrl: `${EMBLEM_BASE_URL}/iwata.svg`,
    prefecture: "静岡県",
    stadium: "ヤマハスタジアム（磐田）",
    capacity: 15165,
  },
  {
    name: "名古屋グランパス",
    emblemUrl: `${EMBLEM_BASE_URL}/nagoya.svg`,
    prefecture: "愛知県",
    stadium: "豊田スタジアム",
    capacity: 44380,
  },
  {
    name: "京都サンガF.C.",
    emblemUrl: `${EMBLEM_BASE_URL}/kyoto.svg`,
    prefecture: "京都府",
    stadium: "サンガスタジアム　ｂｙ　ＫＹＯＣＥＲＡ",
    capacity: 21600,
  },
  {
    name: "ガンバ大阪",
    emblemUrl: `${EMBLEM_BASE_URL}/g_osaka.svg`,
    prefecture: "大阪府",
    stadium: "パナソニック スタジアム 吹田",
    capacity: 39694,
  },
  {
    name: "セレッソ大阪",
    emblemUrl: `${EMBLEM_BASE_URL}/c_osaka.svg`,
    prefecture: "大阪府",
    stadium: "ヨドコウ桜スタジアム", // ヤンマースタジアム長居もあるけど一つに絞る
    capacity: 24665,
  },
  {
    name: "ヴィッセル神戸",
    emblemUrl: `${EMBLEM_BASE_URL}/kobe.svg`,
    prefecture: "兵庫県",
    stadium: "ノエビアスタジアム神戸",
    capacity: 29332,
  },
  {
    name: "サンフレッチェ広島",
    emblemUrl: `${EMBLEM_BASE_URL}/hiroshima.svg`,
    prefecture: "広島県",
    stadium: "エディオンスタジアム広島",
    capacity: 35909,
  },
  {
    name: "アビスパ福岡",
    emblemUrl: `${EMBLEM_BASE_URL}/fukuoka.svg`,
    prefecture: "福岡県",
    stadium: "ベスト電器スタジアム",
    capacity: 21562,
  },
  {
    name: "サガン鳥栖",
    emblemUrl: `${EMBLEM_BASE_URL}/tosu.svg`,
    prefecture: "佐賀県",
    stadium: "駅前不動産スタジアム",
    capacity: 24490,
  },
];
