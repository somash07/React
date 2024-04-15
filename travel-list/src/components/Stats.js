export function Stats({ items }) {
  if (!items.length) return <em>Start adding items to packing list</em>;

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return <footer className='stats'>
    {(percentage === 100) ? 'you got everything ready to go ✈️' :
      `you have ${numItem} items on your list and youve already packed ${numPacked} items(${percentage}%)`}
  </footer>;
}
