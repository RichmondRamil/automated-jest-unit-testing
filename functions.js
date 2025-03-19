module.exports = {
  reverseString: (str) => str.split("").reverse().join(""),
  isPalindrome: (str) => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  },
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
  getInitials: (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join(""),
};
