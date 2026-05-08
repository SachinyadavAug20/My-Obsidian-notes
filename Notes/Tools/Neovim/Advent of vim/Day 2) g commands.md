# 📘 Vim `g` (Global) Commands

---

## 🔹 File Navigation
- `gg` → Move cursor to **start of the file**
- `GG` → Move cursor to **end of the file**
- `33G` → Jump directly to **line 33**
- `g{h,j,k,l}` → Move by **visible lines** (screen lines, not file line numbers)

---

## 🔹 Line Navigation
- `0` / `$` → Start / end of **actual line**
- `g0` / `g$` → Start / end of **visible (wrapped) line**

---

## 🔹 Case Manipulation
- `gUU` → Capitalize the **entire line**
- `guu` → Lowercase the **entire line**
- `gUw` → Capitalize word from cursor **up to space**
- `gUiw` → Capitalize the **entire inner word**
- `g~~` → Toggle case of the **entire line**

---

## 🔹 Joining Lines
- `J` → Join lines **with a space**
- `gJ` → Join lines **without a space**

---

## 🔹 File & Character Info
- `gf` → Open file under cursor (e.g. `style.css`)
- `ga` → Show **ASCII, Hex, and Octal** value of character under cursor

---

## 🔹 Search & Replace (Incremental)
- `/word` → Search for `word`
- `gn` → Select **next match**
- `c` → Change selection

Example workflow:
/word → gn → c → word2

- `cgn` → Change **next occurrence** of searched word
- `.` → Repeat last change (very useful for multiple replacements)

> 📝 **Note:** `.` repeats the last command like `cgn word2`

---

## 🔹 Visual & Change History
- `gv` → Reselect **last visual selection**
- `g;` → Move to **previous change**
- `g'` → Move to **next change**

---

## 🔹 Substitute Command
- `:s/word1/word2/g` → Replace `word1` with `word2` in **current line**
- `:%s/word1/word2/g` → Replace in **entire file**

---

## 🔹 Command History
- `q:` → Open **command-line history**
