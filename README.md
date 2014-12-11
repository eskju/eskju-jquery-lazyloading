# esKju's jQuery lazyLoading Plugin

## What is it?

EsKju's LazyLoading is a tool for loading content just in time in a Facebook-similar style.
It was built using the jQuery library. Licensed under MIT and GPL licenses.

## Features

+ Supersedes dowdy paginations
+ Customizable trough settings and CSS
+ Highly compatible
+ Uses CSS3 transitions by default

## How to use

### 1. doctype

Make sure you are using valid DOCTYPE. This is required for LazyLoading to look and function correctly.

```
<!DOCTYPE html>
```

### 2. include files

Loading jQuery from CDN (Content Delivery Network) is recommended.
Include all lazyLoading JavaScript and CSS files in addition.

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/eskju.jquery.lazyloading.js"></script>
<link rel="stylesheet" href="css/eskju.jquery.lazyloading.css" />
```

### 3. html markup

```
Create a HTML container.
<div id="example1">
	<div class="esKju-lazyloading" data-request="demo/demo.html">
		<!-- The content will be loaded as soons as this container is visible -->
	</div>
</div>
```

###4. fire plugin using jquery selector

If you are not familiar with jQuery, please, read this tutorial for beginners.
Sample examples:

```
$( document ).ready( function( )
{
	options = {
		container: $( "#example1 .esKju-lazyloading" ), 
		maxPages: 3
	};
	
	new esKjuLazyLoading( options );
} );
```

### 5. customize your styles

To create your own fresh look, customize the stylesheet file.
Sample examples:

```
#example1 .esKju-lazyloading
{
	opacity: 0;
	-webkit-transition: all 200ms ease-in-out;
	-moz-transition: all 200ms ease-in-out;
	-o-transition: all 200ms ease-in-out;
	-ms-transition: all 200ms ease-in-out;
	overflow: hidden;
	-webkit-transform: scale( 1.05 ) translateY( 100px ) skewY( 3deg );
	-moz-transform: scale( 1.05 ) translateY( 100px ) skewY( 3deg );
	-o-transform: scale( 1.05 ) translateY( 100px ) skewY( 3deg );
	-ms-transform: scale( 1.05 ) translateY( 100px ) skewY( 3deg );
}

#example1 .esKju-lazyloading-loaded
{
	opacity: 1;
	-webkit-transform: scale( 1 ) translateY( 0px ) skewY( 0deg );
	-moz-transform: scale( 1 ) translateY( 0px ) skewY( 0deg );
	-o-transform: scale( 1 ) translateY( 0px ) skewY( 0deg );
	-ms-transform: scale( 1 ) translateY( 0px ) skewY( 0deg );
}
```

## Author & Help

For more information visit the author's page:

+ <http://www.cwdesigns.de> esKju's Playground
+ <http://www.cwdesigns.de/eskju-jquery-lazyloading.html> esKju's LazyLoading Project Page
