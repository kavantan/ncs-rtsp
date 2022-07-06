import styles from "./PageHome.module.css";
import img1 from "../../assets/unblock_private_network_requests.png";
import img2 from "../../assets/cd_to_dir.png";
import img3 from "../../assets/running_program.png";
import zipFile from "../../assets/RTSPtoWeb.zip";
import { useState } from "react";

const PageHome = () => {
  const [winOrMac, setWinOrMac] = useState("Windows");

  return (
    <div className={styles.homePage}>
      <div className={styles.step}>
        Step 1 (If using Chrome Browser). Allow private network requests.
      </div>
      <div>
        <img src={img1} alt="none" />
      </div>
      <div className={styles.step}>Step 2 Install the zip file below.</div>
      <div>
        <a href={zipFile} download="RTSPtoWeb.zip">
          RTSPtoWeb.zip
        </a>
      </div>
      <div className={styles.step}>Step 3 Unzip the zip file.</div>
      <div>
        <select
          value={winOrMac}
          onChange={(event) => {
            setWinOrMac(event.target.value);
          }}
        >
          <option value="Windows"> For Windows Users</option>
          <option value="Mac"> For Mac Users</option>
        </select>
      </div>
      {winOrMac === "Windows" ? (
        <div>
          <div className={styles.step}>
            Step 4: Launch the RTSPtoWeb.exe program inside the folder
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.step}>
            Step 4: Launch terminal. (Press Cmd + Space on your keyboard and
            type terminal)
          </div>
          <div className={styles.step}>
            Step 5: Type cd with a space, and drag and drop the downloaded
            folder into the terminal, and press enter. It should look like this:
            <div>
              <img src={img2} alt="none" />
            </div>
          </div>
          <div className={styles.step}>
            Step 6: Type ./RTSPtoWeb and press enter. Should look like this:
            <div className={styles.image}>
              <img src={img3} alt="none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHome;
