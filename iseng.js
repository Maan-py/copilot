//make a javascript looping octagon
var x = 0;
while (x < 8) {
  x = x + 1;
  var y = 0;
  while (y < x) {
    y = y + 1;
    print("*");
  }
  print("\n");
}
