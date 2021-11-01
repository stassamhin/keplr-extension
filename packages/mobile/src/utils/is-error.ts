export const isError = (v: any | Error): v is Error =>
  typeof v === "object" &&
  v !== null &&
  v.hasOwnProperty("message") &&
  v.hasOwnProperty("name");
