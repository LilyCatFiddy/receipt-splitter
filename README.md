
<!--- To view this file as intended on VSCode, --->
<!--- hit command + shift + V to open markdown preview --->
<!--- Alternatively, open VsCode command palette by hitting F1 and typing in `Markdown: Open Preview` -->

# Receipt Splitter

Application for splitting receipts amongst friends efficiently.
<br/><br/>

## How to get started

---

Run the following terminal commands in sequence:
```
npm install
npm run dev
```

Then visit http://localhost:3000/ to get started!
<br/><br/>


## Basic Workflow

---

This is a detailed explanation of a typical workflow for this app from start to finish.

***Getting Started*** - Start up the application by following the instructions in the **How to get started** section.

***Development*** - Before starting development update your `main` git branch by running `git pull` in your terminal while on the `main` branch. You can check which branch you are on by running `git branch` and looking for the name that is <span style="color:green">colored</span> and prefixed by `*`. Then before starting to code, continue with one of the following flows: 
<details>
  <summary><b>You have a feature branch</b></summary>
  If you already have a feature branch you are working on, switch to it with <code>git checkout &lt;branch name&gt;</code> then make sure it is up to date with <code>main</code> with <code>git merge main</code>. This will merge any changes from <code>main</code> that you don't have yet into your current branch and you'll be good to go. 
  <br/><br/>
  If you run into a merge conflict, check the affected files by running <code>git status</code> then visit each file with conflicts and resolve the issues by changing the code to what you intend for it to be and then saving the results. Stage these changes in git with <code>git add .</code> and complete the merge with <code>git commit</code>. This will open up your terminal's default text editor. You will need to save the changes and close the editor. If the editor is <code>vim</code> you can do this by hitting the <code>esc</code> key, typing in <code>:wq</code> and pressing <code>enter</code>.
</details>
<br/>
<details>
  <summary><b>You don't have a feature branch</b></summary>
  If you do not already have a feature branch that you are currently working on, switch to a new feature branch with <code>git checkout -b &lt;branch name&gt;</code>. This will create a new branch named <code>&lt;branch name&gt;</code> that is based off the updated <code>main</code> branch and automatically switch you to it.
</details>
<br/>

Once you've started coding, remember to frequently make commits especially after completing a feature or resolving a code issue! Use `git add` and `git commit -m "<commit message>"` to make commits. You can view the commit history by entering `git log`.

***Pushing Your Changes*** - After you've completed your feature and are ready to push your code up to github, update your branch one last time by checking out `main`, pull down changes from github, switch back to your branch and merge with `main`. Now you are ready to push your branch up to github. If you've never pushed your branch up to github yet, run `git push -u origin <branch name>` to create your branch on github and push your local changes to that github branch. If you've already pushed your specific branch then you can simply use `git push` to push the local changes from your branch up to that branch in github.
<br/><br/>
When you feel like your feature is ready, create a pull request on github! To do this, visit your repo page on github, navigate to the `Pull requests` tab and click `New pull request`. Make sure you see `[base: main] <- [compare: <your branch name>]` then create the pull request.
<br/><br/>

## Troubleshooting

---

- When running `npm install` you get the error: `bash: npm: command not found`. You likely don't have node/npm installed. Visit https://nodejs.org/en/ and install the latest LTS version.
<br/><br/>

## Resources/Documentation

---

- [Git docs](https://git-scm.com/docs)
- [React docs](https://reactjs.org/docs/hello-world.html)
- [Next.js docs](https://nextjs.org/learn/foundations/about-nextjs)
- [About Node.js](https://nodejs.org/en/about/)
- [About npm](https://www.npmjs.com/about)
