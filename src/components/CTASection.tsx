"use client";

import { useState } from "react";

const industryOptions = [
  "美容室",
  "ネイル",
  "整体院・接骨院",
  "クリニック・歯科",
  "飲食店",
  "その他",
];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Bot detection (honeypot)
    if (formData.get("website")) {
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xpwryqqk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        window.dataLayer?.push({ event: "form_submit" });
      }
    } catch {
      const shopName = formData.get("shopName") || "";
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const body = `店舗名: ${shopName}%0Aお名前: ${name}%0Aメール: ${email}`;
      window.location.href = `mailto:contact@quickry.jp?subject=お問い合わせ&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/8 px-4 py-3.5 text-base text-white placeholder-white/40 outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(255,146,16,0.2)]";
  const labelClass = "mb-1.5 block text-xs text-white/70";

  return (
    <section id="cta-section" className="relative bg-bg-dark overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-[720px] px-5 py-24 text-center">
        <h2 className="animate-on-scroll text-2xl font-bold leading-[1.3] text-white lg:text-[40px]">
          キャンセルを、明日の売上に
          <br className="lg:hidden" />
          変えませんか？
        </h2>

        <p className="animate-on-scroll mt-5 text-sm leading-[1.9] text-white/80 lg:text-base">
          まずは話を聞くところから。導入の判断は、それからで大丈夫です。
        </p>

        {submitted ? (
          <div className="animate-on-scroll mt-10 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">
              お問い合わせありがとうございます
            </p>
            <p className="mt-4 text-sm text-white/80">
              お問い合わせには、通常1営業日以内に返信いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="animate-on-scroll mt-10 rounded-2xl border border-white/15 bg-white/5 p-8 text-left backdrop-blur-sm"
          >
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <label htmlFor="shopName" className={labelClass}>
                  店舗名 <span className="text-accent">*</span>
                </label>
                <input
                  id="shopName"
                  name="shopName"
                  type="text"
                  required
                  placeholder="例: 美容室 Quickry"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="industry" className={labelClass}>
                  業種 <span className="text-accent">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {industryOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-text-primary">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  お名前 <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="例: 山田 太郎"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  メールアドレス <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="例: info@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="phone" className={labelClass}>
                電話番号（任意）
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="例: 090-1234-5678"
                className={inputClass}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className={labelClass}>
                一言メッセージ（任意）
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="ご質問やご要望があればお気軽にどうぞ"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* 個人情報取得時の告知文 */}
            <p className="mt-5 text-[11px] leading-[1.7] text-white/60">
              ご入力いただいた情報は、お問い合わせへの対応のために利用します。詳しくは
              <a
                href="/privacy"
                className="underline transition-colors hover:text-white/90"
              >
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full cursor-pointer rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitting ? "送信中..." : "無料で話を聞いてみる"}
            </button>

            {/* 送信ボタン上（直下）プラポリ同意文 */}
            <p className="mt-3 text-center text-[11px] text-white/60">
              プライバシーポリシーに同意のうえ送信してください。
            </p>
          </form>
        )}

        {/* 返信について */}
        <p className="animate-on-scroll mt-8 text-xs text-white/60">
          お問い合わせには、通常1営業日以内に返信いたします。
        </p>

        {/* 特商法11条 事業者情報 */}
        <div className="animate-on-scroll mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left text-xs leading-[1.9] text-white/60">
          <p className="font-semibold text-white/80">Quickry株式会社</p>
          <p>代表取締役 坪井勇介</p>
          <p>〒[登記住所・田島が登記情報から記載]</p>
          <p>
            TEL: 050-6862-8551（受付時間 平日10:00-18:00 /
            留守番電話対応・折り返しご連絡）
          </p>
          <p>Email: contact@quickry.jp</p>
        </div>
      </div>
    </section>
  );
}
