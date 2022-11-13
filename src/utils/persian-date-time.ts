const now = new Date();

export const persianDate = String(new Intl.DateTimeFormat("fa-IR").format(now));

export const persianTime = String(
  new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now)
);
