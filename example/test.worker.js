//main.on("event",function(data){})
//main.emit("event","data");

function TestWorker(main) {
    this.main = main;

    this.main.on("offer", function (data) {
        this.main.emit("answer", {});
    }.bind(this));
}


