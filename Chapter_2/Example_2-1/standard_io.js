process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if (input != null){
        //echo the text
        process.stdout.write(input);

        var command = input.trim();//fails if you do not set the encoding because cannot trim a buffer
        if (command == 'exit')
            process.exit(0);
    }
});