import { Friend,IsOnline} from "./FriendListItem.styled"


export const FriendItem = ({avatar,name,isOnline,id}) => {
    return (
        <Friend key={id}>
            <IsOnline isOnline={isOnline} >{ isOnline}</IsOnline>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{ name}</p>
        </Friend>
    );
}

