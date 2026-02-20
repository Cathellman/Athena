function startGame() {
    document.getElementById("playMenu").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    const canvas = document.getElementById("mazeCanvas");
    const ctx = canvas.getContext("2d");


    // ICON REMEBER
    let iconChanged = false;
    // -------------------------
    // LEVEL DATA
    // -------------------------
    const levels = [
        {
            walls: [
                // Main Box \\ MAZE
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

                // Design
                {x: 40, y: 40, width: 160, height: 20}, 
                {x: 220, y: 40, width: 140, height: 20}, 

                {x: 180, y: 20, width: 20, height: 20}, 
                {x: 40, y: 60, width: 20, height: 60},
                {x: 220, y: 60, width: 20, height: 40},
                {x: 140, y: 80, width: 60, height: 20},
                {x: 80, y: 80, width: 40, height: 20},
                {x: 80, y: 100, width: 20, height: 40},
                {x: 100, y: 120, width: 100, height: 20},
                {x: 180, y: 100, width: 20, height: 20},
                {x: 40, y: 140, width: 20, height: 120},
                {x: 40, y: 280, width: 20, height: 80},
                {x: 60, y: 340, width: 120, height: 20},
                {x: 60, y: 160, width: 100, height: 20},
                {x: 260, y: 220, width: 60, height: 20},
                {x: 260, y: 240, width: 20, height: 40},
                {x: 280, y: 260, width: 80, height: 20},
                {x: 220, y: 180, width: 140, height: 20},
                {x: 340, y: 200, width: 20, height: 60},
                {x: 80, y: 200, width: 20, height: 120},
                {x: 120, y: 180, width: 20, height: 80},
                {x: 120, y: 280, width: 20, height: 60}, 
                {x: 220, y: 200, width: 20, height: 120}, 
                {x: 240, y: 300, width: 120, height: 20}, 
                {x: 260, y: 340, width: 120, height: 20}, 
                {x: 200, y: 340, width: 40, height: 20},
                {x: 220, y: 360, width: 20, height: 20},
                {x: 160, y: 160, width: 40, height: 20}, 
                {x: 200, y: 120, width: 60, height: 20}, 
                {x: 240, y: 140, width: 80, height: 20},
                {x: 300, y: 160, width: 20, height: 20},
                {x: 160, y: 200, width: 20, height: 120},
                {x: 180, y: 200, width: 20, height: 20},
                {x: 180, y: 300, width: 20, height: 20},
                {x: 240, y: 80, width: 60, height: 20},
                {x: 280, y: 100, width: 20, height: 20},
                {x: 300, y: 100, width: 40, height: 20},
                {x: 340, y: 80, width: 20, height: 80},
            ],
            kill: [
                {x: 300, y: 80, width: 40, height: 20},
                {x: 360, y: 360, width: 20, height: 20},
                {x: 200, y: 360, width: 20, height: 20},
                {x: 100, y: 100, width: 80, height: 20},
                {x: 38, y: 118, width: 24, height: 24},
                
            ],
            trigger: [
                {}
            ],
            goal: { x: 280, y: 240, width: 20, height: 20, color: true },
            playerStart: { x: 20, y: 20 },
            //playerStart: { x: 280, y: 240 }, 
            gravity: { active: false, strength: 1}
        },

        {
            walls: [
                // Main Box First Troll
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

                {x: 20, y: 280, width: 80, height: 100}, // First Hill
                {x: 140, y: 280, width: 80, height: 100}, // Second Hill
                {x: 260, y: 280, width: 120, height: 100}, // Third Hill
            ],
            kill: [
                {x: 100, y: 360, width: 40, height: 20}, // First lava patch
                {x: 220, y: 360, width: 40, height: 20}, // Second Lava Patch
            ],
            trigger: [
                {}
            ],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            //playerStart: { x: 375, y: 200},
            gravity: { active: true, strength: 1}
        },
        {
            walls: [
                // Main Box
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

                {x: 20, y: 280, width: 80, height: 100}, // Fist hill
                {x: 145, y: 280, width: 20, height: 20}, // First box
                {x: 185, y: 280, width: 20, height: 20}, // Second box
                {x: 225, y: 280, width: 20, height: 20}, // Third Box

                {x: 300, y: 280, width: 80, height: 100}, // Last Hill

            ],
            kill: [
                {x: 100, y: 360, width: 200, height: 20}, // Kill Bottom
            ],
            trigger: [
                {}
            ],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            //playerStart: {x: 375, y: 200},
            gravity: { active: true, strength: 1}
        },
        {
            walls: [
                // Main Box
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

                {x: 20, y: 280, width: 120, height: 100}, // Fist hill
                {x: 140, y: 280, width: 80, height: 100, enable: true, id: 1}, // Second (Moving Hill)
                {x: 220, y: 280, width: 160, height: 100,}, // Second

                {x: 260, y: 220, width: 20, height: 60, enable: false, id:2}, // Spawnded wall
                {x: 80, y: 260, width: 60, height: 20, enable: false, id:3, e: 1}, // FIRST HUMP
                {x: 140, y: 240, width: 60, height: 20, enable: false, id:3, e: 2}, // SECOND HUMP
                {x: 200, y: 220, width: 60, height: 20, enable: false, id:3, e: 3}, // LAST HUMP

            ],
            kill: [
                {x: 140, y: 360, width: 80, height: 20},
            ],
            trigger: [
                {x: 120, y: 200, width: 20, height: 80, id: 1, color: false, active: true}, // Removes the floow
                {x: 240, y: 200, width: 20, height: 80, id: 2, color: false, active: true}, // Makes a wall
                {x: 20, y: 200, width: 20, height: 80, id: 3, color: false, active: false},
            ],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            //playerStart: { x: 375, y: 200 },
            gravity: { active: true, strength: 1}
        },
        {
            walls: [
                // Main Box
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

                {x: 120, y: 160, width: 20, height: 60,}, // left 1
                {x: 140, y: 140, width: 40, height: 20,}, // left 2 to 3 top
                {x: 180, y: 160, width: 40, height: 20,}, // 4 to 6 top
                {x: 220, y: 140, width: 40, height: 20,}, // 7 to 9 top
                {x: 260, y: 160, width: 20, height: 60,}, // right last
                {x: 140, y: 220, width: 20, height: 20,}, // left top pixle
                {x: 160, y: 240, width: 20, height: 20,}, // left btom pixle
                {x: 180, y: 260, width: 40, height: 20,}, // 4 to 6 bottom 
                {x: 240, y: 220, width: 20, height: 20,}, // right top pixle
                {x: 220, y: 240, width: 20, height: 20,}, // right btom pixle
                
            ],
            heart: [
                {x: 140, y: 160, width: 20, height: 60,},
                {x: 160, y: 160, width: 20, height: 80,},
                {x: 180, y: 180, width: 20, height: 80,},
                {x: 200, y: 180, width: 20, height: 80,},
                {x: 220, y: 160, width: 20, height: 80,},
                {x: 240, y: 160, width: 20, height: 60,},
            ],
            kill:  [],
            trigger: [],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            //playerStart: { x: 375, y: 200},
            gravity: { active: true, strength: .2}
        },
        {
            walls: [
                // Main Box
                {x: 0, y: 0, width: 400, height: 20},
                {x: 0, y: 380, width: 400, height: 20},
                {x: 0, y: 0, width: 20, height: 400},
                {x: 380, y: 0, width: 20, height: 400},

            ],
            kill: [],
            trigger: [],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            //playerStart: { x: 375, y: 200 },
            gravity: { active: false, strength: 1}
        }
    ];

    let backUpLevel = [];

    // -------------------------
    // LOAD LEVEL 
    // -------------------------
    let currentLevel = 0;

    let walls = levels[currentLevel].walls;
    let goal = levels[currentLevel].goal;
    let kill = levels[currentLevel].kill;
    let gravity = levels[currentLevel].gravity;
    let trigger = levels[currentLevel].trigger;
    let heart = levels[currentLevel].heart;


    const player = {
        x: levels[currentLevel].playerStart.x,
        y: levels[currentLevel].playerStart.y,
        size: 16,
        speed: 3,
        dx: 0,
        dy: 0,
        grounded: false
    };

    function loadLevel() {
        walls = levels[currentLevel].walls;
        goal = levels[currentLevel].goal;
        kill = levels[currentLevel].kill;
        gravity = levels[currentLevel].gravity;
        trigger = levels[currentLevel].trigger;
        heart = levels[currentLevel].heart;

        player.x = levels[currentLevel].playerStart.x;
        player.y = levels[currentLevel].playerStart.y;
    }

    // Call this ONLY ONCE per level
    function backupLevel() {
        backUpLevel = JSON.parse(JSON.stringify(levels[currentLevel]));
    }
    backupLevel(); // VERY IMPOTANT neded in order to not crash on level

    // -------------------------
    // DRAWING FUNCTIONS
    // -------------------------
    function drawWalls() {
        ctx.fillStyle = "#444";
        walls.forEach(w => {
            if (w.enable !== false) {   // draw only if enabled
                ctx.fillRect(w.x, w.y, w.width, w.height);
            }
        });
        if (currentLevel === 4) {
            ctx.fillStyle = "#b73ecc";
            heart.forEach(h => {
                ctx.fillRect(h.x, h.y, h.width, h.height);
            });
        }
    }


    function drawKill() {
        ctx.fillStyle = "red";
        kill.forEach(k => ctx.fillRect(k.x, k.y, k.width, k.height));
    }

    function drawPlayer() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    function drawGoal() {
        if (!goal.color) {

        }
        else {
        ctx.fillStyle = "pink";
        ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
        }
    }

   function drawTrigger() {
        ctx.fillStyle = "green";
        trigger.forEach(t => {
            if (t.color) {
                ctx.fillRect(t.x, t.y, t.width, t.height);
            }
        });
    }

    function ChangeIcons() {
        if (gravity.active && !iconChanged ) {
            document.querySelector("#Up img").src = "images/close_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png";
            document.querySelector("#Down img").src = "images/cruelty_free_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png";
            iconChanged = true;
        }
        else if (!gravity.active && iconChanged) {
            document.querySelector('#Up img').src = "images/arrow_drop_up_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png"
            document.querySelector('#Down img').src = "images/arrow_drop_down_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png"
            iconChanged = false;
        }
    }


    // -------------------------
    // MOVEMENT AND GRAVITY AND JUMPING
    // -------------------------
    document.addEventListener("keydown", e => {
        // Disable up when gravity
        if (e.key === "ArrowUp") {
            if (!gravity.active) {
                player.dy = -player.speed;
            } else {
                currentLevel = 0;
                backupLevel();
            }
        }

        // JUMPING IF ACTIVE GRVITY
        if (e.key === "ArrowDown"){
            if (gravity.active && player.grounded){
                player.dy = -7;
            } 
            else {
                player.dy = player.speed;
            };
        } 
        if (e.key === "ArrowLeft") player.dx = -player.speed;
        if (e.key === "ArrowRight") player.dx = player.speed;

    });
    

    document.addEventListener("keyup", e => {
        if (["ArrowUp","ArrowDown"].includes(e.key)) player.dy = 0;
        if (["ArrowLeft","ArrowRight"].includes(e.key)) player.dx = 0;
    });

    function fall() {
        if (gravity.active) {
            player.dy += gravity.strength;
            if (player.dy > 5) {player.dy = 5}
        }
    }


    // -------------------------
    // TRIGER
    // -------------------------

    function t1() {
        // Disable the trigger so it can't fire again
        trigger.forEach(t => {
            if (t.id === 1) {
                t.active = false;
            }
        });

        // Disable the wall and re-enable after 3 seconds
        levels[currentLevel].walls.forEach(w => {
            if (w.id === 1) {
                w.enable = false;
                setTimeout(() => {
                    w.enable = true;
                }, 3000);
            }
        });
    }
    // makes the wall apear
    function t2(){
        trigger.forEach(t => {
            if (t.id === 2) {
                t.active = false;
            }
        });
        // Turns on triger 3
        trigger.forEach(t => {
            if (t.id === 3) {
                t.active = true;
            }
        });
        levels[currentLevel].walls.forEach(w => {
            if (w.id === 2){
                w.enable = true;
            }
        });
    }

    function t3(){
        trigger.forEach(t => {
            if (t.id === 3) {
                t.active = false;
            }
        });

        levels[currentLevel].walls.forEach(w => {
            if (w.id === 3){
                if (w.e === 1) {
                    w.enable = true;
                }
                else if(w.e === 2) {
                    setTimeout(() => {
                        w.enable = true;
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        w.enable = true;
                    }, 2000);
                };
            }
        });
    }



    const trigerActions = {
        1: () => t1(),
        2: () => t2(),
        3: () => t3(),
    }

    // -------------------------------------------------------------------------------
    // ----------------------------- TOUCH -------------------------------------------
    // -------------------------------------------------------------------------------
    function bindButton(btnId, onPress, onRelease) {
        const btn = document.getElementById(btnId);

        // Mouse support
        btn.addEventListener("mousedown", onPress);
        btn.addEventListener("mouseup", onRelease);
        btn.addEventListener("mouseleave", onRelease);

        // Touch support (for phones)
        btn.addEventListener("touchstart", e => {
            e.preventDefault(); // prevents scrolling
            onPress();
        });

        btn.addEventListener("touchend", e => {
            e.preventDefault();
            onRelease();
        });
    }
    // TOUCH + MOUSE BUTTON BINDINGS
    bindButton("left",
        () => player.dx = -player.speed,
        () => player.dx = 0
    );

    bindButton("Right",
        () => player.dx = player.speed,
        () => player.dx = 0
    );

    bindButton("Up",
        () => {
            if (!gravity.active) player.dy = -player.speed;
        },
        () => player.dy = 0
    );

    bindButton("Down",
        () => {
            if (gravity.active && player.grounded) player.dy = -7;
            else player.dy = player.speed;
        },
        () => player.dy = 0
    );


    // =====================================================================================================


    // -------------------------
    // COLLISION
    // -------------------------
    function checkCollision(nx, ny) {
        return walls.some(w =>
            w.enable !== false &&
            nx < w.x + w.width &&
            nx + player.size > w.x &&
            ny < w.y + w.height &&
            ny + player.size > w.y
        );
    }


    // -------------------------
    // Special Block Checks
    // -------------------------
    function checkGoal() {
        if (
            player.x < goal.x + goal.width &&
            player.x + player.size > goal.x &&
            player.y < goal.y + goal.height &&
            player.y + player.size > goal.y
        ) {
            currentLevel ++;
            loadLevel();
            backupLevel();
        };
    }

    // restart function, loading level
    function restartLevel(){
        levels[currentLevel] = JSON.parse(JSON.stringify(backUpLevel));
    }

    function checkKill() {
        for (let k of kill) {
            if (
                player.x < k.x + k.width &&
                player.x + player.size > k.x &&
                player.y < k.y + k.height &&
                player.y + player.size > k.y
            ) {
                restartLevel(); // resets the data
                loadLevel();
            }
        }
    }

    function checkGround() {
        // Checks One pixle below the dude
        let ny = player.y + 5;
        player.grounded = checkCollision(player.x, ny);
    };

    function checkTrigger() {
        // Checks and dose trigger actions

        trigger.forEach (t => {
            if (
                player.x < t.x + t.width &&
                player.x + player.size > t.x &&
                player.y < t.y + t.height &&
                player.y + player.size > t.y
            ) {
                if (t.id && trigerActions[t.id] && t.active){
                    trigerActions[t.id](); // Runs the certain triger its linked to 
                }
            }
        })
    }



    // -------------------------
    // GAME LOOP
    // -------------------------
    function update() {
        //       Curent     Added 
        let nx = player.x + player.dx;
        let ny = player.y + player.dy;

        fall(); // Gravity


        if (!checkCollision(nx, player.y)) player.x = nx; // Hor Movement


        if (!checkCollision(player.x, ny)) player.y = ny; // Vert Movement




        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ChangeIcons(); // Changes the icon once gravity is enable 
        drawKill();
        drawWalls();
        drawPlayer();
        drawGoal();
        checkGround();
        checkGoal();
        checkKill();
        drawTrigger();
        checkTrigger();
        

        requestAnimationFrame(update);
    }

    update();
}


