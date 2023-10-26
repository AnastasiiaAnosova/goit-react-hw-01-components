import FriendListItem from "components/FriendListItem/FriendListItem";
import css from './styled.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map((friend) => {
                return <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            })}
        </ul>
    )
}

export default FriendList;