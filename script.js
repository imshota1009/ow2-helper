// === Language Data ===
const i18n = {
    ja: {
        title: "OW2 マップコールアウト辞書",
        searchPlaceholder: "コールアウトを検索...",
        control: "コントロール",
        escort: "エスコート",
        hybrid: "ハイブリッド",
        push: "プッシュ",
        backToMaps: "マップ一覧に戻る",
        callouts: "コールアウト",
        footer: "Overwatch 2 コミュニティリソース | 非公式ファンアプリ",
        noResults: "検索結果がありません"
    },
    en: {
        title: "OW2 Map Callouts Dictionary",
        searchPlaceholder: "Search callouts...",
        control: "Control",
        escort: "Escort",
        hybrid: "Hybrid",
        push: "Push",
        backToMaps: "Back to Maps",
        callouts: "Callouts",
        footer: "Overwatch 2 Community Resource | Unofficial Fan App",
        noResults: "No results found"
    }
};

// === Map Data ===
const mapData = {
    control: [
        {
            id: "antarctic",
            icon: "🏔️",
            name: { ja: "南極半島", en: "Antarctic Peninsula" },
            callouts: [
                { name: { ja: "洞窟", en: "Cave" }, type: { ja: "フランク", en: "Flank" }, desc: { ja: "ポイント横の洞窟通路", en: "Cave passage beside point" } },
                { name: { ja: "崖", en: "Cliff" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "マップ端の崖エリア", en: "Cliff area at map edge" } },
                { name: { ja: "ハイグラ", en: "High Ground" }, type: { ja: "ポジション", en: "Position" }, desc: { ja: "ポイント上の高台", en: "Elevated area above point" } },
                { name: { ja: "シャッター", en: "Shutter" }, type: { ja: "ドア", en: "Door" }, desc: { ja: "開閉するシャッタードア", en: "Opening/closing shutter door" } }
            ]
        },
        {
            id: "busan",
            icon: "🏯",
            name: { ja: "釜山", en: "Busan" },
            callouts: [
                { name: { ja: "サンクチュアリ - 寺", en: "Sanctuary - Temple" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "メインの寺院建物", en: "Main temple building" } },
                { name: { ja: "サンクチュアリ - 鐘", en: "Sanctuary - Bell" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "大きな鐘のあるエリア", en: "Area with large bell" } },
                { name: { ja: "ダウンタウン - 屋台", en: "Downtown - Stall" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "屋台が並ぶエリア", en: "Area with food stalls" } },
                { name: { ja: "ダウンタウン - カラオケ", en: "Downtown - Karaoke" }, type: { ja: "建物", en: "Building" }, desc: { ja: "カラオケ店の建物", en: "Karaoke building" } },
                { name: { ja: "MEKA基地 - ドローン", en: "MEKA Base - Drone" }, type: { ja: "オブジェクト", en: "Object" }, desc: { ja: "ドローンが浮いているエリア", en: "Area with floating drone" } },
                { name: { ja: "MEKA基地 - 格納庫", en: "MEKA Base - Hangar" }, type: { ja: "建物", en: "Building" }, desc: { ja: "MEKAの格納庫", en: "MEKA hangar building" } }
            ]
        },
        {
            id: "ilios",
            icon: "🏛️",
            name: { ja: "イリオス", en: "Ilios" },
            callouts: [
                { name: { ja: "井戸 - 穴", en: "Well - Hole" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "中央の落下穴", en: "Central pit" } },
                { name: { ja: "井戸 - 橋", en: "Well - Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "ポイント上の橋", en: "Bridge over point" } },
                { name: { ja: "ライトハウス - 灯台", en: "Lighthouse" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "メインの灯台建物", en: "Main lighthouse building" } },
                { name: { ja: "ルーインズ - 柱", en: "Ruins - Pillars" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "古代の柱エリア", en: "Ancient pillar area" } },
                { name: { ja: "ビッグドア", en: "Big Door" }, type: { ja: "ドア", en: "Door" }, desc: { ja: "大きな扉のある入口", en: "Large door entrance" } }
            ]
        },
        {
            id: "lijiang",
            icon: "🏮",
            name: { ja: "麗江タワー", en: "Lijiang Tower" },
            callouts: [
                { name: { ja: "ガーデン - 橋", en: "Garden - Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "庭園の橋", en: "Garden bridge" } },
                { name: { ja: "ガーデン - 池", en: "Garden - Pond" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "鯉がいる池エリア", en: "Koi pond area" } },
                { name: { ja: "ナイトマーケット - 屋台", en: "Night Market - Stalls" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "夜市の屋台エリア", en: "Night market stall area" } },
                { name: { ja: "コントロールセンター - 穴", en: "Control Center - Pit" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "中央の落下穴", en: "Central pit" } },
                { name: { ja: "メガ", en: "Mega" }, type: { ja: "ヘルスパック", en: "Health Pack" }, desc: { ja: "大ヘルスパックの位置", en: "Large health pack location" } }
            ]
        },
        {
            id: "nepal",
            icon: "🏔️",
            name: { ja: "ネパール", en: "Nepal" },
            callouts: [
                { name: { ja: "ヴィレッジ - 穴", en: "Village - Pit" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "中央の落下穴", en: "Central pit" } },
                { name: { ja: "サンクタム - 階段", en: "Sanctum - Stairs" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "ポイントへの階段", en: "Stairs to point" } },
                { name: { ja: "シュライン - 滝", en: "Shrine - Waterfall" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "滝のあるエリア", en: "Waterfall area" } },
                { name: { ja: "小部屋", en: "Small Room" }, type: { ja: "建物", en: "Building" }, desc: { ja: "サイドの小さな部屋", en: "Side small room" } }
            ]
        },
        {
            id: "oasis",
            icon: "🏜️",
            name: { ja: "オアシス", en: "Oasis" },
            callouts: [
                { name: { ja: "シティセンター - 車", en: "City Center - Cars" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "走る車に注意", en: "Watch for moving cars" } },
                { name: { ja: "ガーデンズ - ジャンプパッド", en: "Gardens - Jump Pad" }, type: { ja: "ギミック", en: "Gimmick" }, desc: { ja: "高く飛べるパッド", en: "Pad for high jump" } },
                { name: { ja: "ユニバーシティ - ライブラリ", en: "University - Library" }, type: { ja: "建物", en: "Building" }, desc: { ja: "図書館エリア", en: "Library area" } }
            ]
        },
        {
            id: "samoa",
            icon: "🌴",
            name: { ja: "サモア", en: "Samoa" },
            callouts: [
                { name: { ja: "ビーチ", en: "Beach" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "海岸エリア", en: "Beach area" } },
                { name: { ja: "橋", en: "Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "ポイント上の橋", en: "Bridge over point" } },
                { name: { ja: "小屋", en: "Hut" }, type: { ja: "建物", en: "Building" }, desc: { ja: "サイドの小屋", en: "Side hut" } }
            ]
        }
    ],
    escort: [
        {
            id: "circuit",
            icon: "🏎️",
            name: { ja: "サーキット・ロイヤル", en: "Circuit Royal" },
            callouts: [
                { name: { ja: "カジノ", en: "Casino" }, type: { ja: "建物", en: "Building" }, desc: { ja: "大きなカジノ建物", en: "Large casino building" } },
                { name: { ja: "バルコニー", en: "Balcony" }, type: { ja: "ポジション", en: "Position" }, desc: { ja: "高所のバルコニー", en: "Upper balcony position" } },
                { name: { ja: "トンネル", en: "Tunnel" }, type: { ja: "通路", en: "Path" }, desc: { ja: "地下トンネル", en: "Underground tunnel" } }
            ]
        },
        {
            id: "dorado",
            icon: "🌵",
            name: { ja: "ドラド", en: "Dorado" },
            callouts: [
                { name: { ja: "第一 - 橋", en: "First - Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "最初のチョークポイントの橋", en: "First chokepoint bridge" } },
                { name: { ja: "ハイグラ", en: "High Ground" }, type: { ja: "ポジション", en: "Position" }, desc: { ja: "建物上の高台", en: "Upper building position" } },
                { name: { ja: "バンク", en: "Bank" }, type: { ja: "建物", en: "Building" }, desc: { ja: "銀行の建物", en: "Bank building" } },
                { name: { ja: "噴水", en: "Fountain" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "中央の噴水", en: "Central fountain" } },
                { name: { ja: "パワープラント", en: "Power Plant" }, type: { ja: "最終", en: "Final" }, desc: { ja: "最終ポイントエリア", en: "Final point area" } }
            ]
        },
        {
            id: "havana",
            icon: "🚗",
            name: { ja: "ハバナ", en: "Havana" },
            callouts: [
                { name: { ja: "シーフード", en: "Seafood" }, type: { ja: "建物", en: "Building" }, desc: { ja: "シーフードレストラン", en: "Seafood restaurant" } },
                { name: { ja: "倉庫", en: "Warehouse" }, type: { ja: "建物", en: "Building" }, desc: { ja: "大きな倉庫", en: "Large warehouse" } },
                { name: { ja: "フォート", en: "Fort" }, type: { ja: "最終", en: "Final" }, desc: { ja: "最終の砦エリア", en: "Final fort area" } }
            ]
        },
        {
            id: "junkertown",
            icon: "🔧",
            name: { ja: "ジャンカータウン", en: "Junkertown" },
            callouts: [
                { name: { ja: "ゲート", en: "Gate" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "最初の大きなゲート", en: "First large gate" } },
                { name: { ja: "スヌーティーズ", en: "Snooty's" }, type: { ja: "建物", en: "Building" }, desc: { ja: "ボバ屋の建物", en: "Boba shop building" } },
                { name: { ja: "クイーンズ", en: "Queen's" }, type: { ja: "最終", en: "Final" }, desc: { ja: "クイーンの玉座エリア", en: "Queen's throne area" } },
                { name: { ja: "パイプ", en: "Pipes" }, type: { ja: "通路", en: "Path" }, desc: { ja: "パイプで繋がれた高台", en: "Pipe-connected high ground" } }
            ]
        },
        {
            id: "rialto",
            icon: "🚤",
            name: { ja: "リアルト", en: "Rialto" },
            callouts: [
                { name: { ja: "橋", en: "Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "運河にかかる橋", en: "Canal bridge" } },
                { name: { ja: "カフェ", en: "Cafe" }, type: { ja: "建物", en: "Building" }, desc: { ja: "カフェの建物", en: "Cafe building" } },
                { name: { ja: "アーチ", en: "Arch" }, type: { ja: "通路", en: "Path" }, desc: { ja: "アーチ状の通路", en: "Arched passage" } },
                { name: { ja: "ボート", en: "Boats" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "ボートが並ぶエリア", en: "Boat area" } }
            ]
        },
        {
            id: "route66",
            icon: "🛣️",
            name: { ja: "ルート66", en: "Route 66" },
            callouts: [
                { name: { ja: "ダイナー", en: "Diner" }, type: { ja: "建物", en: "Building" }, desc: { ja: "ダイナーの建物", en: "Diner building" } },
                { name: { ja: "ガソリンスタンド", en: "Gas Station" }, type: { ja: "建物", en: "Building" }, desc: { ja: "ガソリンスタンド", en: "Gas station" } },
                { name: { ja: "トレイン", en: "Train" }, type: { ja: "オブジェクト", en: "Object" }, desc: { ja: "列車の残骸", en: "Train wreckage" } },
                { name: { ja: "ビッグアール", en: "Big Earl's" }, type: { ja: "建物", en: "Building" }, desc: { ja: "「Big Earl's」の看板がある建物", en: "Building with Big Earl's sign" } },
                { name: { ja: "ケイブ", en: "Cave" }, type: { ja: "通路", en: "Path" }, desc: { ja: "洞窟の通路", en: "Cave passage" } }
            ]
        },
        {
            id: "shambali",
            icon: "🛕",
            name: { ja: "シャンバリ僧院", en: "Shambali Monastery" },
            callouts: [
                { name: { ja: "僧院", en: "Monastery" }, type: { ja: "建物", en: "Building" }, desc: { ja: "メインの僧院建物", en: "Main monastery building" } },
                { name: { ja: "崖", en: "Cliff" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "落下の危険がある崖", en: "Fall hazard cliff" } },
                { name: { ja: "ベル", en: "Bell" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "大きな鐘", en: "Large bell" } }
            ]
        },
        {
            id: "gibraltar",
            icon: "🚀",
            name: { ja: "WP:ジブラルタル", en: "Watchpoint: Gibraltar" },
            callouts: [
                { name: { ja: "格納庫", en: "Hangar" }, type: { ja: "建物", en: "Building" }, desc: { ja: "飛行機の格納庫", en: "Aircraft hangar" } },
                { name: { ja: "カトラ", en: "Catwalk" }, type: { ja: "通路", en: "Path" }, desc: { ja: "高所の通路", en: "Elevated walkway" } },
                { name: { ja: "サーバールーム", en: "Server Room" }, type: { ja: "建物", en: "Building" }, desc: { ja: "サーバーのある部屋", en: "Server room" } },
                { name: { ja: "ロケット", en: "Rocket" }, type: { ja: "最終", en: "Final" }, desc: { ja: "最終ポイントのロケット", en: "Final point rocket" } }
            ]
        }
    ],
    hybrid: [
        {
            id: "blizzworld",
            icon: "🎢",
            name: { ja: "ブリザード・ワールド", en: "Blizzard World" },
            callouts: [
                { name: { ja: "城", en: "Castle" }, type: { ja: "建物", en: "Building" }, desc: { ja: "スタークラフトエリアの城", en: "Starcraft area castle" } },
                { name: { ja: "ジェットコースター", en: "Roller Coaster" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "遊園地のジェットコースター", en: "Theme park roller coaster" } },
                { name: { ja: "ショップ", en: "Shop" }, type: { ja: "建物", en: "Building" }, desc: { ja: "ギフトショップ", en: "Gift shop" } }
            ]
        },
        {
            id: "eichenwalde",
            icon: "🏰",
            name: { ja: "アイヒェンヴァルデ", en: "Eichenwalde" },
            callouts: [
                { name: { ja: "橋", en: "Bridge" }, type: { ja: "チョーク", en: "Choke" }, desc: { ja: "最初の橋チョークポイント", en: "First bridge chokepoint" } },
                { name: { ja: "ログ", en: "Logs" }, type: { ja: "通路", en: "Path" }, desc: { ja: "丸太が積まれたエリア", en: "Log pile area" } },
                { name: { ja: "城門", en: "Castle Gate" }, type: { ja: "チョーク", en: "Choke" }, desc: { ja: "城への入り口", en: "Castle entrance" } },
                { name: { ja: "玉座", en: "Throne" }, type: { ja: "最終", en: "Final" }, desc: { ja: "最終ポイントの玉座", en: "Final point throne" } },
                { name: { ja: "アーマー", en: "Armor" }, type: { ja: "建物", en: "Building" }, desc: { ja: "鎧が飾られた建物", en: "Building with armor display" } }
            ]
        },
        {
            id: "hollywood",
            icon: "🎬",
            name: { ja: "ハリウッド", en: "Hollywood" },
            callouts: [
                { name: { ja: "カフェ", en: "Cafe" }, type: { ja: "建物", en: "Building" }, desc: { ja: "最初のポイント横のカフェ", en: "Cafe beside first point" } },
                { name: { ja: "サロン", en: "Saloon" }, type: { ja: "建物", en: "Building" }, desc: { ja: "西部劇風サロン", en: "Western-style saloon" } },
                { name: { ja: "バンク", en: "Bank" }, type: { ja: "建物", en: "Building" }, desc: { ja: "銀行の建物", en: "Bank building" } },
                { name: { ja: "スタジオ", en: "Studio" }, type: { ja: "最終", en: "Final" }, desc: { ja: "撮影スタジオエリア", en: "Film studio area" } }
            ]
        },
        {
            id: "kingsrow",
            icon: "🌙",
            name: { ja: "キングス・ロウ", en: "King's Row" },
            callouts: [
                { name: { ja: "ホテル", en: "Hotel" }, type: { ja: "建物", en: "Building" }, desc: { ja: "最初のチョーク横のホテル", en: "Hotel beside first choke" } },
                { name: { ja: "パブ", en: "Pub" }, type: { ja: "建物", en: "Building" }, desc: { ja: "英国風パブ", en: "British-style pub" } },
                { name: { ja: "ステチュー", en: "Statue" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "広場の銅像", en: "Square statue" } },
                { name: { ja: "アンダーグラウンド", en: "Underground" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "地下鉄エリア", en: "Subway area" } },
                { name: { ja: "ストリート", en: "Street" }, type: { ja: "通路", en: "Path" }, desc: { ja: "メインストリート", en: "Main street" } }
            ]
        },
        {
            id: "midtown",
            icon: "🏙️",
            name: { ja: "ミッドタウン", en: "Midtown" },
            callouts: [
                { name: { ja: "駅", en: "Station" }, type: { ja: "ポイント", en: "Point" }, desc: { ja: "グランドセントラル駅", en: "Grand Central Station" } },
                { name: { ja: "バス", en: "Bus" }, type: { ja: "オブジェクト", en: "Object" }, desc: { ja: "道路のバス", en: "Street bus" } },
                { name: { ja: "警察署", en: "Police" }, type: { ja: "建物", en: "Building" }, desc: { ja: "警察署の建物", en: "Police station building" } },
                { name: { ja: "ラボ", en: "Lab" }, type: { ja: "最終", en: "Final" }, desc: { ja: "最終ポイントの研究所", en: "Final point laboratory" } }
            ]
        },
        {
            id: "numbani",
            icon: "🌍",
            name: { ja: "ヌンバーニ", en: "Numbani" },
            callouts: [
                { name: { ja: "バス", en: "Bus" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "第一ポイントのバス", en: "First point bus" } },
                { name: { ja: "ロボット", en: "Robot" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "大きなロボット像", en: "Large robot statue" } },
                { name: { ja: "ギャラリー", en: "Gallery" }, type: { ja: "建物", en: "Building" }, desc: { ja: "アートギャラリー", en: "Art gallery" } }
            ]
        },
        {
            id: "paraiso",
            icon: "🌺",
            name: { ja: "パライソ", en: "Paraíso" },
            callouts: [
                { name: { ja: "マーケット", en: "Market" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "マーケットエリア", en: "Market area" } },
                { name: { ja: "カフェ", en: "Cafe" }, type: { ja: "建物", en: "Building" }, desc: { ja: "カフェの建物", en: "Cafe building" } },
                { name: { ja: "噴水", en: "Fountain" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "中央の噴水", en: "Central fountain" } }
            ]
        }
    ],
    push: [
        {
            id: "colosseo",
            icon: "🏟️",
            name: { ja: "コロッセオ", en: "Colosseo" },
            callouts: [
                { name: { ja: "コロシアム", en: "Coliseum" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "中央のコロシアム", en: "Central coliseum" } },
                { name: { ja: "カフェ", en: "Cafe" }, type: { ja: "建物", en: "Building" }, desc: { ja: "サイドのカフェ", en: "Side cafe" } },
                { name: { ja: "アーチ", en: "Arch" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "アーチ門", en: "Arch gate" } },
                { name: { ja: "マーケット", en: "Market" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "市場エリア", en: "Market area" } }
            ]
        },
        {
            id: "esperanca",
            icon: "🌆",
            name: { ja: "エスペランサ", en: "Esperança" },
            callouts: [
                { name: { ja: "ホテル", en: "Hotel" }, type: { ja: "建物", en: "Building" }, desc: { ja: "大きなホテル", en: "Large hotel" } },
                { name: { ja: "バルコニー", en: "Balcony" }, type: { ja: "ポジション", en: "Position" }, desc: { ja: "高所のバルコニー", en: "Upper balcony" } },
                { name: { ja: "広場", en: "Plaza" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "中央の広場", en: "Central plaza" } }
            ]
        },
        {
            id: "newqueen",
            icon: "🍁",
            name: { ja: "ニュークイーンストリート", en: "New Queen Street" },
            callouts: [
                { name: { ja: "バー", en: "Bar" }, type: { ja: "建物", en: "Building" }, desc: { ja: "カナダ風バー", en: "Canadian-style bar" } },
                { name: { ja: "メープル", en: "Maple" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "カエデの木があるエリア", en: "Maple tree area" } },
                { name: { ja: "地下鉄", en: "Subway" }, type: { ja: "通路", en: "Path" }, desc: { ja: "地下鉄入口", en: "Subway entrance" } }
            ]
        },
        {
            id: "runasapi",
            icon: "🏔️",
            name: { ja: "ルナサピ", en: "Runasapi" },
            callouts: [
                { name: { ja: "遺跡", en: "Ruins" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "古代遺跡エリア", en: "Ancient ruins area" } },
                { name: { ja: "橋", en: "Bridge" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "吊り橋", en: "Suspension bridge" } },
                { name: { ja: "滝", en: "Waterfall" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "大きな滝", en: "Large waterfall" } }
            ]
        },
        {
            id: "newjunkcity",
            icon: "🗑️",
            name: { ja: "ニュー・ジャンクシティ", en: "New Junk City" },
            callouts: [
                { name: { ja: "クレーン", en: "Crane" }, type: { ja: "構造", en: "Structure" }, desc: { ja: "大きなクレーン", en: "Large crane" } },
                { name: { ja: "ジャンク", en: "Junk" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "ガラクタエリア", en: "Junk pile area" } },
                { name: { ja: "ワークショップ", en: "Workshop" }, type: { ja: "建物", en: "Building" }, desc: { ja: "作業場", en: "Workshop building" } }
            ]
        },
        {
            id: "suravasa",
            icon: "🪷",
            name: { ja: "スラヴァーサ", en: "Suravasa" },
            callouts: [
                { name: { ja: "寺院", en: "Temple" }, type: { ja: "建物", en: "Building" }, desc: { ja: "タイ風寺院", en: "Thai-style temple" } },
                { name: { ja: "マーケット", en: "Market" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "市場エリア", en: "Market area" } },
                { name: { ja: "水上", en: "Water" }, type: { ja: "危険", en: "Hazard" }, desc: { ja: "落下の危険がある水上エリア", en: "Water area with fall hazard" } }
            ]
        },
        {
            id: "hanaoka",
            icon: "🌸",
            name: { ja: "花岡", en: "Hanaoka" },
            callouts: [
                { name: { ja: "神社", en: "Shrine" }, type: { ja: "建物", en: "Building" }, desc: { ja: "日本の神社", en: "Japanese shrine" } },
                { name: { ja: "鳥居", en: "Torii" }, type: { ja: "ランドマーク", en: "Landmark" }, desc: { ja: "赤い鳥居", en: "Red torii gate" } },
                { name: { ja: "桜", en: "Sakura" }, type: { ja: "エリア", en: "Area" }, desc: { ja: "桜の木があるエリア", en: "Cherry blossom area" } },
                { name: { ja: "駅", en: "Station" }, type: { ja: "建物", en: "Building" }, desc: { ja: "電車の駅", en: "Train station" } }
            ]
        }
    ]
};

// === State ===
let currentLang = localStorage.getItem('ow2Lang') || 'ja';
let currentMode = 'control';
let currentMap = null;

// === DOM Elements ===
const langToggle = document.getElementById('lang-toggle');
const currentLangSpan = document.getElementById('current-lang');
const searchInput = document.getElementById('search-input');
const modeTabs = document.querySelectorAll('.mode-tab');
const mapGrid = document.getElementById('map-grid');
const calloutPanel = document.getElementById('callout-panel');
const calloutHeader = document.getElementById('callout-header');
const calloutList = document.getElementById('callout-list');
const backBtn = document.getElementById('back-btn');

// === Functions ===
function updateLanguage() {
    currentLangSpan.textContent = currentLang === 'ja' ? '🇯🇵 JA' : '🇺🇸 EN';
    document.documentElement.lang = currentLang;

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (i18n[currentLang][key]) {
            el.placeholder = i18n[currentLang][key];
        }
    });

    localStorage.setItem('ow2Lang', currentLang);

    // Re-render current view
    if (currentMap) {
        renderCallouts(currentMap);
    } else {
        renderMaps();
    }
}

function renderMaps(filter = '') {
    const maps = mapData[currentMode];
    mapGrid.innerHTML = '';
    calloutPanel.classList.add('hidden');
    mapGrid.style.display = 'grid';

    const filteredMaps = filter
        ? maps.filter(map => {
            const mapName = map.name[currentLang].toLowerCase();
            const hasMatchingCallout = map.callouts.some(c =>
                c.name[currentLang].toLowerCase().includes(filter.toLowerCase())
            );
            return mapName.includes(filter.toLowerCase()) || hasMatchingCallout;
        })
        : maps;

    if (filteredMaps.length === 0) {
        mapGrid.innerHTML = `<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1; padding: 40px;">${i18n[currentLang].noResults}</p>`;
        return;
    }

    filteredMaps.forEach(map => {
        const card = document.createElement('div');
        card.className = 'map-card';
        card.innerHTML = `
            <div class="map-card-header">
                <span class="map-icon">${map.icon}</span>
                <div>
                    <div class="map-name">${map.name[currentLang]}</div>
                    <div class="map-name-sub">${map.name[currentLang === 'ja' ? 'en' : 'ja']}</div>
                </div>
            </div>
            <div class="map-callout-count">
                📍 ${map.callouts.length} ${i18n[currentLang].callouts}
            </div>
        `;
        card.addEventListener('click', () => showCallouts(map));
        mapGrid.appendChild(card);
    });
}

function showCallouts(map) {
    currentMap = map;
    mapGrid.style.display = 'none';
    calloutPanel.classList.remove('hidden');
    renderCallouts(map);
}

function renderCallouts(map, filter = '') {
    calloutHeader.innerHTML = `
        <h2>${map.icon} ${map.name[currentLang]}</h2>
        <p>${map.name[currentLang === 'ja' ? 'en' : 'ja']}</p>
    `;

    const filteredCallouts = filter
        ? map.callouts.filter(c =>
            c.name[currentLang].toLowerCase().includes(filter.toLowerCase()) ||
            c.desc[currentLang].toLowerCase().includes(filter.toLowerCase())
        )
        : map.callouts;

    if (filteredCallouts.length === 0) {
        calloutList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 40px;">${i18n[currentLang].noResults}</p>`;
        return;
    }

    calloutList.innerHTML = filteredCallouts.map(callout => `
        <div class="callout-item">
            <div>
                <div class="callout-name">${callout.name[currentLang]}</div>
                <div class="callout-alt">${callout.name[currentLang === 'ja' ? 'en' : 'ja']}</div>
                <div class="callout-desc">${callout.desc[currentLang]}</div>
            </div>
            <span class="callout-location-type">${callout.type[currentLang]}</span>
        </div>
    `).join('');
}

function goBack() {
    currentMap = null;
    calloutPanel.classList.add('hidden');
    mapGrid.style.display = 'grid';
    renderMaps(searchInput.value);
}

// === Event Listeners ===
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    updateLanguage();
});

modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        modeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMode = tab.dataset.mode;
        currentMap = null;
        searchInput.value = '';
        renderMaps();
    });
});

searchInput.addEventListener('input', (e) => {
    const filter = e.target.value;
    if (currentMap) {
        renderCallouts(currentMap, filter);
    } else {
        renderMaps(filter);
    }
});

backBtn.addEventListener('click', goBack);

// === Initialize ===
updateLanguage();
renderMaps();

// ============================================
// === COUNTER PICK FEATURE ===
// ============================================

// === Counter Pick i18n Extensions ===
i18n.ja.navCallouts = "マップコールアウト";
i18n.ja.navCounter = "カウンターピック";
i18n.ja.counterTitle = "⚔️ カウンターピック支援";
i18n.ja.counterDesc = "敵チームのヒーローを選択すると、おすすめのカウンターヒーローを提案します";
i18n.ja.enemyTeam = "敵チーム構成";
i18n.ja.roleTank = "タンク";
i18n.ja.roleDps = "ダメージ";
i18n.ja.roleSupport = "サポート";
i18n.ja.selectedEnemies = "選択中の敵ヒーロー";
i18n.ja.noSelection = "ヒーローを選択してください";
i18n.ja.clearAll = "クリア";
i18n.ja.recommendedCounters = "おすすめカウンター";
i18n.ja.countersWell = "に強い";
i18n.ja.title = "OW2 Helper";

i18n.en.navCallouts = "Map Callouts";
i18n.en.navCounter = "Counter Picks";
i18n.en.counterTitle = "⚔️ Counter Pick Helper";
i18n.en.counterDesc = "Select enemy heroes and we'll suggest the best counters";
i18n.en.enemyTeam = "Enemy Team Composition";
i18n.en.roleTank = "Tank";
i18n.en.roleDps = "Damage";
i18n.en.roleSupport = "Support";
i18n.en.selectedEnemies = "Selected Enemy Heroes";
i18n.en.noSelection = "Select heroes to get started";
i18n.en.clearAll = "Clear";
i18n.en.recommendedCounters = "Recommended Counters";
i18n.en.countersWell = "Counters well against";
i18n.en.title = "OW2 Helper";

// === Hero Data ===
const heroData = {
    tank: [
        { id: "dva", name: { ja: "D.Va", en: "D.Va" } },
        { id: "doomfist", name: { ja: "ドゥームフィスト", en: "Doomfist" } },
        { id: "junkerqueen", name: { ja: "ジャンカークイーン", en: "Junker Queen" } },
        { id: "mauga", name: { ja: "マウガ", en: "Mauga" } },
        { id: "orisa", name: { ja: "オリーサ", en: "Orisa" } },
        { id: "ramattra", name: { ja: "ラマットラ", en: "Ramattra" } },
        { id: "reinhardt", name: { ja: "ラインハルト", en: "Reinhardt" } },
        { id: "roadhog", name: { ja: "ロードホッグ", en: "Roadhog" } },
        { id: "sigma", name: { ja: "シグマ", en: "Sigma" } },
        { id: "winston", name: { ja: "ウィンストン", en: "Winston" } },
        { id: "ball", name: { ja: "レッキングボール", en: "Wrecking Ball" } },
        { id: "zarya", name: { ja: "ザリア", en: "Zarya" } }
    ],
    dps: [
        { id: "ashe", name: { ja: "アッシュ", en: "Ashe" } },
        { id: "bastion", name: { ja: "バスティオン", en: "Bastion" } },
        { id: "cassidy", name: { ja: "キャスディ", en: "Cassidy" } },
        { id: "echo", name: { ja: "エコー", en: "Echo" } },
        { id: "genji", name: { ja: "ゲンジ", en: "Genji" } },
        { id: "hanzo", name: { ja: "ハンゾー", en: "Hanzo" } },
        { id: "junkrat", name: { ja: "ジャンクラット", en: "Junkrat" } },
        { id: "mei", name: { ja: "メイ", en: "Mei" } },
        { id: "pharah", name: { ja: "ファラ", en: "Pharah" } },
        { id: "reaper", name: { ja: "リーパー", en: "Reaper" } },
        { id: "soldier76", name: { ja: "ソルジャー76", en: "Soldier: 76" } },
        { id: "sojourn", name: { ja: "ソジョーン", en: "Sojourn" } },
        { id: "sombra", name: { ja: "ソンブラ", en: "Sombra" } },
        { id: "symmetra", name: { ja: "シンメトラ", en: "Symmetra" } },
        { id: "torbjorn", name: { ja: "トールビョーン", en: "Torbjörn" } },
        { id: "tracer", name: { ja: "トレーサー", en: "Tracer" } },
        { id: "widowmaker", name: { ja: "ウィドウメイカー", en: "Widowmaker" } },
        { id: "venture", name: { ja: "ベンチャー", en: "Venture" } }
    ],
    support: [
        { id: "ana", name: { ja: "アナ", en: "Ana" } },
        { id: "baptiste", name: { ja: "バティスト", en: "Baptiste" } },
        { id: "brigitte", name: { ja: "ブリギッテ", en: "Brigitte" } },
        { id: "illari", name: { ja: "イラリー", en: "Illari" } },
        { id: "juno", name: { ja: "ジュノ", en: "Juno" } },
        { id: "kiriko", name: { ja: "キリコ", en: "Kiriko" } },
        { id: "lifeweaver", name: { ja: "ライフウィーバー", en: "Lifeweaver" } },
        { id: "lucio", name: { ja: "ルシオ", en: "Lúcio" } },
        { id: "mercy", name: { ja: "マーシー", en: "Mercy" } },
        { id: "moira", name: { ja: "モイラ", en: "Moira" } },
        { id: "zenyatta", name: { ja: "ゼニヤッタ", en: "Zenyatta" } }
    ]
};

// === Counter Data (who counters whom) ===
const counterData = {
    // Tanks
    dva: { counters: ["zarya", "mei", "sombra", "roadhog"], role: "tank" },
    doomfist: { counters: ["sombra", "roadhog", "orisa", "cassidy", "ana"], role: "tank" },
    junkerqueen: { counters: ["ana", "reaper", "roadhog", "bastion"], role: "tank" },
    mauga: { counters: ["ana", "zenyatta", "bastion", "reaper", "sombra"], role: "tank" },
    orisa: { counters: ["reaper", "bastion", "junkrat", "mei"], role: "tank" },
    ramattra: { counters: ["reaper", "bastion", "pharah", "ana"], role: "tank" },
    reinhardt: { counters: ["reaper", "bastion", "pharah", "mei", "ana"], role: "tank" },
    roadhog: { counters: ["reaper", "ana", "zenyatta", "dva"], role: "tank" },
    sigma: { counters: ["reaper", "sombra", "tracer", "doomfist"], role: "tank" },
    winston: { counters: ["reaper", "roadhog", "bastion", "mei", "ana"], role: "tank" },
    ball: { counters: ["sombra", "mei", "roadhog", "cassidy", "brigitte"], role: "tank" },
    zarya: { counters: ["reaper", "pharah", "junkrat", "bastion"], role: "tank" },
    // DPS
    ashe: { counters: ["dva", "winston", "genji", "tracer", "sombra"], role: "dps" },
    bastion: { counters: ["widowmaker", "hanzo", "genji", "tracer", "sombra"], role: "dps" },
    cassidy: { counters: ["widowmaker", "hanzo", "dva", "tracer"], role: "dps" },
    echo: { counters: ["widowmaker", "ashe", "cassidy", "soldier76"], role: "dps" },
    genji: { counters: ["winston", "mei", "symmetra", "moira", "brigitte"], role: "dps" },
    hanzo: { counters: ["dva", "winston", "genji", "tracer"], role: "dps" },
    junkrat: { counters: ["pharah", "widowmaker", "ashe", "echo"], role: "dps" },
    mei: { counters: ["pharah", "widowmaker", "reaper", "junkrat"], role: "dps" },
    pharah: { counters: ["widowmaker", "ashe", "soldier76", "cassidy", "dva"], role: "dps" },
    reaper: { counters: ["pharah", "widowmaker", "ashe", "ana"], role: "dps" },
    soldier76: { counters: ["dva", "genji", "widowmaker", "tracer"], role: "dps" },
    sojourn: { counters: ["dva", "winston", "genji", "tracer"], role: "dps" },
    sombra: { counters: ["mei", "cassidy", "winston", "moira", "brigitte"], role: "dps" },
    symmetra: { counters: ["pharah", "junkrat", "reaper", "winston"], role: "dps" },
    torbjorn: { counters: ["pharah", "junkrat", "widowmaker", "sombra"], role: "dps" },
    tracer: { counters: ["cassidy", "roadhog", "mei", "moira", "brigitte"], role: "dps" },
    widowmaker: { counters: ["dva", "winston", "genji", "tracer", "sombra"], role: "dps" },
    venture: { counters: ["cassidy", "roadhog", "mei", "brigitte"], role: "dps" },
    // Support
    ana: { counters: ["dva", "winston", "genji", "tracer", "sombra"], role: "support" },
    baptiste: { counters: ["dva", "winston", "sombra", "tracer"], role: "support" },
    brigitte: { counters: ["pharah", "junkrat", "widowmaker", "sombra"], role: "support" },
    illari: { counters: ["dva", "winston", "genji", "tracer", "sombra"], role: "support" },
    juno: { counters: ["dva", "winston", "tracer", "sombra"], role: "support" },
    kiriko: { counters: ["winston", "dva", "tracer", "sombra"], role: "support" },
    lifeweaver: { counters: ["dva", "winston", "tracer", "sombra", "mei"], role: "support" },
    lucio: { counters: ["sombra", "mei", "cassidy", "pharah"], role: "support" },
    mercy: { counters: ["dva", "winston", "tracer", "sombra", "genji"], role: "support" },
    moira: { counters: ["pharah", "widowmaker", "ana", "zenyatta"], role: "support" },
    zenyatta: { counters: ["dva", "winston", "genji", "tracer", "sombra"], role: "support" }
};

// === Counter Pick State ===
let selectedEnemies = [];

// === Counter Pick DOM Elements ===
const navBtns = document.querySelectorAll('.nav-btn');
const calloutsSection = document.getElementById('callouts-section');
const counterSection = document.getElementById('counter-section');
const selectedList = document.getElementById('selected-list');
const clearBtn = document.getElementById('clear-selection');
const counterResults = document.getElementById('counter-results');
const counterListEl = document.getElementById('counter-list');

// === Counter Pick Functions ===
function initCounterPick() {
    Object.keys(heroData).forEach(role => {
        const container = document.getElementById(`enemy-${role}`);
        if (!container) return;
        container.innerHTML = heroData[role].map(hero =>
            `<button class="hero-btn ${role}" data-hero="${hero.id}" data-role="${role}">${hero.name[currentLang]}</button>`
        ).join('');
    });

    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleHero(btn.dataset.hero, btn.dataset.role));
    });
}

