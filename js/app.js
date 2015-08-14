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
	var addedItem = $(".buy-item").append(listItem);
	listItem.find("input").on("click", function() {
		var $this = $(this)
		var isChecked = $this.prop('checked')
		if (!isChecked) {
			$this.parent(".to-buy").appendTo('.buy-item')
			$this.siblings('span').removeClass('bought')
		} else {
			$this.parent(".to-buy").appendTo('.purchased')
			$this.siblings('span').addClass('bought')
		}
		
	});

	listItem.find('.edit').on('click', function () {
		var $this = $(this);
		var $parent = $this.closest(".to-buy");
		var $item = $parent.find(".item");
	    if ($parent.data("editing")) {
	        $item.replaceWith(function () {
	            return $("<span>", {
	                "class": this.className,
	                text: this.value
	            });
	        });
	        $parent.data("editing", false);
	    } else {
	        $item.replaceWith(function () {
	            return $("<input>", {
	                value: this.innerText,
	                    "class": this.className
	            });
	        });
	        $parent.data("editing", true);
	    }
	});
	$(".add-item").val("");
}

function createListItem(newItem) {
	var listItem = "<li class='to-buy' data-editing='false'><input type='checkbox' name='check' class='checkbox'>"; 
	listItem += "<span class='item'>" + newItem + "</span>";
	listItem += "<ul class='edit-delete'><li><button class='edit'>Edit</button></li><li><button class='delete'>Delete</button></li>";
	return $(listItem); 
}




