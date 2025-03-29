import { OrderStatus } from "../types/commerce.type";

export const formatKrw = (num: number) => {
  return "₩" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatFullDateTime = (date: Date | string): string => {
  const d = typeof date === "string" ? new Date(date) : date;

  return `${d.getFullYear()}.${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${d.getDate().toString().padStart(2, "0")} ${d
    .getHours()
    .toString()
    .padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
};

export const formatOrderStatus = (status: OrderStatus): string => {
  switch (status) {
    case "PENDING":
      return "결제 대기";
    case "READY":
      return "준비 중";
    case "COMPLETED":
      return "배송 완료";
    case "CANCELED":
      return "주문 취소";
    default:
      return "";
  }
};
