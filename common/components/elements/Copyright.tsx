"use client";

const Copyright = () => {
  // Static text instead of translations to avoid NextIntlClientProvider dependency
  const copyrightText = {
    part1: "© Copyright",
    part2: "Ahyar Nasrullah. All Rights Reserved.",
  };

  return (
    <div className="font-sora flex flex-wrap items-center justify-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
      <p>{copyrightText.part1}</p>
      <span>{new Date().getFullYear()}</span>
      <p>{copyrightText.part2}</p>
    </div>
  );
};

export default Copyright;
