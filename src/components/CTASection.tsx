"use client";

import { useState } from "react";

// 案B S12 CTA（フォーム・2カラム）。レイアウトはモック忠実。
// 送信は既存の Formspree 実送信 + honeypot + dataLayer.push を流用（入江CTO方針§5）。
//   ※エンドポイント xpwryqqk は既存資産をそのまま踏襲（本番LP用に妥当かは佐川CMO/坪井CEO確認＝勝手に変えない）。
// name属性はモック側（shop/industry/name/tel/email/message）に統一。honeypot は name="website"。
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwryqqk";

const industryOptions = [
  "美容室・サロン",
  "ネイル・まつエク・エステ",
  "予約制の飲食店（コース料理）",
  "クリニック・歯科（自費診療）",
  "教室・レッスン",
  "レンタルスペース",
  "その他",
];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    // モック同様 novalidate + JSでvalidity判定
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    const formData = new FormData(form);

    // Bot detection (honeypot): 値があればサイレント完了
    if (formData.get("website")) {
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        window.dataLayer?.push({ event: "form_submit" });
      }
    } catch {
      const shop = formData.get("shop") || "";
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const body = `店舗名: ${shop}%0Aお名前: ${name}%0Aメール: ${email}`;
      window.location.href = `mailto:contact@quickry.jp?subject=お問い合わせ&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="sec cta" id="contact">
      <div className="cta-big" aria-hidden="true">
        12
      </div>
      <div className="wrap">
        <div className="cta-grid">
          <div className="cta-l rv">
            <div className="clab">Contact</div>
            <h2>
              まずは、
              <br />
              話を聞いてみる。
            </h2>
            <p className="clead">
              導入のご相談、料金の詳細、機能のデモ。どんなことでも、お気軽にお問い合わせください。2営業日以内にご連絡します。
            </p>
            <p className="ctel">
              <b>初期費用0円・月額0円・予約手数料0円。</b>
              <br />
              今お使いの予約システムはそのままで構いません。
            </p>
          </div>
          <div className="cta-r rv">
            {!submitted && (
              <form className="form" onSubmit={handleSubmit} noValidate>
                {/* honeypot（スパム対策・既存資産を引き継ぎ） */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                  }}
                  aria-hidden="true"
                >
                  <input
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="field">
                  <label>
                    店舗名<span className="req">必須</span>
                  </label>
                  <input
                    type="text"
                    name="shop"
                    required
                    placeholder="例）Quickry サロン 表参道店"
                  />
                </div>
                <div className="field">
                  <label>
                    業種<span className="req">必須</span>
                  </label>
                  <select name="industry" required defaultValue="">
                    <option value="" disabled>
                      選択してください
                    </option>
                    {industryOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="frow">
                  <div className="field">
                    <label>
                      お名前<span className="req">必須</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div className="field">
                    <label>
                      電話番号<span className="opt">任意</span>
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      placeholder="090-0000-0000"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>
                    メールアドレス<span className="req">必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="field">
                  <label>
                    お問い合わせ内容<span className="opt">任意</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="ご相談内容をご記入ください"
                  />
                </div>
                <button type="submit" className="submit" disabled={submitting}>
                  {submitting ? "送信中…" : "この内容で問い合わせる"}{" "}
                  <span className="x">→</span>
                </button>
                <p className="fmicro">
                  送信いただいた情報は、お問い合わせ対応の目的にのみ使用します。
                  <a href="/privacy">プライバシーポリシー</a>
                  に同意のうえ送信してください。
                </p>
              </form>
            )}
            <div className={`form-done${submitted ? " show" : ""}`}>
              <div className="fdi">SENT ── 送信完了</div>
              <h3>送信が完了しました。</h3>
              <p>
                お問い合わせありがとうございます。
                <br />
                担当者より2営業日以内にご連絡いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
