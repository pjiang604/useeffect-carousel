import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectThree.module.css'

export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number]) //this means whenever the number changes, trigger this useEffect. It will set the new value. it will ALSO trigger once on page load, so when opening this page, we should see 0.

    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Link className={styles.link} href="/">Home</Link>
                </div>
                <div className={styles.body}>
                    <div>
                        <button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me</button> {/*clicking the button will change the number by 1 */}
                    </div>
                    <div>
                        useEffectThree
                    </div>

                    <div className={styles.number}>
                        {value}
                    </div>
                </div>
            </div>
        </>
    )
}