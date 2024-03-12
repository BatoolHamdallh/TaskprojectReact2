import { useEffect, useState } from "react";
import styles from "./Home.module.css";
function Home() {
  const [categ, setCateg] = useState([]);

  const getData = async () => {
    const responce = await fetch(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    const data = await responce.json();
    const categ = data.categories;
    setCateg(categ);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.categs}>
        {categ.map((categories) => (
          <div className={styles.categ} key={categories._id}>
            <img src={categories.image.secure_url} alt="*" />
          </div>
        ))}{" "}
      </div>
    </>
  );
}

export default Home;
