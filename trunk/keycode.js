var keyCodeList = [];

keyCodeList[8] = { keyCode: 8, name: 'Backspace' };
keyCodeList[9] = { keyCode: 9, name: 'Tab' };
keyCodeList[12] = { keyCode: 12, name: 'Clear' };
keyCodeList[13] = { keyCode: 13, name: 'Enter' };
keyCodeList[16] = { keyCode: 16, name: 'Shift' };
keyCodeList[17] = { keyCode: 17, name: 'Ctrl' };
keyCodeList[18] = { keyCode: 18, name: 'Alt' };
keyCodeList[20] = { keyCode: 20, name: 'Caps Lock' };
keyCodeList[27] = { keyCode: 27, name: 'Esc' };
keyCodeList[32] = { keyCode: 32, name: 'Spacebar' };
keyCodeList[33] = { keyCode: 33, name: 'Page Up' };
keyCodeList[34] = { keyCode: 34, name: 'Page Down' };
keyCodeList[35] = { keyCode: 35, name: 'End' };
keyCodeList[36] = { keyCode: 36, name: 'Home' };
keyCodeList[37] = { keyCode: 37, name: 'Left' };
keyCodeList[38] = { keyCode: 38, name: 'Up' };
keyCodeList[39] = { keyCode: 39, name: 'Right' };
keyCodeList[40] = { keyCode: 40, name: 'Down' };
keyCodeList[45] = { keyCode: 45, name: 'Insert' };
keyCodeList[46] = { keyCode: 46, name: 'Delete' };
keyCodeList[47] = { keyCode: 47, name: 'Help' };
keyCodeList[48] = { keyCode:48, name:'0' };
keyCodeList[49] = { keyCode:49, name:'1' };
keyCodeList[50] = { keyCode:50, name:'2' };
keyCodeList[51] = { keyCode:51, name:'3' };
keyCodeList[52] = { keyCode:52, name:'4' };
keyCodeList[53] = { keyCode:53, name:'5' };
keyCodeList[54] = { keyCode:54, name:'6' };
keyCodeList[55] = { keyCode:55, name:'7' };
keyCodeList[56] = { keyCode:56, name:'8' };
keyCodeList[57] = { keyCode:57, name:'9' };
keyCodeList[65] = { keyCode:65, name:'A' };
keyCodeList[66] = { keyCode:66, name:'B' };
keyCodeList[67] = { keyCode:67, name:'C' };
keyCodeList[68] = { keyCode:68, name:'D' };
keyCodeList[69] = { keyCode:69, name:'E' };
keyCodeList[70] = { keyCode:70, name:'F' };
keyCodeList[71] = { keyCode:71, name:'G' };
keyCodeList[72] = { keyCode:72, name:'H' };
keyCodeList[73] = { keyCode:73, name:'I' };
keyCodeList[74] = { keyCode:74, name:'J' };
keyCodeList[75] = { keyCode:75, name:'K' };
keyCodeList[76] = { keyCode:76, name:'L' };
keyCodeList[77] = { keyCode:77, name:'M' };
keyCodeList[78] = { keyCode:78, name:'N' };
keyCodeList[79] = { keyCode:79, name:'O' };
keyCodeList[80] = { keyCode:80, name:'P' };
keyCodeList[81] = { keyCode:81, name:'Q' };
keyCodeList[82] = { keyCode:82, name:'R' };
keyCodeList[83] = { keyCode:83, name:'S' };
keyCodeList[84] = { keyCode:84, name:'T' };
keyCodeList[85] = { keyCode:85, name:'U' };
keyCodeList[86] = { keyCode:86, name:'V' };
keyCodeList[87] = { keyCode:87, name:'W' };
keyCodeList[88] = { keyCode:88, name:'X' };
keyCodeList[89] = { keyCode:89, name:'Y' };
keyCodeList[90] = { keyCode:90, name:'Z' };
keyCodeList[106] = { keyCode: 106, name: '*' };
keyCodeList[107] = { keyCode: 107, name: '+' };
keyCodeList[108] = { keyCode: 108, name: 'Enter' };
keyCodeList[109] = { keyCode: 109, name: '-' };
keyCodeList[110] = { keyCode: 110, name: '.' };
keyCodeList[111] = { keyCode: 111, name: '/' };
keyCodeList[112] = { keyCode:112, name:'F1' };
keyCodeList[113] = { keyCode:113, name:'F2' };
keyCodeList[114] = { keyCode:114, name:'F3' };
keyCodeList[115] = { keyCode:115, name:'F4' };
keyCodeList[116] = { keyCode:116, name:'F5' };
keyCodeList[117] = { keyCode:117, name:'F6' };
keyCodeList[118] = { keyCode:118, name:'F7' };
keyCodeList[119] = { keyCode:119, name:'F8' };
keyCodeList[120] = { keyCode:120, name:'F9' };
keyCodeList[121] = { keyCode:121, name:'F10' };
keyCodeList[122] = { keyCode:122, name:'F11' };
keyCodeList[123] = { keyCode:123, name:'F12' };
keyCodeList[186] = { keyCode: 186, name: ';' };
keyCodeList[187] = { keyCode: 187, name: '=' };
keyCodeList[188] = { keyCode: 188, name: ',' };
keyCodeList[189] = { keyCode: 189, name: '-' };
keyCodeList[190] = { keyCode: 190, name: '.' };
keyCodeList[191] = { keyCode: 191, name: '/' };
keyCodeList[192] = { keyCode: 192, name: '`' };
keyCodeList[219] = { keyCode: 219, name: '[' };
keyCodeList[220] = { keyCode: 220, name: '\\' };
keyCodeList[221] = { keyCode: 221, name: ']' };
keyCodeList[222] = { keyCode: 222, name: '\'' };

function keyCodeToShowName(keyCode) {
  var keyCodes = keyCode.split('+');
  for (var i = 0; i < keyCodes.length; i++) {
    keyCodes[i] = keyCodeList[keyCodes[i]].name;
  }
  return keyCodes.join(' + ');
}
