
# Overview
Chap’s challenge is a creative clone of the (first level of the) 1989 Atari game, [Chips Challenge](https://en.wikipedia.org/wiki/Chip%27s_Challenge). It was developed by a team of us 6 students for the opportunity to gain some experience with collaboration and software design. We have recreated the first level in mechanics and layout, and designed our own second level that was inspired by the original game.

## Features
![Level 1](https://i.imgur.com/DFdZB4Y.png)
- Level saving/loading
- Level replays
- Level editor
- Dynamic entity plugin loading
- Original sounds/images
- Key bindings

## Controls
- Up/Down/Left/Right - Move chap
- Space - Toggle pause
- Escape - Unpause
- Ctrl + S - Save game
- Ctrl + R - Resume saved game
- Ctrl + X - exit game
- Ctrl + 1 - Start Level 1
- Ctrl + 2 - Start Level 2

## Team
| Module	    | Team Member Name      | Team Member Gitlab Account      |
| ------------- | --------------------- | ------------------------------- |
|**Renderer**	|	Michael King		|		kingmich4                 |
|**Domain**		|	Bradley Cave		|		cavebrad                  |
|**App**		|	Jack Harrisson	    |		harrisjack1               |
|**Persistency / Map Editor**|	Liam Green		    |		greenliam                 |
|**Recorder**	|	Julia Huijser		|		huijsejuli                |
|**Fuzz**		|	Janelle Lim-Ranola	|		limrajane                 |


## Gource video
[Gource video - Chaps Challenge - Team 1](https://www.youtube.com/watch?v=AKnG6IjosZg)

![Youtube link](https://img.youtube.com/vi/AKnG6IjosZg/0.jpg)

# How to open this project:
## Compiled game
1. Download and unzip ChapsChallenge-1.0.zip
2. Start the game by executing ChapsChallenge.jar
3. The MapEditor can also be run by executing the MapEditor.jar, however dynamic level loading is not currently supported.

## IntelliJ
This project was tested on the ECS machines with IntelliJ, and as such, this tutorial will be showing how to open it with that.

1. Open IntelliJ and make a new project. You may call it whatever you want. I called it "untitled"

2. Go to VCS (at the top) and navigate down to "Get from version control"

3. Paste in the following URL: https://gitlab.ecs.vuw.ac.nz/course-work/swen225/2022/project1/t1/ChapsChallenge

4. Press clone. If this fails, click on Directory and find a directory to place the project into. Make one whereever works.

5. Log in with your git credentials.

6. Click 'Trust Project' and then 'Open in this window'

7. When the file imports, there will be a popup on the bottom right that says 'Maven scripts found'. Click 'Load' and the project should set itself up.

8. Navigate to chapschallenge/core/src/...../gp22/app/Main.java

9. There should be a little green arrow next to "public class main" - Click 'Run Main'

10. Click on a level and then press Start!

11. Please enjoy!
