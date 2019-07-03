import { Component } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardOptions } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  viewProviders: [CanvasWhiteboardComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: 'drawButtonClass',
    drawButtonText: 'Draw',
    clearButtonEnabled: true,
    clearButtonClass: 'clearButtonClass',
    clearButtonText: 'Clear',
    undoButtonText: 'Undo',
    undoButtonEnabled: true,
    redoButtonText: 'Redo',
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: 'Save',
    lineWidth: 5,
    strokeColor: 'rgb(0,0,0)',
    shouldDownloadDrawing: true
  };

  public sendBatchUpdate(event) {

  }

  public onCanvasClear(event) {

  }

  public onCanvasUndo(event) {

  }

  public onCanvasRedo(event) {

  }

}
