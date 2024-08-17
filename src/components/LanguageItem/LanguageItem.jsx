function LanguageItem(props){
    return(
    <button>
        <img src={props.LangLogo}/>
        <span>{props.LangName}</span>
    </button>
)
}
 export default LanguageItem