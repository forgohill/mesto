export class Section {
  constructor(
    { renderer },
    containerSelector) {
    this._renderer = renderer;
    this._contaner = document.querySelector(containerSelector);
  }

  addItem = (element) => {
    this._contaner.prepend(element);
  }
  // renderItems = (data, myId) => {
  renderItems = (data) => {
    this._renderedItems = data;
    this._renderedItems.reverse().forEach(item => {
      // this._renderer(item, myId);
      this._renderer(item);
    });
  }
}
