var peca = "Knight";
var piece = peca.toLowerCase()

switch(piece){
    case "pawn":
        console.log("One square forward");
        break
    case "knight":
        console.log("L shape");
        break
    case "rook":
        console.log("Straight line");
        break
    case "bishop":
        console.log("Diagonally");
        break
    case "queen":
        console.log("Any direction");
        break
    case "king":
        console.log("One square, any direction");
        break
    default:
        console.log("Not a chess piece");
        break    
}