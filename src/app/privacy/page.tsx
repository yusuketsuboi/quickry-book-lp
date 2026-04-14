import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー - Quickry Book",
  description: "Quickry Bookのプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
          Quickry Book プライバシーポリシー
        </h1>
        <p className="text-sm text-text-muted mb-10">
          最終更新日: 2026年4月12日 / 施行日: 2026年4月12日
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
          <p>
            Quickry株式会社（以下「当社」といいます）は、予約枠トレードマーケットプレイス「Quickry
            Book」（以下「本サービス」といいます）を提供するにあたり、ユーザーの個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）その他の関連法令を遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
          </p>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第1条（個人情報取扱事業者）
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      事業者名
                    </td>
                    <td className="py-2">Quickry株式会社</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      代表者
                    </td>
                    <td className="py-2">坪井勇介</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      所在地
                    </td>
                    <td className="py-2">
                      神奈川県横浜市西区みなとみらい三丁目7番1号
                      オーシャンゲートみなとみらい8階
                      神奈川県SHINみなとみらい
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      個人情報保護管理者
                    </td>
                    <td className="py-2">代表取締役 坪井勇介</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-text-primary whitespace-nowrap">
                      お問い合わせ先
                    </td>
                    <td className="py-2">
                      contact@quickry.jp / 050-6862-8551
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第2条（収集する個人情報の種類）
            </h2>
            <p className="mb-3">
              当社は、本サービスの提供にあたり、以下の個人情報を収集します。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              2-1. ユーザーから直接提供いただく情報
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>アカウント情報</strong>:
                氏名、メールアドレス、電話番号、パスワード（暗号化して保管）
              </li>
              <li>
                <strong>プロフィール情報</strong>:
                プロフィール画像、表示名
              </li>
              <li>
                <strong>決済情報</strong>:
                クレジットカード情報（Stripe,
                Inc.が取得・管理。当社は直接取得しません）
              </li>
              <li>
                <strong>お問い合わせ情報</strong>:
                お問い合わせの内容、お名前、メールアドレス
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              2-2. 加盟店（店舗オーナー）から提供いただく情報
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>事業者情報</strong>:
                店舗名、代表者名、所在地、電話番号、メールアドレス
              </li>
              <li>
                <strong>銀行口座情報</strong>: Stripe
                Connectを通じた売上金の振込先情報（Stripeが管理）
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              2-3. 本サービスの利用に伴い自動的に収集する情報
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>アクセスログ</strong>:
                IPアドレス、ブラウザの種類、OS情報、アクセス日時、リファラー
              </li>
              <li>
                <strong>利用履歴</strong>:
                予約履歴、トレード履歴、検索履歴、閲覧履歴
              </li>
              <li>
                <strong>端末情報</strong>:
                デバイスの種類、画面サイズ、言語設定
              </li>
              <li>
                <strong>位置情報</strong>:
                おおまかな位置情報（IPアドレスに基づくもの。GPSによる正確な位置情報は、ユーザーの同意がある場合にのみ取得します）
              </li>
              <li>
                <strong>Cookie情報</strong>: 第6条に詳述
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第3条（利用目的）
            </h2>
            <p className="mb-2">
              当社は、収集した個人情報を以下の目的で利用します。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>本サービスの提供、運営、維持および改善</li>
              <li>
                ユーザーのアカウント管理（登録、認証、本人確認）
              </li>
              <li>予約およびトレードの処理、管理</li>
              <li>決済処理（Stripe経由）</li>
              <li>
                ユーザーへの通知（予約確認、トレード成立通知、キャンセル通知等）
              </li>
              <li>ユーザーからのお問い合わせへの対応</li>
              <li>
                本サービスの利用状況の分析、統計データの作成（個人を特定しない形式で処理）
              </li>
              <li>不正利用の検知、防止</li>
              <li>
                本サービスに関する新機能、キャンペーン等のお知らせ（ユーザーが配信を希望した場合に限ります）
              </li>
              <li>利用規約への違反行為への対応</li>
              <li>法令に基づく対応</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第4条（第三者提供）
            </h2>
            <p className="mb-3">
              当社は、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              4-1. 業務委託先への提供
            </h3>
            <p className="mb-2">
              当社は、利用目的の達成に必要な範囲で、以下の業務委託先に個人情報の取り扱いを委託する場合があります。委託にあたっては、委託先の個人情報の取り扱いについて適切に監督します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Stripe, Inc.</strong> -
                決済処理、加盟店への売上金振込（米国）
              </li>
              <li>
                <strong>Supabase, Inc.</strong> -
                データベースホスティング、ユーザー認証（米国）
              </li>
              <li>
                <strong>Google LLC</strong> - アクセス解析（Google
                Analytics 4）（米国）
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              4-2. 法令に基づく提供
            </h3>
            <p>
              法令に基づき、裁判所、検察庁、警察等の公的機関から個人情報の開示を求められた場合、当社はこれに応じることがあります。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              4-3. 人の生命、身体または財産の保護
            </h3>
            <p>
              人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              4-4. トレードに伴う情報の共有
            </h3>
            <p>
              トレード成立時、取引の円滑な履行のために、予約に必要な最小限の情報（予約者名等）が加盟店に共有されます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第5条（外国にある第三者への提供）
            </h2>
            <p className="mb-3">
              当社は、第4条に記載のとおり、米国に所在する事業者（Stripe,
              Inc.、Supabase, Inc.、Google
              LLC）に個人情報の取り扱いを委託しています。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>米国の個人情報保護制度について</strong>:
                米国には、日本の個人情報保護法と同等の水準にある個人情報保護制度を有する国として個人情報保護委員会が認めた国には含まれていません（2026年4月時点）。ただし、米国にはカリフォルニア州消費者プライバシー法（CCPA）等の州レベルの法律が存在します。
              </li>
              <li>
                <strong>委託先の安全管理措置</strong>:
                当社は、上記の委託先がそれぞれ適切な安全管理措置を講じていることを確認しています。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Stripe, Inc.: PCI DSS Level
                    1に準拠した情報セキュリティ体制を整備
                  </li>
                  <li>
                    Supabase, Inc.: SOC 2 Type
                    IIの認証を取得し、TLS暗号化通信を実施
                  </li>
                  <li>
                    Google LLC: ISO/IEC 27001認証を取得
                  </li>
                </ul>
              </li>
              <li>
                ユーザーは、上記の外国にある第三者への個人情報の提供について、本ポリシーに同意することにより、個人情報保護法第28条に基づく同意を与えたものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第6条（Cookieおよびアクセス解析）
            </h2>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              6-1. Cookieの利用
            </h3>
            <p className="mb-2">
              当社は、本サービスにおいて以下の目的でCookieを使用します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>必須Cookie</strong>:
                ログインセッションの管理、セキュリティの確保（セッション終了時まで）
              </li>
              <li>
                <strong>機能Cookie</strong>:
                ユーザーの設定（言語、表示設定等）の保存（最大1年間）
              </li>
              <li>
                <strong>分析Cookie</strong>:
                サービスの利用状況の把握、改善（Google Analytics
                4）（最大2年間）
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              6-2. Google Analytics 4 の利用
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Google Analytics
                4は、Cookieを使用してユーザーの利用状況に関するデータを収集します。このデータは匿名で収集されており、個人を特定するものではありません。
              </li>
              <li>
                Google Analytics
                4によるデータ収集の仕組みやGoogleのデータ取り扱いについては、Google社のプライバシーポリシー（https://policies.google.com/privacy）をご確認ください。
              </li>
              <li>
                ユーザーは、Google
                Analyticsオプトアウトアドオン（https://tools.google.com/dlpage/gaoptout）を使用することにより、Google
                Analytics
                4によるデータ収集を無効にすることができます。
              </li>
            </ol>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              6-3. 外部送信規律への対応（改正電気通信事業法）
            </h3>
            <p>
              当社は、改正電気通信事業法（2023年6月施行）に基づく外部送信規律に対応し、Cookieその他の技術を用いた情報の外部送信について、本ポリシーにおいてその内容を公表しています。ユーザーは、ブラウザの設定によりCookieの受け入れを拒否することができます。ただし、必須Cookieを拒否した場合、本サービスの一部機能をご利用いただけなくなる場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第7条（個人情報の安全管理措置）
            </h2>
            <p className="mb-3">
              当社は、個人情報の漏洩、滅失または毀損の防止のため、個人情報保護法第23条に基づき、以下の安全管理措置を講じています。
            </p>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              7-1. 組織的安全管理措置
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                個人情報保護管理者の設置（代表取締役が兼任）
              </li>
              <li>個人情報取扱規程の策定および運用</li>
              <li>
                個人情報の取り扱い状況を確認する手段の整備（アクセスログの管理）
              </li>
              <li>漏洩等の事案に対応する体制の整備</li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              7-2. 人的安全管理措置
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                従業者への個人情報保護に関する教育・研修の実施
              </li>
              <li>
                個人情報の取り扱いに関する秘密保持義務の設定
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              7-3. 物理的安全管理措置
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                クラウドサービス（Supabase）を利用したデータ管理により、物理的なサーバー設備に対するアクセス制御はサービス提供事業者の基準に準拠
              </li>
            </ul>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              7-4. 技術的安全管理措置
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                TLS（Transport Layer
                Security）による通信の暗号化
              </li>
              <li>
                アクセス制御（ロールベースのアクセス管理）の実施
              </li>
              <li>
                外部からの不正アクセスの防止措置（ファイアウォール、WAF等）
              </li>
              <li>パスワードの暗号化保管（ハッシュ化）</li>
              <li>決済情報の非保持化（Stripeへの委託）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第8条（個人情報の保存期間）
            </h2>
            <p className="mb-3">
              当社は、収集した個人情報を以下の期間保存します。保存期間経過後は、速やかに消去または匿名化します。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-2 pr-4 text-left font-semibold text-text-primary">
                      情報の種類
                    </th>
                    <th className="py-2 text-left font-semibold text-text-primary">
                      保存期間
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">アカウント情報</td>
                    <td className="py-2">
                      アカウント削除後6か月間
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">
                      予約・トレード履歴
                    </td>
                    <td className="py-2">
                      取引完了後5年間（法令上の保存義務に基づく）
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">
                      お問い合わせ内容
                    </td>
                    <td className="py-2">対応完了後3年間</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">アクセスログ</td>
                    <td className="py-2">取得後1年間</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">Cookie情報</td>
                    <td className="py-2">
                      第6条に記載の各保存期間
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第9条（ユーザーの権利）
            </h2>
            <p className="mb-2">
              ユーザーは、当社に対し、個人情報保護法に基づき、以下の権利を行使することができます。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>利用目的の通知の請求</strong>:
                当社が保有するユーザーの個人情報の利用目的の通知を求めることができます。
              </li>
              <li>
                <strong>開示の請求</strong>:
                当社が保有するユーザーの個人情報の開示を求めることができます。
              </li>
              <li>
                <strong>訂正、追加または削除の請求</strong>:
                当社が保有するユーザーの個人情報の内容が事実でない場合、訂正、追加または削除を求めることができます。
              </li>
              <li>
                <strong>利用停止または消去の請求</strong>:
                当社がユーザーの個人情報を利用目的の範囲を超えて取り扱っている場合、または不正な手段により取得した場合、利用の停止または消去を求めることができます。
              </li>
              <li>
                <strong>第三者提供の停止の請求</strong>:
                当社がユーザーの同意なく個人情報を第三者に提供している場合、当該提供の停止を求めることができます。
              </li>
            </ol>
            <p className="mt-3">
              <strong>請求の手続き</strong>:
              上記の請求を行う場合は、第12条に定めるお問い合わせ窓口に、本人確認書類を添えてご連絡ください。当社は、ご本人からの請求であることを確認した上で、法令に定める期間内に対応いたします。なお、開示請求については、1件あたり1,000円（税込）の手数料をいただく場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第10条（個人情報の漏洩等が発生した場合の対応）
            </h2>
            <p className="mb-2">
              当社は、個人情報の漏洩、滅失、毀損等の事態が発生し、または発生したおそれがある場合、以下の対応を行います。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                事態の状況の把握および被害の拡大防止措置の実施
              </li>
              <li>事実関係の調査および原因の究明</li>
              <li>再発防止策の検討および実施</li>
              <li>
                個人情報保護委員会への報告（個人情報保護法第26条に基づく報告義務がある場合）
              </li>
              <li>
                影響を受ける可能性のあるユーザーへの通知
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第11条（本ポリシーの改定）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                当社は、法令の改正、事業内容の変更その他の必要に応じて、本ポリシーを改定することがあります。
              </li>
              <li>
                改定後のポリシーは、本サービス上に掲示した時点から効力を生じるものとします。ただし、ユーザーの権利に重大な影響を及ぼす変更を行う場合には、改定の効力発生日の少なくとも2週間前までに、本サービス上での掲示または電子メールによる通知を行います。
              </li>
              <li>
                ユーザーが改定後のポリシーの効力発生日以降に本サービスを利用した場合、改定後のポリシーに同意したものとみなします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第12条（お問い合わせ窓口）
            </h2>
            <p className="mb-3">
              個人情報の取り扱いに関するお問い合わせ、苦情、開示等の請求は、以下の窓口までご連絡ください。
            </p>
            <ul className="space-y-1">
              <li>事業者名: Quickry株式会社</li>
              <li>
                個人情報保護管理者: 代表取締役 坪井勇介
              </li>
              <li>
                所在地:
                神奈川県横浜市西区みなとみらい三丁目7番1号
                オーシャンゲートみなとみらい8階 神奈川県SHINみなとみらい
              </li>
              <li>メールアドレス: contact@quickry.jp</li>
              <li>電話番号: 050-6862-8551</li>
            </ul>
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
