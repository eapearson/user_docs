# Installation

## Prerequisites

Although writing the documentation requires just a text editor, utilizing the documentation repo as intended does require that some software components be available in your system.

Generally, these are:

git
: For obtaining the repo, and pushing up any changes you may have.

pandoc
: For converting the Markdown to HTML or PDF

nodejs
: Required to script the documentation conversion and packaging process

node packages
: Several node packages are required in order to support the build process

Note that each platform below is offered in multiple versions and may offer multiple ways of installing the prerequisite software. We can't presume to support all of them, but will do our best to update these sections as additional workflows are tested and contributed.

### Macintosh

You will need Administrator access, either from your account or another one on the Mac, to install the prequisites.

#### Native Mac Packages

git
: http://git-scm.com/download/mac

pandoc
: http://pandoc.org/installing.html

nodejs
: https://nodejs.org/en/


#### Macports

Macports requires the Mac Xcode developer tools. Although Macports can install binary packages, it prefers to install and then build source code. This can take a long time, so don't be surprised if some things take over an hour to install the first time.

##### 1) install *macports*

Macports is available from the macports web site. It installs as a regular Mac package, and you will find usefull installation tips there.

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

    sudo port install git

##### 5) install *pandoc*
    
    sudo port install pandoc

##### 6) install *nodejs*

    sudo port install node


See below for npm package installation

#### Homebrew

[ to be done ]

##### All -- npm packages

The Node Package Manager, npm, works the same once nodejs has been installed. We just need to install one node package, *grunt-cli*. This package is needed for the *grunt* task runner which is used to build the documentation.

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

If you are going to be editing the documentation, you should fork the doc repo first. At KBase, we prefer to use the Fork-Pull method for contributions to a KBase repo. 

[ to be done ]

## Clone the user_docs repo

Either from the KBase repo, https://github.com/kbase/user_docs.git, or your own personal repo, or that of a colleague, you will need to clone the repo to your workstation.

#### Github Desktop

Are you a Github Desktop user? If so, this section 

- choose a location in which to 


## Building




## Building for Wordpress & kbase.us

