export default function sketch(p){
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(newProps.length, newProps.length);
      p.noStroke();
    }

    p.draw = () => {
      p.background('orangered');
      p.ellipse(150, 100, 100, 100);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill("#00ff00");
    }
}