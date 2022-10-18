import { data } from "../data/data";

const Friends = () => {
  const friendsItem = data.map((friendItem) => (
    <li key={friendItem.id}>
      <p>
        <b>{friendItem.name}</b>
        {" " + friendItem.profession}
        {", " + friendItem.age + " years old"}
      </p>
    </li>
  ));

  return friendsItem;
};

export default Friends;
