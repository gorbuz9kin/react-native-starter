// @flow

/* MODULES */

export const sliceString = (string: string, length: number) => {
  const result = string.length > length ? `${string.slice(0, length)}...` : string;
  return result;
};

/**
 * Set item to local storage
 *
 * @param {string} key - key for item
 * @param {string} value - value for item
 */
export function setItemToStorage(key: string, value: string) {
  if (typeof key !== 'string') {
    console.warn("Key for local storage item isn't a string!");
  }
  if (typeof value !== 'string') {
    console.warn("Value for local storage item isn't a string!");
  }
  if (!window) {
    console.warn("Window not loaded yet!");
  }
  localStorage.setItem(`SPACAR-${key}`, value);
}

/**
 * Get item from local storage
 *
 * @param {string} key - key for item
 */
export function getItemFromStorage(key: string): ?string {
  if (typeof key !== 'string') {
    console.warn("Key for local storage item isn't a string!");
  }
  if (!window) {
    console.warn("Window not loaded yet!");
  }
  return localStorage.getItem(`SPACAR-${key}`);
}

/**
 * Remove item from local storage
 *
 * @param {string} key - key for item
 */
export function removeItemFromStorage(key: string): ?string {
  if (typeof key !== 'string') {
    console.warn("Key for local storage item isn't a string!");
  }
  if (!window) {
    console.warn("Window not loaded yet!");
  }
  return localStorage.removeItem(`TCC-${key}`);
}

// /**
//  * Clear storage
//  */
// export function clearStorage() {
//   [
//     "access_token",
//   ].map(removeItemFromStorage);
// }
