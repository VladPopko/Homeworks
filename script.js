var height = null;
var tree = '';

height = prompt('Input number of rows');

for (var i = 0; i < height; i++)
	{
		for (var j = 1; j < height - i; j++)
		{
			tree+= ' ';
		}

		for (var j = height - 2 * i; j <= height; j++)
		{
		tree+= '*';
		}
		tree+='\n' ;
	}
console.log(tree);
