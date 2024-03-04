export const isPasswordValid = (password) => {
  if (password.length > 4 && /^[A-ZА-Я]/.test(password)) {
    return [true, ""];
  } else {
    return [
      false,
      "имя не должно быть короче 6 символов и начинаться с маленькой буквы",
    ];
  }
};
