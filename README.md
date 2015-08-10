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
    * [bundler](http://bundler.io/) *manages ruby packages (gems)* `gem install bundler`
    * Make sure RubyGems is up-to-date: `gem update --system`
* [node.js](http://nodejs.org/)
    * [npm](https://npmjs.org/) *manages node.js packages* `npm update -g npm`
    * [grunt cli](http://gruntjs.com/) *task runner* `npm install -g grunt-cli`
    * [bower](http://bower.io/) *manages css and javascript packages* `npm install -g bower`

## Installation

First, see above to make sure you've got the right system requirements. Then, run the following commands:

```bash
# Installs ruby gems (sass, compass).
bundle install

# Install node.js packages (grunt tasks like watch and imagine for sprites/minification)
npm install
```
