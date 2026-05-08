## 📘 Advanced `g` (Global) Commands

---

### 🔹 Smart Word Search
- `g*` → Search **current word** with partial matches  
  *(e.g. `word1`, `word123` both match)*  
  → Press `#` after search to jump to **exact matches only**

- `/\<word1\>` → Search for **exact word** `word1`  
  (`word123` will NOT match)

---

## 🔹 Insert & Cursor Position
- `I` → Insert at **first non-whitespace character** of the line
- `gI` → Insert at **absolute beginning** of the line
- `gi` → Jump to **last edit position** and enter *Insert mode*

---

## 🔹 Encoding / Rot13
- `g??` → Apply **ROT13 encryption** to the current line
- `g?` → Apply **ROT13 encryption** to the visually selected text

---

## 🔹 File & Link Handling
- `gf` → Open file under cursor (by filename)
- `gx` → Open link under cursor in **browser**

---

## 🔹 Help System
- `:help index` → Open Vim **help index** (all commands list)

---
