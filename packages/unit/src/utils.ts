type ToMetric = (deep: number) => { remainder: number; prefix: string };
export const toMetric: ToMetric = (deep) => {
  switch (true) {
    case deep >= 24:
      return { remainder: deep - 24, prefix: "yocto" };
    case deep >= 21:
      return { remainder: deep - 21, prefix: "zepto" };
    case deep >= 18:
      return { remainder: deep - 18, prefix: "atto" };
    case deep >= 15:
      return { remainder: deep - 15, prefix: "femto" };
    case deep >= 12:
      return { remainder: deep - 12, prefix: "pico" };
    case deep >= 9:
      return { remainder: deep - 9, prefix: "nano" };
    case deep >= 6:
      return { remainder: deep - 6, prefix: "micro" };
    case deep >= 3:
      return { remainder: deep - 3, prefix: "milli" };
    case deep >= 2:
      return { remainder: deep - 2, prefix: "centi" };
    case deep >= 1:
      return { remainder: deep - 1, prefix: "deci" };
  }

  return { remainder: 0, prefix: "" };
};
