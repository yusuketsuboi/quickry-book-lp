import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 - Quickry Book",
  description: "Quickry Bookの特定商取引法に基づく表記です。",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-bg-white">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-[800px] px-5 py-4">
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[800px] px-5 py-12">
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          特定商取引法に基づく表記
        </h1>
        <p className="text-sm text-text-muted mb-10">
          最終更新日: 2026年6月1日
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
          {/* 事業者情報テーブル */}
          <section>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap w-40">
                      販売事業者
                    </td>
                    <td className="py-3">Quickry株式会社</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      代表者
                    </td>
                    <td className="py-3">坪井勇介</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      所在地
                    </td>
                    <td className="py-3">
                      神奈川県横浜市西区みなとみらい三丁目7番1号
                      オーシャンゲートみなとみらい8階
                      神奈川県SHINみなとみらい
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      電話番号
                    </td>
                    <td className="py-3">
                      050-6862-8551
                      ※お問い合わせはメールにて承っております
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      メールアドレス
                    </td>
                    <td className="py-3">contact@quickry.jp</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      受付時間
                    </td>
                    <td className="py-3">
                      平日 10:00 -
                      18:00（土日祝日・年末年始を除く）
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      サービスURL
                    </td>
                    <td className="py-3">
                      https://lp-book.quickry.jp
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              販売価格
            </h2>
            <p className="mb-3">
              本サービス「Quickry
              Book」において、ユーザーが支払う費用は以下のとおりです。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              一般ユーザー（予約枠の購入者）
            </h3>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      予約枠のトレード購入価格
                    </td>
                    <td className="py-2">
                      出品者が設定した価格（消費税込み）
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      サービス利用手数料
                    </td>
                    <td className="py-2">
                      当社所定の料率（消費税込み）。サービス利用手数料は、購入価格の中から当社・加盟店・出品者に分配されるものであり、購入者が購入価格に上乗せして負担するものではありません。
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      その他
                    </td>
                    <td className="py-2">
                      上記以外の追加料金は発生しません
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-muted mb-4">
              例: トレード価格2,000円の予約枠を購入する場合、ユーザーの支払総額は2,000円です。サービス利用手数料は、この支払総額の中から当社・加盟店・出品者に分配されるものであり、購入者が2,000円に上乗せして負担する金額はありません。
            </p>
            <p className="text-sm text-text-muted">
              ※通常の予約（トレードを介さない直接予約）には、手数料は発生しません。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              加盟店（店舗オーナー）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      初期費用
                    </td>
                    <td className="py-2">無料（0円）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      月額利用料
                    </td>
                    <td className="py-2">無料（0円）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      トレード成立時の分配
                    </td>
                    <td className="py-2">
                      トレード成立時に、当社所定の計算方法に基づく金額が分配されます
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 支払方法 */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              支払方法
            </h2>
            <p className="mb-2">
              <strong>クレジットカード</strong>: Visa、Mastercard、American
              Express、JCB、Diners Club（Stripe,
              Inc.の決済サービスを利用）
            </p>
            <p className="text-sm text-text-muted">
              ※決済処理はStripe,
              Inc.が提供する決済基盤を通じて行われます。当社がクレジットカード情報を直接取得・保管することはありません。
            </p>
          </section>

          {/* 代金の支払時期（特商法11条） */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              代金の支払時期
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      トレードによる予約枠の購入
                    </td>
                    <td className="py-2">
                      購入手続き時に決済します（与信確保のうえ、トレード成立時に決済が確定する方式を含みます）
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      事前決済を選択した予約・割引予約
                    </td>
                    <td className="py-2">
                      予約手続き時に事前決済します
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      通常予約（来店払い）
                    </td>
                    <td className="py-2">
                      予約時の事前決済はなく、加盟店にて来店時にお支払いいただきます
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      加盟店の月額プラン料金
                    </td>
                    <td className="py-2">
                      Standard / Pro を選択した加盟店は、当社所定の方法により毎月課金されます
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 商品代金以外の必要料金（特商法11条・通信料） */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              商品代金以外の必要料金
            </h2>
            <p>
              本サービスの利用および各種ページの閲覧・通信に必要な通信料金・接続料金は、ユーザーのご負担となります。上記以外に、ユーザーが負担する手数料・送料等はありません。
            </p>
          </section>

          {/* 商品等の引き渡し時期 */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              商品等の引き渡し時期
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      トレードによる予約枠の移転
                    </td>
                    <td className="py-2">
                      決済完了後、即時に予約枠の名義が購入者に移転します
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      予約に基づくサービスの提供
                    </td>
                    <td className="py-2">
                      予約日時に加盟店にて提供されます
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 返品・キャンセルについて */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              返品・キャンセルについて
            </h2>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              トレードによる予約枠の購入
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      トレード成立後のキャンセル
                    </td>
                    <td className="py-2">
                      原則としてキャンセルはできません
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      返金が認められる場合
                    </td>
                    <td className="py-2">
                      (1)
                      加盟店がサービスの提供を中止した場合
                      (2)
                      加盟店の都合により予約日時が変更された場合
                      (3)
                      天災・不可抗力等によりサービス提供が不可能となった場合
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      返金方法
                    </td>
                    <td className="py-2">
                      Stripe経由でクレジットカードへ返金（処理に数日かかる場合があります）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              通常予約のキャンセル
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-52">
                      キャンセル方法
                    </td>
                    <td className="py-2">
                      本サービスのマイページから手続き可能
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      キャンセル期限
                    </td>
                    <td className="py-2">
                      各加盟店が設定するキャンセルポリシーに従います（加盟店がキャンセル期限を設定していない場合は、予約時刻の24時間前まで）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              ノーショー・当日キャンセル時のキャンセル料
            </h3>
            <p>
              来店払いの通常予約について、無料キャンセル期限（予約時刻の24時間前）を過ぎたキャンセル等の場合、各加盟店が平均的な損害の範囲内で定める額（上限＝当該予約のメニュー価格）のキャンセル料が発生することがあります。当社は加盟店に代わる回収代行のみを行い、キャンセル料は加盟店に帰属します（消費者契約法9条1号に基づき、平均的損害を超える部分は請求しません）。
            </p>
          </section>

          {/* クーリングオフ */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              クーリングオフについて
            </h2>
            <p>
              特定商取引法上、通信販売にはクーリングオフの規定は適用されません。ただし、上記「返品・キャンセルについて」に定める条件に該当する場合は、返金対応を行います。
            </p>
          </section>

          {/* 動作環境 */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              動作環境
            </h2>
            <p className="mb-2">
              本サービスのご利用には、以下の環境が必要です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap w-40">
                      Webブラウザ
                    </td>
                    <td className="py-2">
                      Google Chrome、Safari、Firefox、Microsoft
                      Edgeの各最新版
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      モバイル端末
                    </td>
                    <td className="py-2">
                      iOS 16以降 / Android 12以降
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      通信環境
                    </td>
                    <td className="py-2">
                      インターネット接続が必要
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* その他特記事項 */}
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              その他特記事項
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>サービスの性質</strong>:
                本サービスは、ユーザー間で予約枠をトレード（譲渡・売買）するためのマーケットプレイスを提供するものです。当社は取引の当事者ではなく、加盟店が提供するサービスの品質・内容について保証するものではありません。
              </li>
              <li>
                <strong>トレード価格</strong>:
                トレード価格は出品者が設定するものであり、当社が定める上限の範囲内となります。
              </li>
              <li>
                <strong>出品者への還元</strong>:
                トレード成立時に、出品者にはサービス内クーポンが付与されます。クーポンは本サービス内でのみ利用可能であり、現金への換金はできません。
              </li>
              <li>
                <strong>関連規約</strong>:
                本サービスのご利用には、別途「
                <Link
                  href="/terms"
                  className="text-primary hover:underline"
                >
                  Quickry Book利用規約
                </Link>
                」および「
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                >
                  Quickry Bookプライバシーポリシー
                </Link>
                」への同意が必要です。
              </li>
            </ol>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-gray">
        <div className="mx-auto max-w-[800px] px-5 py-6 text-center text-xs text-text-muted">
          &copy; 2026 Quickry Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
