## 📘 Undo, Redo & Time Travel in Vim 

### Basic Undo & Redo

- **u** → Undo the last change  
    You can use a count: **3u** undoes the last 3 changes
    
- **U** → Undo **all changes on the current line**  
    ⚠️ This action **cannot be redone**
    
- **Ctrl + r** → Redo the last undone change
    

---

### Undo Tree & Branches

- `:undolist` → Show the **undo tree**  
    Displays timelines and branches (undo/redo is **not linear**)
    
- **g-** → Move to an **older undo branch**
    
- **g+** → Move to a **newer undo branch**
    

> Help: `:h undolist` for full documentation

---

### Time Travel Commands

- `:earlier 15m` → Go **15 minutes back** in time
    
- `:later 15m` → Go **15 minutes forward** in time  
    (works only if you previously went back further than 15 minutes)
    

---

### Time Units Supported

- `s` → seconds
    
- `m` → minutes
    
- `h` → hours
    
- `d` → days
    

Example:

- `:earlier 2h`
    
- `:later 1d`
    

---

### Quick Memory Tip

- `u / Ctrl + r` → local undo & redo
    
- `g- / g+` → move across branches
    
- `:earlier / :later` → true time travel
    