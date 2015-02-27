var options = $("#selectVendor > option");

var random = Math.floor(options.length * (Math.random() % 1));

$("#selectVendor > option").attr('selected',false).eq(random).attr('selected',true);