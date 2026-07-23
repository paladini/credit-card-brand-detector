# Credit Card Brand Detector

<a href="https://paladini.github.io/harness-score/guide/maturity-model#l0-unharnessed" title="Harness Score — AI coding harness maturity"><img alt="Harness Score L0 (Unharnessed): measures AI-assisted development harness maturity with harness-score" src="https://paladini.github.io/harness-score/maturity/badge-l0.svg" height="20"></a>
[![npm version](https://badge.fury.io/js/credit-card-brand-detector.svg)](https://badge.fury.io/js/credit-card-brand-detector)
[![npm downloads](https://img.shields.io/npm/dm/credit-card-brand-detector.svg)](https://www.npmjs.com/package/credit-card-brand-detector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

­ƒç║­ƒç© **English**: Detects credit card brand/network based on card number patterns  
­ƒçº­ƒçÀ **Portugu├¬s**: Detecta a bandeira/marca de cart├Áes de cr├®dito baseado no padr├úo do n├║mero

## Supported Brands / Bandeiras Suportadas

Ô£à **11 brands supported / 11 bandeiras suportadas:**

- Visa
- Mastercard  
- American Express
- Diners Club
- Discover
- EnRoute
- JCB
- Voyager
- Hipercard
- Aura
- Elo

## Installation / Instala├º├úo

```bash
npm install credit-card-brand-detector
```

**NPM Package:** [https://www.npmjs.com/package/credit-card-brand-detector](https://www.npmjs.com/package/credit-card-brand-detector)

## Usage / Como Usar

### English
```javascript
const { validateCreditCard, detectBrand, getBrand } = require('credit-card-brand-detector');

// Detect brand and validate
const result = validateCreditCard('4532015112830366');
console.log(result);
// Output: { isValid: true, bandeira: 'Visa' }

// Just detect the brand (two ways - same function)
const brand1 = detectBrand('5555555555554444');
const brand2 = getBrand('5555555555554444');
console.log(brand1); // Output: 'Mastercard'
console.log(brand2); // Output: 'Mastercard'
```

### Portugu├¬s
```javascript
const { validateCreditCard, detectBrand, getBrand } = require('credit-card-brand-detector');

// Detectar bandeira e validar
const resultado = validateCreditCard('4532015112830366');
console.log(resultado);
// Sa├¡da: { isValid: true, bandeira: 'Visa' }

// Apenas detectar a bandeira (duas formas - mesma fun├º├úo)
const bandeira1 = detectBrand('5555555555554444');
const bandeira2 = getBrand('5555555555554444');
console.log(bandeira1); // Sa├¡da: 'Mastercard'
console.log(bandeira2); // Sa├¡da: 'Mastercard'
```

## API Reference / Refer├¬ncia da API

### `validateCreditCard(cardNumber)`
**English**: Validates a credit card number and detects its brand  
**Portugu├¬s**: Valida um n├║mero de cart├úo de cr├®dito e detecta sua bandeira

**Parameters / Par├ómetros:**
- `cardNumber` (string): Credit card number / N├║mero do cart├úo de cr├®dito

**Returns / Retorna:**
```javascript
{
  isValid: boolean,    // Luhn validation result / Resultado da valida├º├úo Luhn
  bandeira: string|null // Brand name or null / Nome da bandeira ou null
}
```

### `detectBrand(cardNumber)` | `getBrand(cardNumber)`
**English**: Detects only the credit card brand (both functions are identical)  
**Portugu├¬s**: Detecta apenas a bandeira do cart├úo de cr├®dito (ambas as fun├º├Áes s├úo id├¬nticas)

**Parameters / Par├ómetros:**
- `cardNumber` (string): Credit card number / N├║mero do cart├úo de cr├®dito

**Returns / Retorna:**
- `string|null`: Brand name or null if not recognized / Nome da bandeira ou null se n├úo reconhecida

## Examples / Exemplos

```javascript
// Different card brands / Diferentes bandeiras
// Using detectBrand
console.log(detectBrand('4532015112830366')); // 'Visa'
console.log(detectBrand('5555555555554444')); // 'Mastercard'
console.log(detectBrand('378282246310005'));  // 'American Express'

// Using getBrand (same results)
console.log(getBrand('30569309025904'));   // 'Diners Club'
console.log(getBrand('6011111111111117')); // 'Discover'
console.log(getBrand('201400000000009'));  // 'EnRoute'
console.log(getBrand('3530111333300000')); // 'JCB'
console.log(getBrand('8699000000000001')); // 'Voyager'
console.log(getBrand('6062000000000001')); // 'Hipercard'
console.log(getBrand('4869330000000001')); // 'Aura'
```

## Features / Caracter├¡sticas

­ƒç║­ƒç© **English:**
- Ô£à Detects 11 major credit card brands
- Ô£à Includes Brazilian brands (Hipercard, Aura, Elo)
- Ô£à Luhn algorithm validation
- Ô£à Handles spaces and hyphens in card numbers
- Ô£à Zero dependencies
- Ô£à Comprehensive unit tests
- Ô£à Multiple function names for flexibility (`detectBrand` and `getBrand`)

­ƒçº­ƒçÀ **Portugu├¬s:**
- Ô£à Detecta 11 principais bandeiras de cart├úo
- Ô£à Inclui bandeiras brasileiras (Hipercard, Aura, Elo)
- Ô£à Valida├º├úo por algoritmo de Luhn
- Ô£à Remove espa├ºos e h├¡fens dos n├║meros
- Ô£à Zero depend├¬ncias
- Ô£à Testes unit├írios abrangentes
- Ô£à M├║ltiplos nomes de fun├º├úo para flexibilidade (`detectBrand` e `getBrand`)

## License / Licen├ºa

MIT License - see [LICENSE file](LICENSE).

## Links

- **NPM Package**: [https://www.npmjs.com/package/credit-card-brand-detector](https://www.npmjs.com/package/credit-card-brand-detector)
- **GitHub Repository**: [https://github.com/paladini/credit-card-brand-detector](https://github.com/paladini/credit-card-brand-detector)

## About

Developed by Fernando Paladini, using GitHub Copilot for DIO bootcamp challenge.

## References

- [4devs.com.br](https://www.4devs.com.br/gerador_de_numero_cartao_credito)
- [DIO Courses](https://www.dio.me/)
