import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import qrcode from "../../public/image-qr-code.png";

export default function Home() {
  return (
    <div className={styles.container}>
      {/**Because Matt FORCED me to do the CSS classes by hand and not rely on Tailwind */}
      <div className={styles.box}>
        <div>
          <div className={styles.qrCodeBox}>
            <Image src={qrcode} alt="QR Code" className={styles.qrCodeImage} />

            <p className={styles.qrCodeTitle}>
              Improve your front-end skills by building projects
            </p>
            <p className={styles.qrCodeText}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>

            <div className={styles.attribution}>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a href="https://github.com/roesorcerer">Rowan Stratton</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
