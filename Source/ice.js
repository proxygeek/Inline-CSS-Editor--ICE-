/*
---
description: An inline CSS editor for individual DOM-elements

license: MIT-style

authors:
- Proxygeek

requires:
- mootools-1.2.4-core

provides: NoClassYet

...
*/


var edit_mode = false;

var ice = new Class({

	Implements: [Options,Events],

	options: {
		css_prop_1:'background',
		css_prop_2:'border'
	},

	initialize: function(element,options){
		event.stopPropagation(); // Stop the click-event from bubbling up
		this.setOptions(options);
		this.element = element;
		this.display_dialog(element);
	},

	display_dialog: function(clicked_element){
		var dialog = this.create_dialog(); // Create the dialog-element
		dialog.inject(clicked_element,'after'); // Add the dialog-element in the DOM

		// Assign event-listners on each field of the CSS-input-box, except button, to trap and stop click from propagating
		document.getElements('.no_click').addEvent('click', function(trap_event){
			trap_event.stopPropagation();
		});

		var that=this; // to access the options from inner method: setCSS_func()

		var setCSS_func = function(){  // inner method to set the new CSS option
			event.stopPropagation();
			var css_property='';
			for(var css_prop in that.options){
				css_property=that.options[css_prop];
				if($(css_property).value != '')
					clicked_element.setStyle(css_property, $(css_property).value);
			}
		};

		$('setCSS').addEvent('click', setCSS_func);
	},

	create_dialog: function(){
		var css_options = '', css_property='';

		if($('vertical_slide')) // Remove prev dialog boxes
			$('vertical_slide').dispose().destroy();

		var dialog = new Element('div', {
						'id':'vertical_slide',
						'class':'no_click'
						}
					);

		for(var css_prop in this.options){
			css_property=this.options[css_prop];
			css_options += css_property + '<input type="text" id="'+css_property+'" class="no_click"/> <br/>';
		}
		css_options += '<input type="button" name="setCSS" value="Change it!" id="setCSS" />';

		dialog.set('html',css_options);

		return(dialog);
	}
});

// ------ Create & return an ICE object associated with the element passed in the call with the options ---------- //
Element.implement({
	create_ice: function(options) { 	// called from the HTML domready section
		if(edit_mode==true){
			return new ice(this, options);
		}
	}
});

// ------ Toggle the value of edit_mode and Edit_Button when user clicks the Edit button  ---------- //
var edit_mode_toggle = function(event){
	edit_mode = (edit_mode == false)? true: false;

	(edit_mode == false) ? this.setProperty('value','Edit') : this.setProperty('value','STOP Editing');

	if(edit_mode == false){ 	// Destroys all the dialogs created while editing
		$('vertical_slide').dispose();
	}
}
