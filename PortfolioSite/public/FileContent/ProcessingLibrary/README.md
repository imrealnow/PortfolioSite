# Processing Game Framework

This library offers a collection of tools and classes designed to simplify game development with the Processing framework. Below are the primary features and their respective packages:

## Features:

### 1. **Physics**
   - **BoxCollider**: Represents a box-shaped collider for handling collisions.
   - **Collider**: Base class for colliders.

### 2. **Base**
   - **Component**: Base class for components that can be attached to game objects.
   - **GameObject**: Represents a base game object in the scene.
   - **Transform**: Handles the positioning, rotation, and scaling of game objects.
   - **Game**: Main class responsible for game logic and execution.
   - **Time**: Utility for time-related functionalities.

### 3. **Shape**
   - **Vertex**: Represents a point in 3D space.
   - **Edge**: Represents a connection between two vertices.
   - **Shape**: Base class for all shapes.
   - **Rectangle**: Represents a 2D rectangle.
   - **Box**: Represents a 3D box.
   - **Quad**: Represents a 4-sided polygon.
   - **InfiniteGround**: Represents an infinitely stretching ground.
   - **ShapeFactory**: Factory class to simplify the creation of various shapes using reflection.

### 4. **Rendering**
   - **Renderable**: Interface for objects that can be rendered.
   - **Camera**: Handles camera properties and functionalities.
   - **CompositeRenderable**: A class that renders a collection of `Renderable` objects together as a group. For example, a `Box` which is a composite renderable of multiple `Quad` renderables.

### 5. **Events**
   - **EventManager**: Manages and dispatches events.
   - **Observer**: Interface for observing events.
   - **EventManagerFactory**: Factory class to create event managers.

### 6. **Input**
   - **InputManager**: Handles user input.
   - **InputBinding**: Represents a specific input action or key.
   - **Directional2DBinding**: Represents a 2D directional input.

### 7. **Utilities**
   - **Helper**: Contains a collection of utility functions to assist with various tasks:
     - `safeDivide`: Safely divides numbers, handling potential divide-by-zero scenarios.
     - `getPrimitiveClass`: Returns the primitive class from their respective wrapper classes.
     - `smoothMoveTowards`: Smoothly moves a value towards a target using a sigmoid function.
     - `smoothMoveTowardsAngle`: Smoothly moves an angle towards a target angle, considering the shortest path in degrees.

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.

This project uses the Processing library, which is licensed under the [GNU Lesser General Public License (LGPL)](https://github.com/processing/processing4/blob/main/LICENSE.md). Any modifications to the Processing library are also released under the LGPL.

