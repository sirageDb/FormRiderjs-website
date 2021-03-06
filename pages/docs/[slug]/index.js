import matter from "gray-matter";
import SideNav from "../../../components/sideNav/Sidenav";
import Reactmarkdown from "react-markdown";
import { useRouter } from "next/router";
import styles from "../../../pages/docs.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useEffect, useRef, useState } from "react";
import Meta from "../../../components/meta/Meta";


function Docs({ data }) {
  //extracting real data from data using gray-matter package
  const realData = data.map((docs) => matter(docs));
  //then we map over these real data to get what is inside this freaking object
  const unSortedDocs = realData.map((docs) => docs.data);

  //sorting docs
  const docs = unSortedDocs.sort((a, b) => {
    return a.order - b.order;
  });

  const router = useRouter();
  const { slug } = router.query;

  let docsToBeShown;
  realData.forEach((element) => {
    if (element.data.slug === slug) {
      docsToBeShown = element;
    }
  });

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={atomOneDark}
          language={language}
          children={value}
        />
      );
    },
  };


  useEffect(() => {

    if (window.screen.width > 481) {
      isOpenedBurgerIcon ? setOpenBurgerIcon(!isOpenedBurgerIcon) : setOpenBurgerIcon(!isOpenedBurgerIcon)
      isOpenedSideNav ? setIsOpenedSideNav(!isOpenedSideNav) : setIsOpenedSideNav(!isOpenedSideNav);
    }
  }, []);


  //TODO if sidenav is closed in a smallscreen, then switched to a big screen => sidenav will stay closed unless back to small screen to switch the state
  const burgerIconRef = useRef(null);
  const [isOpenedBurgerIcon, setOpenBurgerIcon] = useState(true);
  const [isOpenedSideNav, setIsOpenedSideNav] = useState(false);
  const toggleSideNav = () => {
    isOpenedBurgerIcon
      ? burgerIconRef.current.src = "/burgerIconClosed.svg"
      : burgerIconRef.current.src = "/burgerIconOpened.svg";
    setOpenBurgerIcon(!isOpenedBurgerIcon);
    setIsOpenedSideNav(!isOpenedSideNav);
  }




  return (
    <div>
      <Meta
        title={"FormRider.js " + docsToBeShown.data.title}
        description={docsToBeShown.data.titleExplained}
        keywords={"FormRider.js, Sirage, AL, dbiyat, javascript, form, validation, library, iLoveSemicolons, digitalmine.dev, digital, mine, i, ilove, semicolons"}
      />
      <SideNav docs={docs} currentlyOpenedSlug={slug} isOpened={isOpenedSideNav} />
      <div onClick={toggleSideNav} className={styles.sideNavButton}>
        <img ref={burgerIconRef} className={styles.burgerIcon} src={"/burgerIconOpened.svg"} />
      </div>
      <div className={styles.pageLayout}>
        <main className={styles.mainLayout}>
          <div className={styles.titleContainer}>
            <img
              alt={"form rider brand"}
              src={"/brand.png"}
              className={styles.brand}
            />
            <h1 className={styles.title}>{docsToBeShown.data.title}</h1>
          </div>
          <h3>{docsToBeShown.data.titleExplained}</h3>
          <div className={styles.content}>
            <Reactmarkdown escapeHtml={false} renderers={renderers}>
              {docsToBeShown.content}
            </Reactmarkdown>
          </div>
          <div className={styles.editPageContainer}>
            <a
              className={styles.editPage}
              href={
                "https://github.com/sirageDb/FormRiderjs-website/tree/main/content/" +
                `${slug}` +
                ".md"
              }
              target="_blank"
            >
              <div>Edit this page</div>
              <img
                className={styles.editPageIcon}
                alt="Form rider page edit on github"
                src={"/edit.svg"}
              ></img>
            </a>
          </div>
        </main>
      </div>
      <div >
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const docs = files.filter((func) => func.endsWith(".md"));
  const data = docs.map((doc) => {
    const path = `${process.cwd()}/content/${doc}`;
    const rawContent = fs.readFileSync(path, { encoding: "utf-8" });

    return rawContent;
  });

  return {
    props: { data: data },
  };
}

export default Docs;
