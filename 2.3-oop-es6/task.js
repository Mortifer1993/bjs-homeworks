'use strict'

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        let value = this._state * 1.5;
        this.state(value);
    }

    set state(value) { 
        if (value >= 100) {
            this._state = 100;
        }else if( vlue <= 0){
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(type, ...rest) {
        super(...rest);
    }
}
