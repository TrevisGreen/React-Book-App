import { useEffect, useState } from "react"
import ReviewModel from "../../../models/ReviewModel"
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Review } from "../../Utils/Review";
import { Pagination } from "../../Utils/Pagination";

export const ReviewListPage = () => {

    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(5);
    const [totalAmountOPfReviews, setTotalAmountOfReviews] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const bookId = (window.location.pathname).split('/');

    useEffect(() => {
        const fetchBookReviews = async () => {
            const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}&page=${currentPage - 1}&size=${reviewsPerPage}`;
    
            const responseReviews = await fetch(reviewUrl);
    
            if (!responseReviews.ok) {
                throw new Error('Something went wrong!');
            }
    
            const responseJsonReviews = await responseReviews.json();

            setTotalAmountOfReviews(responseJsonReviews.page.totalElements);
            setTotalPages(responseJsonReviews.page.totalPages);
    
            const responseData = responseJsonReviews._embedded.reviews;
    
            const loadedReviews: ReviewModel[] = [];           
    
            for (const key in responseData) {
              loadedReviews.push({
                id: responseData[key].id,
                userEmail: responseData[key].userEmail,
                date: responseData[key].date,
                rating: responseData[key].rating,
                book_id: responseData[key].bookId,
                reviewDescription: responseData[key].reviewDescription,
              });
              
            }           
    
            setReviews(loadedReviews);
            setIsLoading(false);
          };
    
          fetchBookReviews().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
          })
      }, [currentPage]);

      if (isLoading) {
        <SpinnerLoading/>
      }

      if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )  
      }

      const indexOfLastReview: number = currentPage * reviewsPerPage;
      const indexOfFirstReview: number = indexOfLastReview - reviewsPerPage;

      let lastItem = reviewsPerPage * currentPage <= totalAmountOPfReviews ? reviewsPerPage * currentPage : totalAmountOPfReviews;

      const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container m-5">
            <div>
                <h3>Comments: ({reviews.length})</h3>
            </div>
            <p>
                {indexOfFirstReview + 1} to {lastItem} of {totalAmountOPfReviews} items:
            </p>
            <div className="row">
                {reviews.map(review => (
                    <Review review={review} key={review.id}/>
                ))}
            </div>

            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>}
        </div>
    );
}