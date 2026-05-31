import Link from "next/link";

// 案B Footer（フッター＋特商法11条テーブル）。モック忠実。
// ※モックのダミーリンク href="#" は実URL（/privacy /terms /legal）に接続。
// ★公開前ゲート2: 特商法11条の文言は田島法務の最終レビュー対象。
//   現状=モック値（登記住所等は特商法で開示義務がある公開情報＝秘密情報ではない）。
//   赤入れ時はこのブロックの値を差し替えれば反映される構造。
// .site-footer クラスでスコープ（生 footer{} セレクタが legal/privacy/terms の
//   各 <footer> に波及するのを避けるため）。
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-top">
        <div className="foot-brand">
          <div className="fb">
            QUICKRY <i>BOOK</i>
          </div>
          <p>
            予約枠を、本当に必要な人へ。満席の日の取りこぼしを来店につなげる、日本初の予約枠マーケットプレイス。
          </p>
        </div>
        <div className="foot-col">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#how">仕組み</a>
            </li>
            <li>
              <a href="#price">料金</a>
            </li>
            <li>
              <a href="#comparison">タイプ比較</a>
            </li>
            <li>
              <a href="#faq">よくある質問</a>
            </li>
            <li>
              <a href="#partner">実証実験パートナー募集</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Legal &amp; Contact</h4>
          <ul>
            <li>
              <Link href="/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/terms">利用規約</Link>
            </li>
            <li>
              <Link href="/legal">特定商取引法に基づく表記</Link>
            </li>
            <li>
              <a href="#contact">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 特商法11条 事業者情報（★公開前ゲート2＝田島法務レビュー対象） */}
      <div className="foot-legal">
        <h4>特定商取引法に基づく表記（第11条 事業者情報）</h4>
        <div className="ltable">
          <dl className="lrow">
            <dt>販売事業者</dt>
            <dd>Quickry株式会社</dd>
          </dl>
          <dl className="lrow">
            <dt>運営統括責任者</dt>
            <dd>坪井 勇介</dd>
          </dl>
          <dl className="lrow">
            <dt>所在地</dt>
            <dd>
              神奈川県横浜市西区みなとみらい三丁目７番１号
              オーシャンゲートみなとみらい８階 神奈川県ＳＨＩＮみなとみらい
            </dd>
          </dl>
          <dl className="lrow">
            <dt>お問い合わせ</dt>
            <dd>本ページの問い合わせフォームより受付</dd>
          </dl>
          <dl className="lrow">
            <dt>販売価格</dt>
            <dd>各プラン料金に準ずる（税込・初期費用0円）</dd>
          </dl>
          <dl className="lrow">
            <dt>お支払方法</dt>
            <dd>クレジットカード（Stripe）</dd>
          </dl>
          <dl className="lrow">
            <dt>提供時期</dt>
            <dd>お申込み・初期設定完了後より順次</dd>
          </dl>
          <dl className="lrow">
            <dt>返品・キャンセル</dt>
            <dd>サービスの性質上、提供後の返金は原則不可（詳細は利用規約）</dd>
          </dl>
        </div>
      </div>

      <div className="foot-bottom">
        <span className="cp">© 2026 Quickry Inc. All rights reserved.</span>
        <span className="pat">特許出願済（特願2024-139465）</span>
      </div>
    </footer>
  );
}
