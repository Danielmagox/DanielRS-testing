import { House } from "./House";


describe("House",() => {
    let house;
    beforeEach(() => {
        house = new House(4)
    })

    it("creates several rooms", () => {
        expect(house.countRooms()).toEqual(4);
    })

    it("can add members to the house", () => {
        house.addMember(1);
        
        expect(house.countMembers()).toEqual(1)
    })

    it("can add several members to the house", () => {
        house.addMember(1);
        house.addMember(1);
        house.addMember(1);
        
        expect(house.countMembers()).toEqual(3)
    })

    it("cant add maximum members", () => {
        house.addMember(6);
        
        expect(house.countMembers()).toEqual(4)
    })

})