function snakeGame() {
    document.getElementById("playMenu").style.display = "none";
    document.getElementById("gameScreen2").style.display = "block";

    const canvas = document.getElementById("snakeGame");
    const ctx = canvas.getContext("2d");

    // GRID SIZE
    const grid = 20;

    // SNAKE BODY
    let snake = [
        { x: 200, y: 200 }
    ];

    let dx = grid;   // moving right initially
    let dy = 0;

    // FOOD
    let food = spawnFood();

    // GAME LOOP SPEED
    let speed = 120; // ms per frame

    // -------------------------
    // INPUT
    // -------------------------
    document.addEventListener("keydown", e => {
        if (e.key === "ArrowUp" && dy === 0) {
            dx = 0; dy = -grid;
        }
        if (e.key === "ArrowDown" && dy === 0) {
            dx = 0; dy = grid;
        }
        if (e.key === "ArrowLeft" && dx === 0) {
            dx = -grid; dy = 0;
        }
        if (e.key === "ArrowRight" && dx === 0) {
            dx = grid; dy = 0;
        }
    });

    // -------------------------
    // SPAWN FOOD
    // -------------------------
    function spawnFood() {
        return {
            x: Math.floor(Math.random() * (canvas.width / grid)) * grid,
            y: Math.floor(Math.random() * (canvas.height / grid)) * grid
        };
    }

    // -------------------------
    // GAME LOOP
    // -------------------------
    function update() {
        setTimeout(() => {
            // Move snake head
            const head = {
                x: snake[0].x + dx,
                y: snake[0].y + dy
            };

            // WALL COLLISION
            if (
                head.x < 0 || head.x >= canvas.width ||
                head.y < 0 || head.y >= canvas.height
            ) {
                return gameOver();
            }

            // SELF COLLISION
            for (let part of snake) {
                if (head.x === part.x && head.y === part.y) {
                    return gameOver();
                }
            }

            snake.unshift(head);

            // FOOD EAT
            if (head.x === food.x && head.y === food.y) {
                speed = speed + -7;
                food = spawnFood();
            } else {
                snake.pop();
            }

            draw();
            update();
        }, speed);
    }

    // -------------------------
    // DRAW EVERYTHING
    // -------------------------
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw food
        ctx.fillStyle = "pink";
        ctx.fillRect(food.x, food.y, grid, grid);

        // Draw snake
        ctx.fillStyle = "purple";
        snake.forEach(part => {
            ctx.fillRect(part.x, part.y, grid, grid);
        });
    }

    // -------------------------
    // GAME OVER
    // -------------------------
    function gameOver() {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over!", 110, 200);

        setTimeout(() => {
            // Reset snake
            snake = [{ x: 200, y: 200 }];
            dx = grid;
            dy = 0;
            food = spawnFood();
            update();
        }, 1500);
    }

    update();
}


