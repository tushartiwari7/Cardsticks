import { useEffect,useState } from 'react';
import { db } from './Appbar/ButtonWithDialog/firebase_config';
    


const List = () => {
    const [node,setNode] = useState([]);
    useEffect(() => {
        getNotes();
    }, []); // blank[] to run it on startup
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
    var list = node.map(item =><h3>{item.todo}</h3>);
    console.log({list});
    return (list);
}
export default List;