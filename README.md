# Phillip Dodson's Personal & Portfolio Website

This is the repository for `https://phillipdodson.io`, a static website built with Jekyll and hosted on GitHub Pages.

## Overview

This site is generated using Jekyll and deployed via GitHub Pages. Content is written in Markdown and rendered into a static site using Jekyll’s build process.

## Tech Stack

* Jekyll
* GitHub Pages
* Markdown
* HTML / CSS / JavaScript

## Local Development

To run the site locally, you’ll need Ruby and Bundler installed.

### Prerequisites

* Ruby (recommended: latest stable version)
* Bundler

You can check if Ruby is installed by running:

```
ruby -v
```

If Bundler isn’t installed, install it with:

```
gem install bundler
```

### Installation

1. Clone the repository:

```
git clone https://github.com/phillipdodson/phillipdodson.github.io.git
cd phillipdodson.github.io/docs
```

The Jekyll installation, source files, and built website are in the `docs` folder, so all commands need to be run there.

2. Install dependencies:

```
bundle install
```

3. Start the local server:

```
bundle exec jekyll serve --livereload
```

4. Open your browser and visit:

```
http://localhost:4000
```

The site will automatically rebuild and refresh as you make changes.

## Building the Site

To generate the static site files without running a server:

```
bundle exec jekyll build
```

The output will be generated in the `_site` directory.

## Deployment

This site is deployed using GitHub Pages. Pushing changes to the `master` branch will automatically trigger a rebuild and deployment.
