# Credit Card Brand Detector

[![npm version](https://badge.fury.io/js/credit-card-brand-detector.svg)](https://badge.fury.io/js/credit-card-brand-detector)
[![npm downloads](https://img.shields.io/npm/dm/credit-card-brand-detector.svg)](https://www.npmjs.com/package/credit-card-brand-detector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🇺🇸 **English**: Detects credit card brand/network based on card number patterns  
🇧🇷 **Português**: Detecta a bandeira/marca de cartões de crédito baseado no padrão do número

## Supported Brands / Bandeiras Suportadas

✅ **11 brands supported / 11 bandeiras suportadas:**

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

## Installation / Instalação

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

### Português
```javascript
const { validateCreditCard, detectBrand, getBrand } = require('credit-card-brand-detector');

// Detectar bandeira e validar
const resultado = validateCreditCard('4532015112830366');
console.log(resultado);
// Saída: { isValid: true, bandeira: 'Visa' }

// Apenas detectar a bandeira (duas formas - mesma função)
const bandeira1 = detectBrand('5555555555554444');
const bandeira2 = getBrand('5555555555554444');
console.log(bandeira1); // Saída: 'Mastercard'
console.log(bandeira2); // Saída: 'Mastercard'
```

## API Reference / Referência da API

### `validateCreditCard(cardNumber)`
**English**: Validates a credit card number and detects its brand  
**Português**: Valida um número de cartão de crédito e detecta sua bandeira

**Parameters / Parâmetros:**
- `cardNumber` (string): Credit card number / Número do cartão de crédito

**Returns / Retorna:**
```javascript
{
  isValid: boolean,    // Luhn validation result / Resultado da validação Luhn
  bandeira: string|null // Brand name or null / Nome da bandeira ou null
}
```

### `detectBrand(cardNumber)` | `getBrand(cardNumber)`
**English**: Detects only the credit card brand (both functions are identical)  
**Português**: Detecta apenas a bandeira do cartão de crédito (ambas as funções são idênticas)

**Parameters / Parâmetros:**
- `cardNumber` (string): Credit card number / Número do cartão de crédito

**Returns / Retorna:**
- `string|null`: Brand name or null if not recognized / Nome da bandeira ou null se não reconhecida

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

## Features / Características

🇺🇸 **English:**
- ✅ Detects 11 major credit card brands
- ✅ Includes Brazilian brands (Hipercard, Aura, Elo)
- ✅ Luhn algorithm validation
- ✅ Handles spaces and hyphens in card numbers
- ✅ Zero dependencies
- ✅ Comprehensive unit tests
- ✅ Multiple function names for flexibility (`detectBrand` and `getBrand`)

🇧🇷 **Português:**
- ✅ Detecta 11 principais bandeiras de cartão
- ✅ Inclui bandeiras brasileiras (Hipercard, Aura, Elo)
- ✅ Validação por algoritmo de Luhn
- ✅ Remove espaços e hífens dos números
- ✅ Zero dependências
- ✅ Testes unitários abrangentes
- ✅ Múltiplos nomes de função para flexibilidade (`detectBrand` e `getBrand`)

## License / Licença

MIT License - see [LICENSE file](LICENSE).

## Links

- **NPM Package**: [https://www.npmjs.com/package/credit-card-brand-detector](https://www.npmjs.com/package/credit-card-brand-detector)
- **GitHub Repository**: [https://github.com/paladini/credit-card-brand-detector](https://github.com/paladini/credit-card-brand-detector)

## About

Developed by Fernando Paladini, using GitHub Copilot for DIO bootcamp challenge.

## References

- [4devs.com.br](https://www.4devs.com.br/gerador_de_numero_cartao_credito)
- [DIO Courses](https://www.dio.me/)