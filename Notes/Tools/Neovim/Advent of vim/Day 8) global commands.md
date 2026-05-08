## 📘 `g` (Global) Command 

The **global (`:g`) command** applies a command to **all lines matching a pattern**.

**General syntax**  
`:g/{pattern}/{command}`

Example uses:

- `:g/DEBUG/p`  
    → Print all lines containing `DEBUG`
    
- `:g/DEBUG/d`  
    → Delete all lines containing `DEBUG`
    

---

### Deleting Lines Using Patterns

- `:g/^$/d`  
    → Delete all **empty lines**  
    (`^$` is a regular expression for blank lines)
    
- `:g/^#/d`  
    → Delete all **commented lines** (lines starting with `#`)
    

---

### Reverse Global (`:v`)

The **reverse of `:g` is `:v`**

- `:v/{pattern}/{command}` applies the command to lines **NOT matching** the pattern
    

Example:

- `:v/URGENT/d`  
    → Delete all lines **that do NOT contain** `URGENT`
    

---

### Moving Matching Lines

- `:g/HIGH/m0`  
    → Move all lines containing `HIGH` to the **top of the file**
    

Notes:

- `0` → top of file
    
- `$` → bottom of file
    

Example:

- `:g/HIGH/m$` → Move all `HIGH` lines to the end
    

---

### Using Ranges with Global

- `:[range]g/{pattern}/{command}`
    

Example:

- `:10,50g/ERROR/d`  
    → Delete lines containing `ERROR` **only between lines 10 and 50**
    

---

### Quick Memory Tip

- `g` → do something to **matching** lines
    
- `v` → do something to **non-matching** lines
    