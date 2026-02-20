// Timezone utilities for user location-based formatting

/**
 * Get timezone from city and country
 * This is a simplified version - in production, use a proper geocoding service
 */
export function getTimezoneFromLocation(city: string, country: string): string {
  // Map of major cities to timezones
  const cityTimezones: Record<string, string> = {
    // Brazil
    'São Paulo': 'America/Sao_Paulo',
    'Rio de Janeiro': 'America/Sao_Paulo',
    'Brasília': 'America/Sao_Paulo',
    'Salvador': 'America/Bahia',
    'Fortaleza': 'America/Fortaleza',
    'Manaus': 'America/Manaus',
    
    // USA
    'New York': 'America/New_York',
    'Los Angeles': 'America/Los_Angeles',
    'Chicago': 'America/Chicago',
    'Houston': 'America/Chicago',
    'Miami': 'America/New_York',
    
    // Europe
    'London': 'Europe/London',
    'Paris': 'Europe/Paris',
    'Madrid': 'Europe/Madrid',
    'Berlin': 'Europe/Berlin',
    'Rome': 'Europe/Rome',
    'Lisbon': 'Europe/Lisbon',
    
    // Asia
    'Tokyo': 'Asia/Tokyo',
    'Shanghai': 'Asia/Shanghai',
    'Dubai': 'Asia/Dubai',
    'Singapore': 'Asia/Singapore',
    
    // Others
    'Sydney': 'Australia/Sydney',
    'Toronto': 'America/Toronto',
    'Mexico City': 'America/Mexico_City',
  };

  // Try to find by city first
  if (cityTimezones[city]) {
    return cityTimezones[city];
  }

  // Fallback to country-based timezones
  const countryTimezones: Record<string, string> = {
    'Brazil': 'America/Sao_Paulo',
    'Brasil': 'America/Sao_Paulo',
    'United States': 'America/New_York',
    'USA': 'America/New_York',
    'United Kingdom': 'Europe/London',
    'UK': 'Europe/London',
    'France': 'Europe/Paris',
    'Spain': 'Europe/Madrid',
    'Germany': 'Europe/Berlin',
    'Portugal': 'Europe/Lisbon',
    'Mexico': 'America/Mexico_City',
    'Canada': 'America/Toronto',
    'Australia': 'Australia/Sydney',
    'Japan': 'Asia/Tokyo',
    'China': 'Asia/Shanghai',
  };

  return countryTimezones[country] || 'UTC';
}

/**
 * Get locale from country
 */
export function getLocaleFromCountry(country: string): string {
  const countryLocales: Record<string, string> = {
    'Brazil': 'pt-BR',
    'Brasil': 'pt-BR',
    'Portugal': 'pt-BR',
    'United States': 'en-US',
    'USA': 'en-US',
    'United Kingdom': 'en-US',
    'UK': 'en-US',
    'Canada': 'en-US',
    'Australia': 'en-US',
    'Spain': 'es-ES',
    'Mexico': 'es-ES',
    'Argentina': 'es-ES',
    'France': 'fr-FR',
    'Belgium': 'fr-FR',
    'Switzerland': 'fr-FR',
  };

  return countryLocales[country] || 'en-US';
}

/**
 * Format date according to user's timezone and locale
 */
export function formatDateForUser(
  date: Date | string,
  timezone: string = 'UTC',
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
}

/**
 * Format time only
 */
export function formatTimeForUser(
  date: Date | string,
  timezone: string = 'UTC',
  locale: string = 'en-US'
): string {
  return formatDateForUser(date, timezone, locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(
  date: Date | string,
  locale: string = 'en-US'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else if (diffInSeconds < 604800) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
  } else if (diffInSeconds < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 604800), 'week');
  } else if (diffInSeconds < 31536000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 31536000), 'year');
  }
}

/**
 * Format number according to locale
 */
export function formatNumber(
  value: number,
  locale: string = 'en-US',
  options: Intl.NumberFormatOptions = {}
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Format currency according to locale
 */
export function formatCurrency(
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string {
  return formatNumber(value, locale, {
    style: 'currency',
    currency,
  });
}
