const {
  reverseString,
  isPalindrome,
  capitalize,
  getInitials,
} = require("./functions");

test("reverseString reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test("isPalindrome checks if a string is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

test("capitalize capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("javaSCRIPT")).toBe("Javascript");
});

test("getInitials extracts initials from a name", () => {
  expect(getInitials("John Doe")).toBe("JD");
  expect(getInitials("Jane Ann Doe")).toBe("JAD");
});
