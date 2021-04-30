import styles from "./example1Form.module.scss";
import FormRiderjs from "../../node_modules/formriderjs";

import {useEffect} from 'react';

export default function Example1Form() {



  useEffect(() => {
    new FormRiderjs();
  })


  return (
    <form data-frform = {"example1"} className={styles.form}>
      <div className={styles.title}>
        A subscribe form live testing <span className={styles.greenCircle} />
      </div>
      <div className={styles.subTitle}>This form is only for testing :)</div>
      <div className={styles.formInputsContainer}>
        <div>
          <input
            data-name = "username"
            className={styles.textInput}
            type={"text"}
            placeholder={"Username (required)"}
          />
        </div>
        <div>
          <input
            data-name = "password"
          
            className={styles.textInput}
            type={"text"}
            placeholder={"Password (required)"}
          />
        </div>
        <div>
          <input
            className={styles.submitButton}
            type={"submit"}
            value={"Test form"}
          />
        </div>
      </div>
    </form>
  );
}
