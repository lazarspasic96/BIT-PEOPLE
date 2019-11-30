class User {
    constructor(userData) {
        this.id = userData.login.uuid;
        this.name = `${userData.name.first} ${userData.name.last}`;
        this.dob = new Date(userData.dob.date).toJSON().slice(0, 10).split('-').reverse().join('.');

        this.email = userData.email;
        this.image = userData.picture.medium;
        this.image1 = userData.picture.large;
    }

    getName() {
        return this.name.toLowerCase();

    }


    protectEmail = function () {
        let avg, splitted, part1, part2;
        splitted = this.email.split("@");
        part1 = splitted[0];
        avg = part1.length / 2;
        part1 = part1.substring(0, (part1.length - avg));
        part2 = splitted[1];
        return part1 + "...@" + part2;
    };


}


export default User;








