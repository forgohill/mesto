export class Section {
  constructor(
    { renderer },
    containerSelector) {
    // this._renderedItems = data;
    this._renderer = renderer;

    this._contaner = document.querySelector(containerSelector);
  }

  addItem = (element) => {
    this._contaner.prepend(element);
  }

  renderItems = (data, myId) => {
    // debugger;
    this._renderedItems = data;
    this._renderedItems.reverse().forEach(item => {
      this._renderer(item, myId);
    });
  }
}
