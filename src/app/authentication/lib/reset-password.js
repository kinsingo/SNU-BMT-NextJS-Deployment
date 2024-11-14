import { modifyPassword, findUserByEmail } from "./data/user.js";
import {
  isValidEmail,
  isValidText,
  isPasswordEqual,
  isValidPassword,
} from "./util/validation.js";

export default async function resetPassword({ email, password, newPassword }) {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email.");
  }

  const user = await findUserByEmail(email);
  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    throw new Error("Previous password is incorrect.");
  }

  if (!isValidText(newPassword, 8)) {
    throw new Error(
      "Invalid new password. Must be at least 8 characters long."
    );
  }

  if (isPasswordEqual(password, newPassword)) {
    throw new Error("New password must be different from previous password.");
  }

  await modifyPassword(email, newPassword);
  //const { token, expirationTime } = createJSONToken(email); //이 부분은 따로 별도로 필요할때 불러오면 되는거임.
  //return { token, expirationTime };
}
