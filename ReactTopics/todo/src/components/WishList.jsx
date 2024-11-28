function WishList({ wishlist, setWishList }) {
  function handleDelete(movie) {
    setWishList((wishlist) =>
      wishlist.filter(
        (wishlistItem) => wishlistItem.selectedMovieId !== movie.selectedMovieId
      )
    );
  }
  return (
    <ul className="flex w-full flex-col gap-4 items-center">
      {wishlist.map((wishlistItem) => (
        <WishListItem
          wishlistItem={wishlistItem}
          key={wishlistItem.title}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

function WishListItem({ wishlistItem, handleDelete }) {
  return (
    <li className="flex justify-between gap-5 bg-slate-200 w-[90%] p-5 rounded-md shadow-lg ">
      <img
        src={wishlistItem.poster}
        alt="movie poster"
        className="h-20 rounded-md"
      />
      <div className="flex flex-col gap-3">
        <h1>{wishlistItem.title}</h1>
        <h1>{wishlistItem.genre}</h1>
      </div>
      <div className="flex gap-4">
        <button className="item-end">mark as watched</button>
        <button
          className="bg-red-400 p-4 rounded-md h-15"
          onClick={() => handleDelete(wishlistItem)}
        >
          delete
        </button>
      </div>
    </li>
  );
}
export default WishList;
