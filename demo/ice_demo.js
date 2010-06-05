window.addEvent('domready',function(){
	// Add the toggle function to the EDIT button
	$('edit_button').addEvent('click', edit_mode_toggle);

	$('myFieldset').addEvent('click',function(){
					event.stopPropagation();
					//this.create_ice(); //default
					this.create_ice({
						css_prop_1:'color',
						css_prop_2:'width',
						css_prop_3:'height',
						css_prop_4:'background'
					});
	});
});



