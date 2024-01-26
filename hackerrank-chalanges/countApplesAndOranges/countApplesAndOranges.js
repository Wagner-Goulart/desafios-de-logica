function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const initialPosition = s;
  const finalPosition = t;
  const appleTreeDistance = a;
  const orangeTreeDistance = b;

  const filterInRangeFruits = (fruit) => {
    return fruit.filter(
      (distance) => distance >= initialPosition && distance <= finalPosition
    ).length;
  };

  const applesFallingDistance = apples.map(
    (apple) => apple + appleTreeDistance
  );

  const orangesFallingDistance = oranges.map(
    (orange) => orange + orangeTreeDistance
  );

  console.log(filterInRangeFruits(applesFallingDistance));

  console.log(filterInRangeFruits(orangesFallingDistance));
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
