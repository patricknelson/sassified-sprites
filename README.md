# sassified-sprites
Generic boilerplate used for building SASS and compiling sprites. This is intended to stay pretty simple, so feel free to copy, modify and change this to suit your needs.



## Usage:

* `grunt build-sprites`
	* Generates sprites and minifies/optmizes the resulting sprites.png output file. Will also generate a _sprites.scss file which can be integrated into your SCSS project.
* `grunt build`
	* Generates all sprites and compiles SASS/SCSS down to CSS.
* `grunt dev`
	* Same as "build" above but also waits for more changes and regenerates all dynamic files when changes occur.


## System Requirements

* [ruby](https://www.ruby-lang.org/) v1.9+
    * [bundler](http://bundler.io/): Manages ruby packages (gems) `gem install bundler`
    * Make sure RubyGems is up-to-date: `gem update --system`
* [node.js](http://nodejs.org/)
    * [npm](https://npmjs.org/): Manages node.js packages `npm update -g npm`
    * [grunt cli](http://gruntjs.com/): Task runner `npm install -g grunt-cli`
    * [bower](http://bower.io/): Manages css and javascript packages `npm install -g bower`

## Installation

First, see above to make sure you've got the right system requirements. Then, run the following commands:

```bash
# Installs ruby gems (sass, compass).
bundle install

# Install node.js packages (grunt tasks like watch and imagine for sprites/minification)
npm install

# Get started with development!
grunt dev
```

## Configuration

You can configure file paths at the top of the provided `Gruntfile.js`. The following paths are available by default:

* `css`
	* Where generated CSS is stored. By default, only `main.css` will end up here.
* `scss`
	*  Source directory where your SASS/SCSS will live. Any *.scss files (not starting with an underscore) will be converted to CSS files living in the above `css` directory, if placed here.
*  `images/sprites/src`
	*  Store any small image files which should be combined into a single sprite in this directory.
*  `images/sprites/build`
	*  Where the final generated sprite image file (`sprites.png`) will be placed.  


## To Do

* Setup a demo.html file.
