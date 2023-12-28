// Copyright (c) 2023, NexTash (SMC-Pvt) Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	/*after_cancel: function(frm) {
		alert("hy")
	},
	before_cancel: function(frm) {
		alert("by")
	}*/
	phone: function(frm){
		frappe.msgprint("hello")
	}
});
