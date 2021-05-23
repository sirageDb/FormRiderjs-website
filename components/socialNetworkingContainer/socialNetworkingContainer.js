import React from "react";
import SocialNetworkingButton from "../socialNetworkingButton/socialNetworkingButton";
import Styles from "./socialNetworkingContainer.module.scss"



export default function SocialNetworkingContainer() {

    return (
        <div className={Styles.socialNetworkingContainer}>
            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                goTo={"https://twitter.com/iLoveSemicolon"}
                src={"/twitterLogo.svg"}
                alt={"twitterLogo"}
                text="@iLoveSemicolon"
            />


            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                goTo={"https://www.linkedin.com/in/sirage-al-dbiyat/"}
                src={"/linkedinLogo.svg"}
                alt={"linkedIn logo"}
                text="Sirage Al dbiyat"
            />
            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                goTo={"https://github.com/sirageDb"}
                src={"/github.svg"}
                alt={"githubLogo"}
                text="sirageDb"
            />
            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                goTo={"https://ilovesemicolons.io"}
                src={"/website.svg"}
                alt={"sirage al dbiyta website developer"}
                text="ilovesemicolons.io"
            />
        </div>
    );


}