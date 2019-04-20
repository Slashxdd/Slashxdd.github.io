var m = prompt("SizeX: ");
var n = prompt("SizeY: ");
var matrix = [];
for (var i = 0; i < m; i++){
    matrix[i] = [];
    for (var j = 0; j < n; j++){
        matrix[i][j] = 0;
        console.log(matrix[i][j] + " ");
}}
console.log(matrix);
        var x = 0;
        var y = 0;
        var sizeX = 1;
        var sizeY = 0;
        var dirChanges = 0;
        var visits = n;
    
        for (var i = 0; i < n * m; i++) {
            matrix[x][y] = i + 1;
            if (--visits == 0) {
                visits = n * (dirChanges % 2) + 
                    m * ((dirChanges + 1) % 2) -
                    (Math.floor(dirChanges / 2) - 1) - 2;
                    console.log(visits);
                var temp = sizeX;
                sizeX = -sizeY;
                sizeY = temp;
                dirChanges++;
            }
            y += sizeX;
            x += sizeY;
            console.log(sizeX);
            console.log(sizeY);
            console.log(dirChanges);
        }
        
        console.log(matrix);