    

    //HELPER FUNCS
    var textWithBody=function(words,velocityX,velocityY,locationX,locationY,style,immovable){
        var text = game.add.text(0,0, words,style);
        text.anchor.setTo(.5);
        var textSprite = game.add.sprite(locationX,locationY,null);
        textSprite.anchor.setTo(.5);
        textSprite.addChild(text);
        textSprite.enableBody=true;
        game.physics.enable(textSprite, Phaser.Physics.ARCADE);
        textSprite.body.setSize(text.width,text.height)
        textSprite.body.bounce.y = 1;
        textSprite.body.bounce.x = 1;
        textSprite.body.gravity.y = 0;
        textSprite.body.velocity.x=velocityX;
        textSprite.body.velocity.y=velocityY;
        textSprite.body.collideWorldBounds = true;
        if(immovable){
            textSprite.body.immovable = true;
        }
        return textSprite;    
    }

    function getPronounString(PGP){
        var spDict=gameData.pronouns[PGP];
        return spDict['S']+'/'+spDict['O'];
    }

    function overReady(item) {
        item.setStyle(mediumGray);
    }
    function overReadyLeave(item) {
        item.setStyle(mediumWhite);
    }
    function clickReady(item){
        game.state.start('play'); //CHANGE ME BACK!!!
    }
    function toMenu(item){
        game.state.start('menu');
    }

    initiateRoundClicker=function(){
        console.log('initiating round')
        gameData.currentGame={};
        gameData.currentGame.control=gameData.controls[Math.floor(Math.random()*gameData.controls.length)];
        gameData.currentGame.gameInput=createGameInput();
        gameData.currentGame.controlTimes=[];
        gameData.currentGame.subjectTimes=[];
        console.log(gameData.currentGame);
    }
    initiateRoundWordRain=function(){
        gameData.currentGame={};
        gameData.currentGame.meWords=gameData.subject.associatedWords;
        gameData.currentGame.notMeWords=gameData.subject.unAssociatedWords;
        var pronounKeys=Object.keys(gameData.pronouns);
        for(var i=0; i<pronounKeys.length; i++){
            if(pronounKeys[i]===gameData.subject.PGP){
                var toAdd=gameData.pronouns[pronounKeys[i]]['S'];
                Math.random()>.5? gameData.currentGame.meWords.push(toAdd) : gameData.currentGame.meWords.unshift(toAdd);
                toAdd=gameData.pronouns[pronounKeys[i]]['O'];
                Math.random()>.5? gameData.currentGame.meWords.push(toAdd) : gameData.currentGame.meWords.unshift(toAdd);

            }
            else{
                var toAdd=gameData.pronouns[pronounKeys[i]]['S'];
                Math.random()>.5? gameData.currentGame.notMeWords.push(toAdd) : gameData.currentGame.notMeWords.unshift(toAdd);
                toAdd=gameData.pronouns[pronounKeys[i]]['O'];
                Math.random()>.5? gameData.currentGame.notMeWords.push(toAdd) : gameData.currentGame.notMeWords.unshift(toAdd);          
            }
        }
        gameData.currentGame.score=0; 
    }





    //styling variables
    //TODO: Update names to generic!!
    var mediumWhite={ font: 'bold 20pt Courier New', fill: 'black'};
    var mediumGray={ font: 'bold 20pt Courier New', fill: 'gray'};
    var mediumGrayPlus={ font: 'bold 25pt Courier New', fill: 'gray'};

    var largeGray={ font: '30pt Courier New', fill: 'gray'};
    var largeWhite={ font: '30pt Courier New', fill: 'black'};
    var largeDarkGray={ font: '30pt Courier New', fill: 'white'};
    var mediumRed= { font: '20pt  Courier New', fill: '#800000'};
    var largeRed= { font: '40pt Courier New', fill: ' #800000'};
    var largeGreen={ font: '40pt Courier New', fill: '#003300'};
    var mediumGreen= { font: '20pt Courier New', fill: '#003300'};
    var mediumGreenPlus= { font: '25pt Courier New', fill: '#003300'};

