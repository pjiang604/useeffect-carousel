import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from "../styles/CarouselPage.module.css"

export default function CarouselPage() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Link className={styles.link} href="/">Home</Link>
                </div>
                <div className={styles.body}>
                    <Carousel />
                </div>
            </div>

        </>
    )
}