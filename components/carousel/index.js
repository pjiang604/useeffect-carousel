import Image from "next/image";
import { useState } from "react";
import styles from "components/carousel/carousel.module.css"

export default function Carousel() {

    const [img, setImg] = useState(0); //start the image at 0

    const changeImage = (change) => { //this means, onChange, if someone clicks either of the two arrow buttons below, then run the if statement. 
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5)
            }
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);

            if (img == 5) {
                setImg(0)
            }
            console.log(img);
        }
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.body} style={{
                    backgroundImage: "url(/carousel-images/" + img + ".jpg)", //concatonation, it's inserting the useState image number, which matches with the image names.
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    width: 500,
                    height: 300

                }}>
                    <Image className={styles.imageL}
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={100}
                        height={100}
                        onClick={() => changeImage("backward")}
                    />

                    <Image className={styles.imageR}
                        src={"/icons/rightArrow.png"}
                        alt={"/icons/rightArrow.png"}
                        width={100}
                        height={100}
                        onClick={() => changeImage("forward")}
                    />

                </div>
            </div>

        </>
    )
}