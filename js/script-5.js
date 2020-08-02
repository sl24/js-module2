function checkForSpam(str) {
  // Write code under this line
  let message =
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam")
      ? true
      : false;
  return message;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
