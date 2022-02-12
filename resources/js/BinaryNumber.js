/**
 * BinaryNumber class.
 *
 * This file contains the BinaryNumber class.
 *
 * @author Matthew Mentis-Cort
 * Date last edited: February 9, 2022
 */

/**
 * A class representing a BinaryNumber.
 *
 * A BinaryNumber is an array of numbers, meant to represent the bits of a
 * binary number. Each of the positions of the array will be either a 0 or a
 * 1. A BinaryNumber has an attribute called numBits, which describes how many
 * bits the BinaryNumber has.
 */
class BinaryNumber
{
  #numBits = 0;
  #bitValues = [];

  /**
   * Creates a Binary Number with numbits bits and an array of bit values
   * given by bitArray.
   *
   * @param numBits  an integer that represents the number of bits in the
   *                 BinaryNumber.
   *
   * @param bitArray an array that represents the values of the bits in the
   *                 BinaryNumber.
   */
  constructor(numBits, bitArray)
  {
    this.#numBits = numBits;
    this.#bitValues = bitArray;
  }

  // getters

  // setters

  // action methods
  /**
   * Returns the decimal equivalent of this BinaryNumber.
   *
   * @return the decimal equivalent of this BinaryNumber.
   */
  convToDecimal()
  {
    var deciNum = 0;

    for (var i = 0; i < this.#bitValues.length; i++)
    {
      deciNum += Math.pow(2, this.#bitValues.length - 1 - i) * this.#bitValues[i];
    }

    return deciNum;
  }

  // toString
  /**
   * Returns the string representation of this BinaryNumber.
   *
   * The format of the string representation is printing all the indexes of
   * this.#bitValues out. For example, the string representation of the
   * BinaryNumber with this.#bitValues equal to [1, 0, 1, 0] would be "1010".
   *
   * @return the string representation of this BinaryNumber.
   */
  toString()
  {
    var output = "";

    for (var i = 0; i < this.#bitValues.length; i++)
    {
      output += this.#bitValues[i] + "";
    }

    return output;
  }
}
