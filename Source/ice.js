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

window.addEvent('domready', function() {

	var edit_func= function(e_event){
	    e_event.stopPropagation(); // this will prevent the event to bubble up, and fire the parent's click e_event.

	    //Adds click event to all Elements with the class name 'editable'.
		$('content_pane').getElements('.editable').addEvent('click', function(el_click){
			el_click.stopPropagation();
			var clicked_element=this;

			if((null != $('vertical_slide')) || (undefined != $('vertical_slide')))
				$('vertical_slide').dispose().destroy();

			// create the User dialog, asking for new css property
			var css_options = new Element('div', {
								'id':'vertical_slide',
								'class':'no_click'
							     }
							);

			css_options.set('html','Background: <input type="text" name="cssBg" value="" id="cssBg" class="no_click"/> <br/> <input type="button" name="setCSS" value="Change it!" id="setCSS" />');


			// Add the field for taking in new CSS property
			css_options.inject(clicked_element,'after');

			// Assign event-listners on each field of the CSS-input-box, except button, to trap and stop click from propagating
			document.getElements('.no_click').addEvent('click', function(trap_event){
				trap_event.stopPropagation();
			});

			// Add even listener to the Change-CSS button
			$('setCSS').addEvent('click', function setCSS_func(set_css_event){
				set_css_event.stopPropagation();
				clicked_element.setStyle('background', $('cssBg').value);
			});
		});

	    //Changes the text on the EDIT button.
		$('edit_button').setProperty('value','STOP Editing');

	    //Changes the style of content pane.
		$('content_pane').setStyles({
		    border: '1px dashed black'
		});

	    //Remove the EDIT function from the Edit button after user clicks STOP-Editing button
		$('edit_button').removeEvent('click', edit_func);

	    //Add the STOP-EDIT function to the Edit button after user clicks STOP-Editing button
		$('edit_button').addEvent('click', stop_edit_func);	
	};

	var stop_edit_func= function(e_event){
	    //alert('You are exiting the EDIT-MODE now.');
	    e_event.stopPropagation(); // this will prevent the event to bubble up, and fire the parent's click e_event.

	    //Removes click event from all Elements with the class name 'editable'.
		$('content_pane').getElements('.editable').removeEvents('click');

	    //Changes the text on the EDIT button.
		$('edit_button').setProperty('value','Edit');

	    //Changes the style of content pane.
		$('content_pane').setStyles({
		    border: '1px solid black'
		});

	    //Remove the STOP-EDIT function from the Edit button after user clicks STOP-Editing button
		$('edit_button').removeEvent('click', stop_edit_func);

	    //Add the EDIT function to the Edit button after user clicks STOP-Editing button
		$('edit_button').addEvent('click', edit_func);	

	    // Destroys all the CSS Option elements created while editing
		$('vertical_slide').dispose();
	};

	$('edit_button').addEvent('click', edit_func);

});
