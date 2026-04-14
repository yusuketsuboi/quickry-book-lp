import SectionHeading from "./SectionHeading";

const headers = ["", "ホットペッパー", "一般的な予約システム", "Quickry Book"];

const rows = [
  {
    label: "キャンセル対策",
    values: ["リマインド通知", "キャンセル料請求", "予約枠トレード"],
  },
  {
    label: "費用",
    values: ["月10〜50万円", "月0〜2万円", "成果報酬のみ"],
  },
  {
    label: "新規顧客獲得",
    values: ["掲載による集客", "なし", "トレード経由で自然流入"],
  },
  {
    label: "キャンセル時の店舗収入",
    values: ["ゼロ", "キャンセル料（回収困難）", "トレード手数料の50%"],
  },
];

export default function Comparison() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="COMPARISON" title="他サービスとの違い" />
        </div>

        <div className="animate-on-scroll mt-12 overflow-x-auto">
          <table
            className="w-full min-w-[600px] overflow-hidden rounded-2xl shadow-md"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr className="bg-bg-dark text-sm font-semibold text-white">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`p-4 text-left ${
                      i === 3
                        ? "bg-primary font-bold text-white"
                        : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
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
      </div>
    </section>
  );
}
