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
            //goal: { x: 20, y: 20, width: 20, height: 20 },
            playerStart: { x: 20, y: 20 },
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
            //playerStart: { x: 40, y: 260 },
            playerStart: { x: 375, y: 200},
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
                {x: 220, y: 280, width: 160, height: 100,} // Second

            ],
            kill: [
                {x: 140, y: 360, width: 80, height: 20},
            ],
            trigger: [
                {x: 140, y: 200, width: 1, height: 80, id: 1, color: false}
            ],
            goal: { x: 375, y: 200, width: 5, height: 80, color: false},
            playerStart: { x: 40, y: 260 },
            gravity: { active: true, strength: 1}
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

        player.x = levels[currentLevel].playerStart.x;
        player.y = levels[currentLevel].playerStart.y;
    }

    // Call this ONLY ONCE per level
    function backupLevel() {
        backUpLevel = JSON.parse(JSON.stringify(levels[currentLevel]));
    }


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
        if (gravity.active && !iconChanged) {
            document.querySelector("#Up img").src = "images/close_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png";
            document.querySelector("#Down img").src = "images/cruelty_free_80dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png";
            iconChanged = true;
        }
    }


    // -------------------------
    // MOVEMENT AND GRAVITY AND JUMPING
    // -------------------------
    document.addEventListener("keydown", e => {
        // Disable up when gravity
        if (e.key === "ArrowUp") {
            if (!gravity.active) player.dy = -player.speed;
            else null;
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
        walls.forEach (w => {
            if (w.id === 1){
                w.enable = false;
            } 
        });
    }

    const trigerActions = {
        1: () => t1(),
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
                if (t.id && trigerActions[t.id]){
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
        checkTrigger()
        

        requestAnimationFrame(update);
    }

    update();
}
