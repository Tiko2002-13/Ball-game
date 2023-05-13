function start({player1Name,player2Name}) {
    const bal1 = new Ball({
        name: player1Name,
        color: "green",
        speed: 20,
        size: 25,
        controls : {
            up: "KeyW",
            down: "KeyS",
            left: "KeyA",
            right: "KeyD",
            Biger: "KeyQ",
        }
    });
    const bal2 = new Ball({
        name: player2Name,
        color: "blue",
        speed: 20,
        controls : {
            up: "KeyT",
            down: "KeyG",
            left: "KeyF",
            right: "KeyH"
        }
    });
    const food1 = new Food({ 
        color: "red",
        width: 100,
        height: 100,
    });
        
}
