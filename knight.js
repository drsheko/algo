const gameboard = () => {
    var square = (x, y) => {
        return [x, y]
    }
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
var knight = (x, y) => {
    var x = x ;
    var y = y ; 
    return {x, y}
}

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

const short = (knight, target) =>{
    //let squares = possibleMoves(knight)
    let queue = [];
    queue.push(knight)

    let paths ={};
    paths[knight] = knight
    let targetPath = []
  
    while(queue.length>0){
        if (queue[0]===target){
            return targetPath = paths[queue[0]]
        }
        let moves = possibleMoves(queue[0])
        queue.push(moves)
        for(i=0 ; i<moves.length; i++){
            paths[moves[i]]=[...queue[0],moves[i] ]
        }
        queue.shift()
    
   }

   return targetPath
}
let sh1 = board1()
let sh = possibleMoves(knight(4,4))
console.log(sh)
console.log(sh1)