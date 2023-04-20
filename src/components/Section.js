export class Section {
  constructor(
    { data, renderer },
    containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._contaner = document.querySelector(containerSelector);
  }

  addItem = (element) => {
    this._contaner.prepend(element);
  }

  renderItems = (data) => {
    this._renderedItems.reverse().forEach(item => {
      this._renderer(item);
    });
  }
}
