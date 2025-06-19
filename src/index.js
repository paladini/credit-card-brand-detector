/**
 * Validates a credit card number and determines its brand (bandeira)
 * @param {string} cardNumber - The credit card number to validate
 * @returns {Object} - Object with isValid and bandeira properties
 */
function validateCreditCard(cardNumber) {
    // Remove spaces and non-numeric characters
    const cleanNumber = cardNumber.replace(/\D/g, '');
    
    // Check if the number has a valid length (typically 13-19 digits)
    if (cleanNumber.length < 13 || cleanNumber.length > 19) {
        return { isValid: false, bandeira: null };
    }
    
    // Determine the brand based on the starting digits
    const bandeira = detectBrand(cleanNumber);
    
    // Validate using Luhn algorithm
    const isValid = luhnValidation(cleanNumber);
    
    return { isValid, bandeira };
}

/**
 * Detects the credit card brand based on starting digits
 * @param {string} cardNumber - Clean card number
 * @returns {string|null} - The brand name or null if not recognized
 */
function detectBrand(cardNumber) {
    const firstDigit = cardNumber[0];
    const firstTwoDigits = cardNumber.substring(0, 2);
    const firstThreeDigits = cardNumber.substring(0, 3);
    const firstFourDigits = cardNumber.substring(0, 4);
    const firstFiveDigits = cardNumber.substring(0, 5);
    const firstSixDigits = cardNumber.substring(0, 6);
    const firstEightDigits = cardNumber.substring(0, 8);
    
    // Check specific patterns first (more specific to less specific)
    
    // Aura - starts with 4869 3300 (debit) or 4430 1200 (credit)
    if (firstEightDigits === '48693300' || firstEightDigits === '44301200') {
        return 'Aura';
    }
    
    // Voyager - starts with 86990-86995
    const fiveDigitNum = parseInt(firstFiveDigits);
    if (fiveDigitNum >= 86990 && fiveDigitNum <= 86995) {
        return 'Voyager';
    }
    
    // Hipercard - starts with 606361 or 607030
    if (firstSixDigits === '606361' || firstSixDigits === '607030' || firstFourDigits === '6062') {
        return 'Hipercard';
    }
    
    // EnRoute - starts with 2014 or 2149
    if (firstFourDigits === '2014' || firstFourDigits === '2149') {
        return 'EnRoute';
    }
    
    // JCB - starts with 3528 or 3589
    if (firstFourDigits === '3528' || firstFourDigits === '3589') {
        return 'JCB';
    }
    
    // Elo - specific starting patterns (check before Visa since some start with 4)
    const eloPatterns = ['4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509'];
    for (const pattern of eloPatterns) {
        if (cardNumber.startsWith(pattern)) {
            return 'Elo';
        }
    }
    
    // Discover - starts with 6011, 65, or 644-649
    if (firstFourDigits === '6011' || firstTwoDigits === '65') {
        return 'Discover';
    }
    
    const threeDigitNum = parseInt(firstThreeDigits);
    if (threeDigitNum >= 644 && threeDigitNum <= 649) {
        return 'Discover';
    }
    
    // Diners Club - starts with 300-305, 36, 38, or 39
    const threeDigitNumForDiners = parseInt(firstThreeDigits);
    if (threeDigitNumForDiners >= 300 && threeDigitNumForDiners <= 305) {
        return 'Diners Club';
    }
    if (firstTwoDigits === '36' || firstTwoDigits === '38' || firstTwoDigits === '39') {
        return 'Diners Club';
    }
    
    // American Express - starts with 34 or 37
    if (firstTwoDigits === '34' || firstTwoDigits === '37') {
        return 'American Express';
    }
    
    // Mastercard - starts with 51-55 or 2221-2720
    const twoDigitNum = parseInt(firstTwoDigits);
    const fourDigitNum = parseInt(firstFourDigits);
    
    if ((twoDigitNum >= 51 && twoDigitNum <= 55) || 
        (fourDigitNum >= 2221 && fourDigitNum <= 2720)) {
        return 'Mastercard';
    }
    
    // Visa - starts with 4 (check last since many patterns start with 4)
    if (firstDigit === '4') {
        return 'Visa';
    }
    
    return null;
}

/**
 * Validates credit card number using Luhn algorithm
 * @param {string} cardNumber - Clean card number
 * @returns {boolean} - True if valid, false otherwise
 */
function luhnValidation(cardNumber) {
    let sum = 0;
    let isEven = false;
    
    // Process digits from right to left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}

// Export functions for use in other modules or testing
const getBrand = detectBrand;
module.exports = { 
    validateCreditCard, 
    detectBrand,
    getBrand,
    luhnValidation 
};
