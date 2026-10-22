### Erpnext St Lucia

App for St Lucia localization

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd frappe-bench
bench get-app https://github.com/BPier/erpnext_st_lucia --branch version-16
bench install-app erpnext_st_lucia
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/erpnext_st_lucia
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### License

mit
