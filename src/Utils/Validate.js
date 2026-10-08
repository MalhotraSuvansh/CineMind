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

  if (!isEmailValid) return "Enter a valid Email(abc@gmail.com)";
  if (!isPasswordValid)
    return "The Password must contain alphabets, numbers and special characters with minimum length of 8 characters and one capital alphabet";

  return null;
};
