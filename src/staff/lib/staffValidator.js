export const validateStaff = (form) => {
    const errors = {};
    if (!form.name?.trim()) {
        errors.name = "Name is required";
    }
    if (!form.email) {
        errors.email = "Email is required"
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Invalid email";
    }

    if (!form.contact) {
        errors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(form.contact)) {
        errors.contact = "Contact must be 10 digits"
    }

    if (!form.joiningDate) {
        errors.joiningDate = "Joining date is required"
    }
    if (!form.role) {
        errors.role = "Role is required";
    }
    if (!form.status) {
        errors.status = "Status is required"
    }
    return errors;
}