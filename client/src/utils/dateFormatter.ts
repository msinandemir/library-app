import dayjs from "dayjs";
import "dayjs/locale/tr";
import customFormatter from "dayjs/plugin/customParseFormat";

dayjs.extend(customFormatter);
dayjs.locale("tr");

export const dateFormatter = (date: string, format?: string) => {
  const newDate = dayjs(date).format(format);
  return newDate;
};
