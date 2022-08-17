const gameboard = () => {
    var board = () => {
        let arr =[]
        for(x=0 ; x<8 ; x++){
            let row =[]
            for(y=0 ; y<8; y++){
                row.push([x,y])
            }
               arr.push(row)
        }
        return arr
    }
    return {board}
}
var board1 = () => {
    let arr =[]
    for(x=0 ; x<8 ; x++){
        for(y=0 ; y<8; y++){
            arr.push([x,y])
        }
    }
    return arr
}
// knight represent a board square with coordination x,y
var Knight = (x,y) => {
    var x = x ;
    var y = y ; 
    return {x, y}
}
//find possible moves for a given spot 
var possibleMoves = (knight) => {
    let board = board1()
    let arr =[]
    let moves = []
    for(i=0 ; i< board.length; i++){
        if((Math.abs(knight.x - board[i][0] )+Math.abs(knight.y - board[i][1])) ===3 &&Math.abs(knight.x - board[i][0] )<3 
        && Math.abs(knight.y - board[i][1])<3){
            arr.push(board[i])
        }
    }
    return arr
}
// check if spot is on the board
const isValid = (spot) => {
    let x = spot[0];
    let y = spot[1]
    if (x>7 || y>7){
        return false;
    }else if(x<0 || y<0){
        return false;
    }
    return true
}
// function finds the path between two spots
const pathToTarget = (knight, target) =>{
    if(!isValid(knight) || !isValid(target)){
        return []
    }
    let queue = [];
    queue.push(knight) // push  knight's first spot to queue

    let paths ={};
    paths[knight] = [knight] 
    let targetPath = []
   
    while(queue.length>0){
        // check if target was found (compare first spot in queue to target coordinations)
        if (queue[0][0]===target[0]&& queue[0][1]===target[1]){
            return targetPath = paths[queue[0]]
        }
         
        let moves = possibleMoves(Knight(queue[0][0],queue[0][1]))
        // add possiple moves of first spot in queue
        for(j=0 ; j<moves.length; j++){
            queue.push(moves[j])
        }
        
        //add path for every possible move
        for(i=0 ; i<moves.length; i++){
            paths[moves[i]]=[...paths[queue[0]],moves[i] ]
            
        }
        // remove first spot in queue after add its possible moves to queue
        queue.shift()
   }
   return targetPath
}
// finds moves count from knight's first spot to target
const countMoves = (knight, target) => {
    let path = pathToTarget(knight, target);
    let count = path.length
    if (count ===0 ){
        return 'Invalid input'
    }
    return count-1
}


 



