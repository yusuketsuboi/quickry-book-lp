import Image from "next/image";
import SectionHeading from "./SectionHeading";

const trustItems = [
  {
    title: "「ものづくり補助金」採択",
    detail: "予約枠トレードシステムの開発が国の補助事業として認定",
  },
  {
    title: "特許出願中",
    detail: "予約枠トレードの仕組みに関する特許を出願済み",
  },
];

export default function Trust() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="TRUST" title="信頼性" />
        </div>

        {/* Trust items */}
        <div className="mt-12 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                <Image
                  src="/icon_check_blue.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-text-primary">
                  {item.title}
                </p>
                {item.detail && (
                  <p className="mt-1 text-xs text-text-muted">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
