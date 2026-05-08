## 📘 Incrementing & Decrementing 

### Basic Operations

- **Ctrl + a** → Increment the number under the cursor (or the nearest number to the right)
    
- **Ctrl + x** → Decrement the number under the cursor (or the nearest number to the right)
    

### Using Counts

- **9Ctrl + a** → Add 9 to the number
    
- **5Ctrl + x** → Subtract 5 from the number
    

### Supported Formats

Vim can correctly increment/decrement:

- Decimal numbers (e.g. `10`)
    
- Hexadecimal (e.g. `0xFF`)
    
- Binary (e.g. `0b1010`)
    
- Time values (e.g. `08:00`, `23:59`)
    

### Increment Multiple Lines (Range / Visual)

- Visually select multiple lines
    
- Use a count with increment, e.g. **2Ctrl + a**
    
- This shifts all selected numeric values by 2  
    (useful for moving appointments or times forward)
    

### Alphabet Incrementing

- By default, letters are **not** incremented
    
- Check current formats: `:set nrformats?`  
    (default includes `hex,bin`)
    
- Enable alphabet support: `:set nrformats+=alpha`
    
- After this, letters can be incremented/decremented  
    (e.g. `a → b`, `z → a`)
    

—  
