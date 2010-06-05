Inline CSS Editor (ICE)
=======================

This plugin provides a simple way to edit the CSS properties of any element on the document, inline. The document can be set to *EDIT* mode on click of a button. Once in the *EDIT* mode, a click on any of the elements in the editable section would open up a dialog asking for the new CSS property for the clicked element.

![Screenshot](http://www.proxygeek.org/ice/ICE_Demo_Screenshot_1.png)

How to use
----------
Dependencies: mootools-1.2.4-core-nc  (later versions of the MooTools core should work too)
   
Summary: Include ice.js along with mootools-1.2.4-core.js and call the create_ice() method on any element you want to be editable.
	 Also include a button/link which will toggle the state between Edit/Normal mode by calling edit_mode_toggle method.
   
Steps:
      
	1) Download and extract the files(MooTools core & ice.js) in your project folder.
   
	2) Include a link/button to toggle b/n EDIT/NORMAL modes by attaching the edit_mode_toggle method to it

		$('edit_button').addEvent('click', edit_mode_toggle);

	3) Call the create_ice() method on the elements you want to support the CSS editing
  
		$('YourElementID').addEvent('click',function(){
					event.stopPropagation();
					this.create_ice();
		});
 
	4) You can choose the CSS properties available for editing by sending them as options while calling create_ice()
  
	   For example, to have color, width and height available, you can use:
				this.create_ice({
					css_prop_1:'color',
					css_prop_2:'width',
					css_prop_3:'height',
					css_prop_4:'background'
				});
   
Demo
----
You can check the code and the working demo at http://nextfive.net/projects/ice/ice_demo.html


Changes
-------
Changes in this version:
	a) Code converted from inline to class
	b) Class provides options for choosing the CSS properties to be made editable

Issues
------
	a) There probably will be many. Feel free to fork and change. Or drop me a line.

Notes
-----
This plugin can be enhanced further to:
	a) Have a smoother user interaction using MooTools Fx
	b) create a online WYSIWYG editor, by combining with other plugins like color selector
