// St Lucia version of the "New Customer" dialog.
//
// ERPNext builds the address and contact part of this dialog in code
// (erpnext/public/js/utils/contact_address_quick_entry.js), so Customize Form
// cannot change it. This file reuses ERPNext's dialog and only changes what is below.

frappe.provide("frappe.ui.form");

frappe.ui.form.CustomerQuickEntryForm = class extends frappe.ui.form.ContactAddressQuickEntryForm {
	get_variant_fields() {
		const fields = super.get_variant_fields();

		for (const field of fields) {
			// Same labels as on the Address form (see fixtures/property_setter.json)
			if (field.fieldname === "address_line1") {
				field.label = __("Community");
			}
			if (field.fieldname === "city") {
				field.label = __("District");
				// Suggest the St Lucia districts (list in districts.js),
				// but still accept any value, for addresses outside St Lucia
				field.fieldtype = "Autocomplete";
				field.options = erpnext_st_lucia.DISTRICTS;
				field.ignore_validation = 1;
			}
		}

		return fields;
	}
};
