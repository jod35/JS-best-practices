//capture groups help us to search for how search text repeats
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);