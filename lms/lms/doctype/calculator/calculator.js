// Copyright (c) 2023, NexTash (SMC-Pvt) Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Calculator', {

		sum: function(frm,dt,dn) {
			const first_num = parseFloat(frm.doc.first_num);
			const second_num = parseFloat(frm.doc.second_num);
	
			const sum_result = first_num + second_num;
			frappe.model.set_value(dt,dn,'result', sum_result);
			frappe.msgprint("Sum calculated successfully")
		},
		
		substract: function(frm,dt,dn){
			const first_num = frm.doc.first_num;
			const second_num = frm.doc.second_num;
			const substract_result = first_num - second_num;
			frappe.model.set_value(dt,dn,'result', substract_result);
			frappe.msgprint("substract calculated successfully")
		},
		multiply: function(frm,dt,dn){
			const first_num = frm.doc.first_num;
			const second_num = frm.doc.second_num;
			const multiply_result = first_num * second_num;
			frappe.model.set_value(dt,dn,"result", multiply_result);
			frappe.msgprint("multiply calculated successfully")
		},
		division: function(frm,dt,dn){
			const first_num = frm.doc.first_num;
			const second_num = frm.doc.second_num;
			const division_result = first_num / second_num;
			frappe.model.set_value(dt,dn,'result', division_result);
			frappe.msgprint("division calculated successfully")
		},
		percentage: function(frm,dt,dn){
			const first_num = frm.doc.first_num;
			const second_num = frm.doc.second_num;
			const percentage_result = (first_num / second_num) * 100;
			frappe.model.set_value(dt,dn,'result', percentage_result);
			frappe.msgprint("percentage calculated successfully")
		},
		modulus: function(frm,dt,dn){
			const first_num = frm.doc.first_num;
			const second_num = frm.doc.second_num;
			const modulus_result = first_num % second_num;
			frappe.model.set_value(dt,dn,'result', modulus_result);
			frappe.msgprint("modulus calculated successfully")
		}
	
	/*sum: function(frm) {
		const doc = frm.doc;
		
		const sum_result = first_num + second_num;
		const result = sum_result;
		frm.set_value('result', sum_result);
	},*/
 

});
