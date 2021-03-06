import { Elements, BarInterface } from '../type/bar'

export default class Bar implements BarInterface {
  elements: Elements

  constructor(dom: any) {
    this.elements = {
      volume: dom.volumeBar,
      played: dom.playedBar,
      loaded: dom.loadedBar
    }
  }

  /**
   * Update progress
   *
   * @param {String} type - Point out which bar it is
   * @param {Number} percentage
   * @param {String} direction - Point out the direction of this bar, Should be height or width
   */
  set(type: string, percentage: number, direction: string): void {
    percentage = Math.max(percentage, 0)
    percentage = Math.min(percentage, 1)
    this.elements[type].style[direction] = percentage * 100 + '%'
  }

  get(type: string, direction?: string): number {
    direction = direction || 'width'
    return parseFloat(this.elements[type].style[direction]) / 100
  }
}
