const { validateCreditCard, detectBrand, luhnValidation } = require('../src/index');

describe('Credit Card Validator', () => {
    
    describe('Visa Cards', () => {
        const visaCards = [
            '4532015112830366',
            '4556737586899855',
            '4716-6705-3596-4377'
        ];
        
        visaCards.forEach(card => {
            test(`should identify ${card} as Visa`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Visa');
            });
        });
    });
    
    describe('Mastercard Cards', () => {
        const mastercardCards = [
            '5555555555554444',
            '5105105105105100',
            '2223000048400011' // New Mastercard range
        ];
        
        mastercardCards.forEach(card => {
            test(`should identify ${card} as Mastercard`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Mastercard');
            });
        });
    });
    
    describe('American Express Cards', () => {
        const amexCards = [
            '378282246310005',
            '371449635398431',
            '343434343434343'
        ];
        
        amexCards.forEach(card => {
            test(`should identify ${card} as American Express`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('American Express');
            });
        });
    });
    
    describe('Diners Club Cards', () => {
        const dinersCards = [
            '30032401648115',
            '30280838747683',
            '30339588388245',
            '36050000000003',
            '38000000000006'
        ];
        
        dinersCards.forEach(card => {
            test(`should identify ${card} as Diners Club`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Diners Club');
            });
        });
    });
    
    describe('Discover Cards', () => {
        const discoverCards = [
            '6011514433546201',
            '6011000000000012',
            '6445644564456445',
            '6500000000000002'
        ];
        
        discoverCards.forEach(card => {
            test(`should identify ${card} as Discover`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Discover');
            });
        });
    });
    
    describe('EnRoute Cards', () => {
        const enRouteCards = [
            '201400000000009',
            '214900000000012'
        ];
        
        enRouteCards.forEach(card => {
            test(`should identify ${card} as EnRoute`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('EnRoute');
            });
        });
    });
    
    describe('JCB Cards', () => {
        const jcbCards = [
            '3528000000000007',
            '3589000000000003'
        ];
        
        jcbCards.forEach(card => {
            test(`should identify ${card} as JCB`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('JCB');
            });
        });
    });
    
    describe('Voyager Cards', () => {
        const voyagerCards = [
            '8699000000000001',
            '8699100000000002',
            '8699500000000003'
        ];
        
        voyagerCards.forEach(card => {
            test(`should identify ${card} as Voyager`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Voyager');
            });
        });
    });
    
    describe('Hipercard Cards', () => {
        const hipercardCards = [
            '6063610000000005',
            '6070300000000007',
            '6062000000000001'
        ];
        
        hipercardCards.forEach(card => {
            test(`should identify ${card} as Hipercard`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Hipercard');
            });
        });
    });
    
    describe('Aura Cards', () => {
        const auraCards = [
            '4869330000000001', // Debit
            '4430120000000009'  // Credit
        ];
        
        auraCards.forEach(card => {
            test(`should identify ${card} as Aura`, () => {
                const result = validateCreditCard(card);
                expect(result.bandeira).toBe('Aura');
            });
        });
    });
    
    describe('Invalid Cards', () => {
        test('should return null for unrecognized card patterns', () => {
            const result = validateCreditCard('1234567890123456');
            expect(result.bandeira).toBe(null);
        });
        
        test('should return invalid for cards that fail Luhn validation', () => {
            const result = validateCreditCard('4532015112830367'); // Invalid Luhn
            expect(result.isValid).toBe(false);
        });
        
        test('should return invalid for cards with wrong length', () => {
            const result = validateCreditCard('123456');
            expect(result.isValid).toBe(false);
            expect(result.bandeira).toBe(null);
        });
        
        test('detectBrand should work independently', () => {
            expect(detectBrand('4532015112830366')).toBe('Visa');
            expect(detectBrand('5555555555554444')).toBe('Mastercard');
            expect(detectBrand('1234567890123456')).toBe(null);
        });
    });
});