"use client";

const Copyright = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p className="font-semibold">COPYRIGHT © {new Date().getFullYear()}</p>
      <p className="mt-1">Ahyrnsrlh. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
