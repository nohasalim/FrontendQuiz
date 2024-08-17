import "./LanguagesWrapper.css";
import LanguageItem from "../LanguageItem/LanguageItem";
import htmlicon from "../../assets/images/icon-html.svg";
import cssicon from "../../assets/images/icon-css.svg";
import jsicon from "../../assets/images/icon-js.svg";
import accessicon from "../../assets/images/icon-accessibility.svg";
function LanguagesWrapper() {
  const ArrayofObjects = [
    { LangName: "Html", LangLogo:  htmlicon,id:1 },
    { LangName: "Css", LangLogo:  cssicon,id:2  },
    { LangName: "JavaScript", LangLogo: jsicon,id:3  },
    { LangName: "Accessibility", LangLogo:  accessicon ,id:4},
  ];
  return (
    <div id="LanguaghStyle">
      {ArrayofObjects.map((item) => {
        return (
          <LanguageItem
            Key={item.id}
            LangName={item.LangName}
            LangLogo={item.LangLogo}
          ></LanguageItem>
        );
      })}
    </div>
  );
}
export default LanguagesWrapper;
