package hello;
/*
**************************
***NAME:Fuad Animashaun***
***  ST NO: B00103457  ***
**************************

Part	2	– Java	Revision	- Iteration and	Arrays

Using	TextPad	create	a	class	called	Lab1Part2.	Write	a	main	method and	in	the
main	 method	 create	 an	 array	 of	 characters	 (type	 char)	 composed	 of	 all	 the
letters	 in	 your	 surname.	 Create	 a	for	 loop to	 print	 out	 all	 of	 the	 ASCII	 values
associated	with	EACH	character	in	your	surname	(e.g.,	R	=	125,	a	=	97	etc.)

Required	activities	and	marking	guideline:

• Write	main	method
• Create	array
• Fill	the	array
• Write	for loop	to	print	ASCII	values
*/


//import section
import java.util.Scanner;
import java.util.Arrays;

public class Lab1Part2 //change the class name each time
{

	public static void main(String[] args)
	   {
		   char arr[] = {'a', 'n', 'i', 'm', 'a', 's', 'h', 'a', 'u', 'n'};

			ASCIISurname(arr);

		}//end of main

		public static char ASCIISurname(char[] arr){
		for(int i = 0; i < 255; i++)
		  {
		    System.out.println ("The ASCII value of " + (arr[i]) + " = " + (int)arr[i]);

		  }//end of for loop

			return ASCIISurname(arr);
			}//end of method

}//end of class