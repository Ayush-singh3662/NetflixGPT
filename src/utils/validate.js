export const validData2 = (email, password) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isValidEmail) {
        return "Email is not Valid.";
    }
    if(!isValidPassword) {
        return "Password is not Valid.";
    }
    return null;
}

export const validData = (name, email, password) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isName) {
        return "Name is not Valid.";
    }
    if(!isValidEmail) {
        return "Email is not Valid.";
    }
    if(!isValidPassword) {
        return "Password is not Valid.";
    }
    return null;
}