function phyGame() {
    document.getElementById("playMenu").style.display = "none";
    document.getElementById("phyScreen").style.display = "block";

    const canvas = document.getElementById("phyGame");
    const ctx = canvas.getContext("2d");

    let nodeId = 0;
    let nodes = [];

    // ---------------------------------------------------------
    // GRAVITY CONSTANT (tune this)
    const G = 0.5; 
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // GRAVITY FORCE BETWEEN BODIES
    function computeForce(body) {
        let fx = 0;
        let fy = 0;

        nodes.forEach(other => {
            if (other.id === body.id) return;

            let dx = other.x - body.x;
            let dy = other.y - body.y;

            let dist = Math.sqrt(dx*dx + dy*dy);

            // Prevent infinite force
            let minDist = 10;
            if (dist < minDist) dist = minDist;

            // Normalize direction
            let nx = dx / dist;
            let ny = dy / dist;

            // Newton's law of gravitation
            let force = (G * body.mass * other.mass) / (dist * dist);

            fx += nx * force;
            fy += ny * force;
        });

        return { fx, fy };
    }
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // UPDATE POSITIONS USING REAL PHYSICS
    function move() {
        nodes.forEach(body => {
            let f = computeForce(body);

            // acceleration = force / mass
            body.ax = f.fx / body.mass;
            body.ay = f.fy / body.mass;

            // update velocity
            body.vx += body.ax;
            body.vy += body.ay;

            // damping (keeps simulation stable)
            body.vx *= 0.999;
            body.vy *= 0.999;

            // update position
            body.x += body.vx;
            body.y += body.vy;
        });
    }
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // SPAWN NEW PLANET ON CLICK
    canvas.addEventListener("click", function (event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        nodes.push({
            id: nodeId++,
            x: x,
            y: y,
            width: 10,
            height: 10,
            mass: 20,      // ← you can change this
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        });
    });
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // DRAW PLANETS
    function drawNodes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.width, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // MAIN LOOP
    function update() {
        move();
        drawNodes();
        requestAnimationFrame(update);
    }
    update();
}


