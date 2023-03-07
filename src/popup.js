import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import imageIcon from "./assets/image.svg";
import noImageIcon from "./assets/no_image.svg";

const Con = styled.div`
  width: 200px;
  background: #000;
  color: #f1f1f1;
  padding: 10px;
  .icon {
    display: inline-block;
    font-size: 0px;
  }
  .icon img {
    cursor: pointer;
    width: 20px;
    filter: invert(1);
  }
`;

function Popup() {
  const [imageVisible, setImageVisible] = useState(true);
  return (
    <Con>
      <span
        className="icon"
        onClick={() => {
          setImageVisible(!imageVisible);
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              const tab = tabs[0];
              console.log(tab);
              if (tab.id) {
                chrome.tabs.sendMessage(
                  tab.id,
                  {
                    action: "toggle image",
                  },
                  (response) => {
                    console.log("response:", response);
                  }
                );
              }
            }
          );
        }}
      >
        <img src={imageVisible ? noImageIcon : imageIcon} />
        {/* toggle image */}
      </span>
    </Con>
  );
}

const root = createRoot(document.body);
root.render(<Popup />);
