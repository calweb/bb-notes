## Helpful Tutorials (mostly git)

### Ignoring files with git

If you have not committed anything to the repository, it may be a good idea to start a fresh project with a `.gitignore` file.

To ignore files from being tracked by git, you will need to create a `.gitignore` file.  This file must have a dot in the front of the name as that is what the git version control system expects.  Any files and/or folders will be ignored if they are in this file.

Some Commonly ignored files:
- .DS_Store (folder)
- .idea
- node_modules
- bower_components

If you have previously committed files that you actually want to ignore, you must delete them all, then recommit without the files and have a .gitignore with said files referenced.  You then can readd the files and they will be ignored.