function toggleHero(heroId, role) {
    const index = selectedEnemies.findIndex(e => e.id === heroId);
    if (index > -1) {
        selectedEnemies.splice(index, 1);
    } else {
        selectedEnemies.push({ id: heroId, role: role });
    }
    updateSelectedUI();
    calculateCounters();
}

function updateSelectedUI() {
    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.classList.toggle('selected', selectedEnemies.some(e => e.id === btn.dataset.hero));
    });

    if (selectedEnemies.length === 0) {
        selectedList.innerHTML = `<p class="no-selection">${i18n[currentLang].noSelection}</p>`;
        counterResults.classList.add('hidden');
    } else {
        selectedList.innerHTML = selectedEnemies.map(enemy => {
            const hero = findHero(enemy.id);
            return `<span class="selected-tag ${enemy.role}">${hero.name[currentLang]}<button class="remove-btn" onclick="removeEnemy('${enemy.id}')">✕</button></span>`;
        }).join('');
    }
}

function findHero(heroId) {
    for (const role of Object.keys(heroData)) {
        const hero = heroData[role].find(h => h.id === heroId);
        if (hero) return hero;
    }
    return { name: { ja: heroId, en: heroId } };
}

function removeEnemy(heroId) {
    selectedEnemies = selectedEnemies.filter(e => e.id !== heroId);
    updateSelectedUI();
    calculateCounters();
}

