Inline CSS Editor (ICE)
=======================

This plugin provides a simple way to edit the CSS properties of any element on the document, inline. The document can be set to *EDIT* mode on click of a button. Once in the *EDIT* mode, a click on any of the elements in the editable section would open up a dialog asking for the new CSS property for the clicked element.

If an image is found within the description, that becomes the screenshot of the plugin. Screenshots are optional but encouraged, given the plugin has some visual interaction. The screenshot can be of any size, but try to keep it of about 200x100.

![Screenshot](http://www.proxygeek.org/ice/ICE_Demo_Screenshot_1.png)

How to use
----------
0) Dependencies: mootools-1.2.4-core-nc  (later versions of the MooTools core should work too)
1) Download and extract the files in your project folder.
2) By default, it allows only for the Background Color of an element to be changed. Other properties can be added easily under *css_options* in
   **ice.js**

	var edit_func= function(e_event){
	    e_event.stopPropagation(); // this will prevent the event to bubble up, and fire the parent's click e_event.
	......
	......
	    css_options.set('html','Background: <input type="text" name="cssBg" value="" id="cssBg" class="no_click"/> 
				    <br/> 
				    <input type="button" name="setCSS" value="Change it!" id="setCSS" />');
	......
	......
	};
	
3) In the HTML file, there are 3 set of elements:
	a) EDIT button (id="edit_button"):
			<input type="button" name="edit_button" value="Edit" id="edit_button" />
	b) EDITABLE section (class="editable"):
			<div id="content_pane" class="editable">
				<!-- All element in this section will be editable after the user clicks the EDIT button above-->
			</div>

Demo
----
You can check the code and the working demo at http://mootools.net/shell/Ea9Kv/


Notes
-----
This plugin can be enhanced further to:
	a) Have a smoother user interaction using MooTools Fx
	b) create a online WYSIWYG editor, by combining with other plugins like color selector
