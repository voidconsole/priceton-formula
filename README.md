# Priceton Formula

## Overview

The **Priceton Formula** is a tool designed to help creators and professionals calculate the appropriate price for their creative work, factoring in aspects like time invested, material costs, willingness to sell, frustration level, and other important parameters. This tool gives users a structured approach to price estimation that goes beyond simple hourly rates.

## Features

- **Time Factor**: Input the hours spent on the project.
- **Frustration Level**: Reflect the difficulty and frustration experienced during the creation.
- **Willingness to Sell**: Adjust for how eager or reluctant you are to sell the piece.
- **Material Costs**: Include any tangible investments made during the work.
- **Multiplicative Factor**: Add extra variability using a multiplier for more custom pricing.
- **Hourly Rate**: Customize your hourly rate for a more accurate price calculation.

## Usage

The Priceton Formula works using a simple function that takes in these inputs and returns a final price:

```javascript
function Priceton(time=0, qlty=0, mat=0, will=0, beta=0, hrP=30, fac=1){
    return (time*hrP*((beta/100)+fac)*(((100-will)/100)+fac))+mat+qlty;
}
```

### Parameters:
- `time`: Time taken to complete the project (in hours).
- `qlty`: Quality or frustration level (percentage).
- `mat`: Material or financial investments made (currency value).
- `will`: Willingness to sell the project (percentage).
- `beta`: Third-party professional charge (percentage).
- `hrP`: Hourly rate charged (default is 30).
- `fac`: Multiplicative factor for custom adjustments (default is 1).

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/voidconsole/priceton-formula
   ```

2. Open the index file in your browser:
   ```bash
   open index.html
   ```

3. Input your values such as time, frustration, and investments to get a calculated price based on your project specifics.

## Live Demo

You can try the **Priceton Formula** live on the web at:

[Priceton Formula Live](https://voidconsole.github.io/priceton-formula)

## Contributing

If you would like to contribute to the **Priceton Formula**, feel free to fork the repository and submit a pull request with your improvements.
