/**
 * S9 不安への答え（2x2グリッド）
 * 原稿 v4.2 LP版構成に準拠。料率%は出さない。
 * 左上に「ホットペッパーをやめなくていい？」を格上げ配置。
 */
const concerns = [
  {
    q: "Q. ホットペッパーをやめなくていい？",
    a: "やめる必要はありません。集客はこれまで通り。Quickry Bookは“空いてしまった枠”だけを新しい売上に変える役割です。今お使いの予約・集客の仕組みはそのままに、気になる枠だけ、並行して任せられます。",
  },
  {
    q: "Q. そもそも店舗は手数料を払うのか？",
    a: "通常の予約管理は手数料0円。トレードやキャンセルでお店が支払うものはありません。空いた枠が新しい売上に変わったときだけ、その新しく生まれた売上の一部を成果報酬としていただきます。お店の持ち出しはありません。",
  },
  {
    q: "Q. 転売されないか？",
    a: "お店が決めるルールの中で、お客様同士が枠を譲り合う仕組みです。出品価格に上限を設けるなど、投機目的を抑止する仕組みを設けています。あくまで主導権はお店にあります。",
  },
  {
    q: "Q. 既存のお客様が流れないか？",
    a: "お客様がアプリを開いたら、まずお店が表示されます。かかりつけのお店として登録されると、その関係は一定期間保たれる設計です。新しい出会いを増やしながら、今のお客様とのつながりは守られます。",
  },
];

export default function Benefits() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll text-center">
          <p className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[2px] text-primary">
            FREQUENT CONCERNS
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-[1.4] text-text-primary lg:text-[34px]">
            店舗オーナーの皆様からよくいただく
            <br className="lg:hidden" />
            不安に、お答えします
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {concerns.map((c, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} rounded-3xl bg-white p-7 shadow-sm lg:p-8`}
            >
              <p className="text-base font-bold leading-[1.6] text-text-primary lg:text-lg">
                {c.q}
              </p>
              <p className="mt-4 text-sm leading-[2] text-text-secondary">
                {c.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
