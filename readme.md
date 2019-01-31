# _Beep Boop_

#### _An exercise in arrays and looping. Started on January 25th, 2019._

#### By _**Joe Pritchett**_

## Description

This project takes an inputted number, converts that number into an array containing the input number and every other number less than it until 0. It then converts that array into a string, and adds spaces after every comma (because it looks better and allows the string to wrap inside of its container). The string is then sent through a series of functions that identify any number containing a "3", "2", or "1", and converts those numbers into phrases.

This process scans for all the "3"s first, so numbers like "300" and "123" will both be converted to the same phrase because both _contain_ a "3". The process then scans for all "2"s, then all "1"s.

After the scanning is complete, and all applicable numbers have been converted to the correct phrases, the string is then sent back to the UI logic and displayed on the page.

Theoretically there is no limit on the size of the number you can submit, though the time it takes to process increases as you enter larger numbers. The highest number I tested was 5,000 and that took about 48 seconds to complete on my personal computer.

This code is not as dry as it could be. Likely the three separate number finder functions could be compressed into just one looping function. The same can probably be said about the slicing function, as it repeats parts of its own code.

### Specs

* _The program returns a range of numbers from the users inputted number to 0 "Input: 3, Output: 3,2,1,0"_
* _The program replaces the number 3 with a phrase "Input: 3, Output: 'phrase',2,1,0"_
* _The program does the same with the numbers 2 and 1 "Input: 3, Output: 'phrase3','phrase2','phrase1',0_
* _The program does the same with any number containing a 3, rather than just for the number "3" "Input: 13, Output: 'phrase3', 12, 11...4,'phrase3','phrase2','phrase1',0"_
* _The program does the same for any number containing a 2 or a 1, with 3 being the priority, followed by 2, then 1 "Input: 23, Output: 'phrase3','phrase2','phrase2',etc.._

## Setup/Installation Requirements

The easy way
* _Click [Here](https://joepritch.github.io/beeboop)_


The advanced way
* _Clone this Repo_
* _Open 'index.html' with your browser_

## Known Bugs

Entering anything that is not a number will cause the site to crash.

## Support and contact details

_If you would like to get in touch with me regarding this project, or any other projects from my repos, email me @ joempritchett@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, BootStrap, jQuery, and as always, Atom and GitBash_

### MIT License

Copyright (c) 2016 **_Joe Pritchett_**
