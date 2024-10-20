import { getText } from '../utils/getText.js';
import React from 'react';
import { InlineWidget } from 'react-calendly';
import styles from '../public/styles/InvestorComponent.module.css';
const InvestorComponent = () => {
  return <div className={styles.investorContainer}>
      <h1 className={styles.title}>{getText('InvestorComponent.js_32_SW52ZX')}</h1>
      <h2 className={styles.subtitle}>{getText('InvestorComponent.js_59_V2VsY2')}</h2>

      <p className={styles.text}>{getText('InvestorComponent.js_558_QXQgV2')}</p>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_10_T3VyIF')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_460_V2UgYm')}</p>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_29_S2V5IE')}</h2>
      <ol className={styles.list}>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_29_RGV2ZW')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_315_VW5saW')}</p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_24_V29ya0')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_281_V29ya0')}</p><br />
          <div className={styles.footprintVignetteDiffuse}>
            <img src={getText("InvestorComponent.js_38_L2ltYW")} />
          </div>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_49_UmVhbC')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_226_RGV2ZW')}</p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_36_QnVpbH')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_190_T3VyIH')}</p>
        </li>
      </ol>

    {/* Subjective 0-Input Technology Section */}
    <section className={styles.subjectiveZeroInputSection} id={getText("InvestorComponent.js_29_c3Viam")}>
            <h2 className={styles.sectionTitle}>{getText('InvestorComponent.js_38_V2hhdC')}</h2>
            <div className={styles.subjectiveZeroInputContent}>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                  <video className={styles.subjectiveVideo} src={getText("InvestorComponent.js_54_L3ZpZG")} controls autoPlay loop muted playsInline></video>
                </div><br />
              </div>
            </div>
          </section>

            {/* PDF Viewer Section */}
            <h2 className={styles.subheading}>{getText('InvestorComponent.js_22_RG93bm')}</h2>
      <div className={styles.pdfGrid}>
        <div className={styles.pdfItem}>
          <iframe src={getText("InvestorComponent.js_46_L2Rvd2")} className={styles.pdfViewer} title={getText("InvestorComponent.js_13_QnVzaW")}></iframe>
          <a href={getText("InvestorComponent.js_46_L2Rvd2")} className={styles.downloadLink} target={getText("InvestorComponent.js_6_X2JsYW")} rel={getText("InvestorComponent.js_19_bm9vcG")}>{getText('InvestorComponent.js_22_RG93bm')}</a>
        </div>
        <div className={styles.pdfItem}>
          <iframe src={getText("InvestorComponent.js_60_L2Rvd2")} className={styles.pdfViewer} title={getText("InvestorComponent.js_29_U3Viam")}></iframe>
          <a href={getText("InvestorComponent.js_60_L2Rvd2")} className={styles.downloadLink} target={getText("InvestorComponent.js_6_X2JsYW")} rel={getText("InvestorComponent.js_19_bm9vcG")}>{getText('InvestorComponent.js_36_RG93bm')}</a>
        </div>
        <div className={styles.pdfItem}>
          <iframe src={getText("InvestorComponent.js_72_L2Rvd2")} className={styles.pdfViewer} title={getText("InvestorComponent.js_35_U3Viam")}></iframe>
          <a href={getText("InvestorComponent.js_72_L2Rvd2")} className={styles.downloadLink} target={getText("InvestorComponent.js_6_X2JsYW")} rel={getText("InvestorComponent.js_19_bm9vcG")}>{getText('InvestorComponent.js_33_RG93bm')}</a>
        </div>
        <div className={styles.pdfItem}>
          <iframe src={getText("InvestorComponent.js_30_L2Rvd2")} className={styles.pdfViewer} title={getText("InvestorComponent.js_22_UGF0ZW")}></iframe>
          <a href={getText("InvestorComponent.js_30_L2Rvd2")} className={styles.downloadLink} target={getText("InvestorComponent.js_6_X2JsYW")} rel={getText("InvestorComponent.js_19_bm9vcG")}>{getText('InvestorComponent.js_31_RG93bm')}</a>
        </div>
      </div>


              {/* Subjective 0-Input Technology Section */}
    <section className={styles.subjectiveZeroInputSection} id={getText("InvestorComponent.js_29_c3Viam")}>
            <h2 className={styles.sectionTitle}>{getText('InvestorComponent.js_22_R2V0IG')}</h2>
            <div className={styles.subjectiveZeroInputContent}>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                <a href={getText("InvestorComponent.js_101_aHR0cD")}><img src={getText("InvestorComponent.js_80_L2ltYW")} /></a>

                </div><br />
              </div>
            </div>
          </section>


      <h2 className={styles.subheading}>{getText('InvestorComponent.js_18_TWFya2')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_544_VGhlIG')}</p>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_36_UHJvZH')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_386_V29ya1')}</p>

      <h3 className={styles.subsubheading}>{getText('InvestorComponent.js_16_RnV0dX')}</h3>
      <ul className={styles.productList}>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_68_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_70_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_105_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_94_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_86_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_98_U3Viam')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_111_U3Viam')}</p>
        </li>
      </ul>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_28_V2h5IE')}</h2>
      <ol className={styles.list}>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_21_SHVnZS')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_307_V2l0aC')}</p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_24_R2FtZS')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_274_T3VyIH')}</p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_23_U2NhbG')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_213_V29ya1')}</p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>{getText('InvestorComponent.js_29_UmVkdW')}</h3>
          <p className={styles.text}>{getText('InvestorComponent.js_223_QnkgYX')}</p>
        </li>
      </ol>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_21_RmluYW')}</h2>
      <table className={styles.financialTable}>
        <thead>
          <tr>
            <th>{getText('InvestorComponent.js_4_WWVhcg')}</th>
            <th>{getText('InvestorComponent.js_7_UmV2ZW')}</th>
            <th>{getText('InvestorComponent.js_8_RXhwZW')}</th>
            <th>{getText('InvestorComponent.js_11_UHJvZm')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getText('InvestorComponent.js_4_MjAyNA')}</td>
            <td>{getText('InvestorComponent.js_5_JDIuNU')}</td>
            <td>{getText('InvestorComponent.js_5_JDEuOE')}</td>
            <td>{getText('InvestorComponent.js_5_JDcwME')}</td>
          </tr>
          <tr>
            <td>{getText('InvestorComponent.js_4_MjAyNQ')}</td>
            <td>{getText('InvestorComponent.js_3_JDhN')}</td>
            <td>{getText('InvestorComponent.js_5_JDQuNU')}</td>
            <td>{getText('InvestorComponent.js_5_JDMuNU')}</td>
          </tr>
          <tr>
            <td>{getText('InvestorComponent.js_4_MjAyNg')}</td>
            <td>{getText('InvestorComponent.js_4_JDE1TQ')}</td>
            <td>{getText('InvestorComponent.js_3_JDhN')}</td>
            <td>{getText('InvestorComponent.js_3_JDdN')}</td>
          </tr>
          <tr>
            <td>{getText('InvestorComponent.js_4_MjAyNw')}</td>
            <td>{getText('InvestorComponent.js_4_JDMwTQ')}</td>
            <td>{getText('InvestorComponent.js_4_JDE0TQ')}</td>
            <td>{getText('InvestorComponent.js_4_JDE2TQ')}</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_20_RnVuZG')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_196_V2UgYX')}</p>
      <ul className={styles.list}>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_98_MzAlIG')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_91_NDAlIG')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_40_MjAlIG')}</p>
        </li>
        <li>
          <p className={styles.text}>{getText('InvestorComponent.js_35_MTAlIG')}</p>
        </li>
      </ul>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_13_TWVldC')}</h2>
      <div className={styles.teamSection}>

        <div className={styles.teamMember}>
          <img src={getText("InvestorComponent.js_33_L2ltYW")} alt={getText("InvestorComponent.js_9_VG9tbX")} className={styles.teamPhoto} />
          <div className={styles.memberInfo}>
            <h3>{getText('InvestorComponent.js_27_VG9tbX')}</h3>
            <p className={styles.text}>{getText('InvestorComponent.js_218_VG9tbX')}</p>
          </div>
        </div>
      </div>

      {/* Calendly Widget Integration */}
      <h2 className={styles.subheading}>{getText('InvestorComponent.js_33_U2NoZW')}</h2>
      <div className={styles.calendlyContainer}>
        <InlineWidget url={getText("InvestorComponent.js_36_aHR0cH")} styles={{
        height: getText("InvestorComponent.js_5_NzAwcH")
      }} />
      </div>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_37_Sm9pbi')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_280_QXQgV2')}</p>

      <h2 className={styles.subheading}>{getText('InvestorComponent.js_10_Q29udG')}</h2>
      <p className={styles.text}>{getText('InvestorComponent.js_111_Rm9yIG')}<a href={getText("InvestorComponent.js_30_bWFpbH")} className={styles.link}>{getText('InvestorComponent.js_23_aW52ZX')}</a>{getText('InvestorComponent.js_1_Lg==')}</p>



    </div>;
};
export default InvestorComponent;