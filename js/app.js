$(document).ready(function() {
	$(".add").click(addItem);

	// Add item when Enter key is pressed
	$(".add-item").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});

	// Remove item from list when Delete is clicked
	$("#buy-item").on("click", ".delete", function() {
    	$(this).closest("#to-buy").remove();
	});
	
	$(".purchased").on("click", ".delete", function() {
    	$(this).closest("#to-buy").remove();
	});

	//Edit item when 'edit' is clicked

		//Submit changes when 'enter' is pressed AND when 'edit' is clicked

	/*$("#item").on("click", ".edit", (function(){
    	$(this).hide().siblings(".edit").show().val($(this).text()).focus();
	});

	$(".edit").focusout(function(){
    	$(this).hide().siblings(".display").show().text($(this).val());
	});*/

	//Toggle checkbox
	$(this).prop('checked', false);
	$(this).prop('checked', true);

	//Add item to Purchased list when checkbox is clicked
	$('#buy-item').on("click", ".checkbox", function() {
    	return !$('#buy-item li :checked').closest('li').appendTo('.purchased');
	});

	// Strikethrough text if checkbox selected
	$("#buy-item").on("change", "input:checkbox", function () {
		var item = $(this).closest("#to-buy").find("#item");
		if($(this).is(":checked")) {
			item.addClass("bought");
		}
		else
			item.removeClass("bought"); 
	});

	/* add sorting to list */
	$("#buy-item").sortable({   
		placeholder: "ui-sortable-placeholder" 
    }); 

	//Add purchased item to Buy list when checkbox is un-clicked
	$('.purchased').on("click", ".checkbox", function() {
    	return !$('.purchased li :checked').closest('li').appendTo('#buy-item');
});

	// Un-Strikethrough text if checkbox selected
	$(".purchased").on("change", "input:checkbox", function () {
		var item = $(this).closest("#to-buy").find(".bought");
		if($(this).is(":checked")) {
			item.removeClass("bought");
		}
	});
});

	function addItem() {
	var newItem = $(".add-item").val();
	if(newItem.trim().length === 0) {
		alert("You must enter an item in order for it to be added.");
        return;
	}


	var listItem = createListItem(newItem);
	$("#buy-item").append(listItem);
	$(".add-item").val("");
}

	function createListItem(newItem) {
	var listItem = "<li id='to-buy'><input type='checkbox' name='check' class='checkbox'>"; 
	listItem += "<span id='item'>" + newItem + "</span>";
	listItem += "<ul class='edit-delete'><li><button class='edit'>Edit</button></li><li><button class='delete'>Delete</button></li>";
	return listItem; 
}
























