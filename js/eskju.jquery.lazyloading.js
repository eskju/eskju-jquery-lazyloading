/*
 * jQuery lazyLoading plugin
 *
 * Copyright (c) 2014 Christian Witte
 * licensed under MIT license.
 *
 * https://github.com/...
 *
 * Version: 0.9a
 *
 * Licensed under MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
	
	esKjuLazyLoading = function( options )
	{
		this.init( options );
	}
	
	
	$.extend( esKjuLazyLoading.prototype,
	{
		init : function( options )
		{
			this.container = $( options.container );
			this.offset = this.container.offset( );
			this.loading = false;
			this.url = this.container.attr( "data-request" );
	
			this.options = $.extend(
			{
				tolerance : 200,
				classLoading : "esKju-lazyloading",
				classLoaded : "esKju-lazyloading-loaded",
				pageAlias : "page",
				page: 1,
				maxPages: false,
				lazyImagePlugin :
				{
					enable : true,
					classLoading : "esKju-lazyimage",
				}
			}, options );
			
			this.bindScroll( );
		},
	
		loadNextPage : function( )
		{
			var $this = this;
	
			$.get( this.url,
			{
				ajax : 1,
				page : $this.options.page
			}, function( response )
			{
				$this.container.append( response );
				$this.container.addClass( $this.options.classLoaded );
	
				if( $this.options.lazyImagePlugin.enable )
				{
					if( typeof( LazyImage ) === "undefined" )
					{
						console.debug( "LazyImage plugin is not loaded" );
					}
					else
					{
						new LazyImage( $this.container.find( "." + $this.options.lazyImagePlugin.classLoading ) );
					}
				}
	
				if( $this.container.find( "." + $this.options.classLoading ).length > 0 )
				{
					if( !$this.options.maxPages || $this.options.maxPages > $this.options.page )
					{
						new esKjuLazyLoading(
						{
							container : $this.container.find( "." + $this.options.classLoading ),
							page : $this.options.page + 1,
							maxPages : $this.options.maxPages
						} );
					}
				}
			} );
		},
	
		bindScroll : function( )
		{
			var $this = this;
	
			$this.update( );
	
			$( window ).scroll( function( )
			{
				$this.update( );
			} );
	
			$( window ).resize( function( )
			{
				$this.update( );
			} );
		},
	
		update : function( )
		{
			var $this = this;
			this.offset = this.container.offset( );
	
			if( !$this.loading && $( window ).scrollTop( ) + $( window ).height( ) - $this.options.tolerance > $this.offset.top )
			{
				$this.loading = true;
				$this.loadNextPage( );
			}
		}
	
	
	} );
