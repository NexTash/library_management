// Copyright (c) 2023, NexTash (SMC-Pvt) Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	name1: function(frm, dt, dn) {
		const doc = frm.doc
		const article_name = doc.name1
		frappe.model.set_value(dt, dn, "author", article_name)
	},
 
 
	author: function(frm, dt, dn) {
		const doc = frm.doc
		const article_name = doc.name1
		frappe.model.set_value(dt, dn, "isbn", article_name)
	}
 });
 
