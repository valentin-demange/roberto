import styles from './MessageRoberto.module.css';


export const MessageRoberto = ({message} : {message:string}) => {
    return (
        <div className={styles.messageContainer}>
            {message}
        </div>
    );
}