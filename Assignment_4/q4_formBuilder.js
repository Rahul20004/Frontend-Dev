// q4_formBuilder.js
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.values = {};
    }

    generateForm() {
        console.log("Generated Form Fields:");
        this.fields.forEach(f => console.log(`Label: ${f.label}, Type: ${f.type}`));
    }

    // Simulated input function
    fillForm(dataObj) {
        this.values = dataObj;
    }

    getFormData() {
        return this.values;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const form = new FormBuilder(fields);

form.generateForm();

// User simulated input
form.fillForm({
    username: "Rahul",
    email: "rahul@example.com",
    password: "Admin@123"
});

console.log("Form Data:", form.getFormData());

