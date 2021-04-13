import React from 'react'

const LanguageContainer=({language})=> {
    return (
        <div className="language-item" key={language.id}>
            <img src={language.image} width="200px" height="200px" alt={language.languageNameEnglish} />
            {/* <div className="collectiontitle">{product.title}</div> */}
            <h6 style={{textAlign:'center'}}>{language.languageNameEnglish}</h6>
        </div>
    )
}

export default LanguageContainer
