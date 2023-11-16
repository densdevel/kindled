function isValidName(name) {
  const terms = name.split(' ');

  // Helper function to check if a term is valid
  function isTermValid(term, isLastTerm) {
    if (term.length < 2) {
      return false;
    }

    if (isLastTerm) {
      return /^[A-Z][a-zA-Z]*$/.test(term);
    }

    return /^[A-Z]\.$/.test(term) || /^[A-Z][a-zA-Z]*$/.test(term);
  }

  function isTermInitial(term) {
    return /^[A-Z]\.$/.test(term);
  }

  // Check if the name has 2 or 3 terms
  if (terms.length === 3) {
    let [first, middle, last] = terms;
    if (isTermInitial(middle)) {
      if (isTermInitial(first)) {
        console.log(
          `${name} is not a valid name. You may only abbreviate your first name if your middle name is expanded`
        );
        return;
      }
    }

    if (isTermValid(first, false) && isTermValid(middle, false) && isTermValid(last, true)) {
      console.log(`${name} is a valid name!`);
      return;
    } else {
      console.log(`${name} is not a valid name...`);
      return;
    }
  } else if (terms.length === 2) {
    let [first, last] = terms;
    if (isTermValid(first, false) && isTermValid(last, true)) {
      console.log(`${name} is a valid name!`);
      return;
    }
  }
}
