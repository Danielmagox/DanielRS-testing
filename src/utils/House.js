export class House{
    constructor(rooms){
        this.rooms = rooms;
        this.membersAmount = 0;
    }
    countRooms(){
        return this.rooms
    }
    addMember(amount){
        const total = this.membersAmount + amount
        if (total >= this.rooms){
            this.membersAmount = this.rooms
        }else {
            this.membersAmount = total;
        }
    }
    countMembers(){
        return this.membersAmount
    }

}