import { html, render } from "lit-html";

class Quicktab {
  constructor() {
    this.state = {
      iframes: [],
    };
    this.render();
    console.log("q");
  }

  HandleLoad(event) {
    const el = event.target;
    console.log(el);

    console.log(this);

    console.log("iframe加载完毕");
  }

  view() {
    return html`
      ${this.state.iframes.map(
        (iframeData) => html`
          <iframe src=${iframeData.src} @load=${this.HandleLoad}></iframe>
        `,
      )}
    `;
  }

  render() {
    render(this.view(), document.getElementById("app"));
  }

  // 暴露的公共的api
  addIframe(src) {
    this.state.iframes.push({ src });
    this.render();
  }
}

export default Quicktab;
