import {DragEvent,EventListener} from '../Event/Event.js'

export class Controller {
  constructor({canvasEle, opNodeCon, dragEvent}) {
    this.canvasEle = canvasEle
    this.opNodeCon = opNodeCon
    this.dragEvent = dragEvent
    // 注册 resize 全局事件
    this.registerEventResize()
    // 注册 DragEvent
    this.registerDragEvent()
    // 注册 window 变量
    window._opNodeCon = opNodeCon;
    console.log(opNodeCon)
  }

  registerEventResize() {
    const resizeCanvas = () => {
      this.canvasEle.width = window.innerWidth;
      this.canvasEle.height = window.innerHeight;
      this.opNodeCon.viewRedraw();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  }

  registerDragEvent() {
    // addlistener
    EventListener.addListener(
      this.canvasEle,
      `${DragEvent.eventPrefix}down`,
      this.dragEvent.handle,
      DragEvent.eventOptions
    );
  }
}
