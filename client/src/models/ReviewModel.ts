class ReviewModal {
  id: number;
  bookId: number;
  date: Date;
  rating: number;
  reviewDescription: string;
  userEmail: string;

  constructor(
    id: number,
    bookId: number,
    date: Date,
    rating: number,
    reviewDescription: string,
    userEmail: string
  ) {
    this.id = id;
    this.bookId = bookId;
    this.date = date;
    this.rating = rating;
    this.reviewDescription = reviewDescription;
    this.userEmail = userEmail;
  }
}

export default ReviewModal