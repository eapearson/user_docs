# Installation

## Contents

<!-- TOC depth:4 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Installation](#installation)
	- [Contents](#contents)
	- [Prerequisites](#prerequisites)
		- [Macintosh](#macintosh)
			- [Native Mac Packages](#native-mac-packages)
			- [Macports](#macports)
			- [Homebrew](#homebrew)
		- [Windows](#windows)
		- [Linux](#linux)
	- [Fork the user_docs Repo (optional)](#fork-the-userdocs-repo-optional)
	- [Clone the user_docs repo](#clone-the-userdocs-repo)
		- [Using the command-line tools](#using-the-command-line-tools)
			- [1) Create a project directory](#1-create-a-project-directory)
			- [2) Clone the user_docs repo in that directory](#2-clone-the-userdocs-repo-in-that-directory)
		- [Github Desktop and Atom](#github-desktop-and-atom)
			- [Github Desktop](#github-desktop)
			- [Github Atom](#github-atom)
	- [Building](#building)
		- [Command Line](#command-line)
		- [Building Github Desktop and Atom](#building-github-desktop-and-atom)
	- [Building for Wordpress & kbase.us](#building-for-wordpress-kbaseus)
<!-- /TOC -->



## Prerequisites

Although writing the documentation requires just a text editor, utilizing the documentation repo as intended does require that some software components be available in your system.

Generally, these are:

- *git* - For obtaining the repo, and pushing up any changes you may have.
- *pandoc* - For converting the Markdown to HTML or PDF
- *nodejs* - Required to script the documentation conversion and packaging process
- *node packages* - Several node packages are required in order to support the build process

Note that each platform below is offered in multiple versions and may offer multiple ways of installing the prerequisite software. We can't presume to support all of them, but will do our best to update these sections as additional workflows are tested and contributed.

### Macintosh

You will need Administrator access, either from your account or another one on the Mac, to install the prequisites.

#### Native Mac Packages

Each of the main prerequisites can be downloaded and installed as regular Mac installer packages. Note that if you are or plan to use one of the mac package installers like Macports or Homebrew, you do not want to install these. If you do, then you will end up with duplicate copies of them.

- **git** - Can be downloaded from http://git-scm.com/download/mac. If you are or are planning on using Github Desktop, you can skip this one, and just install Github Desktop. See the section below.
- **pandoc** - Can be downloaded from http://pandoc.org/installing.html
- **nodejs** - Can be downloaded from https://nodejs.org/en/


#### Macports

Macports is a project to provide Linux / Unix packages to the Macintosh user community. It installs all packages into /opt/local.

Note: There are other package managers, such as Homebrew. You should not mix two or more package managers on the same system, as they will install their packages in different locations, and you may end up with some packages from one system, and some from another. This can lead to all sorts of headaches, so choose wisely!

Macports requires the Mac Xcode developer tools. Although Macports can install binary packages, it prefers to build packages source code. This can take a long time, so don't be surprised if some things take over an hour to install the first time.

##### 1) install *macports*

Macports is available from the macports web site. It installs as a regular Mac package, and you will find useful installation tips there.

    https://www.macports.org/install.php

##### 2) install Apple *Xcode* developer tools

Since Macports compiles source packages, it needs the Mac developer support tools, including the Xcode application and the command line tools.

- Install Xcode either from the Xcode page ```https://developer.apple.com/xcode/``` or from the App store (just search on xcode). It is a large file, so this will take a while.
- install mac xcode developer tools command line support. From a Terminal window, enter:

```
sudo xcode-select --install
```

Now that you have macports and xcode installed, macports, through the command line ```port``` command will be used to install the major packages.

##### 4) install *git*

```
sudo port install git
```

##### 5) install *pandoc*

```
sudo port install pandoc
```

##### 6) install *nodejs* and *npm*

```
sudo port install node
sudo port install npm
```

See below for npm package installation

#### Homebrew

[ to be done ]

##### All -- npm packages

The Node Package Manager, npm, installs javascript packages to run under the node javascript system. We just need to install one node package, *grunt-cli*. This package is needed for the *grunt* task runner which is used to build the documentation and automate other tasks.

From a Terminal window, enter

```
sudo npm install -g grunt-cli
```

That is it for the prerequisites.

### Windows

[ to be done ]

### Linux

[ to be done ]


## Fork the user_docs Repo (optional)

If you are going to be editing the documentation, you should fork the doc repo first. At KBase, we prefer to use the Fork-Pull method for contributions to a KBase repo. This means that you should fork the user_doc repo, and then clone your fork to your workstation.

If you are using Github Desktop, this can be managed from there without visiting the github web site or using the command line.

[ to be done: forking instructions ]

## Clone the user_docs repo

Either from the KBase repo, https://github.com/kbase/user_docs.git, or your own personal repo, or that of a colleague, you will need to clone the repo to your workstation.

### Using the command-line tools

#### 1) Create a project directory

This directory will contain the user_docs repo. E.g.

- open Terminal
- ```mkdir -p projects/UserDocs```

#### 2) Clone the user_docs repo in that directory

For example, assuming that you have forked user_docs and your github account is *youraccount*:

```
cd projects/UserDocs
git clone https://github.com/youraccount/user_docs.git
```


### Github Desktop and Atom

Github Desktop and Atom make a great combination for the entire *user_docs* workflow.

In case you don't have them, these tools are available from:

- [Github Desktop](https://desktop.github.com)
- [Github Atom](https://atom.io/)

#### Github Desktop

- install
- configure on first time opening
  - advise to create Documents/GithubRepos to hold, er, github repos - by default Github Desktop wants to put them into your account root folder.
- File > Clone Repository or use the various other controls to search for and select the user_docs repo.
  - can clone directly from there, or select kbase/user_docs if don't need to editing
- right click on the user_docs repo in the main window and then "Open in Atom".

#### Github Atom

- recommended plugins:
  -


## Building

### Command Line

While still in Terminal

```
cd user_docs
```

fetch all of the node packages required:

```
npm install
```

then build the documents

```
grunt build
```

finally preview the documents

```
grunt preview
```

Note that this last step can also be replaced by pointing your web browser to user_docs/build/index.html

### Building Github Desktop and Atom

- right click on the repo, and select Open in Atom
- install some required plugins
  - terminal-plus
  - pandoc
  - pandoc-convert
- open the terminal

I tried the grunt integration plugins, and none of them worked very well. The *terminal-plus* plugin works just fine, even if pushing a button would be slightly easier.

Open the Atom terminal with [!]




## Building for Wordpress & kbase.us
