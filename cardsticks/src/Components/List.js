import { useEffect,useState } from 'react';
import { db } from './Appbar/ButtonWithDialog/firebase_config';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';

const MyList = () => {
    const [node,setNode] = useState([]);
    useEffect(() => {
        getNotes();
    }, []); // blank[] to run it on startup

    // fetch notes from firebase
    const getNotes = () => {
        db.collection("notes").onSnapshot((query) => {
            setNode(
                query.docs.map((el) => ({
                    id: el.id,
                    todo: el.data().work,
                    isCompleted: el.data().isCompleted,
                }))
            );
        })
    }
    

    return (node.map((item) =>{

        
    function handleToggle() {
        db.collection("notes").doc(item.id).update({
            isCompleted: !item.isCompleted,
        })
    }
        return (
                <ListItem alignItems="flex-center">
                    <ListItemText 
                        primary={item.todo} 
                        id= {item.id}
                        secondary={item.isCompleted? "Completed ✅" : "Pending ❌"}/>
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onClick={handleToggle}
                            checked={item.isCompleted}
                            inputProps={{ 'aria-labelledby': item.id }}
                            color="primary"
                        />
                    </ListItemSecondaryAction>
                </ListItem>
        );
    
        }));
}
export default MyList;