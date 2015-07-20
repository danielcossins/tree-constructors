/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/
var Tree = function(name, leafShape, avgHeight, American){
  this.name = name;
  this.leafShape = leafShape;
  this.avgHeight = avgHeight;
  this.American = American;
}

var oak = new Tree("Oak", "triangle", "39 ft", true);
var elm = new Tree("Elm", "triangle", "42 ft", true);
var japaneseCherry = new Tree("Japanese Cherry", "oval", "5 ft", false);
var palm = new Tree("Palm", "big", "21 ft", false);

var tree_array = [oak, elm, japaneseCherry, palm];

var element = document.getElementById("tree-holder");

for(var i=0; i<tree_array.length; i++){
  element.innerHTML += "<p>" + tree_array[i].name + "<br>" + tree_array[i].leafShape + " " + tree_array[i].avgHeight + " " + tree_array[i].American + "</p>";
}