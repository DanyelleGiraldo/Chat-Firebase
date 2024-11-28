import Chatlist from "./chatList/chatlist"
import Userinfo from "./userinfo/userinfo"
import "./list.css"

const List = () => {
  return (
    <div className='list'>
      <Userinfo></Userinfo>      
      <Chatlist></Chatlist>
    </div>
  )
}

export default List