function calculateCounters() {
    if (selectedEnemies.length === 0) {
        counterResults.classList.add('hidden');
        return;
    }

    const counterScores = {};

    selectedEnemies.forEach(enemy => {
        const data = counterData[enemy.id];
        if (data && data.counters) {
            data.counters.forEach(counterId => {
                if (!counterScores[counterId]) {
                    counterScores[counterId] = { score: 0, targets: [] };
                }
                counterScores[counterId].score++;
                counterScores[counterId].targets.push(enemy.id);
            });
        }
    });

    const sorted = Object.entries(counterScores)
        .sort((a, b) => b[1].score - a[1].score)
        .slice(0, 8);

    if (sorted.length === 0) {
        counterResults.classList.add('hidden');
        return;
    }

    counterResults.classList.remove('hidden');
    counterListEl.innerHTML = sorted.map(([heroId, data]) => {
        const hero = findHero(heroId);
        const heroRole = counterData[heroId]?.role || 'dps';
        const roleLabel = i18n[currentLang][`role${heroRole.charAt(0).toUpperCase() + heroRole.slice(1)}`] || heroRole;
        const targetNames = data.targets.map(t => findHero(t).name[currentLang]).join(', ');

        return `
            <div class="counter-card">
                <div class="counter-card-header">
                    <span class="counter-hero-name">${hero.name[currentLang]}</span>
                    <span class="counter-role-tag ${heroRole}">${roleLabel}</span>
                </div>
                <div class="counter-targets">⚔️ ${i18n[currentLang].countersWell}: ${targetNames}</div>
            </div>
        `;
    }).join('');
}

