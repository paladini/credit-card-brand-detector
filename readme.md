# Credit Card Brand Detector / Detector de Bandeiras de Cartão

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

## Usage / Como Usar

### English
```javascript
const { validateCreditCard, detectBrand } = require('credit-card-brand-detector');

// Detect brand and validate
const result = validateCreditCard('4532015112830366');
console.log(result);
// Output: { isValid: true, bandeira: 'Visa' }

// Just detect the brand
const brand = detectBrand('5555555555554444');
console.log(brand); // Output: 'Mastercard'
```

### Português
```javascript
const { validateCreditCard, detectBrand } = require('credit-card-brand-detector');

// Detectar bandeira e validar
const resultado = validateCreditCard('4532015112830366');
console.log(resultado);
// Saída: { isValid: true, bandeira: 'Visa' }

// Apenas detectar a bandeira
const bandeira = detectBrand('5555555555554444');
console.log(bandeira); // Saída: 'Mastercard'
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

### `detectBrand(cardNumber)`
**English**: Detects only the credit card brand  
**Português**: Detecta apenas a bandeira do cartão de crédito

**Parameters / Parâmetros:**
- `cardNumber` (string): Credit card number / Número do cartão de crédito

**Returns / Retorna:**
- `string|null`: Brand name or null if not recognized / Nome da bandeira ou null se não reconhecida

## Examples / Exemplos

```javascript
// Different card brands / Diferentes bandeiras
console.log(detectBrand('4532015112830366')); // 'Visa'
console.log(detectBrand('5555555555554444')); // 'Mastercard'
console.log(detectBrand('378282246310005'));  // 'American Express'
console.log(detectBrand('30569309025904'));   // 'Diners Club'
console.log(detectBrand('6011111111111117')); // 'Discover'
console.log(detectBrand('201400000000009'));  // 'EnRoute'
console.log(detectBrand('3530111333300000')); // 'JCB'
console.log(detectBrand('8699000000000001')); // 'Voyager'
console.log(detectBrand('6062000000000001')); // 'Hipercard'
console.log(detectBrand('4869330000000001')); // 'Aura'
```

## Features / Características

🇺🇸 **English:**
- ✅ Detects 11 major credit card brands
- ✅ Includes Brazilian brands (Hipercard, Aura, Elo)
- ✅ Luhn algorithm validation
- ✅ Handles spaces and hyphens in card numbers
- ✅ Zero dependencies
- ✅ Comprehensive unit tests

🇧🇷 **Português:**
- ✅ Detecta 11 principais bandeiras de cartão
- ✅ Inclui bandeiras brasileiras (Hipercard, Aura, Elo)
- ✅ Validação por algoritmo de Luhn
- ✅ Remove espaços e hífens dos números
- ✅ Zero dependências
- ✅ Testes unitários abrangentes

## License / Licença

MIT License - see [LICENSE file](LICENSE).

## About

Developed by Fernando Paladini, using Github Copilot for DIO bootcamp challenge.

## References

- [4devs.com.br](https://www.4devs.com.br/gerador_de_numero_cartao_credito)
- [DIO Courses](https://www.dio.me/)