`#tool #versions #git #github #git_commands 
# What is Git
- Git is a version control system used for projects and repository management
- A online software like git hub is used to host repositories 
-  Made by Linus Torvalds (Creator of Linux Kernel) 
# Setup login Commands
- git config --global user.name **Name(SachinApr20)**
- git config --global user.email **Email(samtagon777@gmail.com)**
- git init **This to initialise git**

# Life-Cycle of a file
![[Pasted image 20251002171545.png]]
# Committing in git

## 1. Commit Workflow
1. **Check status**
    - git status
    - → Shows modified, staged, and un-tracked files
## 2. Stage changes
 1. **Add a specific file**
     - git add *filename.txt* 
2.  **Add all files in current directory (ignores deletions)**
     - git add *
3. **Add absolutely all changes in repo (including deletions)**
    - git add -A
## 3. Commit staged changes
- git commit -m "*Meaningful commit message*"

# Logs
- `git log` shows the **commit history** of your repository.
- Each entry contains:
  - **Commit hash** → unique ID of commit
  - **Author** → who made the commit
  - **Date** → when it was made
  - **Commit message** → description of the change
    *Note :* use git log -p -n   //to see last n commits 
# Comparison in git
- `git diff` shows **changes line by line**.
- Useful to compare:
  - Working directory vs staging area ==> git diff
  - Staging area vs last commit ==> git diff --staged
  - Two commits with each other ==> git diff <commit 1> <commit 2> --*filename*
# Git ignore file 
- Create by ==> touch .gitingnore 
- A special file in a Git repository.
- Tells Git which files/folders to **ignore** (not track).
- Use as:
    - secret.txt ==> ignores this file
    - * .log ==> ignores all files with extension of .log
    - /node_modules/  ==> ignores this folder
# Branching
![[Pasted image 20251002181737.png]]
- git branch           ==list local branches==
- git branch -a        ==list all branches==
- git branch new-branch       ==create branch==
- git checkout -b new-branch  ==create + switch==
- git checkout branch-name  ==switch to branch==
- git checkout main
    git merge feature-branch  ==Merge Branch==
- git push origin branch-name ==Push Branch to Remote==
- git fetch origin  ==pull from branch==
# Remote Git Repositories
- A **remote repository** is a version of your Git repository hosted on a server (like GitHub, GitLab, or Bitbucket).
- git remote add origin <rope-URL>  //`origin` is the default name for the remote rep
Note : treat remote(origin) as a normal branch which is just on a server



add everything expect one file :
git add -A
git reset -- main/dontcheckmein.txt



