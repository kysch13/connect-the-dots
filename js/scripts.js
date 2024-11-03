const dotCanvas = (function () {
    const canvas = document.getElementById('ctd');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const dots = [];

    const cursorPos = canvas.addEventListener('mousemove', function(event) { 
        var rect = canvas.getBoundingClientRect(); 
        var x = event.clientX - rect.left; 
        var y = event.clientY - rect.top; 
        return {x, y};
    }); 



    return {canvas, ctx, dots};
})();

function clientResize(ev) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', clientResize);

dotCanvas.canvas.addEventListener('click', (e) => {
    const rect = dotCanvas.canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    dotCanvas.ctx.beginPath();
    dotCanvas.ctx.arc(
                    x,
                    y,
                    3,
                    0,
                    Math.PI*2,
                    false
                );
    dotCanvas.ctx.fillStyle = 'black';
    dotCanvas.ctx.fill();

    dotCanvas.dots.push('x');
    let dotNumber = dotCanvas.dots.length;
    dotCanvas.ctx.font = '14px sans-serif';
    dotCanvas.ctx.fillText(dotNumber, x-5, y-5);
});