// === Navigation ===
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const section = btn.dataset.section;
        if (section === 'callouts') {
            calloutsSection.classList.remove('hidden');
            counterSection.classList.add('hidden');
        } else {
            calloutsSection.classList.add('hidden');
            counterSection.classList.remove('hidden');
            initCounterPick();
        }
    });
});

clearBtn.addEventListener('click', () => {
    selectedEnemies = [];
    updateSelectedUI();
    calculateCounters();
});

// Expose removeEnemy globally for onclick handlers
window.removeEnemy = removeEnemy;

// ============================================
// === META ANALYSIS FEATURE ===
// ============================================

// === Meta i18n Extensions ===
i18n.ja.navMeta = "メタ分析";
i18n.ja.metaTitle = "📊 メタ分析ダッシュボード";
i18n.ja.metaDesc = "ランク帯ごとの強いヒーローをチェック";
i18n.ja.selectRank = "ランク帯を選択";
i18n.ja.rankAll = "全体";
i18n.ja.winRate = "勝率";
i18n.ja.pickRate = "ピック率";

i18n.en.navMeta = "Meta Analysis";
i18n.en.metaTitle = "📊 Meta Analysis Dashboard";
i18n.en.metaDesc = "Check the strongest heroes by rank";
i18n.en.selectRank = "Select Rank";
i18n.en.rankAll = "All Ranks";
i18n.en.winRate = "Win Rate";
i18n.en.pickRate = "Pick Rate";

