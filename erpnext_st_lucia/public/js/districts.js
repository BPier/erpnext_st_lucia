// The 10 districts of Saint Lucia (ISO 3166-2:LC).
// Used as suggestions for the "District" field of addresses
// (Address form and New Customer dialog).
// To change the list, edit it here, then run: bench build --app erpnext_st_lucia

frappe.provide("erpnext_st_lucia");

erpnext_st_lucia.DISTRICTS = [
	"Anse la Raye",
	"Canaries",
	"Castries",
	"Choiseul",
	"Dennery",
	"Gros Islet",
	"Laborie",
	"Micoud",
	"Soufrière",
	"Vieux Fort",
];
