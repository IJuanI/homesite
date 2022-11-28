import React, { Component } from "react";

class LangSelector extends Component {

  constructor(props) {
    super(props);

    this.applyPickedLanguage = this.applyPickedLanguage.bind(this);
  }

  applyPickedLanguage(pickedLang, langIdx) {
    document.documentElement.lang = pickedLang.isoCode;
    this.props.onSelect(pickedLang);

    this.props.langs.forEach((lang, idx) => {
      const icon = document.getElementById(`lang-icon-${lang.isoCode}`);
      if (idx === langIdx)
        icon.setAttribute("filter", "brightness(40%)");
      else
        icon.removeAttribute("filter");
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.langs !== prevProps.langs) {
      this.applyPickedLanguage(this.props.langs[0], 0);
    }
  }

  render() {
    return (
      <div className="col-md-12 mx-auto text-center language">
        {this.props.langs?.map((lang, idx) =>
          <div
            onClick={this.applyPickedLanguage.bind(this, lang, idx)}
            style={{ display: "inline" }}
            key={lang.isoCode}
          >
            <span
              className="iconify language-icon mx-3"
              data-icon={`twemoji-flag-for-flag-${lang.flag}`}
              data-inline="false"
              id={`lang-icon-${lang.isoCode}`}
            ></span>
          </div>
        )}
      </div>
    );
  }
}

export default LangSelector;
