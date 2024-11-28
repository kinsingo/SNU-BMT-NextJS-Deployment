import styles from "../reviews.module.css";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function SingleReview({ img, name, location, comment }) {
  return (
    <div className={styles["single-testimonial-box"]}>
      <div className={styles["testimonial-description"]}>
        <div className={styles["testimonial-info"]}>
          <div className={styles["testimonial-img"]}>
            <Image
              src={img} // img 변수에 이미지 경로가 들어있다고 가정
              alt="clients"
              width={80}
              height={80}
            />
          </div>
          <div className={styles["testimonial-person"]}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="secondary">
              {location}
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div>
        <div className={styles["testimonial-comment"]}>
        <Typography variant="subtitle1" color="secondary">{comment}   </Typography>
        </div>
      </div>
    </div>
  );
}
