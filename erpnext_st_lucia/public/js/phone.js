// Phone numbers: suggest the St Lucia prefix "+1 (758) ".
//
// When the user clicks in an empty phone field, the prefix is typed in for them.
// If they leave the field without adding a number, the field is emptied again,
// so the phone number stays optional.
// To change the prefix, edit it here, then run: bench build --app erpnext_st_lucia

frappe.provide("erpnext_st_lucia");

erpnext_st_lucia.PHONE_PREFIX = "+1 (758) ";

// `field` is a form or dialog field, e.g. frm.fields_dict.phone
erpnext_st_lucia.suggest_phone_prefix = function (field) {
	const $input = field && field.$input;
	if (!$input || $input.data("st-lucia-phone")) {
		return; // field not shown yet, or already set up
	}
	$input.data("st-lucia-phone", true);

	const prefix = erpnext_st_lucia.PHONE_PREFIX;
	$input.attr("placeholder", prefix + "...");

	$input.on("focus", () => {
		if (!$input.val()) {
			$input.val(prefix);
			// put the cursor after the prefix
			setTimeout(() => $input[0].setSelectionRange(prefix.length, prefix.length));
		}
	});

	$input.on("blur", () => {
		if ($input.val().trim() === prefix.trim()) {
			$input.val("");
			field.set_value("");
		}
	});
};
