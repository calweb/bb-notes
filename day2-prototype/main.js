function TestConstructor() {

  // defining method within Constructor body is less performant
  // because you are making a copy of said method for each instance you create
  this.fib = function() {
    var i;
    var fib = [];
    var fibArray = [];
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=1000; i++) {

        fib[i] = fib[i-2] + fib[i-1];
        fibArray.push(fib[i]);
    }

  };
}

// creating your method using prototype is more performance because
// you are not copying this method for each instance, instead it is a reference
// to this method on the constructor.
TestConstructor.prototype.perfFib = function() {
  var i;
  var fib = [];
  var fibArray = [];
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=1000; i++) {

      fib[i] = fib[i-2] + fib[i-1];
      fibArray.push(fib[i]);
  }
};


var nonProtoTest = function () {
  var nonPrototype = new TestConstructor();
  var nonPrototype1 = new TestConstructor();
  var nonPrototype2 = new TestConstructor();
  var nonPrototype3 = new TestConstructor();
  var nonPrototype4 = new TestConstructor();
  var startNonProto = performance.now();
  _.times(100, function () {
      nonPrototype.fib();
      nonPrototype1.fib();
      nonPrototype2.fib();
      nonPrototype3.fib();
      nonPrototype4.fib();
  });
  var endNonProto = performance.now();
  console.log("Method within function body (milliseconds)",(endNonProto - startNonProto));
};

var protoTest = function () {
  var perfPrototype = new TestConstructor();
  var perfPrototype1 = new TestConstructor();
  var perfPrototype2 = new TestConstructor();
  var perfPrototype3 = new TestConstructor();
  var perfPrototype4 = new TestConstructor();
  var startPerfProto = performance.now();
  _.times(100, function () {
      perfPrototype.perfFib();
      perfPrototype1.perfFib();
      perfPrototype2.perfFib();
      perfPrototype3.perfFib();
      perfPrototype4.perfFib();
  });
  var endPerfProto = performance.now();
  console.log("Method with .prototype (milliseconds) ",(endPerfProto - startPerfProto));
};
// execute tests
nonProtoTest();
protoTest();