// === Meta Data (Simulated stats by rank) ===
const metaData = {
    all: {
        tank: [
            { id: "dva", winRate: 52.3, pickRate: 8.5 },
            { id: "sigma", winRate: 51.8, pickRate: 7.2 },
            { id: "winston", winRate: 51.5, pickRate: 6.8 },
            { id: "reinhardt", winRate: 51.2, pickRate: 6.5 },
            { id: "zarya", winRate: 50.8, pickRate: 5.9 },
            { id: "orisa", winRate: 50.5, pickRate: 5.5 },
            { id: "roadhog", winRate: 50.2, pickRate: 5.2 },
            { id: "ramattra", winRate: 50.0, pickRate: 4.8 },
            { id: "junkerqueen", winRate: 49.8, pickRate: 4.5 },
            { id: "doomfist", winRate: 49.5, pickRate: 4.2 },
            { id: "ball", winRate: 49.2, pickRate: 3.8 },
            { id: "mauga", winRate: 48.8, pickRate: 3.5 }
        ],
        dps: [
            { id: "soldier76", winRate: 53.1, pickRate: 7.8 },
            { id: "ashe", winRate: 52.8, pickRate: 7.2 },
            { id: "tracer", winRate: 52.5, pickRate: 6.9 },
            { id: "hanzo", winRate: 52.2, pickRate: 6.5 },
            { id: "genji", winRate: 51.8, pickRate: 6.2 },
            { id: "sojourn", winRate: 51.5, pickRate: 5.8 },
            { id: "cassidy", winRate: 51.2, pickRate: 5.5 },
            { id: "echo", winRate: 51.0, pickRate: 5.2 },
            { id: "reaper", winRate: 50.8, pickRate: 5.0 },
            { id: "pharah", winRate: 50.5, pickRate: 4.8 },
            { id: "widowmaker", winRate: 50.2, pickRate: 4.5 },
            { id: "junkrat", winRate: 50.0, pickRate: 4.2 },
            { id: "mei", winRate: 49.8, pickRate: 4.0 },
            { id: "sombra", winRate: 49.5, pickRate: 3.8 },
            { id: "symmetra", winRate: 49.2, pickRate: 3.5 },
            { id: "torbjorn", winRate: 49.0, pickRate: 3.2 },
            { id: "bastion", winRate: 48.8, pickRate: 3.0 },
            { id: "venture", winRate: 48.5, pickRate: 2.8 }
        ],
        support: [
            { id: "kiriko", winRate: 53.5, pickRate: 9.2 },
            { id: "ana", winRate: 52.8, pickRate: 8.5 },
            { id: "lucio", winRate: 52.2, pickRate: 7.8 },
            { id: "baptiste", winRate: 51.8, pickRate: 6.5 },
            { id: "moira", winRate: 51.5, pickRate: 6.2 },
            { id: "mercy", winRate: 51.2, pickRate: 5.8 },
            { id: "zenyatta", winRate: 50.8, pickRate: 5.2 },
            { id: "brigitte", winRate: 50.5, pickRate: 4.8 },
            { id: "illari", winRate: 50.2, pickRate: 4.5 },
            { id: "lifeweaver", winRate: 49.8, pickRate: 4.0 },
            { id: "juno", winRate: 49.5, pickRate: 3.5 }
        ]
    },
    bronze: {
        tank: [
            { id: "reinhardt", winRate: 54.5, pickRate: 12.5 },
            { id: "roadhog", winRate: 53.8, pickRate: 11.2 },
            { id: "orisa", winRate: 52.5, pickRate: 9.8 },
            { id: "dva", winRate: 51.2, pickRate: 8.5 },
            { id: "zarya", winRate: 50.8, pickRate: 7.2 },
            { id: "sigma", winRate: 50.2, pickRate: 5.5 },
            { id: "ramattra", winRate: 49.8, pickRate: 4.8 },
            { id: "junkerqueen", winRate: 49.2, pickRate: 4.2 },
            { id: "winston", winRate: 48.5, pickRate: 3.8 },
            { id: "mauga", winRate: 48.2, pickRate: 3.5 },
            { id: "doomfist", winRate: 47.5, pickRate: 3.0 },
            { id: "ball", winRate: 46.8, pickRate: 2.5 }
        ],
        dps: [
            { id: "reaper", winRate: 55.2, pickRate: 12.8 },
            { id: "bastion", winRate: 54.5, pickRate: 9.5 },
            { id: "junkrat", winRate: 53.8, pickRate: 8.8 },
            { id: "torbjorn", winRate: 53.2, pickRate: 7.5 },
            { id: "soldier76", winRate: 52.5, pickRate: 7.2 },
            { id: "symmetra", winRate: 52.0, pickRate: 5.8 },
            { id: "mei", winRate: 51.5, pickRate: 5.2 },
            { id: "pharah", winRate: 51.0, pickRate: 4.8 },
            { id: "cassidy", winRate: 50.5, pickRate: 4.5 },
            { id: "ashe", winRate: 50.0, pickRate: 4.2 },
            { id: "echo", winRate: 49.5, pickRate: 3.8 },
            { id: "hanzo", winRate: 49.0, pickRate: 3.5 },
            { id: "sojourn", winRate: 48.5, pickRate: 3.2 },
            { id: "sombra", winRate: 48.0, pickRate: 3.0 },
            { id: "genji", winRate: 47.5, pickRate: 2.8 },
            { id: "tracer", winRate: 47.0, pickRate: 2.5 },
            { id: "widowmaker", winRate: 46.5, pickRate: 2.2 },
            { id: "venture", winRate: 46.0, pickRate: 2.0 }
        ],
        support: [
            { id: "moira", winRate: 55.8, pickRate: 14.5 },
            { id: "mercy", winRate: 53.5, pickRate: 12.2 },
            { id: "lucio", winRate: 52.2, pickRate: 8.5 },
            { id: "baptiste", winRate: 51.5, pickRate: 6.8 },
            { id: "brigitte", winRate: 51.0, pickRate: 5.5 },
            { id: "kiriko", winRate: 50.5, pickRate: 5.0 },
            { id: "illari", winRate: 50.0, pickRate: 4.5 },
            { id: "lifeweaver", winRate: 49.5, pickRate: 4.0 },
            { id: "ana", winRate: 48.5, pickRate: 5.5 },
            { id: "zenyatta", winRate: 48.0, pickRate: 3.0 },
            { id: "juno", winRate: 47.5, pickRate: 2.5 }
        ]
    },
    silver: {
        tank: [
            { id: "reinhardt", winRate: 53.8, pickRate: 11.5 },
            { id: "roadhog", winRate: 52.8, pickRate: 10.2 },
            { id: "dva", winRate: 52.2, pickRate: 9.5 },
            { id: "orisa", winRate: 51.8, pickRate: 8.8 },
            { id: "zarya", winRate: 51.2, pickRate: 7.5 },
            { id: "sigma", winRate: 50.8, pickRate: 6.2 },
            { id: "ramattra", winRate: 50.2, pickRate: 5.0 },
            { id: "winston", winRate: 49.5, pickRate: 4.5 },
            { id: "junkerqueen", winRate: 49.2, pickRate: 4.0 },
            { id: "mauga", winRate: 48.8, pickRate: 3.5 },
            { id: "doomfist", winRate: 48.2, pickRate: 3.0 },
            { id: "ball", winRate: 47.5, pickRate: 2.5 }
        ],
        dps: [
            { id: "reaper", winRate: 54.2, pickRate: 11.5 },
            { id: "soldier76", winRate: 53.5, pickRate: 9.8 },
            { id: "junkrat", winRate: 52.8, pickRate: 8.5 },
            { id: "bastion", winRate: 52.2, pickRate: 7.2 },
            { id: "ashe", winRate: 51.5, pickRate: 6.8 },
            { id: "torbjorn", winRate: 51.0, pickRate: 5.8 },
            { id: "pharah", winRate: 50.8, pickRate: 5.2 },
            { id: "symmetra", winRate: 50.5, pickRate: 4.8 },
            { id: "cassidy", winRate: 50.2, pickRate: 4.5 },
            { id: "mei", winRate: 50.0, pickRate: 4.2 },
            { id: "echo", winRate: 49.8, pickRate: 4.0 },
            { id: "hanzo", winRate: 49.5, pickRate: 3.8 },
            { id: "sojourn", winRate: 49.2, pickRate: 3.5 },
            { id: "genji", winRate: 48.8, pickRate: 3.2 },
            { id: "sombra", winRate: 48.5, pickRate: 3.0 },
            { id: "tracer", winRate: 48.2, pickRate: 2.8 },
            { id: "widowmaker", winRate: 47.8, pickRate: 2.5 },
            { id: "venture", winRate: 47.5, pickRate: 2.2 }
        ],
        support: [
            { id: "moira", winRate: 54.5, pickRate: 12.8 },
            { id: "mercy", winRate: 52.8, pickRate: 11.5 },
            { id: "lucio", winRate: 52.2, pickRate: 9.2 },
            { id: "kiriko", winRate: 51.5, pickRate: 7.5 },
            { id: "baptiste", winRate: 51.0, pickRate: 6.5 },
            { id: "brigitte", winRate: 50.5, pickRate: 5.5 },
            { id: "ana", winRate: 50.2, pickRate: 6.8 },
            { id: "illari", winRate: 49.8, pickRate: 4.5 },
            { id: "lifeweaver", winRate: 49.2, pickRate: 4.0 },
            { id: "zenyatta", winRate: 48.8, pickRate: 3.5 },
            { id: "juno", winRate: 48.2, pickRate: 3.0 }
        ]
    },
    gold: {
        tank: [
            { id: "dva", winRate: 53.2, pickRate: 10.5 },
            { id: "reinhardt", winRate: 52.8, pickRate: 9.8 },
            { id: "sigma", winRate: 52.2, pickRate: 8.5 },
            { id: "zarya", winRate: 51.8, pickRate: 7.8 },
            { id: "winston", winRate: 51.2, pickRate: 6.5 },
            { id: "roadhog", winRate: 50.8, pickRate: 6.0 },
            { id: "orisa", winRate: 50.5, pickRate: 5.5 },
            { id: "ramattra", winRate: 50.2, pickRate: 5.0 },
            { id: "junkerqueen", winRate: 49.8, pickRate: 4.5 },
            { id: "ball", winRate: 49.2, pickRate: 4.0 },
            { id: "doomfist", winRate: 48.8, pickRate: 3.5 },
            { id: "mauga", winRate: 48.5, pickRate: 3.2 }
        ],
        dps: [
            { id: "soldier76", winRate: 53.8, pickRate: 9.8 },
            { id: "ashe", winRate: 53.2, pickRate: 8.5 },
            { id: "reaper", winRate: 52.5, pickRate: 8.2 },
            { id: "hanzo", winRate: 52.2, pickRate: 7.5 },
            { id: "echo", winRate: 51.8, pickRate: 6.2 },
            { id: "cassidy", winRate: 51.5, pickRate: 5.8 },
            { id: "pharah", winRate: 51.2, pickRate: 5.5 },
            { id: "tracer", winRate: 51.0, pickRate: 5.2 },
            { id: "junkrat", winRate: 50.8, pickRate: 5.0 },
            { id: "genji", winRate: 50.5, pickRate: 4.8 },
            { id: "sojourn", winRate: 50.2, pickRate: 4.5 },
            { id: "mei", winRate: 50.0, pickRate: 4.2 },
            { id: "widowmaker", winRate: 49.8, pickRate: 4.0 },
            { id: "sombra", winRate: 49.5, pickRate: 3.8 },
            { id: "symmetra", winRate: 49.2, pickRate: 3.5 },
            { id: "torbjorn", winRate: 49.0, pickRate: 3.2 },
            { id: "bastion", winRate: 48.8, pickRate: 3.0 },
            { id: "venture", winRate: 48.5, pickRate: 2.8 }
        ],
        support: [
            { id: "kiriko", winRate: 53.8, pickRate: 10.5 },
            { id: "ana", winRate: 52.5, pickRate: 9.2 },
            { id: "lucio", winRate: 52.2, pickRate: 8.8 },
            { id: "moira", winRate: 51.8, pickRate: 7.5 },
            { id: "baptiste", winRate: 51.5, pickRate: 6.8 },
            { id: "mercy", winRate: 51.2, pickRate: 6.2 },
            { id: "brigitte", winRate: 50.8, pickRate: 5.5 },
            { id: "zenyatta", winRate: 50.5, pickRate: 5.0 },
            { id: "illari", winRate: 50.2, pickRate: 4.5 },
            { id: "lifeweaver", winRate: 49.8, pickRate: 4.0 },
            { id: "juno", winRate: 49.5, pickRate: 3.5 }
        ]
    },
    platinum: {
        tank: [
            { id: "dva", winRate: 53.5, pickRate: 11.2 },
            { id: "sigma", winRate: 52.8, pickRate: 9.5 },
            { id: "winston", winRate: 52.2, pickRate: 8.2 },
            { id: "zarya", winRate: 51.8, pickRate: 7.5 },
            { id: "reinhardt", winRate: 51.2, pickRate: 6.8 },
            { id: "roadhog", winRate: 50.8, pickRate: 5.8 },
            { id: "ball", winRate: 50.5, pickRate: 5.2 },
            { id: "ramattra", winRate: 50.2, pickRate: 4.8 },
            { id: "orisa", winRate: 49.8, pickRate: 4.5 },
            { id: "doomfist", winRate: 49.5, pickRate: 4.0 },
            { id: "junkerqueen", winRate: 49.2, pickRate: 3.5 },
            { id: "mauga", winRate: 48.8, pickRate: 3.0 }
        ],
        dps: [
            { id: "ashe", winRate: 54.2, pickRate: 9.8 },
            { id: "tracer", winRate: 53.5, pickRate: 8.5 },
            { id: "soldier76", winRate: 52.8, pickRate: 8.2 },
            { id: "hanzo", winRate: 52.5, pickRate: 7.8 },
            { id: "genji", winRate: 52.2, pickRate: 7.2 },
            { id: "echo", winRate: 51.8, pickRate: 6.5 },
            { id: "sojourn", winRate: 51.5, pickRate: 6.0 },
            { id: "cassidy", winRate: 51.2, pickRate: 5.5 },
            { id: "pharah", winRate: 51.0, pickRate: 5.0 },
            { id: "widowmaker", winRate: 50.8, pickRate: 4.8 },
            { id: "reaper", winRate: 50.5, pickRate: 4.5 },
            { id: "mei", winRate: 50.2, pickRate: 4.2 },
            { id: "sombra", winRate: 50.0, pickRate: 4.0 },
            { id: "junkrat", winRate: 49.8, pickRate: 3.8 },
            { id: "symmetra", winRate: 49.5, pickRate: 3.5 },
            { id: "torbjorn", winRate: 49.2, pickRate: 3.2 },
            { id: "bastion", winRate: 48.8, pickRate: 3.0 },
            { id: "venture", winRate: 48.5, pickRate: 2.8 }
        ],
        support: [
            { id: "kiriko", winRate: 54.2, pickRate: 11.5 },
            { id: "ana", winRate: 53.5, pickRate: 10.2 },
            { id: "lucio", winRate: 52.8, pickRate: 8.5 },
            { id: "baptiste", winRate: 52.2, pickRate: 7.2 },
            { id: "zenyatta", winRate: 51.5, pickRate: 5.5 },
            { id: "moira", winRate: 51.2, pickRate: 5.2 },
            { id: "mercy", winRate: 50.8, pickRate: 5.0 },
            { id: "brigitte", winRate: 50.5, pickRate: 4.5 },
            { id: "illari", winRate: 50.2, pickRate: 4.0 },
            { id: "lifeweaver", winRate: 49.8, pickRate: 3.5 },
            { id: "juno", winRate: 49.5, pickRate: 3.0 }
        ]
    },
    diamond: {
        tank: [
            { id: "dva", winRate: 54.2, pickRate: 12.5 },
            { id: "winston", winRate: 53.5, pickRate: 10.2 },
            { id: "sigma", winRate: 52.8, pickRate: 9.5 },
            { id: "ball", winRate: 52.2, pickRate: 6.8 },
            { id: "zarya", winRate: 51.5, pickRate: 6.2 },
            { id: "reinhardt", winRate: 51.0, pickRate: 5.5 },
            { id: "doomfist", winRate: 50.8, pickRate: 5.0 },
            { id: "ramattra", winRate: 50.5, pickRate: 4.5 },
            { id: "roadhog", winRate: 50.2, pickRate: 4.2 },
            { id: "orisa", winRate: 49.8, pickRate: 3.8 },
            { id: "junkerqueen", winRate: 49.5, pickRate: 3.5 },
            { id: "mauga", winRate: 49.2, pickRate: 3.0 }
        ],
        dps: [
            { id: "tracer", winRate: 54.5, pickRate: 10.5 },
            { id: "ashe", winRate: 53.8, pickRate: 9.8 },
            { id: "genji", winRate: 53.2, pickRate: 8.5 },
            { id: "sojourn", winRate: 52.8, pickRate: 7.8 },
            { id: "hanzo", winRate: 52.2, pickRate: 7.2 },
            { id: "echo", winRate: 52.0, pickRate: 6.5 },
            { id: "widowmaker", winRate: 51.8, pickRate: 6.0 },
            { id: "soldier76", winRate: 51.5, pickRate: 5.5 },
            { id: "cassidy", winRate: 51.2, pickRate: 5.0 },
            { id: "pharah", winRate: 51.0, pickRate: 4.8 },
            { id: "sombra", winRate: 50.8, pickRate: 4.5 },
            { id: "mei", winRate: 50.5, pickRate: 4.2 },
            { id: "reaper", winRate: 50.2, pickRate: 4.0 },
            { id: "junkrat", winRate: 50.0, pickRate: 3.8 },
            { id: "symmetra", winRate: 49.5, pickRate: 3.5 },
            { id: "torbjorn", winRate: 49.2, pickRate: 3.2 },
            { id: "bastion", winRate: 48.8, pickRate: 3.0 },
            { id: "venture", winRate: 48.5, pickRate: 2.8 }
        ],
        support: [
            { id: "kiriko", winRate: 54.8, pickRate: 12.8 },
            { id: "ana", winRate: 54.2, pickRate: 11.5 },
            { id: "lucio", winRate: 53.2, pickRate: 9.2 },
            { id: "baptiste", winRate: 52.5, pickRate: 7.5 },
            { id: "zenyatta", winRate: 52.2, pickRate: 6.2 },
            { id: "moira", winRate: 51.5, pickRate: 5.0 },
            { id: "brigitte", winRate: 51.0, pickRate: 4.5 },
            { id: "mercy", winRate: 50.8, pickRate: 4.2 },
            { id: "illari", winRate: 50.5, pickRate: 4.0 },
            { id: "lifeweaver", winRate: 50.0, pickRate: 3.5 },
            { id: "juno", winRate: 49.5, pickRate: 3.0 }
        ]
    },
    master: {
        tank: [
            { id: "dva", winRate: 54.8, pickRate: 14.5 },
            { id: "winston", winRate: 54.2, pickRate: 12.2 },
            { id: "sigma", winRate: 53.2, pickRate: 9.8 },
            { id: "ball", winRate: 52.8, pickRate: 8.5 },
            { id: "doomfist", winRate: 52.2, pickRate: 6.2 },
            { id: "zarya", winRate: 51.5, pickRate: 5.5 },
            { id: "ramattra", winRate: 51.0, pickRate: 5.0 },
            { id: "reinhardt", winRate: 50.8, pickRate: 4.5 },
            { id: "roadhog", winRate: 50.2, pickRate: 4.0 },
            { id: "junkerqueen", winRate: 49.8, pickRate: 3.5 },
            { id: "orisa", winRate: 49.5, pickRate: 3.0 },
            { id: "mauga", winRate: 49.2, pickRate: 2.8 }
        ],
        dps: [
            { id: "tracer", winRate: 55.2, pickRate: 12.8 },
            { id: "genji", winRate: 54.5, pickRate: 10.5 },
            { id: "sojourn", winRate: 53.8, pickRate: 9.2 },
            { id: "echo", winRate: 53.2, pickRate: 8.5 },
            { id: "widowmaker", winRate: 52.8, pickRate: 7.2 },
            { id: "ashe", winRate: 52.5, pickRate: 6.8 },
            { id: "hanzo", winRate: 52.2, pickRate: 6.5 },
            { id: "sombra", winRate: 51.8, pickRate: 5.8 },
            { id: "cassidy", winRate: 51.5, pickRate: 5.2 },
            { id: "soldier76", winRate: 51.2, pickRate: 5.0 },
            { id: "pharah", winRate: 51.0, pickRate: 4.5 },
            { id: "mei", winRate: 50.5, pickRate: 4.0 },
            { id: "reaper", winRate: 50.2, pickRate: 3.8 },
            { id: "junkrat", winRate: 50.0, pickRate: 3.5 },
            { id: "symmetra", winRate: 49.5, pickRate: 3.0 },
            { id: "torbjorn", winRate: 49.0, pickRate: 2.8 },
            { id: "bastion", winRate: 48.5, pickRate: 2.5 },
            { id: "venture", winRate: 48.2, pickRate: 2.2 }
        ],
        support: [
            { id: "kiriko", winRate: 55.5, pickRate: 14.5 },
            { id: "ana", winRate: 54.8, pickRate: 13.2 },
            { id: "lucio", winRate: 53.5, pickRate: 10.5 },
            { id: "zenyatta", winRate: 53.2, pickRate: 7.8 },
            { id: "baptiste", winRate: 52.5, pickRate: 6.5 },
            { id: "brigitte", winRate: 51.8, pickRate: 5.0 },
            { id: "moira", winRate: 51.2, pickRate: 4.5 },
            { id: "mercy", winRate: 50.8, pickRate: 4.0 },
            { id: "illari", winRate: 50.5, pickRate: 3.8 },
            { id: "lifeweaver", winRate: 50.0, pickRate: 3.2 },
            { id: "juno", winRate: 49.5, pickRate: 2.8 }
        ]
    },
    gm: {
        tank: [
            { id: "dva", winRate: 55.5, pickRate: 18.5 },
            { id: "winston", winRate: 54.8, pickRate: 15.2 },
            { id: "ball", winRate: 54.2, pickRate: 12.8 },
            { id: "sigma", winRate: 53.5, pickRate: 9.5 },
            { id: "doomfist", winRate: 53.2, pickRate: 8.2 },
            { id: "zarya", winRate: 52.5, pickRate: 6.0 },
            { id: "ramattra", winRate: 51.8, pickRate: 5.0 },
            { id: "reinhardt", winRate: 51.2, pickRate: 4.5 },
            { id: "junkerqueen", winRate: 50.8, pickRate: 4.0 },
            { id: "roadhog", winRate: 50.2, pickRate: 3.5 },
            { id: "orisa", winRate: 49.8, pickRate: 3.0 },
            { id: "mauga", winRate: 49.5, pickRate: 2.5 }
        ],
        dps: [
            { id: "tracer", winRate: 56.2, pickRate: 15.8 },
            { id: "genji", winRate: 55.5, pickRate: 12.5 },
            { id: "sojourn", winRate: 54.8, pickRate: 10.8 },
            { id: "widowmaker", winRate: 54.2, pickRate: 9.5 },
            { id: "echo", winRate: 53.8, pickRate: 8.2 },
            { id: "ashe", winRate: 53.2, pickRate: 7.0 },
            { id: "hanzo", winRate: 52.8, pickRate: 6.5 },
            { id: "sombra", winRate: 52.5, pickRate: 5.8 },
            { id: "cassidy", winRate: 52.0, pickRate: 5.2 },
            { id: "soldier76", winRate: 51.5, pickRate: 4.8 },
            { id: "pharah", winRate: 51.2, pickRate: 4.2 },
            { id: "mei", winRate: 50.8, pickRate: 3.8 },
            { id: "reaper", winRate: 50.2, pickRate: 3.2 },
            { id: "junkrat", winRate: 50.0, pickRate: 3.0 },
            { id: "symmetra", winRate: 49.5, pickRate: 2.5 },
            { id: "torbjorn", winRate: 49.0, pickRate: 2.2 },
            { id: "bastion", winRate: 48.5, pickRate: 2.0 },
            { id: "venture", winRate: 48.0, pickRate: 1.8 }
        ],
        support: [
            { id: "kiriko", winRate: 56.5, pickRate: 18.2 },
            { id: "ana", winRate: 55.8, pickRate: 16.5 },
            { id: "lucio", winRate: 54.5, pickRate: 12.8 },
            { id: "zenyatta", winRate: 54.2, pickRate: 9.5 },
            { id: "baptiste", winRate: 53.2, pickRate: 7.2 },
            { id: "brigitte", winRate: 52.5, pickRate: 5.5 },
            { id: "moira", winRate: 51.5, pickRate: 4.2 },
            { id: "mercy", winRate: 51.0, pickRate: 3.8 },
            { id: "illari", winRate: 50.8, pickRate: 3.5 },
            { id: "lifeweaver", winRate: 50.2, pickRate: 3.0 },
            { id: "juno", winRate: 49.8, pickRate: 2.5 }
        ]
    }
};

