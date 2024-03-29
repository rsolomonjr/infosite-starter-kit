// ERROR CHECKING

function testSFNumber(input) {
    const regex = /^[a-zA-Z][\w\-\.]*$|^\d{6}\.\d{1,2}[a-zA-Z]?$/;
    return regex.test(input);
}

function isValidBrandName(input) {
    // Check if the input is ampersands (&), brackets ([ and ]), and letters
    const regex = /^[\d\w\[\]]+[^\?\\\/\:"<>\|]*$/g;
    return regex.test(input);
  }

  function isValidDepartmentID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{4}$/;
    return regex.test(input);
  }

  function isValidTacticID(input) {
    // Check if the input has five or six numbers and no non-numeric characters
    const regex = /^\d{5,6}$/;
    return regex.test(input);
  }

  function isValidPromoID(input) {
    // Check if the input has five or six numbers and no non-numeric characters
    const regex = /^\d{5,6}$/;
    return regex.test(input);
  }


  function isTitleCase(input) {
    // check if each word begins with a capital letter, a number, or "<"
    const regex = /^[A-Z][a-zA-Z0-9\s\S]*$/;
    return regex.test(input);
  }

  function isValidURL(input) {
    // Check if the input is a valid URL
    const regex = /^(https?:\/\/)?([\w.-]+)?\.?([a-z]{2,})?(:\d{1,5})?([\/?#]\S*)?$/i;
    return regex.test(input);
  }

  function isValidPharma(input) {
    // Check if the input contains only letters
    const regex = /^[\d\w\[\]]+[^\?\\\/\:"<>\|]*$/g;
    return regex.test(input);
  }

  function isValidPollID(input) {
    // Check if the input has no more than five numbers and no non-numeric characters
    const regex = /^\d{0,5}$/;
    return regex.test(input);
  }

  function isValidTitle(input) {
    // Check if the input is alphanumeric and starts with a capital letter
    const regex = /^[A-Z][a-zA-Z0-9\s\S]*$/;
    return regex.test(input);
  }

  function isValidMediaLength(input) {
    // Check if the input is a valid video length in the format 00:00
    const regex = /^([0-5]?\d):([0-5]\d)$/;
    return regex.test(input);
  }

  function isValidFragmentURL(input){
    //Check if the input is a valid fragment url (starts with / and ends with .mp4)
    var regex = /^\/delivery\/.*\.mp4$/;
    return regex.test(input);
  }

  function isImageFile(input) {
    // Check if the input ends with .png, .jpg, or .jpeg
    const regex = /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;
    return regex.test(input);
  }