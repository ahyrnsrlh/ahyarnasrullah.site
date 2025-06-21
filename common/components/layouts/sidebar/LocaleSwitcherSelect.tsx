"use client";

import clsx from "clsx";
import { ChangeEvent, useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LocaleSwitcherSelectProps {
  items: Array<{ value: string; label: string }>;
  label: string;
  defaultValue: string;
  onChange?: (locale: string) => void;
  disabled?: boolean;
}

const LocaleSwitcherSelect = ({
  items,
  label,
  defaultValue,
  onChange,
  disabled = false,
}: LocaleSwitcherSelectProps) => {
  const [isPending, startTransition] = useTransition();
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    if (onChange) {
      // Use custom onChange if provided
      onChange(nextLocale);
    } else {
      // Fallback to manual navigation
      startTransition(() => {
        // Replace the locale in the current pathname
        const segments = pathname.split("/");
        segments[1] = nextLocale;
        const newPathname = segments.join("/");
        router.push(newPathname);
      });
    }
  };

  const isDisabled = disabled || isPending;

  return (
    <button
      className={clsx(
        "flex items-center justify-center text-neutral-900 dark:text-neutral-300 ",
        isDisabled && "transition-opacity [&:disabled]:opacity-30",
      )}
      onClick={() => setIsShow(!isShow)}
      disabled={isDisabled}
    >
      <select
        className="inline-flex appearance-none rounded-xl bg-neutral-100 px-2 py-1 outline-none transition duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        defaultValue={defaultValue}
        disabled={isDisabled}
        onChange={onSelectChange}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </button>
  );
};

export default LocaleSwitcherSelect;
