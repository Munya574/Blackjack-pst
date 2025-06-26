document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
  
    const form = e.target;
    const fullName = form.fullName.value.trim();
    const username = form.username.value.trim();
    const age = parseInt(form.age.value);
    const birthdate = new Date(form.birthdate.value);
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const legalChecked = form.legal.checked;
    const termsChecked = form.terms.checked;
  
    // Log label + value pairs
    console.log("Full Name: " + fullName);
    console.log("Username: " + username);
  
    // Checkbox states
    console.log(legalChecked ? "The user has checked the legal checkbox" : "The user has not checked the legal checkbox");
    console.log(termsChecked ? "The user has checked the terms checkbox" : "The user has not checked the terms checkbox");
  
    // Eligibility check
    const allFilled = fullName && username && !isNaN(age) && form.birthdate.value && password && confirmPassword;
    const isEligible = (
      password === confirmPassword &&
      age >= 13 &&
      legalChecked &&
      termsChecked &&
      allFilled
    );
  
    console.log(isEligible ? "The user is eligible" : "The user is ineligible");
  
    // Stretch goal: Compare actual age with birthdate
    const today = new Date();
    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();
  
    let calculatedAge = today.getFullYear() - birthYear;
    const beforeBirthday =
      today.getMonth() < birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() < birthDay);
    if (beforeBirthday) calculatedAge--;
  
    if (age && birthdate instanceof Date && !isNaN(birthdate)) {
      if (calculatedAge !== age) {
        console.log("The user is not likely to be good at math");
      } else {
        console.log("The user can figure out the user's age");
      }
    }
  });