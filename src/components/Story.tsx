/**
 * 物語フル4枚（S3-S6）— LP版の背骨。
 * 原稿 v4.2 LP版構成に厳密準拠。本文・法務必須文言は一字も改変しない。
 * - S3: 架空イメージ注記をフル文・本文70%以上サイズ・同濃度（グレーアウト禁止）・読み飛ばせない位置で先頭表示
 * - S4: 「本来なら7,000円の売上が消える瞬間」固定。出典脚注・件数・率・人数は一切置かない
 * - S6: 「例: ¥7,500」太字常時表示／条件併記を同一カード直下中央／注記3本／料率%は出さない
 */
export default function Story() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[760px] px-5 py-20 lg:px-0 lg:py-32">
        {/* ===== S3 月曜の朝の話 ===== */}
        <article className="animate-on-scroll">
          {/* 架空イメージ注記（フル文・本文70%以上サイズ・同濃度・読み飛ばせない位置） */}
          <p className="text-[0.85em] leading-[1.9] text-text-primary lg:text-base">
            以下は架空の導入イメージです。実在する店舗・人物に基づくものではありません。
          </p>

          <h2 className="mt-8 text-2xl font-bold leading-[1.5] text-text-primary lg:text-[34px]">
            月曜の朝の話
          </h2>

          <div className="mt-7 space-y-6 text-base leading-[2.1] text-text-secondary lg:text-lg">
            <p>
              東京都内で美容室を営む田中さん。月曜の朝9時、タブレットで今日の予約を確認していました。
            </p>
            <p>
              窓の外はまだ少し静かで、店内にはコーヒーの香りが残っています。週末の余韻と、これから始まる一週間の予定が、画面の中で静かに並んでいる。指先でスクロールしながら、田中さんは今日来てくださるお客様の顔を、ひとつずつ思い浮かべていました。
            </p>
            <p>
              中規模の美容室を切り盛りする日々のなかで、月曜の朝のこの時間は、いちばん落ち着いて先を見通せる時間でもあります。――その静かな朝が、少しだけ動き出すのは、もう少し後のことでした。
            </p>
          </div>

          <p className="mt-5 text-xs text-text-muted">※画像はイメージです</p>
        </article>

        {/* ===== S4 キャンセル、その瞬間の話 ===== */}
        <article className="animate-on-scroll mt-24 border-t border-border pt-20 lg:mt-32 lg:pt-28">
          <h2 className="text-2xl font-bold leading-[1.5] text-text-primary lg:text-[34px]">
            キャンセル、その瞬間の話
          </h2>

          <div className="mt-7 space-y-6 text-base leading-[2.1] text-text-secondary lg:text-lg">
            <p>
              午前9時半すぎ。スマートフォンが短く鳴りました。10時のお客様からの、キャンセルの連絡でした。
            </p>
            <p>
              体調のこと、急な予定。理由はいつも、誰のせいでもありません。それでも画面を閉じた田中さんの手元には、ぽっかりと空いた一枠が残ります。
              <span className="font-bold text-text-primary">
                本来なら7,000円の売上が消える瞬間。
              </span>
              準備していた時間も、空けておいた席も、そのまま静かにこぼれていきます。
            </p>
            <p>
              そして、こうした連絡は今日だけのことではありません。一度きりなら小さなことでも、こうした空席は、季節や曜日の波とともに、忘れた頃にまた訪れます。決して多くはなくても、積み重なれば、けっして小さくない。月曜の朝に見通したはずの一週間に、空席が静かに増えていく――これは、特定の誰かの不注意ではなく、予約という仕組みが本来抱えている構造的な課題です。
            </p>
          </div>
        </article>

        {/* ===== S5 Quickry Bookが動く話 ===== */}
        <article className="animate-on-scroll mt-24 border-t border-border pt-20 lg:mt-32 lg:pt-28">
          <h2 className="text-2xl font-bold leading-[1.5] text-text-primary lg:text-[34px]">
            Quickry Bookが動く話
          </h2>

          <div className="mt-7 space-y-6 text-base leading-[2.1] text-text-secondary lg:text-lg">
            <p>
              ところが、同じ時間。スマートフォンの向こう側で、別のお客様が動いていました。
            </p>
            <p>
              「この日に、行きたい」。そう思った人が、アプリでオファーを送っていたのです。空席を探していた誰かと、空いてしまった一枠。そのふたつの間に、Quickry Bookが静かに入ります。
            </p>
            <p>
              田中さんが特別な操作をするわけではありません。空いた枠は、その枠を本当に必要としている新しいお客様のもとへ。届ける役目を、Quickry Bookが引き受けます。月曜の朝にこぼれかけた一枠が、別の誰かの「行きたい」と、もう一度つながり直していきます。
            </p>
          </div>
        </article>

        {/* ===== S6 売上計上の話 ===== */}
        <article className="animate-on-scroll mt-24 border-t border-border pt-20 lg:mt-32 lg:pt-28">
          <h2 className="text-2xl font-bold leading-[1.5] text-text-primary lg:text-[34px]">
            売上計上の話
          </h2>

          {/* 大きな数字カード（例: ¥7,500 + 条件併記を同一カード直下中央） */}
          <div className="mt-10 rounded-3xl bg-bg-gray p-8 text-center lg:p-12">
            <p className="font-[family-name:var(--font-accent)] text-5xl font-extrabold leading-none text-primary lg:text-7xl">
              <span className="font-bold">例:</span> ¥7,500
            </p>
            <p className="mt-5 text-xs leading-[1.8] text-text-secondary lg:text-sm">
              例: カット 7,000円 / 出品価格 2,000円 / Freeプランの場合
            </p>
          </div>

          <div className="mt-8 space-y-6 text-base leading-[2.1] text-text-secondary lg:text-lg">
            <p>
              消えるはずだった一枠から、新しいお客様が来店し、施術を受けてくださいました。施術売上は¥7,000、すべてお店の売上です。加えて、空いた枠が新しいお客様につながったことに対して、お店には報酬が入ります。合わせて、この日のこの枠は¥7,500。
            </p>
            <p>
              もしキャンセルのままだったら、この枠は0円でした。本来ゼロだった売上が発生した時にだけ、その新しく生まれた売上の一部を成果報酬としていただく――その考え方で動いています。お店の持ち出しはありません。
            </p>
          </div>

          {/* 注記3本 */}
          <div className="mt-8 space-y-2 text-xs leading-[1.8] text-text-muted">
            <p>※成果には個人差・店舗差があります</p>
            <p>
              ※あくまで一例です。実際の金額は、お客様が決める出品・オファー価格や条件により異なります。
            </p>
            <p>
              ※他業態（ネイル・整体・クリニック・飲食）でも同様の仕組み。詳細はFAQ参照
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
