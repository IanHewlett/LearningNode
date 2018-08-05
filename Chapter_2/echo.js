process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if (input != null){
        //echo the text
        process.stdout.write(input);
    }
});