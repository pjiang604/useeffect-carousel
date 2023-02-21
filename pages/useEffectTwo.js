import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, []) //this comma + square bracket makes it so that useEffect only runs once per page load


    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav} >
                    <Link className={styles.link} href="/">Home</Link>
                </div>
                <div className={styles.body}>
                    <div>
                        UseEffectTwo
                    </div>
                    <div className={styles.number}>
                        {number}
                    </div>
                </div>
            </div>
        </>
    )
}