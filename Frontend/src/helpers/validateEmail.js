export default function validateEmail(email) {
  const [emailBeforeAt, emailAfterAt] = email.split("@");
  const emailRegex = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (email.length > 254) {
    return false;
  } else if (!emailRegex.test(email)) {
    return false;
  } else if (emailBeforeAt.length > 64) {
    return false;
  } else if (emailAfterAt.split(".").some((segment) => segment.length > 63)) {
    return false;
  }

  return true;
}
