import { Engine } from "matter-js";
import * as p5 from "p5";

/**
 * The most abstract form of a game object.
 * It has a reference to the p5 sketch so it can draw things.
 * 
 * It defines a standard interface for all game objects.
 */
abstract class Object {
    s: p5;
    engine: Engine;

    constructor(s: p5, engine: Engine) {
        this.s = s;
        this.engine = engine;
    }

    /**
     * This function causes the GameObjec to iterate a frame of the game logic.
     */
    abstract update(): void;

    /**
     * This function causes the GameObject to draw itself.
     */
    abstract draw(): void;
}

export default Object;
