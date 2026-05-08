```md
## 📘 Vim – Opening Files & Navigation

---

### 🔹 Open a Single File
```bash
vim file.txt
```
Opens one file in normal mode.

---

### 🔹 Open File in Read-Only Mode
```bash
vim -R file.txt
```
Read-only mode (changes allowed but cannot be saved).

```bash
vim -M file.txt
```
Strict read-only mode (no editing allowed).

---

### 🔹 Open Multiple Files (Single Buffer)
```bash
vim file1.txt file2.txt
```
Opens multiple files but shows one buffer at a time.

Switch buffers:
```vim
:b1
:b2
```

---

### 🔹 Open File in a Tab
```vim
:e file.txt
```

---

### 🔹 Split Windows (Same Tab)
```bash
vim file1.txt file2.txt -O   # Vertical split (side-by-side)
vim file1.txt file2.txt -o   # Horizontal split (top & bottom)
```

Move between splits:
```vim
Ctrl + w + h/j/k/l
```

---

### 🔹 Open Files in Different Tabs
```bash
vim file1.txt file2.txt -p
```

Tab navigation:
```vim
<leader> + t + h/j/k/l   # move between tabs
<leader> + t + n         # new tab
<leader> + t + c         # close tab
```

---

### 🔹 Open File at a Specific Line
```bash
vim file.txt +23
```
Opens the file directly at line 23.

---

### 🔹 Open at Line & Column
```bash
vim file.txt +23 -c "norm 7|"
```
Opens at line 23 and moves cursor to column 7.

---

### 🔹 Open File & Search Word
```bash
vim file.txt -c "/class"
```
Opens file and highlights all occurrences of `class`.

---

### 🔹 Compare Two Files (Diff Mode)
```bash
vim -d file1.txt file2.txt
```
Highlights all differences between the two files.
