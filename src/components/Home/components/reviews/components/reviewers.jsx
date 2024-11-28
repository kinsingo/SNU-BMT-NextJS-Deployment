class Reviewer {
    constructor(img, name, location, comment) {
      this.img = img;
      this.name = name;
      this.location = location;
      this.comment = comment;
    }
  }
  
  const reviewer_1 = new Reviewer(
    "/images/clients/SNU.png",
    "Seoul National University",
    "Seoul, South Korea",
    "Great work! I am very happy with the results. I will definitely use your services"
  );
  
  const reviewer_2 = new Reviewer(
    "/images/clients/DeepX.png",
    "DeepX",
    "Seoul, South Korea",
    "Great work! I am very happy with the results. I will definitely use your services"
  );
  
  const reviewer_3 = new Reviewer(
    "/images/clients/TBD.png",
    "~~~",
    "~~, ~~",
    "Hello !"
  );

  export const reviewers = [reviewer_1, reviewer_2, reviewer_3];

