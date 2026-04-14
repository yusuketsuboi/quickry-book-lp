import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 - Quickry Book",
  description: "Quickry Bookの利用規約です。",
};

export default function TermsPage() {
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
          Quickry Book 利用規約
        </h1>
        <p className="text-sm text-text-muted mb-10">
          最終更新日: 2026年4月12日 / 施行日: 2026年4月12日
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第1条（総則）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本利用規約（以下「本規約」といいます）は、Quickry株式会社（以下「当社」といいます）が提供する予約枠トレードマーケットプレイス「Quickry
                Book」（以下「本サービス」といいます）の利用条件を定めるものです。
              </li>
              <li>
                本サービスをご利用いただくすべてのユーザー（以下「ユーザー」といいます）は、本規約に同意した上で本サービスを利用するものとします。
              </li>
              <li>
                本規約は、民法第548条の2に定める定型約款に該当し、ユーザーが本サービスに登録した時点で本規約の全条項に同意したものとみなします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第2条（定義）
            </h2>
            <p className="mb-2">
              本規約において使用する用語の意義は、以下のとおりとします。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>「予約枠」</strong>:
                本サービスに加盟する店舗（以下「加盟店」といいます）が提供するサービスの予約可能な日時および内容を指します。
              </li>
              <li>
                <strong>「トレード」</strong>:
                ユーザー間で予約枠を譲渡または売買することを指します。法的には、予約枠に係るサービス提供を受ける権利（債権）の譲渡に該当します。
              </li>
              <li>
                <strong>「出品者」</strong>:
                自己が保有する予約枠をトレードに出品するユーザーを指します。
              </li>
              <li>
                <strong>「購入者」</strong>:
                トレードにおいて予約枠を購入するユーザーを指します。
              </li>
              <li>
                <strong>「トレード価格」</strong>:
                出品者が設定する予約枠の売買価格を指します。
              </li>
              <li>
                <strong>「手数料」</strong>:
                トレード成立時に当社が収受する対価を指します。
              </li>
              <li>
                <strong>「クーポン」</strong>:
                出品者に対してトレード成立時に付与される、本サービス内で利用可能なポイントを指します。
              </li>
              <li>
                <strong>「加盟店」</strong>:
                当社と加盟店契約を締結し、本サービスを通じて予約枠を提供する事業者を指します。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第3条（アカウント登録）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本サービスの利用を希望する者は、当社所定の方法によりアカウント登録を行うものとします。
              </li>
              <li>
                登録に際しては、真実かつ正確な情報を提供しなければなりません。
              </li>
              <li>
                以下のいずれかに該当する場合、当社は登録を拒否し、または事後的にアカウントを停止もしくは削除することができます。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    登録情報の全部または一部に虚偽、誤記または記載漏れがある場合
                  </li>
                  <li>
                    18歳未満の者が法定代理人の同意を得ずに登録した場合
                  </li>
                  <li>
                    過去に本規約違反によりアカウントを停止または削除された者である場合
                  </li>
                  <li>反社会的勢力等（第14条に定義）に該当する場合</li>
                  <li>
                    その他、当社が登録を適当でないと合理的に判断した場合
                  </li>
                </ul>
              </li>
              <li>
                ユーザーは、登録情報に変更が生じた場合、速やかに当社所定の方法により変更手続きを行うものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第4条（アカウントの管理）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                ユーザーは、自己のアカウント情報（メールアドレス、パスワード等）を自己の責任で適切に管理するものとします。
              </li>
              <li>
                ユーザーは、アカウント情報を第三者に譲渡、貸与または共有してはなりません。
              </li>
              <li>
                アカウント情報の管理不十分、第三者による使用等による損害について、当社は一切の責任を負いません。ただし、当社の故意または重大な過失による場合はこの限りではありません。
              </li>
              <li>
                ユーザーは、アカウントの不正使用またはそのおそれを発見した場合、直ちに当社に通知するものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第5条（予約およびトレードのルール）
            </h2>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              5-1. 予約
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                ユーザーは、本サービスを通じて加盟店の予約枠を予約することができます。
              </li>
              <li>
                予約の成立条件、提供されるサービスの内容その他の条件は、各加盟店が定めるものとします。
              </li>
              <li>
                ユーザーは、予約した日時に加盟店を訪問し、サービスを受けるものとします。
              </li>
            </ol>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              5-2. トレードの出品
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                予約枠を保有するユーザーは、当社所定の条件に従い、当該予約枠をトレードに出品することができます。
              </li>
              <li>
                出品に際し、出品者は以下の条件を遵守するものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>自己が正当に保有する予約枠のみを出品すること</li>
                  <li>
                    当社が定めるトレード価格の上限を超えない範囲で価格を設定すること
                  </li>
                  <li>
                    予約枠に関する正確な情報（日時、加盟店名、サービス内容等）を記載すること
                  </li>
                  <li>当社が別途定める同時出品数の上限を超えないこと</li>
                </ul>
              </li>
              <li>
                加盟店がトレードを許可していない予約枠は、出品することができません。
              </li>
              <li>
                出品者は、トレードが成立するまでの間、出品を取り消すことができます。
              </li>
            </ol>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              5-3. トレードの購入
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                ユーザーは、出品されている予約枠を、表示されたトレード価格で購入することができます。
              </li>
              <li>
                購入者は、購入手続きの完了前に、トレード価格、手数料、加盟店の情報、予約日時その他の重要事項を確認するものとします。
              </li>
              <li>
                トレードは、購入者の決済が完了した時点で成立するものとします。
              </li>
              <li>
                トレード成立後、予約枠は出品者から購入者に移転し、購入者が当該予約枠に係るサービス提供を受ける権利を取得します。
              </li>
            </ol>

            <h3 className="text-base font-bold text-text-primary mt-4 mb-2">
              5-4. キャンセルポリシー
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>トレード成立前</strong>:
                出品者は出品を取り消すことができます。購入手続き中のキャンセルは、決済完了前に限り可能です。
              </li>
              <li>
                <strong>トレード成立後</strong>:
                トレード成立後のキャンセルは、原則として認められません。ただし、以下の場合はこの限りではありません。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    加盟店が予約枠に係るサービスの提供を中止した場合
                  </li>
                  <li>
                    加盟店の都合により予約日時が変更された場合
                  </li>
                  <li>
                    天災、感染症の拡大その他の不可抗力により、サービスの提供が不可能となった場合
                  </li>
                  <li>その他、当社が合理的と認める事由がある場合</li>
                </ul>
              </li>
              <li>
                前項の場合における返金の可否および方法は、当社が合理的に判断するものとします。
              </li>
              <li>
                <strong>通常予約のキャンセル</strong>:
                トレードを経ない通常の予約のキャンセルは、各加盟店が定めるキャンセルポリシーに従うものとします。加盟店ごとのキャンセルポリシーは、予約確認画面に表示されます。
              </li>
              <li>
                加盟店が独自のキャンセルポリシーを定めている場合、当該ポリシーと本規約の間に矛盾があるときは、加盟店のキャンセルポリシーが優先されるものとします。ただし、トレードに関するキャンセルについては本規約が優先されます。
              </li>
              <li>
                通常予約のキャンセル期限は、各加盟店が設定した期限に従い、加盟店がキャンセル期限を設定していない場合は、予約日の前日23時59分（日本標準時）までとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第6条（手数料および決済）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                トレード成立時、当社は購入者が支払うトレード価格に対して40%の手数料を収受します。
              </li>
              <li>上記手数料は消費税込みの金額です。</li>
              <li>
                出品者には、トレード成立後、当社所定の計算方法に基づくクーポンが付与されます。クーポンは本サービス内でのみ利用可能であり、現金への換金はできません。
              </li>
              <li>
                決済は、Stripe,
                Inc.が提供する決済サービス「Stripe」（Stripe
                Connectを含みます）を通じて処理されます。ユーザーは、決済に関してStripeの利用規約（https://stripe.com/jp/legal）にも同意するものとします。
              </li>
              <li>
                当社は、Stripeを通じて決済を処理するものであり、ユーザーの決済情報（クレジットカード番号等）を直接取得または保管することはありません。
              </li>
              <li>
                決済に関するトラブル（不正利用、チャージバック等）については、ユーザーとStripeまたはカード発行会社との間で解決するものとします。ただし、当社は合理的な範囲で協力するものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第7条（トレードの法的性質）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本サービスにおけるトレードは、予約枠に係るサービスの提供を受ける権利（債権）の譲渡であり、当社は出品者と購入者の間の取引を仲介するプラットフォームとしての役割を果たすものです。
              </li>
              <li>
                当社は、トレードの当事者（売主または買主）ではなく、トレード対象となる予約枠に係るサービスの品質、内容、安全性等について保証するものではありません。
              </li>
              <li>
                トレードに関する紛争は、原則として出品者と購入者の間で解決するものとします。ただし、当社は紛争の解決に向けて合理的な範囲で協力する場合があります。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第8条（禁止事項）
            </h2>
            <p className="mb-2">
              ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>転売目的で予約枠を大量に取得する行為</li>
              <li>
                不当に高額な価格で予約枠を出品する行為（当社が定めるトレード価格上限を超える行為を含みます）
              </li>
              <li>
                虚偽の情報を登録し、または出品に際して虚偽の情報を記載する行為
              </li>
              <li>
                他のユーザーの個人情報を不正に収集、利用、開示する行為
              </li>
              <li>
                本サービスの運営を妨害する行為（サーバーへの過度な負荷をかける行為、不正アクセス、リバースエンジニアリング等を含みます）
              </li>
              <li>
                当社、加盟店、他のユーザーまたは第三者の知的財産権、プライバシー権、名誉権その他の権利もしくは利益を侵害する行為
              </li>
              <li>
                本サービスを利用して、当社が意図しない目的で情報を収集する行為（スクレイピング等を含みます）
              </li>
              <li>
                本サービス上で、わいせつ、暴力的、差別的その他不適切な表現を投稿する行為
              </li>
              <li>
                当社の事前の書面による承諾なく、本サービスを商業目的（広告、宣伝等）で利用する行為
              </li>
              <li>他のユーザーのアカウントを不正に使用する行為</li>
              <li>当社が合理的に不適当と判断する行為</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第9条（知的財産権）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本サービスに関するすべての知的財産権（著作権、商標権、特許権等を含みますがこれらに限りません）は、当社または当社にライセンスを許諾した者に帰属します。
              </li>
              <li>
                ユーザーが本サービス上に投稿したコンテンツ（レビュー、コメント等）に関する著作権は、当該ユーザーに帰属するものとします。ただし、ユーザーは当社に対し、本サービスの運営、改善、宣伝広告の目的で、当該コンテンツを無償で利用（複製、翻案、公衆送信等を含みます）する権利を、非独占的に許諾するものとします。
              </li>
              <li>
                ユーザーは、前項に基づく当社の利用に対し、著作者人格権を行使しないものとします。
              </li>
              <li>
                ユーザーは、本サービス上のコンテンツを、当社の事前の書面による承諾なく、複製、転載、改変、二次利用等してはなりません。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第10条（サービスの変更、中断、終了）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                当社は、以下のいずれかに該当する場合、ユーザーへの事前通知なく、本サービスの全部または一部を変更、中断または終了することができるものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    本サービスに係るシステムの保守、更新等を行う場合
                  </li>
                  <li>
                    天災、停電、通信障害その他の不可抗力により本サービスの提供が困難となった場合
                  </li>
                  <li>
                    コンピュータまたは通信回線の事故によりサービスが停止した場合
                  </li>
                  <li>
                    その他、当社が合理的に必要と判断した場合
                  </li>
                </ul>
              </li>
              <li>
                当社は、本サービスの提供の終了を行う場合には、合理的な期間をもって事前にユーザーに通知するものとします。
              </li>
              <li>
                本条に基づくサービスの変更、中断または終了に起因してユーザーに生じた損害について、当社は第11条に定める範囲で責任を負うものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第11条（免責事項および損害賠償の制限）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                当社は、本サービスの利用に関してユーザーに生じた損害について、当社の故意または過失による場合に限り、以下の範囲で損害を賠償する責任を負います。
              </li>
              <li>
                <strong>損害賠償の範囲</strong>:
                当社がユーザーに対して負担する損害賠償の額は、当該ユーザーが損害発生日から遡って過去12か月間に当社に対して支払った手数料の総額を上限とします。ただし、当社の故意または重大な過失に起因する場合はこの限りではありません。
              </li>
              <li>
                当社は、以下の事由によりユーザーに生じた損害については、当社の故意または重大な過失による場合を除き、責任を負わないものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    加盟店が提供するサービスの品質、内容、安全性等に関する事項
                  </li>
                  <li>
                    トレードの相手方（出品者または購入者）との間で生じた紛争
                  </li>
                  <li>
                    ユーザーの登録情報またはアカウント情報の管理不十分による損害
                  </li>
                  <li>
                    第10条に基づくサービスの変更、中断または終了に起因する損害（ただし、当社の合理的な予見可能性の範囲内のものを除きます）
                  </li>
                  <li>
                    通信回線、コンピュータ等の障害によるシステムの中断、遅滞、データの消失等
                  </li>
                  <li>
                    本サービスの利用に起因するユーザーの機器の故障、データの消失等
                  </li>
                </ul>
              </li>
              <li>
                本条の規定は、消費者契約法その他の法令により当社の損害賠償責任の免除または制限が認められない場合には、当該法令が許容する最大限の範囲で適用されるものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第12条（利用規約の変更）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                当社は、以下の場合に、民法第548条の4の規定に基づき、本規約を変更することができるものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    本規約の変更が、ユーザーの一般の利益に適合する場合
                  </li>
                  <li>
                    本規約の変更が、契約をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものである場合
                  </li>
                </ul>
              </li>
              <li>
                当社は、本規約の変更にあたり、変更の効力発生日の少なくとも2週間前までに、変更後の本規約の内容および効力発生日を、本サービス上での掲示、電子メールの送付その他の合理的な方法により周知するものとします。
              </li>
              <li>
                ユーザーが変更の効力発生日以降に本サービスを利用した場合、変更後の規約に同意したものとみなします。
              </li>
              <li>
                前項にかかわらず、ユーザーの権利義務に重大な影響を及ぼす変更については、当社はユーザーから個別の同意を取得するよう合理的な努力をするものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第13条（ユーザーの年齢制限）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本サービスは、18歳以上の者を対象としています。
              </li>
              <li>
                18歳未満の者が本サービスを利用する場合は、法定代理人（親権者等）の同意を得た上で利用するものとします。
              </li>
              <li>
                当社は、ユーザーが18歳未満であることが判明し、法定代理人の同意が確認できない場合、当該ユーザーのアカウントを停止または削除することができるものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第14条（反社会的勢力の排除）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                ユーザーは、自己が以下のいずれにも該当しないことを表明し、保証するものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者（以下、総称して「反社会的勢力」といいます）
                  </li>
                  <li>
                    反社会的勢力と資金提供、利益供与その他の関係を有する者
                  </li>
                  <li>反社会的勢力を利用している者</li>
                </ul>
              </li>
              <li>
                ユーザーは、自らまたは第三者を利用して、以下の行為を行わないことを誓約するものとします。
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>暴力的な要求行為</li>
                  <li>法的な責任を超えた不当な要求行為</li>
                  <li>
                    取引に関して脅迫的な言動をし、または暴力を用いる行為
                  </li>
                  <li>
                    風説を流布し、偽計を用いまたは威力を用いて当社の信用を毀損し、または当社の業務を妨害する行為
                  </li>
                </ul>
              </li>
              <li>
                当社は、ユーザーが前2項に違反した場合、催告なく直ちに当該ユーザーのアカウントを停止または削除することができるものとします。これによりユーザーに生じた損害について、当社は一切の責任を負いません。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第15条（通知）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                当社からユーザーへの通知は、本サービス上での掲示、ユーザーが登録したメールアドレスへの電子メールの送付その他当社が適当と認める方法により行うものとします。
              </li>
              <li>
                前項の通知が電子メールで行われる場合、当社がユーザーの登録メールアドレス宛に電子メールを発信した時点で、当該通知がユーザーに到達したものとみなします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第16条（権利義務の譲渡禁止）
            </h2>
            <p>
              ユーザーは、当社の事前の書面による承諾なく、本規約に基づく権利または義務を第三者に譲渡し、または担保に供してはなりません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第17条（分離可能性）
            </h2>
            <p>
              本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの条項および一部が無効または執行不能と判断された条項の残りの部分は、引き続き完全に効力を有するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第18条（準拠法および管轄裁判所）
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                本規約の解釈および適用は、日本法に準拠するものとします。
              </li>
              <li>
                本サービスに関連してユーザーと当社の間で生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">
              第19条（お問い合わせ）
            </h2>
            <p className="mb-3">
              本規約に関するお問い合わせは、以下の窓口までご連絡ください。
            </p>
            <ul className="space-y-1">
              <li>事業者名: Quickry株式会社</li>
              <li>代表者: 坪井勇介</li>
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
