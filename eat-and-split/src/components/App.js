import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false)

  const [friends, setFriends] = useState(initialFriends)

  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleshowAddFriend() {
    setShowAddFriend((s) => !s)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend) {
    setSelectedFriend(curr => curr?.id === friend.id ? null : friend)
    setShowAddFriend(false)
    // setSelectedFriend(friend)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleshowAddFriend}>{!showAddFriend ? 'Add friend' : 'close'}</Button>

      </div>

      {selectedFriend === null ? '' :
        <FormSplitBill selectedFriend={selectedFriend} />
      }
    </div>
  )
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return <ul>
    {friends.map((friend) => <Friend selectedFriend={selectedFriend} onSelection={onSelection} friend={friend} key={friend.id} />)}
  </ul>
}

function Friend({ friend, onSelection, selectedFriend }) {

  const isSelected = (selectedFriend?.id === friend.id)

  return <li className={isSelected ? 'selected' : ''}>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance < 0 &&
      <p className='red'>
        you owe {friend.name} ${Math.abs(friend.balance)}
      </p>}
    {friend.balance > 0 &&
      <p className='green'>
        {friend.name} owes you ${Math.abs(friend.balance)}
      </p>}
    {friend.balance === 0 &&
      <p>
        you and {friend.name} are even
      </p>}

    <Button onClick={() => onSelection(friend)}>{isSelected ? 'Unselect' : 'Select'}</Button>
  </li>
}

function Button({ children, onClick }) {
  return <button className='button' onClick={onClick}>{children}</button>
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(e) {

    e.preventDefault()
    if (!name || !image) return
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0
    };

    onAddFriend(newFriend)

    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
      <label>image URL</label>
      <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ selectedFriend }) {

  const [billValue, setBillValue] = useState(0)
  const [yourExpense, setYourExpense] = useState(0)
  const [billPaidBy, setBillPaidBy] = useState('you')
  return <form className='form-split-bill'>
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>Bill value </label>
    <input type='text' value={billValue} onChange={(e) => setBillValue(Number(e.target.value))}></input>

    <label>your expenses </label>
    <input type='text' value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? yourExpense : Number(e.target.value))}></input>

    <label>{selectedFriend.name} expenses</label>
    <input type='text' disabled value={billValue - yourExpense} />

    <label>Who is paying the bill?</label>
    <select value={billPaidBy} onChange={(e) => setBillPaidBy(e.target.value)}>
      <option value='you'>you</option>
      <option value='friend'>{selectedFriend.name}</option>
    </select>

    <Button>Split Bill</Button>
  </form>
}