
import {PrettyChatWindow} from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow 
            projectId='b35784ea-d7ef-47ed-814e-c3f7e93e118f'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
    </div>
    )
    
}


export default ChatsPage