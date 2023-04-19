/**
 *
 * Executes a function after a given period of time, and when no more calls
 * have been made.
 *
 * @param {(...args: any[]) => void} func - Function to call after a specified
 * period of time.
 * @param {number} delay - Duration to wait in milliseconds before calling the
 * given function. Delay is reset on each debounce call for the same function.
 * @param {() => void} executor - Function that is immediately executed.
 * @returns {(...args: any[]) => void} - The debounced function.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce(
  func: (...args: any[]) => void,
  delay: number,
  executor?: () => void
) {
  executor && executor();

  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
