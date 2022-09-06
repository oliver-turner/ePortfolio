var canvas = document.getElementById("nodes"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var nodes = [], // Array of nodes
    FPS = 60,
    x = 100,
    mouse = {
        x: 0,
        y: 0
    };  // mouse location

/* Push nodes to array */

for (var i = 0; i < x; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
    });
}

/* Draw nodes */

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = nodes.length; i < x; i++) {
        var s = nodes[i];

        ctx.fillStyle = getComputedStyle(canvas).getPropertyValue("--textColour"); 
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0, x = nodes.length; i < x; i++) {
        var starI = nodes[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (var j = 0, x = nodes.length; j < x; j++) {
            var starII = nodes[j];
            if (distance(starI, starII) < 150) {
                ctx.lineTo(starII.x, starII.y);
            }
        }
    }
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = getComputedStyle(canvas).getPropertyValue("--textColour");
    ctx.stroke();
}

function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}

/* Update star locations */

function update() {
    for (var i = 0, x = nodes.length; i < x; i++) {
        var s = nodes[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
}

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
});

/* Update and draw */

function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
}

tick();