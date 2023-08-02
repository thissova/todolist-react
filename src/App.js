import './App.module.css';
import Todolist from "./Todolist/Todolist";
import styles from "./App.module.css"

function App() {
    return (
        <div className={styles.App}>
            <Todolist />
        </div>
    );
}

export default App;
