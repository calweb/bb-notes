## Helpful Tutorials (mostly git)

### Ignoring files with git

If you have not committed anything to the repository, it may be a good idea to start a fresh project with a `.gitignore` file.

To ignore files from being tracked by git, you will need to create a `.gitignore` file.  This file must have a dot in the front of the name as that is what the git version control system expects.  Any files and/or folders will be ignored if they are in this file.

Some Commonly ignored files:
- .DS_Store (folder)
- .idea
- node_modules
- bower_components

If you have previously committed files that you actually want to ignore, you must delete them all, then recommit your repository without the files and have a .gitignore with said files referenced.  You then can readd the files and they will be ignored.

In Step-by-step
1. create ``` .gitignore ``` file
2. delete all items you want ignored (eg. node_modules)
3. recommit your repository (eg. git add --all -> git commit -am 'remove lib files')
4. re-add your library files or files you do not want tracked by git


### Create a package.json file for depenency management

[Link to the Docs on NPM](https://www.npmjs.org/doc/files/package.json.html)

A ``` package.json ``` is a file that usually lives at the root of your application that specifies the dependencies of your app and dev environment.

Here is a sample ``` package.json ``` file contents:

```js
{
  "name": "day7",
  "version": "1.0.0",
  "description": "Create a Dinner Menu for this evening with some basic styling.",
  "main": "app.js",
  "dependencies": {
    "jquery": "^2.1.1",
    "backbone": "^1.1.2",
    "underscore": "^1.7.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Instead of manually downloading files and placing them in the right folders, when you perform ``` npm install <some library> ``` the npm node module will download the library you specify to a ``` node_modules directory ```

If you've already installed some libraries with npm, but do not have a package.json file, you can create one by doing: ``` npm init ``` - which is a wizard that will walk you through creating a package.json without ever touching the file.

If you want to add a library and want it to persist to ``` package.json ``, you simply must:
  ``` npm install <mylib> --save ```
  for app dependencies and
  ``` npm install <mylib> --save-dev ```
  for dev depenencies.
