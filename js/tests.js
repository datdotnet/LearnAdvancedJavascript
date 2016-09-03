QUnit.module( "Kế thừa trong JS", function() {
  QUnit.test( "inherit tests", function( assert ) {
    var newMamal = new Mamal('Here is a Mamal');
    assert.ok( newMamal.getName() == "Here is a Mamal", "Passed!" );

    var newCat = new Cat('Bum');
  //equal(==), strictEqual(===)
    assert.equal(newCat.says(), 'Meoo..', 'Giá trị bằng nhau');

    assert.strictEqual(newCat.purr(4),'r-r-r-r','purr function good!')
  //deepEqual : ===(undefined doesn't equal null, 0, or the empty string ("")), so sánh được cả object json,
  // also handles NaN, dates, regular expressions, arrays, and functions
    assert.deepEqual(newCat.getName(), 'Bum says: Meoo..');
  });
});
