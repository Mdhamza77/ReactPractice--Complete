export const EmailValidator = (email) => {
  const Email = /^[^\s@]+@[^\s@]+$/;
  return Email.test(email);
};

export const PasswordValidator = (password) => {
  const Password =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@!?$%^&*-]).{8,}$/;

  return Password.test(password);
};
