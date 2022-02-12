/**
 * Functions for index.html file.
 *
 * @author Matthew Mentis-Cort
 * Date last edited: February 11, 2022
 */

/**
 * Initializes the webpage variables.
 */
function initialize()
{
  // question 1
  numInQues = document.getElementById("binnumber");
  q1ansInput = document.getElementById("q1ansInput");
  q1feedbackMsg = document.getElementById("q1feedbackmsg");
  q1rangeInput = document.getElementById("q1rangeInput");

  // question 2
  deciNumInQues = document.getElementById("decinumber");
  q2ansInput = document.getElementById("q2ansInput");
  q2feedbackMsg = document.getElementById("q2feedbackmsg");
  q2rangeInput = document.getElementById("q2rangeInput");

  // NUMBITS = 4;
  // make new binary number at start of page
  bNum = null;
  // make new decimal number at start of page
  dNum = 0;
  generateNewBinNum();
  generateNewDeciNum();
  // console.log("Decimal Version: " + bNum.convToDecimal());
  // console.log("Binary Version: " + bNum);
  // console.log("Not a number test: " + parseInt("100"));
}

/**
 * Replaces the current binary number on the screen with a new binary number.
 * Removes the feedback message from being seen on the screen.
 */
function generateNewBinNum()
{
  bNum = createNewBinNum();
  q1feedbackMsg.style.display = "none";
  display();
}

/**
 * Replaces the current binary number on the screen with a new binary number.
 * Removes the feedback message from being seen on the screen.
 */
function generateNewDeciNum()
{
  dNum = generateRandomInteger(1, q2rangeInput.value);
  q2feedbackMsg.style.display = "none";
  display();
}

/**
 * Returns a BinaryNumber with a random number of bits, between 1 and
 * the range that the user specifies on the webpage.
 *
 * Bit values are added to the binary number in reverse order, so they start
 * being added from the last array position, and end at the first array
 * position.
 *
 * @return a BinaryNumber with a number of bits where
 *         1 <= number of bits <= q1rangeInput.value.
 */
function createNewBinNum()
{
  var bitValRndNum = 0;
  var numBitRndNum = 0;
  var binNumArr = [];
  var newBinNum;

  // generate a random number for the number of bits
  numBitRndNum = generateRandomInteger(1, q1rangeInput.value);

  // ppulate the array with bit values
  for (var bitPos = 0; bitPos < numBitRndNum; bitPos++)
  {
    bitValRndNum = generateRandomInteger(0, 1);
    binNumArr.push(bitValRndNum);
  }

  newBinNum = new BinaryNumber(numBitRndNum, binNumArr);

  return newBinNum;
}

/**
 * Returns if the input valid or not.
 *
 * A valid input is one that is not a combination of letters and a valid binary
 * number.
 *
 * @return true if the input is valid, false otherwise.
 */
function checkValidInput()
{
  var ans = Number(q2ansInput.value);
  // console.log(parseInt("a1fwaf"));

  if (isNaN(ans))
  {
    q2feedbackMsg.innerHTML = "Not a number.";
    q2feedbackMsg.style.display = "block";

    return false;
  }
  else
  {
    // check if input is valid binary number
    ansArray = q2ansInput.value.split("");
    // console.log("ansArray: " + ansArray);
    for (var num = 0; num < ansArray.length; num++)
    {
      if (parseInt(ansArray[num]) > 1)
      {
        // console.log("Working");
        q2feedbackMsg.innerHTML = "Not a valid binary number.";
        q2feedbackMsg.style.display = "block";

        return false;
      }
    }
  }

  return true;
}

function checkQ2(binNum)
{
  if (checkValidInput())
  {
    var strBinNumArray = q2ansInput.value.split("");
    var intBinNumArray = [];

    for (var idx = 0; idx < strBinNumArray.length; idx++)
    {
      intBinNumArray.push(parseInt(strBinNumArray[idx]));
    }

    userBinNum = new BinaryNumber(intBinNumArray.length, intBinNumArray);
    deciUserBinNum = userBinNum.convToDecimal();
    // console.log("deciUserBinNum: " + deciUserBinNum);

    if (deciUserBinNum === dNum)
    {
      q2feedbackMsg.innerHTML = "Confirm";
      q2feedbackMsg.style.color = "green";
      // console.log("Confirm");
    }
    else
    {
      q2feedbackMsg.innerHTML = "You are a FAILURE";
      q2feedbackMsg.style.color = "red";
      // console.log("FAILURE");
    }
    // console.log("Hetr");

    q2feedbackMsg.style.display = "block";
  }
}

/**
 * Checks if the user's answer is correct, and updates the display of the
 * feedback message appropriately.
 *
 * If the user's answer is correct, the feedback message will display a green
 * message that says "Confirm".
 *
 * If the user's answer is incorrect, the feedback messafe will display a red
 * message that says "You are a FAILURE".
 */
function checkAnswer()
{
  checkValidInput();
  var userAns = q1ansInput.value;
  var corrAns = bNum.convToDecimal();

  if (userAns == corrAns)
  {
    q1feedbackMsg.innerHTML = "Confirm";
    q1feedbackMsg.style.color = "green";
    // console.log("Confirm");
  }
  else
  {
    q1feedbackMsg.innerHTML = "You are a FAILURE";
    q1feedbackMsg.style.color = "red";
    // console.log("You are a FAILURE");
  }

  q1feedbackMsg.style.display = "block";
}

/**
 * Updates the appearance of the changebable features of the webpage.
 *
 * Changeable features:
 * 1. Binary number that is being converted to decimal
 */
function display()
{
  numInQues.innerHTML = bNum;
  deciNumInQues.innerHTML = dNum;
}
