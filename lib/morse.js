decodeMorse = function(morseCode){
   return morseCode.trim()
   							   .split('   ')
   							   .map(a => 
   							     a.split(' ')
   							      .map(a => 
   							      	MORSE_CODE[a]).join(''))
   							   .join(' ');
}