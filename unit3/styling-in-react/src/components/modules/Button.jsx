import styles from './button.module.css';
// css modules class selectors have a local scope (not global)

function Button({ buttonText }) {
  return (
    <button className={styles.btn}>{buttonText}</button>
  )
} 

export default Button