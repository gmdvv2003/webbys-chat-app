const LOWERCASE_POOL = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS_POOL = "0123456789";
const SPECIAL_CHARACTERS_POOL = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

/**
 * Calculate the character set size of a password
 *
 * @param password Password to calculate character set size
 * @returns Password character set size
 */
function getPasswordCharacterSetSize(password: string): number {
    let setSize = 0;

    // Checks for lowercase characters
    if (new RegExp(`[${LOWERCASE_POOL}]`).test(password)) {
        setSize += LOWERCASE_POOL.length;
    }

    // Checks for uppercase characters
    if (new RegExp(`[${UPPERCASE_POOL}]`).test(password)) {
        setSize += UPPERCASE_POOL.length;
    }

    // Checks for digits
    if (new RegExp(`[${DIGITS_POOL}]`).test(password)) {
        setSize += DIGITS_POOL.length;
    }

    // Checks for special characters
    if (new RegExp(`[${SPECIAL_CHARACTERS_POOL}]`).test(password)) {
        setSize += SPECIAL_CHARACTERS_POOL.length;
    }

    return setSize;
}

/**
 * Calculate the entropy bits of a password
 *
 * @param password Password to calculate entropy bits
 * @returns Password entropy bits
 */
function getPasswordEntropyBits(password: string): number {
    return Math.log2(getPasswordCharacterSetSize(password) ** password.length);
}

export { getPasswordEntropyBits };
