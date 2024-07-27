// Utility function to validate 24-hour time format
export function isValidTimeFormat(time: string): boolean {
  const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  return timePattern.test(time);
}

// Utility function to convert 24-hour time format to minutes since midnight
export function timeToMinutes(time: string): number | null {
  const match = time.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/);
  if (!match) return null;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  return hours * 60 + minutes;
}

// Utility function to check if one time overlaps another
export function isOverlapping(start1: string, end1: string, start2: string, end2: string): boolean {
  const start1Minutes = timeToMinutes(start1);
  const end1Minutes = timeToMinutes(end1);
  const start2Minutes = timeToMinutes(start2);
  const end2Minutes = timeToMinutes(end2);

  if (start1Minutes === null || end1Minutes === null || start2Minutes === null || end2Minutes === null) {
    return false;
  }

  // Allow same start and end times to not conflict
  if (start1Minutes === start2Minutes && end1Minutes === end2Minutes) {
    return false;
  }

  return start1Minutes < end2Minutes && start2Minutes < end1Minutes;
}
