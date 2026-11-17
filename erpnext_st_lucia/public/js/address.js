// Address form: the "District" field (city) suggests the St Lucia districts.
// Any other value can still be typed, for addresses outside St Lucia.

frappe.ui.form.on("Address", {
	refresh(frm) {
		const district = frm.fields_dict.city;
		district.df.ignore_validation = 1; // accept values that are not in the list
		district.set_data(erpnext_st_lucia.DISTRICTS);
	},
});
