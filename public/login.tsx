import PropTypes from 'prop-types';
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'



export function Login({
  loggedin = false,
}) {

  const router = useRouter();
  
  function onLogout(){
    window.localStorage.removeItem("token")
    router.push('/');
  }
  
  if(typeof window !== 'undefined'){
    if(window.localStorage.getItem("token")){
      loggedin = true;
      
    }
    else loggedin = false;
  }
  

  if (loggedin) {
    return (
      <>
        <p className={styles.footers}>
          Skráður inn sem <strong>{window.localStorage.getItem('name')}</strong>
        </p>
        <button className={styles.footers} onClick={onLogout}>Útskrá</button>
      </>
    );
  }

  return (
    <>
      <p className={styles.back}>
        <a href="/login">Innskráning</a>
      </p>
      <p className={styles.back}>
        <a href="/register">Nýskráning</a>
      </p>
    </>
  );
}

Login.propTypes = {
  loggedin: PropTypes.bool,
  onRegister: PropTypes.func,
  name: PropTypes.string,
};