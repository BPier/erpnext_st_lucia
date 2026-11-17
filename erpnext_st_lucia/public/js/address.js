// Address form: St Lucia changes that need code.
// (Labels, default country and hiding State/Province are in fixtures/property_setter.json)

frappe.ui.form.on("Address", {
	refresh(frm) {
		// District (city): suggest the St Lucia districts (list in districts.js),
		// but still accept any value, for addresses outside St Lucia
		const district = frm.fields_dict.city;
		district.df.ignore_validation = 1;
		district.set_data(erpnext_st_lucia.DISTRICTS);

		// Phone: suggest "+1 (758) " (see phone.js)
		erpnext_st_lucia.suggest_phone_prefix(frm.fields_dict.phone);
	},
});
