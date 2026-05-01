# Neovim LSP & Workflow Shortcuts


## 1️⃣ LSP Shortcuts

| Keybind      | Mode          | Action              | When to use                                  | Notes                                 |
| ------------ | ------------- | ------------------- | -------------------------------------------- | ------------------------------------- |
| `gd`         | Normal        | Go to definition    | Jump to where a function/variable is defined | `g` then `d`                          |
| `gr`         | Normal        | Find references     | Show all usages of a symbol                  | Opens list or Telescope if configured |
| `K`          | Normal        | Hover documentation | See function/variable docs                   | Hover tooltip                         |
| `<leader>rn` | Normal        | Rename symbol       | Rename variable/function/project-wide        | Leader default = Space                |
| `<leader>ca` | Normal/Visual | Code actions        | Apply quick fixes/refactors                  | Example: remove unused imports        |
| `<leader>f`  | Normal        | Format buffer       | Format code automatically                    | Uses LSP formatter                    |
| `[d`         | Normal        | Previous diagnostic | Go to previous warning/error                 | Useful for scrolling through issues   |
| `]d`         | Normal        | Next diagnostic     | Go to next warning/error                     | Useful for scrolling through issues   |
| `<leader>gf` | Normal        | Format document     |                                              |                                       |
| gcc          | Normal        | comment the line    |                                              |                                       |

---

## 2️⃣ Terminal & Split Navigation

| Keybind                    | Mode     | Action                | Notes                                     |
| -------------------------- | -------- | --------------------- | ----------------------------------------- |
| `:terminal`                | Normal   | Open terminal split   | Opens terminal in current window          |
| `Ctrl + \` then `Ctrl + n` | Terminal | Switch to normal mode | Default way to leave terminal insert mode |
| `<Esc>` (optional mapping) | Terminal | Switch to normal mode | If mapped in `init.lua`                   |
| `Ctrl + w h`               | Normal   | Move to left split    | Works in all buffers                      |
| `Ctrl + w j`               | Normal   | Move to split below   | Works in all buffers                      |
| `Ctrl + w k`               | Normal   | Move to split above   | Works in all buffers                      |
| `Ctrl + w l`               | Normal   | Move to right split   | Works in all buffers                      |
| `Ctrl + w w`               | Normal   | Cycle through splits  | Quickly jump to next split                |

---

## 3️⃣ General Useful Shortcuts

| Keybind     | Mode   | Action                | Notes                        |
| ----------- | ------ | --------------------- | ---------------------------- |
| `i`         | Normal | Enter insert mode     | Start typing                 |
| `Esc`       | Insert | Enter normal mode     | Exit insert mode             |
| `u`         | Normal | Undo                  | Revert last change           |
| `Ctrl + r`  | Normal | Redo                  | Re-apply undone change       |
| `:w`        | Normal | Save file             | Write buffer to disk         |
| `:q`        | Normal | Quit window           | Close split or exit Neovim   |
| `:wq`       | Normal | Save and quit         | Save and exit                |
| `:!node %`  | Normal | Run JS file           | `%` = current file name      |
| `<leader>r` | Normal | Custom run JS mapping | Example: map to run `node %` |

---
# Neovim Editing Shortcuts (Copy, Paste, Duplicate, Delete)

## 1️⃣ Line Operations

| Keybind | Mode | Action | Notes |
|---------|------|--------|-------|
| `yy` | Normal | Yank (copy) current line | Copies the whole line into the default register |
| `Y` | Normal | Yank current line | Same as `yy` in most configs |
| `dd` | Normal | Delete (cut) current line | Removes line and stores in default register |
| `p` | Normal | Paste after cursor | Pastes the last yanked or deleted content |
| `P` | Normal | Paste before cursor | Pastes before the cursor |
| `Ctrl + y` | Insert | Paste from system clipboard | Requires `"+` or `"*` register if mapped |

---

## 2️⃣ Duplicating Lines

| Keybind | Mode | Action | Notes |
|---------|------|--------|-------|
| `yy` then `p` | Normal | Duplicate current line | Yank line, then paste below |
| `Yp` | Normal | Duplicate current line | Shortcut combining yank & paste |
| Visual select line → `y` then `p` | Normal | Duplicate selection | Works for multiple lines |

> ⚡ **Tip:** You can map a single key for duplicating a line, e.g. in `init.lua`:
>
> ```lua
> vim.keymap.set('n', '<leader>d', 'yyp', { noremap = true, silent = true })
> ```
> Press **Space + d** to duplicate the current line.

---

## 3️⃣ Copying & Pasting in Insert Mode

| Keybind | Mode | Action | Notes |
|---------|------|--------|-------|
| `Ctrl + r` then `"` | Insert | Paste default register | `"` = default register |
| `Ctrl + r` then `+` | Insert | Paste from system clipboard | `+` = system clipboard register |
| `Ctrl + Shift + v` | Terminal/Insert | Paste from clipboard | Works in some terminal setups |

---

## 4️⃣ Deleting Text

| Keybind | Mode | Action | Notes |
|---------|------|--------|-------|
| `x` | Normal | Delete character under cursor | Single character deletion |
| `X` | Normal | Delete character before cursor | Backspace-like |
| `d` + motion | Normal | Delete text | Example: `dw` deletes word, `d$` deletes to end of line |
| `dd` | Normal | Delete whole line | Stores in default register for pasting |

---

## Notes

- `<leader>` is usually **Space** (`vim.g.mapleader = " "`)  
- Inserting from system clipboard may require `+clipboard` support in Neovim.  
- Visual mode operations: select text → `y` to copy, `d` to cut, `p` to paste.  
- Duplicate line can be mapped to a single key for efficiency.

## Notes

- `<leader>` is usually **Space**: `vim.g.mapleader = " "`.  
- LSP shortcuts only work if a **language server** is attached.  
- Split navigation works in **any window**, including terminal splits.  
- You can customize any keymap in `init.lua` for a VS Code-like workflow.
