const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

module.exports = Park;

Park.prototype.mostVisitors = function(){
    let compareVisits = this.collection[0];

    for (let i=0; i < this.dinosaurCollection.length; i++) {
           if (this.dinosaurCollection[i] > compareVisits) {
               compareVisits = this.dinosaurCollection[i];
           };
        };
    return compareVisits
};