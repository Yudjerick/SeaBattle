import {canPlaceShip} from "../functions.mjs";

describe("check canPlaceShip function", function(){
    var field;
    beforeEach(function(){
        field = [];
        for (let i = 0; i < 10; i++){
            let line = [];
            for (let j = 0; j < 10; j++){
                line.push(0);
            }
            field.push(line);
        }
    });

    it("should be able to place ship, if everything is ok. test1", function(){
        expect(canPlaceShip(field, 3, 4, true, 2)).toBeTrue();
    })

    it("should be able to place ship, if everything is ok. test2", function(){
        expect(canPlaceShip(field, 5, 2, false, 3)).toBeTrue();
    })

    it("should not be able to place horizontal ship that intersects field border", function(){
        expect(canPlaceShip(field, 9, 9, true, 3)).toBeFalse();
    })

    it("should not be able to place vertical ship that intersects field border", function(){
        expect(canPlaceShip(field, 1, 8, false, 3)).toBeFalse();
    })

    it("should not be able do place ship that intersects other ship. test1", function(){
        field[0][0] = 1;
        field[0][1] = 1;
        expect(canPlaceShip(field, 0, 0, false, 2)).toBeFalse();
    })

    it("should not be able do place ship that intersects other ship. test2", function(){
        field[3][9] = 1;
        field[4][9] = 1;
        expect(canPlaceShip(field, 2, 9, true, 3)).toBeFalse();
    })

    it("should not be able do place ship that is too close other ship. test1", function(){
        field[9][9] = 1;
        field[9][8] = 1;
        expect(canPlaceShip(field, 9, 6, false, 2)).toBeFalse();
    })

    it("should not be able do place ship that is too close other ship. test2", function(){
        field[3][0] = 1;
        field[3][1] = 1;
        expect(canPlaceShip(field, 4, 2, false, 2)).toBeFalse();
    })

    it("x and y should be from 0 to 9", function(){
        expect(canPlaceShip(field, -1, 8, false, 1)).toBeFalse();
    })
})