// === Meta State ===
let currentRank = 'all';

// === Meta DOM Elements ===
const metaSection = document.getElementById('meta-section');
const rankTabs = document.querySelectorAll('.rank-tab');

// === Meta Functions ===
function initMeta() {
    renderMetaRankings();
}

function renderMetaRankings() {
    const data = metaData[currentRank];

    ['tank', 'dps', 'support'].forEach(role => {
        const container = document.getElementById(`meta-${role}`);
        if (!container || !data[role]) return;

        container.innerHTML = data[role].map((hero, index) => {
            const heroInfo = findHero(hero.id);
            const rankBadge = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}`;
            const topClass = index < 3 ? `top${index + 1}` : '';
            const winRateClass = hero.winRate >= 53 ? 'high' : hero.winRate >= 51 ? 'mid' : 'low';

            return `
                <div class="meta-hero-item ${topClass}">
                    <span class="meta-rank-badge">${rankBadge}</span>
                    <span class="meta-hero-name">${heroInfo.name[currentLang]}</span>
                    <div class="meta-stats">
                        <div class="meta-stat">
                            <span class="meta-stat-value ${winRateClass}">${hero.winRate}%</span>
                            <span class="meta-stat-label">${i18n[currentLang].winRate}</span>
                        </div>
                        <div class="meta-stat">
                            <span class="meta-stat-value">${hero.pickRate}%</span>
                            <span class="meta-stat-label">${i18n[currentLang].pickRate}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    });
}

// === Meta Event Listeners ===
rankTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        rankTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentRank = tab.dataset.rank;
        renderMetaRankings();
    });
});

