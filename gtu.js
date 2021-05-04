Number("0x77") === 0x77; // true
Number("077") === 077; // false
Number(" 12"); // 12
isNaN(" "); // false
+""; // 0
0.1 + 0.2 == 0.3; // false
9007199254740992 + 1 == 9007199254740992; // true
9007199254740992 + 2 == 9007199254740992; // false
0 === +0; // true
+0 === -0; // true
1 / "2"; // 0.5
1 / 0; // infinity
1 / -0; // -infinity
Infinity / 6; // infinity
Infinity / -256; // -infinity
Infinity / Infinity; // NaN
// 0 / 0  infinity
// +true  1
// +false 0
//  + null 0
// + undefined; // Nan
parseInt(".2"); // 0
parseInt("077a"); // 77
parseInt("0x77a"); // 1914
parseInt("I’m the best value - said Infinity."); // NaN
parseFloat("I’m the best value - said Infinity."); //NaN
parseInt("Infinity is the best value!"); // NaN
parseFloat("Infinity is the best value!"); // NaN
parseFloat("12.78ff"); //12.78
