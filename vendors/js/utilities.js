/**
 * Functions and that are used commonly for the webpages.
 *
 * This file contains functions that are commonly used in the webpages. They
 * are contained in one file to make for easy access to them.
 *
 * @author Matthew Mentis-Cort
 * Date last edited: December 28, 2021
 */

 /**
 * Returns a random integer between lower and upper, inclusive.
 *
 * @param  lower the lowest integer this function can return.
 *         Precondiiton: lower must be an integer (can be negative)
 * @param  upper the highest integer this function can return.
 *         Precondition: upper must be an integer (can be negative)
 * @return       a random integer where lower <= integer <= upper.
 */
function generateRandomInteger(lower, upper)
{
	//R = parseInt (rnd * (upper - (lower - 1)) + lower //
	var multiplier = upper - (lower - 1);
	var rnd = (Math.floor(Math.random() * multiplier)) + lower;

	return rnd;
}

function toggleDisplay(item)
{
	if (item.style.display == "block")
	{
		item.style.display = "none";
	}
	else
	{
		item.style.display = "block";
	}
}

function formChoiceSelected()
{
	for (i = 0; i < formOne.getElementsByTagName("input").length; i++)
	{
		if (formOne.getElementsByTagName("input")[i].checked === true)
		{
			return true;
		}
	}

	return false;
}

function deselectRadioButtonsInForm(inputForm)
{
	for (i = 0; i < inputForm.getElementsByTagName("input").length; i++)
	{
		inputForm.getElementsByTagName("input")[i].checked = false;
	}
}