// === Update Navigation for Meta ===
navBtns.forEach(btn => {
    btn.removeEventListener('click', () => { });
});

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const section = btn.dataset.section;
        calloutsSection.classList.add('hidden');
        counterSection.classList.add('hidden');
        metaSection.classList.add('hidden');
        eventsSection.classList.add('hidden');

        if (section === 'callouts') {
            calloutsSection.classList.remove('hidden');
        } else if (section === 'counter') {
            counterSection.classList.remove('hidden');
            initCounterPick();
        } else if (section === 'meta') {
            metaSection.classList.remove('hidden');
            initMeta();
        } else if (section === 'events') {
            eventsSection.classList.remove('hidden');
            initEvents();
        }
    });
});

// ============================================
// === EVENTS COUNTDOWN FEATURE ===
// ============================================

// === Events i18n Extensions ===
i18n.ja.navEvents = "イベント";
i18n.ja.eventsTitle = "📅 イベントカウントダウン";
i18n.ja.eventsDesc = "次のイベント・アップデートまでの日数";
i18n.ja.days = "日";
i18n.ja.hours = "時間";
i18n.ja.minutes = "分";
i18n.ja.seconds = "秒";
i18n.ja.eventActive = "開催中！";
i18n.ja.eventSoon = "まもなく";
i18n.ja.eventUpcoming = "予定";

