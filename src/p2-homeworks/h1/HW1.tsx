import React, {useState} from 'react'
import {Message} from "./Message";
import {AlternativeMessage} from "./AlternativeMessage";

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {

    const [messageData, setMessageData] = useState<MessageDataType[]>([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    }])

    const addMessage = (newMessage: string) => {
        let newMessageData: MessageDataType = {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Some Name',
            message: newMessage,
            time: '22:00',
        }
        setMessageData([...messageData, newMessageData])
    }

    return (
      <div>
          <hr/>
          homeworks 1

          {/*should work (должно работать)*/}
          {messageData.map((m,i) => {
              return (
                <Message key={i}
                  avatar={m.avatar}
                  name={m.name}
                  message={m.message}
                  time={m.time}
                />
              )
          })}


          <hr/>

          <AlternativeMessage
            addMessage={addMessage}/>

          <hr/>
      </div>
    )
}

export default HW1
