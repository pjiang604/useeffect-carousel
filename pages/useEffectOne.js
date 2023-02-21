import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    }) //without the comma + square brackets, this useEffect will run infinitely and crash the page

    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav}>
                <Link className={styles.link} Link href="/">Home</Link>
                </div>
                <div className={styles.body}>
                    <div>
                        useEffectOne
                    </div>
                    <div className={styles.number}>
                        {number}
                    </div>
                </div>
            </div>


        </>
    )
}