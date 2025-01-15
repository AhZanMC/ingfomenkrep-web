import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Join Our Community",
    imgSrc: require("@site/static/img/logo.webp").default,
    description: (
      <>
        Yok join komunitas Ingfo Menkrep sekarang juga, jangan malu-malu kok. Admin gak gigit kamu<br />
        Komunitas ini terbuka untuk semua orang
      </>
    ),
    linkbutton: "/community",
    tulisan_ditombol: "Join Sekarang",
  },
  {
    title: "AFDMC",
    imgSrc: require("@site/static/img/logo-afdmc.webp").default,
    description: (
      <>
        Sini, kalo kamu cari mengkrep 🗿<br />
        Yok diborong jangan malu-malu lohhh<br />
        Free - No Ads - Easy - No PW
      </>
    ),
    linkbutton: "/docs/category/afdmc",
    tulisan_ditombol: "Klik Disini",
  },
  {
    title: "Store",
    imgSrc: require("@site/static/img/ahzanmcstore.webp").default,
    description: (
      <>
        Lagi cari pixelart dan custom skin minecraft dengan harga murah meriah, yok ke AhZanMC Store aja lohhh. GASKAN SEBELUM KEHABISAN
      </>
    ),
    linkbutton: "https://store.ahzanmc.my.id",
    tulisan_ditombol: "Klik Disini",
  },
];


function Feature({ imgSrc, title, description, linkbutton, tulisan_ditombol }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {imgSrc && <img src={imgSrc} alt={title} className={styles.featureImg} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div>
          <a className="button button--outline button--secondary" href={linkbutton}>
            {tulisan_ditombol}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
