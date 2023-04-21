// ERROR CHECKING

function testSFNumber(input) {
    const regex = /^\d{6,7}\.\d{1,2}$/;
    return regex.test(input);
}

function isValidBrandName(input) {
    // Check if the input is alphanumeric and starts with a capital letter
    const regex = /^[A-Z0-9][A-Z0-9]*$/;
    return regex.test(input);
  }

  function isValidDepartmentID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{0,4}$/;
    return regex.test(input);
  }

  function isValidTacticID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{0,6}$/;
    return regex.test(input);
  }

  function isValidPromoID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{0,5}$/;
    return regex.test(input);
  }

  function isValidURL(input) {
    // Check if the input is a valid URL
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(input);
  }

  function isValidPharma(input) {
    // Check if the input contains only letters
    const regex = /^[a-zA-Z]+$/;
    return regex.test(input);
  }

  function isValidPollID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{0,5}$/;
    return regex.test(input);
  }

  function isValidVideoTitle(input) {
    // Check if the input is alphanumeric and starts with a capital letter
    const regex = /^[A-Z0-9][A-Z0-9]*$/;
    return regex.test(input);
  }

  function isValidAudioTitle(input) {
    // Check if the input is alphanumeric and starts with a capital letter
    const regex = /^[A-Z0-9][A-Z0-9]*$/;
    return regex.test(input);
  }

  function isValidVideoLength(input) {
    // Check if the input is a valid video length in the format 00:00
    const regex = /^([0-5]?\d):([0-5]\d)$/;
    return regex.test(input);
  }

  function isValidAudioLength(input) {
    // Check if the input is a valid video length in the format 00:00
    const regex = /^([0-5]?\d):([0-5]\d)$/;
    return regex.test(input);
  }

  function isImageFile(input) {
    // Check if the input ends with .png, .jpg, or .jpeg
    const regex = /\.(png|jpg|jpeg)$/i;
    return regex.test(input);
  }