i18n.en.navEvents = "Events";
i18n.en.eventsTitle = "📅 Event Countdown";
i18n.en.eventsDesc = "Days until next event or update";
i18n.en.days = "Days";
i18n.en.hours = "Hours";
i18n.en.minutes = "Min";
i18n.en.seconds = "Sec";
i18n.en.eventActive = "Active!";
i18n.en.eventSoon = "Soon";
i18n.en.eventUpcoming = "Upcoming";

// === Events Data ===
const eventsData = [
    {
        id: "season14",
        icon: "🆕",
        name: { ja: "シーズン14", en: "Season 14" },
        type: { ja: "シーズン更新", en: "Season Update" },
        startDate: new Date("2026-02-15T00:00:00"),
        endDate: new Date("2026-04-15T00:00:00")
    },
    {
        id: "lunarnewyear",
        icon: "🧧",
        name: { ja: "旧正月イベント 2026", en: "Lunar New Year 2026" },
        type: { ja: "季節イベント", en: "Seasonal Event" },
        startDate: new Date("2026-02-10T00:00:00"),
        endDate: new Date("2026-03-03T00:00:00")
    },
    {
        id: "anniversary",
        icon: "🎂",
        name: { ja: "アニバーサリーイベント", en: "Anniversary Event" },
        type: { ja: "季節イベント", en: "Seasonal Event" },
        startDate: new Date("2026-05-20T00:00:00"),
        endDate: new Date("2026-06-10T00:00:00")
    },
    {
        id: "newhero",
        icon: "🦸",
        name: { ja: "新ヒーロー追加", en: "New Hero Release" },
        type: { ja: "コンテンツ", en: "Content" },
        startDate: new Date("2026-03-01T00:00:00"),
        endDate: new Date("2026-03-01T00:00:00")
    },
    {
        id: "newmap",
        icon: "🗺️",
        name: { ja: "新マップ追加", en: "New Map Release" },
        type: { ja: "コンテンツ", en: "Content" },
        startDate: new Date("2026-04-01T00:00:00"),
        endDate: new Date("2026-04-01T00:00:00")
    },
    {
        id: "competitiveseason",
        icon: "🏆",
        name: { ja: "コンペティティブシーズン開始", en: "Competitive Season Start" },
        type: { ja: "ランクマッチ", en: "Ranked" },
        startDate: new Date("2026-02-15T00:00:00"),
        endDate: new Date("2026-04-15T00:00:00")
    }
];

// === Events DOM Elements ===
const eventsSection = document.getElementById('events-section');
const eventsList = document.getElementById('events-list');

// === Events Functions ===
function initEvents() {
    renderEvents();
    // Update countdown every second
    setInterval(renderEvents, 1000);
}

function renderEvents() {
    const now = new Date();

    // Sort events by start date
    const sortedEvents = [...eventsData].sort((a, b) => {
        const aActive = now >= a.startDate && now <= a.endDate;
        const bActive = now >= b.startDate && now <= b.endDate;
        if (aActive && !bActive) return -1;
        if (!aActive && bActive) return 1;
        return a.startDate - b.startDate;
    });

    eventsList.innerHTML = sortedEvents.map(event => {
        const isActive = now >= event.startDate && now <= event.endDate;
        const targetDate = isActive ? event.endDate : event.startDate;
        const timeDiff = targetDate - now;
        const isPast = timeDiff < 0;

        if (isPast && !isActive) return '';

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let cardClass = 'event-card';
        let statusClass = 'upcoming';
        let statusText = i18n[currentLang].eventUpcoming;

        if (isActive) {
            cardClass += ' upcoming';
            statusClass = 'active';
            statusText = i18n[currentLang].eventActive;
        } else if (days <= 3) {
            cardClass += ' imminent';
            statusClass = 'soon';
            statusText = i18n[currentLang].eventSoon;
        } else if (days <= 14) {
            cardClass += ' soon';
            statusClass = 'soon';
            statusText = i18n[currentLang].eventSoon;
        }

        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const dateStr = event.startDate.toLocaleDateString(currentLang === 'ja' ? 'ja-JP' : 'en-US', dateOptions);

        return `
            <div class="${cardClass}">
                <div class="event-header">
                    <span class="event-icon">${event.icon}</span>
                    <div>
                        <div class="event-name">${event.name[currentLang]}</div>
                        <div class="event-type">${event.type[currentLang]}</div>
                    </div>
                </div>
                <div class="event-countdown">
                    <div class="countdown-item">
                        <div class="countdown-value">${Math.max(0, days)}</div>
                        <div class="countdown-label">${i18n[currentLang].days}</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value">${Math.max(0, hours)}</div>
                        <div class="countdown-label">${i18n[currentLang].hours}</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value">${Math.max(0, minutes)}</div>
                        <div class="countdown-label">${i18n[currentLang].minutes}</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-value">${Math.max(0, seconds)}</div>
                        <div class="countdown-label">${i18n[currentLang].seconds}</div>
                    </div>
                </div>
                <div class="event-date">${isActive ? '〜 ' : ''}${dateStr}</div>
                <div class="event-status ${statusClass}">${statusText}</div>
            </div>
        `;
    }).join('');
}
