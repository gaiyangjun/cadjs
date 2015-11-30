/**
 * Created by gpl on 15/11/30.
 */
module App.Controllers {
    import Canvas = App.Services.Canvas;
    import Logger = App.Services.Logger;

    export class CanvasCtrl {
        static $inject = ['Logger', 'Canvas'];
        private canvas:Canvas;
        private logger:Logger;

        constructor(logger:Logger, canvas:Canvas) {
            this.canvas = canvas;
            this.logger = logger;
            this.logger.info('canvas ctrl init');

            // create a rectangle object
            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'white',
                width: 20,
                height: 20,
                angle: 45
            });

            this.canvas.add(rect);
        }

        public startDraw():void {
            this.canvas.startDrawing()
        }

        public stopDraw():void {
            this.canvas.stopDrawing();
        }

        public startPolygon():void {
            this.logger.info('start drawing polygon, click first point');
            this.canvas.startPolygon();
        }

        public stopPolygon():void {
            this.logger.info('stop drawing polygon');
            this.canvas.stopPolygon();
        }
    }
}