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
	$(".buy-item").on("click", ".delete", function() {
    	$(this).closest(".to-buy").remove();
	});
	
	$(".purchased").on("click", ".delete", function() {
    	$(this).closest(".to-buy").remove();
	});

	/*$("#buy-item").on("click", ".edit", (function(){
    	$(this).closest("#item").hide().val($(this).text()).focus();
	}));

	$(".edit").focusout(function(){
    	$(this).hide().siblings(".display").show().text($(this).val());
	});*/

	// Add sorting to list
	$(".buy-item").sortable({   
		placeholder: "ui-sortable-placeholder" 
    }); 

});

function addItem() {
	var newItem = $(".add-item").val();
	if(newItem.trim().length === 0) {
		alert("You must enter an item in order for it to be added.");
        return;
	}

	var listItem = createListItem(newItem);
	$(".buy-item").append(listItem).find("input").on("click", function() {
		var $this = $(this)
		var isChecked = $this.prop('checked')
		if (!isChecked) {
			$this.parent(".to-buy").appendTo('.buy-item')
		} else {
			$this.parent(".to-buy").appendTo('.purchased')
			$this.siblings('span').addClass('bought')
		}
		
	});

	var editmode = false;

	$('.edit').on('click', function () {
	    if (editmode) {
	        $('.item').replaceWith(function () {
	            return $("<span>", {
	                "class": this.className,
	                text: this.value
	            });
	        });
	        editmode = false;
	    } else {
	        $('.item').replaceWith(function () {
	            return $("<input>", {
	                value: this.innerText,
	                    "class": this.className
	            });
	        });
	        editmode = true;
	    }

	});
	$(".add-item").val("");
}

function createListItem(newItem) {
	var listItem = "<li class='to-buy'><input type='checkbox' name='check' class='checkbox'>"; 
	listItem += "<span class='item'>" + newItem + "</span>";
	listItem += "<ul class='edit-delete'><li><button class='edit'>Edit</button></li><li><button class='delete'>Delete</button></li>";
	return listItem; 
}
























