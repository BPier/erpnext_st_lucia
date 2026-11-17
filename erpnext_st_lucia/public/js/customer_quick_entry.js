// St Lucia version of the "New Customer" dialog.
//
// ERPNext builds the address and contact part of this dialog in code
// (erpnext/public/js/utils/contact_address_quick_entry.js), so Customize Form
// cannot change it. This file reuses ERPNext's dialog and only changes what is below.

frappe.provide("frappe.ui.form");

const ST_LUCIA_COUNTRY = "Saint Lucia";

frappe.ui.form.CustomerQuickEntryForm = class extends frappe.ui.form.ContactAddressQuickEntryForm {
	get_variant_fields() {
		const fields = super.get_variant_fields();

		for (const field of fields) {
			// Community (address_line1) and District (city): labels as on the Address form.
			// The address stays optional, even though the country is pre-filled:
			// Community and District are only required if one of them is filled.
			if (field.fieldname === "address_line1") {
				field.label = __("Community");
				field.mandatory_depends_on = "eval:doc.city";
			}
			if (field.fieldname === "city") {
				field.label = __("District");
				field.mandatory_depends_on = "eval:doc.address_line1";
				// Suggest the St Lucia districts (list in districts.js),
				// but still accept any value, for addresses outside St Lucia
				field.fieldtype = "Autocomplete";
				field.options = erpnext_st_lucia.DISTRICTS;
				field.ignore_validation = 1;
			}

			// State/Province: hidden when the country is Saint Lucia
			if (field.fieldname === "state") {
				field.depends_on = `eval:doc.country_address != "${ST_LUCIA_COUNTRY}"`;
			}
		}

		return fields;
	}

	render_dialog() {
		super.render_dialog();

		// Country: Saint Lucia by default
		this.dialog.set_value("country_address", ST_LUCIA_COUNTRY);

		// Mobile number: suggest "+1 (758) " (see phone.js)
		erpnext_st_lucia.suggest_phone_prefix(this.dialog.fields_dict.mobile_number);
	}
};
