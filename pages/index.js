import Link from "next/Link"
import LayoutStandard from "../components/layoutStandard/LayoutStandard";
import SingleWhy from "../components/singleWhy/SingleWhy";
import Example1Form from "../components/example1Form/Example1Form";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.topBannerContainer}>
        <div className={styles.topBanner}>
          <div>
            <img
              src={"/brand.png"}
              className={styles.topBannerBrand}
              alt="From Rider logo home page"
            />
          </div>
          <div>
            <div>
              <div className={styles.topBannerText}>FormRider.js</div>
              <div className={styles.topBannerText}>
                A Javascript form validation plugin, based on JSON
              </div>
            </div>
              <div className={styles.topBannerButtonsContainer}>
                <Link href={"/docs/introduction"} ><div className={styles.topBannerButton + " " + styles.gettingStartedButton}>Get Started</div></Link>
                <a href={"/FormRiderjs.zip"} download><div className={styles.topBannerButton + " " + styles.downloadButton}>Download</div></a> <span style={{color : "#ffffff"}}>or</span> <span className={styles.npmInstall}><span style={{color: "#FFAF26"}}>$</span> npm -i formriderjs</span>
              </div>
          </div>
        </div>
      </div>

      <LayoutStandard>
        {/* WHY USING ============================================================ */}
        <div className={styles.whyUsingTitle}>Why using FormRirder.js</div>
        <div className={styles.whyRowContainer}>
          <SingleWhy
            reason={"Automatic Code Loading"}
            explanation={
              "Only necessary validators are loaded, resulting in a fast loading time."
            }
            reasonBarColor={"#4568DC"}
          />
          <SingleWhy
            reason={"No Coding"}
            explanation={
              "No code typing other than adding HTML attributes and editing a JSON document."
            }
            reasonBarColor={"#FFCB26"}
          />
          <SingleWhy
            reason={"No dependencies"}
            explanation={
              "Since Form Rider is coded using vanilla javascript, you won't worry about other dependecies."
            }
            reasonBarColor={"#50CF96"}
          />
        </div>
        <div className={styles.whyRowContainer}>
          <SingleWhy
            reason={"Maintained & Documented"}
            explanation={
              "Form Rider documentation is constantly scanned and the library is continuously updated for better performance"
            }
            reasonBarColor={"#FF512F"}
          />
          <SingleWhy
            reason={"Open Source"}
            explanation={
              "Join the Discord channel, give new ideas or code it your self, feel free to add new notification designs to the library ! :)"
            }
            reasonBarColor={"#4D4D4D"}
          />
          <SingleWhy
            reason={"Automatic Code Loading"}
            explanation={"Form Rider size is only 193kb."}
            reasonBarColor={"#E56C6C"}
          />
        </div>
        {/* EXAMPLE 1 ============================================================ */}
        <div className={styles.example1Container}>
          <div className={styles.example1LeftContainer}>
            <div className={styles.example1LeftContainerTitle}>
              Don't go into boring coding.
            </div>
            <div>
              Form Rider has many validation functionalities, starting from
              basic validators such as <Link href={"/docs/required"}><span className={styles.example1LeftContainerLink}>"required"</span></Link> till "regex" and <Link href={"/docs/conditionalRequired"}><span className={styles.example1LeftContainerLink}>conditional
              validators</span></Link>
            </div>
            <div className={styles.example1Form}>
              <Example1Form />
            </div>
          </div>
          <div className={styles.example1RightContainer}>
          <div className={styles.example1TextAreaContainer}>
            <div className={styles.example1TextArea}>
            <code className={styles.code}>
            <span className={styles.ponctuation}>{"{"}</span><br/>

            <span/>  <span className={styles.propertyKey}>"notifications"</span>: <span className={styles.ponctuation}>[{"{"}</span><br/>
            <span/>    <span className={styles.propertyKey}>"notificationCode"</span>: <span className={styles.propertyValueNotText}>1</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"text"</span>: <span className={styles.propertyValueText}>"Cannot subscribe, error with some inputs"</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"textColor"</span>: <span className={styles.propertyValueText}>"#ffffff"</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"backgroundColor"</span>: <span className={styles.propertyValueText}>"#E56C6C"</span><br/>
            <span/>  <span className={styles.ponctuation}>{"}"}</span>,<br/>
            <span/>  <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>    <span className={styles.propertyKey}>"notificationCode"</span>: <span className={styles.propertyValueNotText}>2</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"text"</span>: <span className={styles.propertyValueText}>"Thank you for subscribing !"</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"textColor"</span>: <span className={styles.propertyValueText}>"#ffffff"</span>,<br/>
            <span/>    <span className={styles.propertyKey}>"backgroundColor"</span>: <span className={styles.propertyValueText}>"#50CF96"</span><br/>
            <span/>  <span className={styles.ponctuation}>{"}]"}</span><br/>
            <span/>  <span className={styles.propertyKey}>"elementsToApplyValidationOn"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>    <span className={styles.propertyKey}>"signupTest"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>      <span className={styles.propertyKey}>"notificationCode"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>        <span className={styles.propertyKey}>"validated"</span>: <span className={styles.propertyValueNotText}>2</span>,<br/>
            <span/>        <span className={styles.propertyKey}>"notValidated"</span>: <span className={styles.propertyValueNotText}>1</span><br/>
            <span/>      <span className={styles.ponctuation}>{"}"}</span>,<br/>
            <span/>      <span className={styles.propertyKey}>"resetFormUponSubmit"</span>: <span className={styles.propertyValueNotText}>false</span>,<br/>
            <span/>      <span className={styles.propertyKey}>"inputNameToValidate"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>        <span className={styles.propertyKey}>"userName"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>          <span className={styles.propertyKey}>"required"</span>: [<span className={styles.propertyValueNotText}>true</span>, <span className={styles.propertyValueText}>"A user name is required"</span>]<br/>
            <span/>        <span className={styles.ponctuation}>{"}"}</span>,<br/>
            <span/>        <span className={styles.propertyKey}>"password"</span>: <span className={styles.ponctuation}>{"{"}</span><br/>
            <span/>          <span className={styles.propertyKey}>"required"</span>: [<span className={styles.propertyValueNotText}>true</span>, <span className={styles.propertyValueText}>"A password is required"</span>],<br/>
            <span/>          <span className={styles.propertyKey}>"minLength"</span>: [<span className={styles.propertyValueNotText}>6</span>, <span className={styles.propertyValueText}>"password should have at least 6 characters"</span>],<br/>
            <span/>          <span className={styles.propertyKey}>"containNumber"</span>: [[<span className={styles.propertyValueNotText}>1</span>, <span className={styles.propertyValueNotText}>true</span>], <span className={styles.propertyValueText}>"password should have at least 1 number"</span>],<br/>
            <span/>          <span className={styles.propertyKey}>"containSpecialCharacters"</span>: [[<span className={styles.propertyValueNotText}>1</span>, <span className={styles.propertyValueNotText}>true</span>], <span className={styles.propertyValueText}>"password should contain at least one special character"</span>],<br/>
            <span/>          <span className={styles.propertyKey}>"containWhiteSpace"</span>: [[<span className={styles.propertyValueNotText}>false</span>, <span className={styles.propertyValueNotText}>false</span>], <span className={styles.propertyValueText}>"password should not contain any white spaces"</span>],<br/>
            <span/>          <span className={styles.propertyKey}>"containCapitalLetters"</span>: [[<span className={styles.propertyValueNotText}>1</span>, <span className={styles.propertyValueNotText}>true</span>], <span className={styles.propertyValueText}>"password should contain at least one capital letter"</span>]<br/>
            <span/>        <span className={styles.ponctuation}>{"}"}</span><br/>
            <span/>      <span className={styles.ponctuation}>{"}"}</span><br/>
            <span/>    <span className={styles.ponctuation}>{"}"}</span><br/>
            <span/>  <span className={styles.ponctuation}>{"}"}</span><br/>
            <span/><span className={styles.ponctuation}>{"}"}</span><br/>
              </code>
            </div>
            </div>
          </div>
        </div>
      </LayoutStandard>
    </div>
  );
}
