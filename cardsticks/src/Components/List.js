import { useEffect,useState } from 'react';
import { db } from './Appbar/ButtonWithDialog/firebase_config';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';

const MyList = () => {
    const [node,setNode] = useState([]);
    useEffect(() => {
        getNotes();
    }, []); // blank[] to run it on startup

    // fetch notes from firebase
    const getNotes = () => {
        db.collection("notes").orderBy('time','desc').onSnapshot((query) => {
            setNode(
                query.docs.map((el) => ({
                    id: el.id,
                    todo: el.data().work,
                    isCompleted: el.data().isCompleted,
                    timeStamp: el.data().time,
                }))
            );
        })
    }
    

    return (node.map((item) =>{
        console.log({item});
    function handleToggle() {
        db.collection("notes").doc(item.id).update({
            isCompleted: !item.isCompleted,
        })
    }
    // var time = new Date((item.timeStamp.seconds)*1000);
    
    function deleteNode() {
        db.collection("notes").doc(item.id).delete();
    }
    function getRandomColor()
    {
        var letters="0123456789ABCDEF";
        
        var color='#';
        for(var i=0;i<6;i++)
        {
            color+=letters[Math.floor(Math.random()*16)];
    
        }
        return color;
    }

const styles = {
    border: "solid", 
    borderWidth: "0px 0px 2px 0px",
    borderBottomColor: getRandomColor(),
    marginBottom: "20px"
};
        return (
                <ListItem 
                    alignItems="flex-center" 
                    style={styles}>
                    <ListItemText 
                        primary={item.todo} 
                        id= {item.id}
                        disableTypography={false}
                        secondary={(item.isCompleted? "Completed ✅" : "Pending ❌")}/>
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onClick={handleToggle}
                            checked={item.isCompleted}
                            inputProps={{ 'aria-labelledby': item.id }}
                            color="primary"
                        />
                        <IconButton 
                        edge="end" 
                        aria-label="delete" 
                        onClick={deleteNode}
                        p={20} >
                          <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
        );
    
        }));
}
export default MyList;