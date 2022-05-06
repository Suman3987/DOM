



function codeName() {
  let name = document.getElementById("name").value

  let result = upperCaseAndLowerCase(name) && Length(name) && checkNumber(name);
  if (result == true) {
    alert("your input is valid")
  } else {
    alert("your input is not valid")
  }
}



function Length(word) {
  if (word.length >= 5) {
    return true
  } else {
    return false
  }
}

function upperCaseAndLowerCase(word) {

  let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");

  if (pattern.test(word)) {
    return true
  } else {
    return false
  }

}

function checkNumber(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (isNaN(word[i])) {

    } else {
      count++
    }
  }
  if (count >= 2) {
    return true
  } else {
    return false
  }

}

