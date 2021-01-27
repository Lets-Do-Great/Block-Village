var x = 0; var y = 0;

var move = []; var dir = 0; const dir_info = [[0, 1], [0, -1], [-1, 0], [1, 0]];

x = x * dir_info[dir];
y = y * dir_info[dir];
move.push([x, y]);

dir = (dir + 1) % 4;

dir = (dir + 3) % 4;