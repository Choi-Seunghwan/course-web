export function getOrderSummaryText(orderItemsNameList: string[]): string {
  if (orderItemsNameList.length === 0) return "";

  const firstItem = orderItemsNameList[0];
  const othersCount = orderItemsNameList.length - 1;

  if (othersCount === 0) {
    return `${firstItem}`;
  }

  return `${firstItem} 외 ${othersCount}건`;
}
