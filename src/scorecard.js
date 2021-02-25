class Scorecard{
    constructor(){
        this.scoreList = [];
    };

    getscoreList() {
        return this.scoreList;
    };
    addFrame(frame){
        this.scoreList.push(frame)
    };
};
