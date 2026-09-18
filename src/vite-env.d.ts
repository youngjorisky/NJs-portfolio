interface Window {
  jQuery?: JQueryStatic;
}

interface JQuery<TElement = HTMLElement> {
  owlCarousel(options?: Record<string, unknown>): JQuery<TElement>;
  trigger(eventName: string): JQuery<TElement>;
}
