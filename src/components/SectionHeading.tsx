interface SectionHeadingProps {
  subLabel: string;
  title: string;
}

export default function SectionHeading({ subLabel, title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[2px] text-primary lg:text-sm">
        {subLabel}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-text-primary lg:text-[40px] lg:leading-[1.3]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-12 bg-accent" />
    </div>
  );
}
