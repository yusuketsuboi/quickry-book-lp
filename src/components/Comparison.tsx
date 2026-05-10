import SectionHeading from "./SectionHeading";

const competitors = ["ホットペッパー", "一般的な予約管理ツール"];

const rows = [
  {
    label: "キャンセル対策",
    values: ["リマインド通知のみ", "キャンセル料請求のみ", "予約枠トレードで枠を埋める"],
  },
  {
    label: "費用",
    values: ["月10〜50万円の掲載費", "月0〜2万円の月額", "Freeプランなら月額0円"],
  },
  {
    label: "新規顧客獲得",
    values: ["掲載による集客のみ", "原則なし", "トレード経由で自然流入"],
  },
  {
    label: "キャンセル時の店舗収入",
    values: ["ゼロ", "キャンセル料（回収困難）", "トレード成立なら収益が発生"],
  },
];

export default function Comparison() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading
            subLabel="COMPARISON"
            title="他サービスにはない、Quickry Bookだけの仕組み"
          />
        </div>
        <p className="animate-on-scroll mx-auto mt-4 max-w-[640px] text-center text-sm leading-[1.8] text-text-secondary">
          予約を「管理する」だけの既存サービスとは、構造から違います。
        </p>

        {/* PC: Table */}
        <div className="animate-on-scroll mt-12 hidden lg:block">
          <table
            className="w-full overflow-hidden rounded-2xl shadow-md"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr className="bg-bg-dark text-sm font-semibold text-white">
                <th className="p-4 text-left" />
                {competitors.map((c) => (
                  <th key={c} className="p-4 text-left">
                    {c}
                  </th>
                ))}
                <th className="bg-primary p-4 text-left font-bold text-white">
                  Quickry Book
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={
                    ri < rows.length - 1 ? "border-b border-border" : ""
                  }
                >
                  <td className="p-4 align-top text-sm font-semibold text-text-primary">
                    {row.label}
                  </td>
                  {row.values.map((val, vi) => (
                    <td
                      key={vi}
                      className={`p-4 align-top text-sm ${
                        vi === 2
                          ? "bg-primary-50 font-semibold text-primary"
                          : "text-text-secondary"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="animate-on-scroll mt-12 flex flex-col gap-4 lg:hidden">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="bg-bg-dark px-5 py-3">
                <p className="text-sm font-bold text-white">{row.label}</p>
              </div>
              <div className="divide-y divide-border">
                {competitors.map((c, ci) => (
                  <div key={c} className="flex items-start gap-3 px-5 py-3">
                    <span className="w-[140px] shrink-0 text-xs text-text-muted">
                      {c}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {row.values[ci]}
                    </span>
                  </div>
                ))}
                <div className="flex items-start gap-3 bg-primary-50 px-5 py-3">
                  <span className="w-[140px] shrink-0 text-xs font-bold text-primary">
                    Quickry Book
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {row.values[2]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
