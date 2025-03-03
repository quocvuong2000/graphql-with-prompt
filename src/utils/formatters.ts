/**
 * Formats a date string into a localized date format
 *
 * @param dateString - The date string to format
 * @param locale - The locale to use for formatting (defaults to browser locale)
 * @returns Formatted date string
 */
export function formatDate(dateString: string, locale?: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Return the original string if there's an error
  }
}

/**
 * Formats a number as currency
 *
 * @param amount - The amount to format
 * @param currency - The currency code (defaults to USD)
 * @param locale - The locale to use for formatting (defaults to browser locale)
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale?: string
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `${amount}`; // Return the amount as a string if there's an error
  }
}

/**
 * Truncates a string to a specified length and adds an ellipsis if needed
 *
 * @param text - The text to truncate
 * @param maxLength - The maximum length of the text (defaults to 100)
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength = 100): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength)}...`;
}
