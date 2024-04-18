import { useState } from "react";
import { Friend } from "./Friend";

export function FriendsList({ friends, onSelection, selectedFriend }) {

  const [deletedFriends,setDeletedFriend]=useState([])

  function handleDelete(friendid){
    setDeletedFriend((df)=>[...df,friendid])
  }
  
  const filteredFriends= friends.filter((friend)=> !deletedFriends.includes(friend.id))
  return <ul>
    {
     filteredFriends
     .map((friend) => <Friend selectedFriend={selectedFriend} onDelete={handleDelete} onSelection={onSelection} friend={friend} key={friend.id} />)
    }
  
  </ul>;
}
