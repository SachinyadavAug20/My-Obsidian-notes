````md
## 📘 External Filters in Vim


## 🔹 General Syntax
```vim
:{range}!{filter} [!][arg]
````

### Notes

- Visual select text → press `:`  
    (selected lines are automatically used as `{range}`)
    
- `:%!{filter}` → Apply filter to **entire buffer**
    
- `:.!{filter}` → Apply filter to **current line only**
    

---

## 🔹 Example: `sort` (External Command)

`sort` performs **ASCII-based sorting**  
(character by character, left → right)

### Reverse Sort

```vim
:%!sort -r
```

Sort lines in **reverse order**

### Unique Sort

```vim
:%!sort -u
```

Sort and **remove duplicate lines**

---

## 🔹 `!!` Shortcut

- `!!` in command mode expands to:
    

```vim
:.!{filter}
```

Applies an external filter to the **current line**

---

## 🔹 Example: `figlet`

Convert text into **ASCII art**

```vim
:.!figlet
```
