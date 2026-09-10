export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  if (name !== null) {
    const isNameValid = /^[a-zA-Z\p{L}'\s-]{2,50}$/u.test(name?.trim());
    if (!isNameValid) return "Enter a valid Name";
  }

  if (!isEmailValid) return "Enter a valid Email";
  if (!isPasswordValid) return "Enter a valid Password";

  return null;
};
