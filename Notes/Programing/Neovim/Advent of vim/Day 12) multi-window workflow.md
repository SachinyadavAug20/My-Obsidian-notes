# Neovim Buffers & Windows Notes

## Core Concepts

### Buffer

- A **buffer** is a file loaded into memory.
    
- All windows showing the same buffer reflect **the same changes**.
    
- Editing in one window updates the buffer everywhere.
    

### Window

- A **window** is a viewport (view) of a buffer.
    
- One buffer can be opened in **multiple windows**.
    
- A window does **not** store data — it only displays a buffer.
    

---

## Window Commands (Ctrl + w)

> Press `Ctrl + w` first to enter window-command mode.

### Navigation

- `Ctrl + w + h` → Move to left window
    
- `Ctrl + w + j` → Move to bottom window
    
- `Ctrl + w + k` → Move to top window
    
- `Ctrl + w + l` → Move to right window
    
- `Ctrl + w` (press repeatedly) → Cycle through open windows
    

### Window Management

- `Ctrl + w + c` → Close current window
    
- `Ctrl + w + o` → Close all other windows (keep current)
    
    - Useful to close file tree / sidebar windows
        

### Splitting Windows

- `Ctrl + w + v` → Vertical split (same buffer)
    
- `Ctrl + w + s` → Horizontal split (same buffer)
    

---

## Open Files in Splits

- `:split {filename}` → Open file in horizontal split
    
- `:vsplit {filename}` → Open file in vertical split
    

---

## Moving Windows

- `Ctrl + w + H` → Move window to far left
    
- `Ctrl + w + J` → Move window to bottom
    
- `Ctrl + w + K` → Move window to top
    
- `Ctrl + w + L` → Move window to far right
    

---

## Resizing Windows

> You can add a count before resizing (e.g., `5 Ctrl + w + +`)

### Height

- `Ctrl + w + +` → Increase height
    
- `Ctrl + w + -` → Decrease height
    

### Width

- `Ctrl + w + >` → Increase width
    
- `Ctrl + w + <` → Decrease width
    

### Maximize / Equalize

- `Ctrl + w + _` → Maximize height
    
- `Ctrl + w + |` → Maximize width
    
- `Ctrl + w + =` → Equalize all window sizes
    

---

## Terminal in Neovim

- `:terminal` → Open terminal in current window
    
- `:vertical terminal` → Open terminal in vertical split
    
- `:terminal {command}` → Run command directly
    
    - Example:
        
        ```bash
        :terminal htop
        ```
        

---
