## 📘 `f`, `F`, `t`, `T` Motions (Horizontal Navigation)

---

## 🔹 Forward Character Find
- `f{char}` → Find `{char}` **forward** on the same line  
  Cursor lands **on the character**

- `;` → Repeat last `f / t` motion forward  
- `,` → Repeat last `f / t` motion backward

---

## 🔹 Backward Character Find
- `F{char}` → Find `{char}` **backward** on the same line  
  Cursor lands **on the character**

---

## 🔹 Jump *Till* Character
- `t{char}` → Move **forward** till `{char}`  
  Cursor stops **just before** the character

- `T{char}` → Move **backward** till `{char}`  
  Cursor stops **just after** the character

> 📝 **Memory Tip**  
> - `f` → **find** exact character  
> - `t` → move **to** character start (but don’t include it)

---

## 🔹 Combine with Operators

### Delete Motions
- `dt{char}` → Delete **up to** `{char}` (does NOT delete `{char}`)
- `df{char}` → Delete **up to and including** `{char}`

---

### Visual Selection
- `vt{char}` → Visually select **till** `{char}` (excludes `{char}`)

---

